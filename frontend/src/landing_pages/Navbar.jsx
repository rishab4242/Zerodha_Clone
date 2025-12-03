import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Navbar({ isLoggedIn, setIsLoggedIn }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // ✅ Toast + Logout Logic (from your 1st Navbar)
  const handleLogout = () => {
    toast.success("You have been successfully logged out.", {
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      style: {
        background: "#d4edda",
        color: "#155724",
        fontSize: window.innerWidth < 768 ? "14px" : "16px",
        fontWeight: "normal",
        textAlign: "center",
        border: "1px solid #c3e6cb",
        borderRadius: "8px",
        minWidth: window.innerWidth < 768 ? "280px" : "400px",
        maxWidth: window.innerWidth < 768 ? "90vw" : "400px",
        padding: window.innerWidth < 768 ? "12px 16px" : "15px 20px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        margin: window.innerWidth < 768 ? "20px 10px 0 10px" : "20px 0 0 0",
      },
      icon: false,
      className: "custom-toast",
      closeButton: ({ closeToast }) => (
        <button
          onClick={closeToast}
          style={{
            position: "absolute",
            top: "8px",
            right: "8px",
            color: "#000000",
            fontSize: "18px",
            fontWeight: "bold",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            padding: "4px",
            marginLeft: "0",
            zIndex: 1,
          }}
        >
          ×
        </button>
      ),
    });

    // Remove token and update state
    localStorage.removeItem("token");

    // Navigate after showing toast
    setTimeout(() => {
      navigate("/login");
    }, 1500);
  };

  // ✅ Close mobile menu after link click
  const handleLinkClick = () => setIsOpen(false);

  return (
    <div className="fixed top-0 left-0 right-0 bg-white  shadow-sm z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center" onClick={handleLinkClick}>
          <img
            src="/images/logo.svg"
            alt="Logo"
            className="max-w-[120px] h-auto"
          />
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
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
          className={`${
            isOpen
              ? "block lg:hidden"
              : "hidden lg:flex lg:items-center lg:w-auto"
          }`}
        >
          {/* ✅ Overlay Effect */}
          {isOpen && (
            <div
              className="fixed inset-0 bg-black/40 backdrop-blur-[1px] transition-opacity duration-300 z-40"
              onClick={() => setIsOpen(false)}
            ></div>
          )}

          {/* ✅ Mobile Popup Menu */}
          {isOpen && (
            <div className="fixed top-24 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-md shadow-lg p-6 w-[345px] z-50">
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-2 right-3 text-gray-500 hover:text-gray-700 text-4xl"
              >
                ×
              </button>

              {/* Links Grid */}
              <ul className="grid grid-cols-2 gap-y-3 text-gray-700 text-sm mt-6">
                <li>
                  <Link
                    to="/signup"
                    onClick={handleLinkClick}
                    className="hover:text-red-600"
                  >
                    Signup
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    onClick={handleLinkClick}
                    className="hover:text-red-600"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products"
                    onClick={handleLinkClick}
                    className="hover:text-red-600"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pricing"
                    onClick={handleLinkClick}
                    className="hover:text-red-600"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    to="/support"
                    onClick={handleLinkClick}
                    className="hover:text-red-600"
                  >
                    Support
                  </Link>
                </li>

                {/* ✅ Logout aligned to bottom-right */}
                {isLoggedIn ? (
                  <li className="self-end ">
                    <button
                      onClick={() => {
                        handleLogout();
                        handleLinkClick();
                      }}
                      className="text-gray-700 hover:text-red-600"
                    >
                      Logout
                    </button>
                  </li>
                ) : (
                  <>
                    <li>
                      <Link
                        to="/login"
                        onClick={handleLinkClick}
                        className="hover:text-red-600"
                      >
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/signup"
                        onClick={handleLinkClick}
                        className="hover:text-red-600"
                      >
                        Signup
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          )}

          {/* ✅ Desktop Menu stays same */}
          <ul className="hidden lg:flex lg:flex-row lg:space-x-10 mt-4 lg:mt-0 text-center">
            <li>
              <Link
                to="/about"
                className="block py-2 text-gray-700 hover:text-red-600"
                onClick={handleLinkClick}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="block py-2 text-gray-700 hover:text-red-600"
                onClick={handleLinkClick}
              >
                Product
              </Link>
            </li>
            <li>
              <Link
                to="/pricing"
                className="block py-2 text-gray-700 hover:text-red-600"
                onClick={handleLinkClick}
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="/support"
                className="block py-2 text-gray-700 hover:text-red-600"
                onClick={handleLinkClick}
              >
                Support
              </Link>
            </li>

            {isLoggedIn ? (
              <li>
                <button
                  onClick={() => {
                    handleLogout();
                    handleLinkClick();
                  }}
                  className="block py-2 text-gray-700 hover:text-red-600 cursor-pointer"
                >
                  Logout
                </button>
              </li>
            ) : (
              <>
                <li>
                  <Link
                    to="/login"
                    className="block py-2 text-gray-700 hover:text-red-600"
                    onClick={handleLinkClick}
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/signup"
                    className="block py-2 text-gray-700 hover:text-red-600"
                    onClick={handleLinkClick}
                  >
                    Signup
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
