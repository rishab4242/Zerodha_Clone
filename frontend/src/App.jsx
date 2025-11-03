import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./landing_pages/home/HomePage";
import AboutPage from './landing_pages/about/AboutPage';
import PricingPage from './landing_pages/pricing/PricingPage';

import Navbar from "./landing_pages/Navbar";
import Footer from "./landing_pages/Footer";



const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/pricing" element={<PricingPage />} />
    
    </Routes>
    <Footer />
  </BrowserRouter>
  )
}

export default App
