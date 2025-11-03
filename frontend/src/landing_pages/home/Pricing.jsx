import React from "react";

function Pricing() {
  return (
    <section className="container max-w-6xl mx-auto px-4 py-16 ">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-2">
        {/* Left Text Section */}
        <div className="w-full lg:w-1/2 space-y-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Unbeatable pricing
          </h1>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a
            href="#"
            className="text-blue-600 font-medium hover:text-blue-800 transition inline-flex items-center gap-2"
          >
            See Pricing{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>

        {/* Right Pricing Cards Section */}
        <div className="w-full lg:w-2/3">
          <div className="grid grid-cols-1 sm:grid-cols-3  text-left">
            {/* Box 1 */}
            <div className="flex  items-center ">
              <img
                src="/images/pricing0.svg"
                alt="Free account opening"
                className="w-30 h-30"
              />
              <p className="text-gray-700 text-[11px] leading-relaxed">
                Free account
                <br />
                opening
              </p>
            </div>

            {/* Box 2 */}
            <div className="flex  items-center md:w-[500px]">
              <img
                src="/images/pricing0.svg"
                alt="Free equity delivery"
                className="w-30 h-30"
              />
              <p className="text-gray-700 text-[11px] leading-relaxed">
                Free equity delivery
                <br />
                and direct mutual funds
              </p>
            </div>

            {/* Box 3 */}
            <div className="flex  items-center md:ml-16 md:w-[500px]">
              <img
                src="/images/intradayTrades.svg"
                alt="Intraday and F&O"
                className="w-30 h-30"
              />
              <p className="text-gray-700 text-[11px] leading-relaxed">
                Intraday and
                <br />
                F&amp;O
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
