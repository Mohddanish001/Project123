import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white font-semibold h-fit w-full fixed top-0 z-50 transition-all shadow-md">
      <div className="mx-auto px-4 md:px-8 ">
        <div className="flex justify-between items-center py-2">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="logo2.png" alt="Logo" className="w-[200px] h-[60px]" />
          </div>

          {/* Menu Items (Desktop) */}
          <ul className="hidden md:flex space-x-8 text-gray-700">
            <li>
              <Link
                to="/"
                className="cursor-pointer hover:text-[#0e6938]"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="cursor-pointer hover:text-[#0e6938]"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact-us"
                className="cursor-pointer hover:text-[#0e6938]"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Uncomment Log In and Create Account Links if needed */}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <ul className="space-y-4 text-gray-700">
              <li>
                <Link
                  to="/"
                  className="block cursor-pointer hover:text-orange-600"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block cursor-pointer hover:text-orange-600"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/overview"
                  className="block cursor-pointer hover:text-orange-600"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="block cursor-pointer hover:text-orange-600"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="block cursor-pointer hover:text-orange-600"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/contact-us"
                  className="block mb-5 bg-black text-white text-center px-4 py-2 rounded-md hover:bg-gray-800"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/overview"
                  className="block cursor-pointer hover:text-orange-600"
                >
                  Mentors
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
