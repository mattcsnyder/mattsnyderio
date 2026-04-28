import React from "react";
import ReactDOM from "react-dom/client";
import { scan } from 'react-scan';

import App from "./App";
import "./index.css";

if (import.meta.env.DEV) {
  scan();
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
