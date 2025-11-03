import React, { useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import GeneralContext from "./GeneralContext";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  // Example calculation for margin (dynamic)
  const marginRequired = (stockQuantity * stockPrice).toFixed(2);

  const handleBuyClick = () => {
    axios.post("http://localhost:5000/newOrder", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      name: uid,
      qty: stockQuantity,
      price: stockPrice,
      mode: "BUY",
    });

    GeneralContext.closeBuyWindow();
  };

  const handleCancelClick = () => {
    GeneralContext.closeBuyWindow();
  };

  return (
    <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-6 space-y-6 mx-auto mt-12">
      {/* Header */}
      <h2 className="text-xl font-semibold text-gray-800 text-center mb-4">
        Buy {uid}
      </h2>

      {/* Inputs Section */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-600 mb-1">Quantity</label>
          <input
            type="number"
            min="1"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setStockQuantity(e.target.value)}
            value={stockQuantity}
          />
        </div>
        <div>
          <label className="block text-gray-600 mb-1">Price</label>
          <input
            type="number"
            step="0.05"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={stockPrice}
            onChange={(e) => setStockPrice(e.target.value)}
          />
        </div>
      </div>

      {/* Live Table Data */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
        <h3 className="text-gray-700 font-semibold mb-2">Order Summary</h3>
        <div className="grid grid-cols-2 gap-y-2 text-gray-700">
          <span>Quantity:</span>
          <span className="text-right">{stockQuantity}</span>

          <span>Price per unit:</span>
          <span className="text-right">
            ₹{parseFloat(stockPrice).toFixed(2)}
          </span>

          <span>Total Cost:</span>
          <span className="text-right font-semibold">
            ₹{(stockQuantity * stockPrice).toFixed(2)}
          </span>

          <span>Margin Required:</span>
          <span className="text-right text-blue-600 font-medium">
            ₹{marginRequired}
          </span>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-between gap-4">
        <Link
          className="flex-1 text-center py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
          onClick={handleBuyClick}
        >
          Buy
        </Link>
        <Link
          to=""
          className="flex-1 text-center py-2 bg-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-400 transition"
          onClick={handleCancelClick}
        >
          Cancel
        </Link>
      </div>
    </div>
  );
};

export default BuyActionWindow;
