import React from "react";

function RightSection({ imageURL, productName, productDesription, learnMore }) {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex flex-col-reverse lg:flex-row items-center md:gap-40">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 space-y-5 md:text-center lg:text-left mt-8 lg:mt-0">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            {productName}
          </h1>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            {productDesription}
          </p>
          <div className="flex md:justify-center lg:justify-start">
            <a
              href={learnMore}
              className="text-blue-600 font-medium hover:text-blue-800 transition duration-200"
            >
              Learn More →
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full flex justify-center">
          <img
            src={imageURL}
            alt={productName}
            className="w-full max-w-xl md:max-w-md lg:max-w-full"
          />
        </div>
      </div>
    </section>
  );
}

export default RightSection;
