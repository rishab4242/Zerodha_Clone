import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white border-b shadow-sm z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img
            src="/images/logo.svg"
            alt="Logo"
            className="w-32 md:w-40"
          />
        </a>

        {/* Hamburger Button (Mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-700 focus:outline-none md:hidden"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`flex-col md:flex-row md:flex md:items-center absolute md:static left-0 top-[64px] w-full md:w-auto bg-white md:bg-transparent transition-all duration-300 ease-in-out ${
            isOpen ? "flex z-40" : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 text-center md:text-left">
            {["Signup", "About", "Product", "Pricing", "Support"].map(
              (item) => (
                <li key={item} className="my-2 md:my-0">
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
