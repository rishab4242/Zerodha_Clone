import React from "react";
import { Link } from "react-router-dom";

const Funds = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen  p-6">
      {/* Header Section */}
      <div className="text-center mb-6">
        <p className="text-gray-700 text-lg mb-3">
          💰 Instant, zero-cost fund transfers with UPI
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="#"
            className="px-5 py-2 rounded-lg bg-green-600 text-white font-medium hover:bg-green-700 transition"
          >
            Add Funds
          </Link>
          <Link
            to="#"
            className="px-5 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
          >
            Withdraw
          </Link>
        </div>
      </div>

      {/* Equity Section */}
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-xl p-6 mb-6">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Equity
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3">
          <div className="flex justify-between text-gray-700">
            <p>Available margin</p>
            <p className="font-semibold text-green-600">₹4,043.10</p>
          </div>
          <div className="flex justify-between text-gray-700">
            <p>Used margin</p>
            <p className="font-semibold">₹3,757.30</p>
          </div>
          <div className="flex justify-between text-gray-700">
            <p>Available cash</p>
            <p className="font-semibold">₹4,043.10</p>
          </div>
        </div>

        <hr className="my-4 border-gray-300" />

        <div className="space-y-2 text-gray-700">
          <div className="flex justify-between">
            <p>Opening Balance</p>
            <p>₹4,043.10</p>
          </div>
          <div className="flex justify-between">
            <p>Closing Balance</p>
            <p>₹3,736.40</p>
          </div>
          <div className="flex justify-between">
            <p>Payin</p>
            <p>₹4,064.00</p>
          </div>
          <div className="flex justify-between">
            <p>SPAN</p>
            <p>₹0.00</p>
          </div>
          <div className="flex justify-between">
            <p>Delivery margin</p>
            <p>₹0.00</p>
          </div>
          <div className="flex justify-between">
            <p>Exposure</p>
            <p>₹0.00</p>
          </div>
          <div className="flex justify-between">
            <p>Options premium</p>
            <p>₹0.00</p>
          </div>
        </div>

        <hr className="my-4 border-gray-300" />

        <div className="space-y-2 text-gray-700">
          <div className="flex justify-between">
            <p>Collateral (Liquid funds)</p>
            <p>₹0.00</p>
          </div>
          <div className="flex justify-between">
            <p>Collateral (Equity)</p>
            <p>₹0.00</p>
          </div>
          <div className="flex justify-between font-semibold">
            <p>Total Collateral</p>
            <p>₹0.00</p>
          </div>
        </div>
      </div>

      {/* Commodity Section */}
      <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-md text-center">
        <p className="text-gray-700 mb-4">
          You don't have a commodity account yet
        </p>
        <Link
          to="#"
          className="px-6 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
        >
          Open Account
        </Link>
      </div>
    </div>
  );
};

export default Funds;
