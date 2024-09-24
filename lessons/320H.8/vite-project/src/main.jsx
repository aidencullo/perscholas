import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

// Import BrowserRouter
import { BrowserRouter } from "react-router-dom";

// Get the root element
const rootElement = document.getElementById("root");

// Create a root and render the app
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
