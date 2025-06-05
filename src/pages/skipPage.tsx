import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { SkipCard } from "../components";
import { useSkipsByLocation } from "../hooks";
import HorizontalStepper from "../components/skip/stepper";
import type { Skip } from "../interfaces";
import ConfirmSkipDialog from "../components/skip/continueFab";

const SkipPage = () => {
  const { skips, loading, error } = useSkipsByLocation("NR32", "Lowestoft");
  const [selectedSkip, setSelectedSkip] = useState<Skip | null>(null);
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);

  const handleSelect = (id: number) => {
    const skip = skips.find((skip) => skip.id === id) || null;
    setSelectedSkip(skip);
    if (skip) setConfirmDialogOpen(true);
  };

  const handleUnselect = () => {
    setSelectedSkip(null);
    setConfirmDialogOpen(false);
  };

  const handleCloseDialog = () => {
    setSelectedSkip(null);
    setConfirmDialogOpen(false);
  };

  const handleConfirmDialog = () => {
    setConfirmDialogOpen(false);
    window.location.reload(); // or navigate to next step
  };
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  if (loading) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
      {/* Title on top, centered */}
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h3" component="h1" fontWeight={600}>
          Select Your Skip
        </Typography>

        {/* Horizontal line below title */}
        <Box
          component="hr"
          sx={{
            width: 80,
            height: 4,
            bgcolor: "primary.main",
            mx: "auto",
            borderRadius: 2,
            opacity: 0.7,
          }}
        />
      </Box>

      <Grid
        container
        spacing={4}
        justifyContent="center"
        alignItems="flex-start"
      >
        {/* Stepper */}
        <Grid item xs={12} md={2}>
          {isSmallScreen ? <></> : <HorizontalStepper />}
        </Grid>

        {/* Skip cards */}
        <Grid
          item
          xs={12}
          md={10}
          sx={{
            paddingBottom: (theme) => theme.spacing(12), // ~96px bottom space
          }}
        >
          {error && (
            <Typography color="error" align="center">
              Error: {error}
            </Typography>
          )}

          <Grid container spacing={6} p={4} justifyContent="center">
            {skips.map((skip) => (
              <Grid item xs={12} sm={6} md={4} key={skip.id}>
                <SkipCard
                  skip={skip}
                  selected={selectedSkip?.id === skip.id}
                  onSelect={handleSelect}
                  onUnselect={handleUnselect}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      {/* Continue FAB */}
      <ConfirmSkipDialog
        open={confirmDialogOpen}
        skipDetails={
          selectedSkip
            ? {
                name: `${selectedSkip.size} Yard Skip`,
                price: selectedSkip.price_before_vat,
              }
            : null
        }
        onClose={handleCloseDialog}
        onConfirm={handleConfirmDialog}
      />
    </>
  );
};

export default SkipPage;
