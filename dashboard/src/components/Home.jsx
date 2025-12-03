import { useEffect } from "react";

import Dashboard from "./Dashboard ";
import TopBar from "./TopBar";
import ProtectedRoute from "../ProtectedRoute";

const Home = () => {
  useEffect(() => {
    const token = new URLSearchParams(window.location.search).get("token");
    if (token) {
      localStorage.setItem("token", token);
      window.history.replaceState({}, "", "/"); // remove token from url
    }
  }, []);
  return (
    <>
      <TopBar />
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    </>
  );
};

export default Home;
