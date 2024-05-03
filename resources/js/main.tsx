import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./bootstrap";
import Routes from "./routes";
import AppTheme from "./theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <ThemeProvider theme={AppTheme}>
            <CssBaseline />
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>
);
