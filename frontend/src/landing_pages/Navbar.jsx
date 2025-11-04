import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Signup", path: "/signup" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Pricing", path: "/pricing" },
    { name: "Support", path: "/support" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="/images/logo.svg" alt="Logo" className="w-32 md:w-40" />
        </Link>

        {/* Desktop Menu (inline with logo) */}
        <div className="hidden md:flex items-center space-x-8 md:py-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Hamburger / Close Button */}
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
      </div>

      {/* ✅ Mobile Dropdown Menu (Stylish + Clean) */}
      {isOpen && (
        <div
          className="absolute max-sm:py-3 top-14 left-0 w-full bg-white border-t border-gray-200 shadow-md md:hidden
          animate-slideDown transition-all duration-300 ease-in-out"
        >
          {/* Grid Layout for Links */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-2 px-6 pb-4 text-[15px]">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block py-1 text-gray-700 hover:text-blue-600 font-medium transition ${
                  index < 3 ? "" : "col-span-1"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
