import React from "react";

function Education() {
  return (
    <div className="container mx-auto px-6 ">
      <div className="flex flex-col md:flex-row items-center md:space-x-10">
        {/* Left Section - Image */}
        <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
          <img
            src="/images/education.svg"
            alt="Education"
            className="w-3/4 md:w-2/3"
          />
        </div>

        {/* Right Section - Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-semibold mb-4">
            Free and open market education
          </h1>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>

          <a
            href="#"
            className="text-blue-600 font-medium hover:underline inline-flex items-center"
          >
            Varsity <i className="fa fa-long-arrow-right ml-2"></i>
          </a>

          <p className="text-gray-700 dark:text-gray-300 mt-8 mb-4">
            TradingQ&A, the most active trading and investment community in
            India for all your market-related queries.
          </p>

          <a
            href="#"
            className="text-blue-600 font-medium hover:underline inline-flex items-center"
          >
            TradingQ&A <i className="fa fa-long-arrow-right ml-2"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
