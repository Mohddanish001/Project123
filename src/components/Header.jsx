import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white font-semibold w-full fixed top-0 z-50 shadow-md transition-all">
      <div className="px-4 md:px-8">
        <div className="flex justify-between items-center p-1">
          {/* Logo */}
        
          <div>
               <Link
           to="/">
            <img src="logo34.png" alt="Logo" className="w-[130px] h-[70px]" />
             </Link>
          </div>
         

          {/* Menu Items (Desktop) */}
          <div>
            <ul className="hidden md:flex space-x-8 text-gray-700 ml-auto">
              <li>
                <Link
                  to="/"
                  className="cursor-pointer hover:text-[#0e6938] text-xl transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/blogs"
                  className="cursor-pointer hover:text-[#0e6938] text-xl transition-colors"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="cursor-pointer hover:text-[#0e6938] text-xl transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="cursor-pointer hover:text-[#0e6938] text-xl transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* <div className="relative w-[150px] h-[70px] bg-red-500 rounded--full flex items-center justify-center">
            <h1 className="text-white font-bold">Shyam</h1>
          </div> */}

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Mobile Menu"
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
                d={
                  isOpen
                    ? "M6 18L18 6M6 6l12 12" // Close Icon
                    : "M4 6h16M4 12h16M4 18h16" // Hamburger Menu Icon
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-2">
            <ul className="space-y-4 text-gray-700 text-center">
              <li>
                <Link
                  to="/"
                  className="block cursor-pointer hover:text-orange-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/blogs"
                  className="block cursor-pointer hover:text-orange-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block cursor-pointer hover:text-orange-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  About Us
                </Link>
              </li>
       
              <li>
                <Link
                  to="/contact"
                  className="block cursor-pointer hover:text-orange-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};
