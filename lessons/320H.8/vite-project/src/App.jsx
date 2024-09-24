import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./style.css";
import App from "./App";

// Import BrowserRouter
import { BrowserRouter } from "react-router-dom";

// Wrap the App component with the BrowserRouter component to enable the router features.
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
  document.getElementById("root")
);
