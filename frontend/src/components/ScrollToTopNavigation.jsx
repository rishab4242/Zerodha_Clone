// src/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTopNavigation() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto", // You can use "auto" for instant scroll
    });
  }, [pathname]); // runs every time route changes

  return null; // no UI element
}

export default ScrollToTopNavigation;
