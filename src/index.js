import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.js";
import ReduxProvider from "./lib/Redux/Reduxprovider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ReduxProvider>
    <App />
  </ReduxProvider>
);
