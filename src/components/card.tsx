import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import Chip from "@mui/material/Chip";

import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CloseIcon from "@mui/icons-material/Close";

import type { Skip } from "../interfaces";

export default function SkipCard({
  skip,
  selected,
  onSelect,
  onUnselect,
}: {
  skip: Skip;
  selected: boolean;
  onSelect: (id: number) => void;
  onUnselect: () => void;
}): React.ReactElement {
  const imageUrl = `https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/${skip.size}-yarder-skip.jpg`;

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    selected ? onUnselect() : onSelect(skip.id);
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        transition:
          "transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease",
        cursor: "pointer",
        backgroundColor: selected ? "#d0f0c0" : "white",
        boxShadow: selected
          ? "0 4px 20px rgba(0, 128, 0, 0.4)"
          : "0 1px 4px rgba(0, 0, 0, 0.1)",
        "&:hover": {
          transform: "scale(1.08)",
        },
        userSelect: "none",
      }}
      elevation={4}
    >
      <CardHeader
        title={
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              {skip.size} Yard Skip
            </Typography>
            <Button
              variant="contained"
              onClick={handleClick}
              sx={{
                bgcolor: selected ? "error.main" : "success.main",
                color: "common.white",
                fontWeight: "bold",
                fontSize: "1rem",
                padding: "6px 18px",
                textTransform: "none",
                "&:hover": {
                  bgcolor: selected ? "error.dark" : "primary.main",
                },
              }}
            >
              {selected ? "Unselect" : "Select"}
            </Button>
          </Box>
        }
      />

      <CardMedia
        component="img"
        height="194"
        image={imageUrl}
        alt={`${skip.size} yarder skip`}
        onError={(e) => {
          (e.target as HTMLImageElement).src =
            "/static/images/cards/default-skip.jpg";
        }}
      />

      <CardContent>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Hire Period: {skip.hire_period_days} day
          {skip.hire_period_days > 1 ? "s" : ""}
        </Typography>

        <Typography variant="body2" color="text.secondary" gutterBottom>
          Transport Cost:{" "}
          {skip.transport_cost !== null
            ? `£${skip.transport_cost.toFixed(2)}`
            : "N/A"}
        </Typography>

        <Typography variant="body2" color="text.secondary" gutterBottom>
          Cost per Tonne:{" "}
          {skip.per_tonne_cost !== null
            ? `£${skip.per_tonne_cost.toFixed(2)}`
            : "N/A"}
        </Typography>

        <Typography variant="body2" color="text.secondary" gutterBottom>
          Price Before VAT: £{skip.price_before_vat.toFixed(2)}
        </Typography>

        <Typography variant="body2" color="text.secondary" gutterBottom>
          VAT: £{skip.vat.toFixed(2)}
        </Typography>
      </CardContent>

      <CardActions sx={{ gap: 1, flexWrap: "wrap" }}>
        <Tooltip title={skip.forbidden ? "Forbidden to use" : "Allowed"}>
          <Chip
            icon={skip.forbidden ? <CloseIcon /> : <CheckCircleIcon />}
            label={skip.forbidden ? "Forbidden" : "Allowed"}
            color={skip.forbidden ? "error" : "success"}
            size="small"
          />
        </Tooltip>

        <Tooltip
          title={
            skip.allowed_on_road ? "Allowed on road" : "Not allowed on road"
          }
        >
          <Chip
            icon={skip.allowed_on_road ? <CheckCircleIcon /> : <CloseIcon />}
            label={skip.allowed_on_road ? "Road Allowed" : "No Road Access"}
            color={skip.allowed_on_road ? "success" : "warning"}
            size="small"
          />
        </Tooltip>

        <Tooltip
          title={
            skip.allows_heavy_waste ? "Heavy waste allowed" : "No heavy waste"
          }
        >
          <Chip
            icon={
              skip.allows_heavy_waste ? (
                <CheckCircleIcon />
              ) : (
                <WarningAmberIcon />
              )
            }
            label={skip.allows_heavy_waste ? "Heavy Waste" : "No Heavy Waste"}
            color={skip.allows_heavy_waste ? "success" : "warning"}
            size="small"
          />
        </Tooltip>
      </CardActions>
    </Card>
  );
}
