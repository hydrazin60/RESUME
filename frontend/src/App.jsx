import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact_us from "./pages/Contact_us";
export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact-us" element={<Contact_us />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
