import React from "react";

function Hero() {
  return (
    <div className="max-w-6xl mx-auto border-b border-gray-200 py-15 md:py-20 px-4">
      <div className="text-center md:mt-10 py-8">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-600">
          Zerodha Products
        </h1>
        <h3 className="text-gray-600 mt-3 text-2xl">
          Sleek, modern and intuitive trading platforms
        </h3>

        <p className="mt-5 text-gray-700 text-base md:text-lg">
          Check out our{" "}
          <a
            href="#"
            className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-1 no-underline font-medium"
          >
            investment offerings{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
