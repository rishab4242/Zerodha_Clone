import React from "react";

function Hero() {
  return (
    <section className="container mx-auto px-4 mt-[20vh]">
      <div className="flex flex-col items-center text-center">
        {/* Hero Image */}
        <img
          src="/images/homeHero.png"
          alt="Hero Image"
          className="mb-10 w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl"
        />

        {/* Hero Heading */}
        <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
          Invest in everything
        </h1>

        {/* Subtext */}
        <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-600 max-w-xl sm:max-w-2xl">
          Online platform to invest in stocks, derivatives, mutual funds, and
          more
        </p>

        {/* CTA Button */}
        <button
          className="mt-8 mb-12 px-8 py-3 sm:px-10 sm:py-4 bg-blue-600 text-white text-base sm:text-lg font-semibold rounded-md hover:bg-blue-700 transition-all duration-300 w-2/3 sm:w-1/3 md:w-1/4 lg:w-1/5"
        >
          Signup Now
        </button>
      </div>
    </section>
  );
}

export default Hero;
