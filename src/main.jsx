import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./assets/fonts/stylesheet.css";
import "./assets/css/main.min.css";
import { LanProvider } from "./context/lanContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <LanProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </LanProvider>
);
