import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App.jsx";
import "./index.css";
import Home from "./components/Home/Home.jsx";
import Project from "./components/Projects/Project.jsx";
import AboutMe from "./components/AboutMe/AboutMe.jsx";
import { ContactUs } from "./components/ContactUs/ContactUs.jsx";




const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />

      {/* <Route path="projects" element={<Project/>} /> */}
      {/* <Route path="about" element={<AboutMe />} /> */}
      {/* <Route path="contact" element={<ContactUs />} /> */}
    </Routes>
  </BrowserRouter>
);
