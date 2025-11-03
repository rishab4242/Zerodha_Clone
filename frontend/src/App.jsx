import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./landing_pages/home/HomePage";


import Navbar from "./landing_pages/Navbar";
import Footer from "./landing_pages/Footer";



const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      
    </Routes>
    <Footer />
  </BrowserRouter>
  )
}

export default App
