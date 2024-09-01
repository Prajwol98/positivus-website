import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar></Navbar>
    <App />
    <Footer></Footer>
  </StrictMode>
);
