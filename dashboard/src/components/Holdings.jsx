import React, { useState, useEffect } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/allHoldings").then((res) => {
      setAllHoldings(res.data);
    });
  }, []);

  // Chart data
  const labels = allHoldings.map((stock) => stock.name);
  const data = {
    labels,
    datasets: [
      {
        label: "Live Stock Price",
        data: allHoldings.map((stock) => parseFloat(stock.price)),
        backgroundColor: "rgba(37, 99, 235, 0.5)",
      },
    ],
  };

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h3 className="text-xl md:text-2xl font-bold mb-5 text-center md:text-left">
        Holdings ({allHoldings.length})
      </h3>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto mb-5 rounded-lg shadow-lg">
        <table className="w-full border-collapse bg-white">
          <thead>
            <tr className="bg-gray-50">
              {[
                "Instrument",
                "Qty.",
                "Avg. cost",
                "LTP",
                "Cur. val",
                "P&L",
                "Net chg.",
                "Day chg.",
              ].map((head) => (
                <th
                  key={head}
                  className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b"
                >
                  {head}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {allHoldings.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const isProfit = curValue - stock.avg * stock.qty >= 0.0;
              const profClass = isProfit ? "text-green-600" : "text-red-600";
              const dayClass = stock.isLoss ? "text-red-600" : "text-green-600";

              return (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3 text-sm border-b font-medium">
                    {stock.name}
                  </td>
                  <td className="px-4 py-3 text-sm border-b">{stock.qty}</td>
                  <td className="px-4 py-3 text-sm border-b">{stock.avg}</td>
                  <td className="px-4 py-3 text-sm border-b">{stock.price}</td>
                  <td className="px-4 py-3 text-sm border-b">
                    {curValue.toFixed(2)}
                  </td>
                  <td className={`px-4 py-3 text-sm border-b ${profClass}`}>
                    {(curValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={`px-4 py-3 text-sm border-b ${profClass}`}>
                    {stock.net}
                  </td>
                  <td className={`px-4 py-3 text-sm border-b ${dayClass}`}>
                    {stock.day}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile Card Layout */}
      <div className="md:hidden space-y-4 mb-5">
        {allHoldings.map((stock, index) => {
          const curValue = stock.price * stock.qty;
          const isProfit = curValue - stock.avg * stock.qty >= 0.0;
          const profClass = isProfit ? "text-green-600" : "text-red-600";
          const dayClass = stock.isLoss ? "text-red-600" : "text-green-600";

          return (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border p-4"
            >
              <div className="flex justify-between items-center mb-3">
                <h4 className="font-semibold text-gray-900 text-base">
                  {stock.name}
                </h4>
                <span className="text-sm text-gray-500">Qty: {stock.qty}</span>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-3">
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">
                    Avg Cost
                  </p>
                  <p className="text-sm font-medium">{stock.avg}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">
                    LTP
                  </p>
                  <p className="text-sm font-medium">{stock.price}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-3">
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">
                    Current Value
                  </p>
                  <p className="text-sm font-medium">{curValue.toFixed(2)}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">
                    P&L
                  </p>
                  <p className={`text-sm font-medium ${profClass}`}>
                    {(curValue - stock.avg * stock.qty).toFixed(2)}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-gray-100">
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">
                    Net Change
                  </p>
                  <p className={`text-sm font-medium ${profClass}`}>
                    {stock.net}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">
                    Day Change
                  </p>
                  <p className={`text-sm font-medium ${dayClass}`}>
                    {stock.day}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Chart Section */}
      <div className="mt-6 p-4 sm:p-6 bg-white rounded-lg shadow-sm border">
        <div className="w-full overflow-x-auto">
          <VerticalGraph data={data} />
        </div>
      </div>
    </div>
  );
};

export default Holdings;
