import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./landing_pages/home/HomePage";
import AboutPage from "./landing_pages/about/AboutPage";
import PricingPage from "./landing_pages/pricing/PricingPage";
import ProductsPage from "./landing_pages/products/ProductsPage";
import SupportPage from "./landing_pages/support/SupportPage";

import Navbar from "./landing_pages/Navbar";
import Footer from "./landing_pages/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton"; // <-- add this

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/support" element={<SupportPage />} />
      </Routes>
      <Footer />
      <ScrollToTopButton /> {/* floating button */}
    </BrowserRouter>
  );
};

export default App;
