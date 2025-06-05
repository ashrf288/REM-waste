import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2e7d32",
    },
    secondary: {
      main: "#cddc39",
    },
    background: {
      default: "#f5f5f5",
      paper: "#ffffff",
    },
    text: {
      primary: "#333333",
      secondary: "#666666",
    },
    error: {
      main: "#d84315",
    },
    success: {
      main: "#43a047",
    },
    warning: {
      main: "#ffb300",
    },
  },
  typography: {
    fontFamily: "'Poppins', 'Roboto', sans-serif",
  },
});

export default theme;
