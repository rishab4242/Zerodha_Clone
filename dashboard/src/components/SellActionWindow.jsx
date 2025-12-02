import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GeneralContext from "./GeneralContext";

const SellActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const generalContext = useContext(GeneralContext);

  const totalValue = (stockQuantity * stockPrice).toFixed(2);

  const handleSellClick = () => {
    axios.post("https://zerodha-clone-backend-v8te.onrender.com/newOrder", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      name: uid,
      qty: stockQuantity,
      price: stockPrice,
      mode: "SELL",
    });

    generalContext.closeSellWindow();
  };

  const handleCancelClick = () => {
    generalContext.closeSellWindow();
  };

  return (
    <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-6 space-y-6 mx-auto mt-12">
      <h2 className="text-xl font-semibold text-gray-800 text-center mb-4">
        Sell {uid}
      </h2>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-600 mb-1">Quantity</label>
          <input
            type="number"
            min="1"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-red-400"
            value={stockQuantity}
            onChange={(e) => setStockQuantity(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-gray-600 mb-1">Price</label>
          <input
            type="number"
            step="0.05"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-red-400"
            value={stockPrice}
            onChange={(e) => setStockPrice(e.target.value)}
          />
        </div>
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
        <h3 className="text-gray-700 font-semibold mb-2">Order Summary</h3>
        <div className="grid grid-cols-2 gap-y-2 text-gray-700">
          <span>Quantity:</span>
          <span className="text-right">{stockQuantity}</span>

          <span>Price per unit:</span>
          <span className="text-right">
            ₹{parseFloat(stockPrice).toFixed(2)}
          </span>

          <span>Total Value:</span>
          <span className="text-right font-semibold text-red-600">
            ₹{totalValue}
          </span>
        </div>
      </div>

      <div className="flex justify-between gap-4">
        <Link
          className="flex-1 text-center py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition"
          onClick={handleSellClick}
        >
          Sell
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

export default SellActionWindow;
