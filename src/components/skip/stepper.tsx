import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Paper from "@mui/material/Paper";
import { useTheme } from "@mui/material/styles";
import BuildIcon from "@mui/icons-material/Build";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import CampaignIcon from "@mui/icons-material/Campaign";

const steps = [
  { label: "Select campaign settings", icon: <CampaignIcon /> },
  { label: "Create ad group", icon: <GroupWorkIcon /> },
  { label: "Create ad", icon: <BuildIcon /> },
];

const HorizontalStepper = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [hovered, setHovered] = useState(false);

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 16,
        left: 16,
        right: 16,
        zIndex: 1100,
        display: "flex",
        justifyContent: "center",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Paper
        elevation={5}
        sx={{
          px: hovered ? 2 : 1,
          py: hovered ? 1.5 : 1,
          borderRadius: 4,
          bgcolor: theme.palette.success.main,
          color: "#fff",
          width: hovered ? "100%" : "300px",
          overflow: "hidden",
          transition: "all 0.3s ease",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          cursor: "pointer",
        }}
      >
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((step, index) => (
            <Step key={step.label}>
              <Box
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveStep(index);
                }}
                sx={{
                  cursor: "pointer",
                }}
              >
                <StepLabel
                  icon={step.icon}
                  sx={{
                    ".MuiStepLabel-label": {
                      display: hovered ? "inline" : "none",
                      color: activeStep === index ? "#2e7d32" : "#ffffff",
                      fontWeight: activeStep === index ? "bold" : "normal",
                      fontSize: activeStep === index ? "1.1rem" : "1rem",
                      px: 1,
                      py: 0.5,
                      borderRadius: 2,
                      transition: "all 0.3s ease",
                      cursor: hovered ? "pointer" : "default",
                    },
                    ".MuiStepIcon-root": {
                      color:
                        activeStep === index
                          ? "#ffffff"
                          : "#ffffff !important",
                      transform: hovered
                        ? "scale(1.2)"
                        : "scale(1)",
                      transition: "transform 0.8s ease",
                    },
                  }}
                >
                  {step.label}
                </StepLabel>
              </Box>
            </Step>
          ))}
        </Stepper>
      </Paper>
    </Box>
  );
};

export default HorizontalStepper;
