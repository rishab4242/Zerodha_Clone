import React from "react";
import { useNavigate } from "react-router-dom";

function OpenAccount() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/signup");
    window.scrollTo({ top: 0, behavior: "auto" });
  };
  return (
    <div className="container mx-auto px-6 py-10 mt-10">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-semibold mb-4">
          Open a Zerodha account
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mb-8 text-base md:text-lg">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>

        <button onClick={handleButtonClick} className="bg-blue-600 text-white cursor-pointer font-medium text-lg px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
          Sign up Now
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
