import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { mainTheme } from "./themes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={mainTheme}>
        <CssBaseline /> {/* Normalize styles & apply background color */}
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
