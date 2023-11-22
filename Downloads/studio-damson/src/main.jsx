import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./pages/About.css";
import "./pages/Gallery.css";
import "./pages/Contact.css";
import "./components/Footer.css";
import "./components/Header.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
