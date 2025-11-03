import React from "react";

function Stats() {
  return (
    <section className="container mx-auto px-4 py-5 max-w-6xl">
      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* Left Text Section */}
        <div className="w-full lg:w-1/2 space-y-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Trust with confidence
          </h1>

          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                Customer-first always
              </h2>
              <p className="text-gray-600">
                That’s why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh
                crores worth of equity investments.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                No spam or gimmicks
              </h2>
              <p className="text-gray-600">
                No gimmicks, spam, “gamification”, or annoying push
                notifications. High-quality apps that you use at your pace, the
                way you like.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                The Zerodha universe
              </h2>
              <p className="text-gray-600">
                Not just an app, but a whole ecosystem. Our investments in 30+
                fintech startups offer you tailored services specific to your
                needs.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                Do better with money
              </h2>
              <p className="text-gray-600">
                With initiatives like Nudge and Kill Switch, we don’t just
                facilitate transactions, but actively help you do better with
                your money.
              </p>
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="w-full lg:w-1/2 flex flex-col items-center gap-6">
          <img
            src="/images/ecosystem.png"
            alt="Ecosystem"
            className="w-11/12 sm:w-4/5 rounded-lg"
          />

          <div className="flex flex-wrap justify-center gap-6 text-blue-600 font-medium">
            <a
              href="#"
              className="flex items-center gap-2 hover:text-blue-800 transition"
            >
              Explore our products{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 hover:text-blue-800 transition"
            >
              Try Kite demo{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;
