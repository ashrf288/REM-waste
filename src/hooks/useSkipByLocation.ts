import { useEffect, useState } from "react";
import type { Skip } from "../interfaces";
import axios from "axios";

const API_BASE_URL = "https://app.wewantwaste.co.uk/api";

export function useSkipsByLocation(postcode: string, area: string) {
  const [skips, setSkips] = useState<Skip[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSkips = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get<Skip[]>(
          `${API_BASE_URL}/skips/by-location`,
          { params: { postcode, area } }
        );
        setSkips(response.data);
      } catch (err) {
        if (err instanceof axios.AxiosError) {
          setError(err.message);
        } else {
          setError("An unexpected error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchSkips();
  }, [postcode, area]);

  return { skips, loading, error };
}
