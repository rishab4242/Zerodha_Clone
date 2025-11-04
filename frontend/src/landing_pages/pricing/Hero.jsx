import React from "react";

function Hero() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 mt-28">
      {/* Header Section */}
      <div className="text-center py-10 border-b border-gray-200">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-700">
          Charges
        </h1>
        <h3 className="text-gray-500 mt-3 text-base md:text-xl">
          List of all charges and taxes
        </h3>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center py-12">
        {/* Card 1 */}
        <div className="flex flex-col items-center p-6 rounded-lg hover:shadow-md transition">
          <img
            src="/images/pricingEquity.svg"
            alt="Free equity delivery"
            className="w-50 md:w-70  mb-4"
          />
          <h1 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
            Free equity delivery
          </h1>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-sm">
            All equity delivery investments (NSE, BSE) are absolutely free — ₹0
            brokerage.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center p-6 rounded-lg hover:shadow-md transition">
          <img
            src="/images/intradayTrades.svg"
            alt="Intraday and F&O trades"
            className="w-50 md:w-70 mb-4"
          />
          <h1 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
            Intraday and F&O trades
          </h1>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-sm">
            Flat ₹20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center p-6 rounded-lg hover:shadow-md transition">
          <img
            src="/images/pricingEquity.svg"
            alt="Free direct MF"
            className="w-50 md:w-70 mb-4"
          />
          <h1 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
            Free direct MF
          </h1>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-sm">
            All direct mutual fund investments are absolutely free — ₹0
            commissions and DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
