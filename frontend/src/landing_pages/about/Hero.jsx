import React from "react";

function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      {/* Heading Section */}
      <div className="text-center py-20 mb-12">
        <h2 className="text-[24px] font-semibold text-gray-700 leading-relaxed">
          We pioneered the discount broking model in India
          <br className="hidden sm:block" />
          Now, we are breaking ground with our technology.
        </h2>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 border-t border-gray-200 text-gray-600 text-base sm:text-lg leading-relaxed pt-10">
        {/* Left Column */}
        <div className="space-y-5">
          <p>
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            <span className="font-medium text-gray-900"> Zerodha</span>, a
            combination of Zero and "Rodha", the Sanskrit word for barrier.
          </p>

          <p>
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>

          <p>
            Over 1+ Crore clients place millions of orders every day through our
            powerful ecosystem of investment platforms, contributing over 15% of
            all Indian retail trading volumes.
          </p>
        </div>

        {/* Right Column */}
        <div className="space-y-5">
          <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>

          <p>
            <a
              href="#"
              className="text-blue-600 font-medium hover:text-blue-800 transition"
            >
              Rainmatter
            </a>
            , our fintech fund and incubator, has invested in several fintech
            startups with the goal of growing the Indian capital markets.
          </p>

          <p>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our blog or see what the media is saying about
            us.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
