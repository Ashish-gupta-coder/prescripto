import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./main_pages/Home";
import Doctors from "./main_pages/Doctors";
import About from "./main_pages/About";
import Contact from "./main_pages/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
