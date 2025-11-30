import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="https://zerodha-clone-frontend-ifke.onrender.com" />;
  }

  return children;
};

export default ProtectedRoute;
