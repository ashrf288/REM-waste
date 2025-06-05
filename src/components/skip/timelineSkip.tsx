// TimelineStepper.tsx
import React from "react";
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Typography,
  useTheme,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const steps = [
  { label: "Choose Location", icon: <LocationOnIcon color="primary" /> },
  { label: "Select Duration", icon: <AccessTimeIcon color="primary" /> },
  { label: "Pick a Skip", icon: <DeleteIcon color="primary" /> },
  { label: "Confirm Order", icon: <CheckCircleIcon color="primary" /> },
];

interface TimelineStepperProps {
  activeStep?: number;
}

const TimelineStepper: React.FC<TimelineStepperProps> = ({
  activeStep = 0,
}) => {
  const theme = useTheme();

  return (
    <Box sx={{ maxWidth: 280, mx: "auto", py: 1 }}>
      <Stepper
        activeStep={activeStep}
        orientation="vertical"
        nonLinear
        sx={{
          "& .MuiStepConnector-root": {
            marginLeft: "22px",
            "& .MuiStepConnector-line": {
              borderLeftWidth: 3,
              borderColor: theme.palette.primary.light,
            },
          },
          "& .MuiStepLabel-root": {
            fontSize: "0.9rem",
          },
          "& .MuiStepLabel-label.Mui-active": {
            fontWeight: "bold",
            color: theme.palette.primary.main,
          },
          "& .MuiStepLabel-label.Mui-completed": {
            color: theme.palette.primary.dark,
            textDecoration: "line-through",
          },
        }}
      >
        {steps.map((step, index) => (
          <Step
            key={step.label}
            completed={index < activeStep}
            sx={{ cursor: "default" }}
          >
            <StepLabel
              icon={step.icon}
              optional={
                index === activeStep ? (
                  <Typography
                    variant="caption"
                    sx={{ color: theme.palette.primary.main }}
                  >
                    Current step
                  </Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default TimelineStepper;
