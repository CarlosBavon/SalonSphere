import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Browse from "./pages/Browse";

function App () {
  return (
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<Browse />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
  )
}

export default App;
