import React from "react";

function Awards() {
  return (
    <section className="container mx-auto px-4 py-5">
      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* Left Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center p-5">
          <img
            src="/images/largestBroker.svg"
            alt="Largest Broker"
            className="w-3/4 md:w-2/3 lg:w-4/5"
          />
        </div>

        {/* Right Text Section */}
        <div className="w-full lg:w-1/2 p-5">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Largest stock broker in India
          </h1>
          <p className="text-gray-600 text-base sm:text-lg mb-6">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>

          {/* Lists */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <ul className="space-y-2 text-gray-700">
              <li>Futures and Options</li>
              <li>Commodity derivatives</li>
              <li>Currency derivatives</li>
            </ul>

            <ul className="space-y-2 text-gray-700">
              <li>Stocks & IPOs</li>
              <li>Direct mutual funds</li>
              <li>Bonds and Govt. Securities</li>
            </ul>
          </div>

          {/* Press Logos */}
          <div className="flex justify-center lg:justify-start">
            <img
              src="/images/pressLogos.png"
              alt="Press Logos"
              className="w-11/12 md:w-4/5"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Awards;
