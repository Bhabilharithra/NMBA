import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";

import App from "./App";
import "./index.css";

import { LoaderProvider } from "./contexts/LoaderProvider";
import { LoggerProvider } from "./contexts/LoggerProvider";
import { ToastProvider } from "./contexts/ToastProvider";
import { AuthProvider } from "./contexts/AuthProvider";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <MantineProvider>
        <Notifications position="top-right" />
        <LoaderProvider>
          <LoggerProvider>
            <ToastProvider>
              <AuthProvider>
                <App />
              </AuthProvider>
            </ToastProvider>
          </LoggerProvider>
        </LoaderProvider>
      </MantineProvider>
    </BrowserRouter>
  </React.StrictMode>
);