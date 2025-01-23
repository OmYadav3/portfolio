import ReactDOM from "react-dom/client";
import { BrowserRouter, Router, Routes } from "react-router";
import App from "./App.jsx";
import "./index.css";



const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
   <App/>
  </BrowserRouter>
);
