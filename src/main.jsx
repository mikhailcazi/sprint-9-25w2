import { createContext, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

export const ThemeContext = createContext();
createRoot(document.getElementById("root")).render(
  <ThemeContext.Provider value={"dark"}>
    <App />
  </ThemeContext.Provider>
);
