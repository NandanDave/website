import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import About from "./components/About";
import Journey from "./components/Journey";
import Projects from "./components/Projects";
import Resume from "./components/Resume";


export default function App() {
  return (
    <Router basename="/nd-portfolio">
      <Navbar />
      <main className="pt-16 bg-gray-900 min-h-screen">
        <Routes>
          <Route path="/" element={<Navigate to="/about" />} />
          <Route path="/about" element={<About />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </main>
    </Router>
  );
}
