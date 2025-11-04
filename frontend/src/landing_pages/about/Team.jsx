import React from "react";

function Team() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      {/* Heading */}
      <div className="py-8 mt-10 border-t border-gray-200">
        <h1 className="text-3xl md:text-4xl font-semibold text-center text-gray-600">
          People
        </h1>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start text-gray-600 leading-relaxed text-lg md:text-base space-y-6 md:space-y-0 md:gap-16 py-6">
        {/* Left Column - Image + Name */}
        <div className="flex flex-col items-center text-center">
          <img
            src="/images/nithinKamath.jpg"
            alt="Nithin Kamath"
            className="rounded-full w-48 md:w-70 object-cover shadow-md"
          />
          <h4 className="mt-6 text-xl font-semibold text-gray-800">
            Nithin Kamath
          </h4>
          <h6 className="text-gray-500 text-sm">Founder, CEO</h6>
        </div>

        {/* Right Column - Description */}
        <div className="md:w-[500px] space-y-4">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade-long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on{" "}
            <a
              href="#"
              className="text-blue-600 hover:underline font-medium"
            >
              Homepage
            </a>{" "}
            /{" "}
            <a
              href="#"
              className="text-blue-600 hover:underline font-medium"
            >
              TradingQnA
            </a>{" "}
            /{" "}
            <a
              href="#"
              className="text-blue-600 hover:underline font-medium"
            >
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
