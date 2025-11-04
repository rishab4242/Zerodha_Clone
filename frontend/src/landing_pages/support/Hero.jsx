import React from "react";

function Hero() {
  return (
    <section className="w-full bg-[#2b7de9] text-white min-h-[80vh] flex flex-col justify-center px-6 sm:px-12 md:px-20 lg:px-50 py-10">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row  justify-between mb-8 sm:mb-10 gap-3 sm:gap-0">
        <a
          href="#"
          className="text-white font-medium underline underline-offset-2 hover:opacity-90"
        >
          Support Portal
        </a>
        <a
          href="#"
          className="text-white font-medium underline underline-offset-2 hover:opacity-90"
        >
          Track Tickets
        </a>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[180px] items-start">
        {/* Left Column */}
        <div>
          <h1 className="text-base sm:text-lg md:text-xl font-normal leading-relaxed mb-6">
            Search for an answer or browse help topics
            <br className="hidden sm:block" />
            to create a ticket
          </h1>

          {/* Search Input */}
          <input
            type="text"
            placeholder="Eg: how do I activate F&O, why is my order getting rejected.."
            className="w-full sm:w-[465px] bg-white text-gray-700 p-4 sm:p-5 rounded-md focus:outline-none shadow-md mb-6 text-sm sm:text-base"
          />

          {/* Quick Links */}
          <div className="flex flex-wrap gap-3 sm:gap-4 text-white text-sm underline underline-offset-2">
            <a href="#" className="hover:opacity-80">
              Track account opening
            </a>
            <a href="#" className="hover:opacity-80">
              Track segment activation
            </a>
            <a href="#" className="hover:opacity-80">
              Intraday margins
            </a>
            <a href="#" className="hover:opacity-80">
              Kite user manual
            </a>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-3 sm:space-y-4 mt-8 md:mt-0">
          <h1 className="text-base sm:text-lg md:text-xl font-normal mb-3">
            Featured
          </h1>
          <ol className="list-decimal list-inside space-y-2 text-white text-sm sm:text-base underline underline-offset-2">
            <li>
              <a href="#" className="hover:opacity-80">
                Current Takeovers and Delisting - January 2024
              </a>
            </li>
            <li>
              <a href="#" className="hover:opacity-80">
                Latest Intraday leverages - MIS & CO
              </a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
