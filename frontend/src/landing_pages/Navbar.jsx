import React, { useState } from "react";
import { Link } from "react-router-dom"; // ✅ Import Link

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Signup", path: "/signup" },
    { name: "About", path: "/about" },
    { name: "Product", path: "/products" },
    { name: "Pricing", path: "/pricing" },
    { name: "Support", path: "/support" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white border-b shadow-sm z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="/images/logo.svg" alt="Logo" className="w-32 md:w-40" />
        </Link>

        {/* Hamburger Button */}
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

        {/* Nav Links */}
        <div
          className={`flex-col md:flex-row md:flex md:items-center absolute md:static left-0 top-[64px] w-full md:w-auto bg-white md:bg-transparent transition-all duration-300 ease-in-out ${
            isOpen ? "flex z-40" : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 text-center md:text-left">
            {navItems.map((item) => (
              <li key={item.name} className="my-2 md:my-0">
                <Link
                  to={item.path}
                  className="block px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition"
                  onClick={() => setIsOpen(false)} // closes menu on click (mobile)
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
