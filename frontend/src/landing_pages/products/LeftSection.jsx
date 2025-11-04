import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <section className="max-w-6xl mx-auto px-4 md:py-12">
      <div className="flex flex-col lg:flex-row items-center  md:gap-40">
        {/* Left Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={imageURL}
            alt={productName}
            className="w-6/6 max-w-sm md:max-w-md lg:max-w-full"
          />
        </div>

        {/* Right Text Section */}
        <div className="w-full lg:w-1/3 space-y-5 md:text-center lg:text-left">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            {productName}
          </h1>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            {productDesription}
          </p>

          {/* Links */}
          <div className="flex max-sm:flex-col flex-wrap justify-center lg:justify-start gap-2 md:gap-6 text-blue-600 font-medium">
            <a
              href={tryDemo}
              className="hover:text-blue-800 transition duration-200"
            >
              Try Demo →
            </a>
            <a
              href={learnMore}
              className="hover:text-blue-800 transition duration-200"
            >
              Learn More →
            </a>
          </div>

          {/* App Store Badges */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-4">
            <a href={googlePlay}>
              <img
                src="/images/googlePlayBadge.svg"
                alt="Get it on Google Play"
                className="w-36 sm:w-40"
              />
            </a>
            <a href={appStore}>
              <img
                src="/images/appstoreBadge.svg"
                alt="Download on App Store"
                className="w-36 sm:w-40"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LeftSection;
