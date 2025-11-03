import React, { useState, useEffect } from "react";
import axios from "axios";

const Positions = () => {
  const [allPositions, setAllPositions] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/allPositions").then((res) => {
      setAllPositions(res.data);
    });
  }, []);
  return (
    <div className="positions">
      <div className="text-sm text-gray-600 font-light mb-2">
        Positions ({allPositions.length})
      </div>
      <div className="w-full overflow-x-auto">
        <table className="w-full border min-w-0 table-auto md:table-fixed">
          <thead>
            <tr className="border-t border-b border-gray-200 bg-gray-50">
              <th className="p-2 md:p-3 text-xs md:text-sm text-gray-500 font-light whitespace-nowrap min-w-[120px] text-left">
                Product
              </th>
              <th className="p-2 md:p-3 text-xs md:text-sm text-gray-500 font-light whitespace-nowrap min-w-[120px] text-left">
                Instrument
              </th>
              <th className="p-2 md:p-3 text-xs md:text-sm text-gray-500 font-light border-r border-gray-200 whitespace-nowrap min-w-[70px] text-center">
                Qty
              </th>
              <th className="p-2 md:p-3 text-xs md:text-sm text-gray-500 font-light whitespace-nowrap min-w-[90px] text-center">
                Avg.
              </th>
              <th className="p-2 md:p-3 text-xs md:text-sm text-gray-500 font-light border-r border-gray-200 whitespace-nowrap min-w-[90px] text-center">
                LTP
              </th>
              <th className="p-2 md:p-3 text-xs md:text-sm text-gray-500 font-light whitespace-nowrap min-w-[100px] text-center">
                P&L
              </th>
              <th className="p-2 md:p-3 text-xs md:text-sm text-gray-500 font-light whitespace-nowrap min-w-[90px] text-center">
                Chg
              </th>
            </tr>
          </thead>
          <tbody>
            {allPositions.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const isProfit = curValue - stock.avg * stock.qty >= 0.0;
              const profClass = isProfit ? "text-green-600" : "text-red-600";
              const dayClass = stock.isLoss ? "text-red-600" : "text-green-600";
              return (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="px-2 md:px-4 py-3 text-sm border-b whitespace-nowrap text-left font-medium">
                    {stock.product}
                  </td>
                  <td className="px-2 md:px-4 py-3 text-sm border-b whitespace-nowrap text-left">
                    {stock.name}
                  </td>
                  <td className="px-2 md:px-4 py-3 text-sm border-b whitespace-nowrap text-center">
                    {stock.qty}
                  </td>
                  <td className="px-2 md:px-4 py-3 text-sm border-b whitespace-nowrap text-center">
                    {stock.avg.toFixed(2)}
                  </td>
                  <td className="px-2 md:px-4 py-3 text-sm border-b whitespace-nowrap text-center">
                    {stock.price.toFixed(2)}
                  </td>
                  <td
                    className={`px-2 md:px-4 py-3 text-sm border-b whitespace-nowrap text-center ${profClass}`}
                  >
                    {(curValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td
                    className={`px-2 md:px-4 py-3 text-sm border-b whitespace-nowrap text-center ${dayClass}`}
                  >
                    {stock.day}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Positions;
