import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Orders = () => {
  const [allOrders, setAllOrders] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get("https://zerodha-clone-backend-v8te.onrender.com/allOrders")
      .then((res) => {
        setAllOrders(res.data);
      })
      .catch((err) => {
        console.error("Error fetching orders:", err);
      });
  }, []);

  return (
    <div className="orders">
      {allOrders.length > 0 ? (
        <table className="w-full border border-collapse bg-white">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">
                Name
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">
                Qty.
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">
                Price
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">
                Mode
              </th>
            </tr>
          </thead>
          <tbody>
            {allOrders.map((stock, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3 border-b">{stock.name}</td>
                <td className="px-4 py-3 border-b">{stock.qty}</td>
                <td className="px-4 py-3 border-b">{stock.price}</td>
                <td className="px-4 py-3 border-b">{stock.mode}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="no-orders text-center mt-6">
          <p>You haven't placed any orders today</p>
          <Link to={"/"} className="btn text-blue-600 underline">
            Get started
          </Link>
        </div>
      )}
    </div>
  );
};

export default Orders;
