import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ResponsiveAppBar from "./pages/Header";
import ProjectDetails from "./pages/ProjectDetails";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter basename="/henrys-react-portfolio-app">
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/henrys-react-portfolio-app/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/henrys-react-portfolio-app/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/details/:id" element={<ProjectDetails />} />
        <Route path="/*" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
console.log(process.env.PUBLIC_URL)
export default App;
