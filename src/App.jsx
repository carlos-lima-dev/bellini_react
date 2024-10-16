import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";

function App() {
  return (
    <Router>
      <Routes>
        {/* Rotas que usam o Layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
