import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import HomePage from "./landing_pages/home/HomePage";
import AboutPage from "./landing_pages/about/AboutPage";
import PricingPage from "./landing_pages/pricing/PricingPage";
import ProductsPage from "./landing_pages/products/ProductsPage";
import SupportPage from "./landing_pages/support/SupportPage";
import Navbar from "./landing_pages/Navbar";
import Footer from "./landing_pages/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton"; // <-- add this
import Signup from "./landing_pages/signup/SignUp";
import Login from "./landing_pages/login/Login";
import { isTokenExpired } from "./utils/checkToken";
import { ToastContainer } from "react-toastify";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token && isTokenExpired(token)) {
      localStorage.removeItem("token");
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(!!token);
    }
  }, []);

  if (isLoggedIn === null) return null;

  return (
    <BrowserRouter>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/"
          element={isLoggedIn ? <HomePage /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={
            isLoggedIn ? (
              <Navigate to="/" />
            ) : (
              <Login setIsLoggedIn={setIsLoggedIn} />
            )
          }
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/support" element={<SupportPage />} />
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        style={{
          fontSize: "16px",
          fontWeight: "bold",
        }}
      />
      <Footer />
      <ScrollToTopButton /> {/* floating button */}
    </BrowserRouter>
  );
};

export default App;
