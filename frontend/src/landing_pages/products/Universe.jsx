import React from "react";
import { useNavigate } from "react-router-dom";


function Universe({ dittoImage = "/images/dittoLogo.png", dittoStyle = "" }) {
     const navigate = useNavigate()


 const handleButtonClick = () => {
  navigate("/signup");
  window.scrollTo({ top: 0, behavior: "auto" });
};
  const platforms = [
    {
      img: "/images/zerodhaFundhouse.png",
      desc: "Our asset management venture that is creating simple and transparent index funds to help you save for your goals.",
    },
    {
      img: "/images/sensibullLogo.svg",
      desc: "Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.",
    },
    {
      img: "/images/goldenpiLogo.png",
      desc: "Investment research platform that offers detailed insights on stocks,sectors, supply chains, and more.",
    },
    {
      img: "/images/streakLogo.png",
      desc: "Systematic trading platform that allows you to create and backtest strategies without coding.",
    },
    {
      img: "/images/smallcaseLogo.png",
      desc: "Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.",
    },
     {
      img: dittoImage, // Customizable image for Ditto
      desc: "Personalized advice on life and health insurance. No spam and no mis-selling.",
      custom: true,
    },
  ];

  return (
    <section className="max-w-6xl mx-auto text-center py-16 px-4">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold mb-3">
        The Zerodha Universe
      </h1>
      <p className="text-gray-600 text-base md:text-lg mb-10">
        Extend your trading and investment experience even further with our
        partner platforms
      </p>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-10">
        {platforms.map((item, index) => (
          <div key={index} className="flex flex-col items-center ">
            <img
              src={item.img}
              alt="platform"
              className={`w-55 h-24  object-contain mb-3 ${
                item.custom ? dittoStyle : "w-40 h-20"
              }`}
            />
            <p className="text-sm text-gray-500 max-w-58">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Button */}
      <button onClick={handleButtonClick} className="bg-blue-600 cursor-pointer text-white font-medium px-8 py-2 text-lg rounded-md hover:bg-blue-700 transition duration-200">
        Signup Now
      </button>
    </section>
  );
}

export default Universe;
