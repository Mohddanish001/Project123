import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const menuRef = useRef(null); // Ref for mobile menu
  const servicesRef = useRef(null); // Ref for dropdown container

  const contentWritingServices = [
    { name: "SEO-friendly Content Writing", icon: "📈" },
    { name: "Blog & Articles Writing", icon: "✍️" },
    { name: "Website Content Writing", icon: "🌐" },
    { name: "Copywriting for Ads", icon: "📢" },
    { name: "Product Descriptions", icon: "🛒" },
    { name: "Social Media Content", icon: "📱" },
    { name: "Email Marketing Copy", icon: "📧" },
    { name: "Press Releases", icon: "📰" },
    { name: "Ghostwriting", icon: "👻" },
    { name: "Content Editing & Error-free", icon: "✅" },
    { name: "Script & Content Marketing", icon: "🎥" },
  ];

  // Close dropdown and mobile menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        servicesRef.current &&
        !servicesRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false); // Close mobile menu
        setIsServicesOpen(false); // Close dropdown
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close dropdown and mobile menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsMenuOpen(false); // Close mobile menu
      setIsServicesOpen(false); // Close dropdown
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);  // Close mobile menu
    setIsServicesOpen(false);  // Close services dropdown
  };

  return (
    <nav className="bg-white font-josefin w-full fixed top-0 z-50 shadow-md transition-all">
      <div className="px-4 md:px-20">
        <div className="flex justify-between items-center py-2">
          {/* Logo */}
          <div>
            <Link to="/">
              <img src="logos.png" alt="Logo" className="w-[130px] h-[60px]" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link
              to="/"
              className="text-black font-josefin text-xl hover:bg-gradient-to-r hover:from-[#DB7EEC] hover:to-[#42175B] hover:bg-clip-text hover:text-transparent"
              onClick={handleLinkClick}  // Close menu and dropdown when clicked
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-black font-josefin text-xl hover:bg-gradient-to-r hover:from-[#DB7EEC] hover:to-[#42175B] hover:bg-clip-text hover:text-transparent"
              onClick={handleLinkClick}  // Close menu and dropdown when clicked
            >
              About Us
            </Link>
            <div className="relative group" ref={servicesRef}>
              <button
                onClick={() => setIsServicesOpen((prev) => !prev)}
                className="flex items-center font-josefin text-black text-xl hover:bg-gradient-to-r hover:from-[#DB7EEC] hover:to-[#42175B] hover:bg-clip-text hover:text-transparent"
              >
                Services
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-1 h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isServicesOpen && (
                <div className="absolute top-full bg-white border shadow-lg rounded-lg w-72">
                  <ul className="py-4">
                    {contentWritingServices.map((service, index) => (
                      <li key={index} className="px-4 py-2 hover:bg-gray-100">
                        <Link
                          to={`/${service.name
                            .toLowerCase()
                            .replace(/ /g, "-")}`}
                          className="flex items-center font-josefin text-black"
                          onClick={handleLinkClick}  // Close menu and dropdown when clicked
                        >
                          <span className="mr-2">{service.icon}</span>
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <Link
              to="/blogs"
              className="text-black font-josefin text-xl hover:bg-gradient-to-r hover:from-[#DB7EEC] hover:to-[#42175B] hover:bg-clip-text hover:text-transparent"
              onClick={handleLinkClick}  // Close menu and dropdown when clicked
            >
              Blog
            </Link>
            <li className="list-none">
              <a
                href="/contact"
                className="block list-none bg-gradient-to-r from-[#DB7EEC] to-[#42175B] text-white px-4 py-2 rounded-full hover:bg-gradient-to-r hover:from-[#42175B] hover:to-[#DB7EEC] transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}  // Close menu and dropdown when clicked
              >
                Free Consulting
              </a>
            </li>
          </div>

          {/* Mobile Hamburger Menu */}
          <button
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
              setIsServicesOpen(false); // Close services dropdown when hamburger is clicked
            }}
            className="md:hidden text-gray-700 focus:outline-none"
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
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-2" ref={menuRef}>
            <ul className="space-y-4 text-center">
              <li>
                <Link
                  to="/"
                  className="block font-josefin text-black hover:bg-gradient-to-r hover:from-[#DB7EEC] hover:to-[#42175B] hover:bg-clip-text hover:text-transparent"
                  onClick={handleLinkClick}  // Close menu and dropdown when clicked
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block font-josefin text-black hover:bg-gradient-to-r hover:from-[#DB7EEC] hover:to-[#42175B] hover:bg-clip-text hover:text-transparent"
                  onClick={handleLinkClick}  // Close menu and dropdown when clicked
                >
                  About Us
                </Link>
              </li>
              <li className="relative">
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center font-josefin justify-center w-full text-black hover:bg-gradient-to-r hover:from-[#DB7EEC] hover:to-[#42175B] hover:bg-clip-text hover:text-transparent"
                >
                  Services
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-1 h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isServicesOpen && (
                  <div className="bg-white border shadow-lg rounded-lg mt-2">
                    <ul className="py-4 px-2">
                      {contentWritingServices.map((service, index) => (
                        <li key={index} className="py-2 hover:bg-gray-100">
                          <Link
                            to={`/${service.name
                              .toLowerCase()
                              .replace(/ /g, "-")}`}
                            className="flex font-josefin items-center text-black"
                            onClick={handleLinkClick}  // Close menu and dropdown when clicked
                          >
                            <span className="mr-2">{service.icon}</span>
                            {service.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
              <li>
                <Link
                  to="/blogs"
                  className="block font-josefin text-black hover:bg-gradient-to-r hover:from-[#42175B] hover:to-[#DB7EEC] transition-all duration-300"
                  onClick={handleLinkClick}  // Close menu and dropdown when clicked
                >
                  Blog
                </Link>
              </li>
              <li>
                <a
                  href="/contact"
                  className="block bg-gradient-to-r from-[#DB7EEC] to-[#42175B] text-white px-4 py-2 rounded-full hover:bg-gradient-to-r hover:from-[#42175B] hover:to-[#DB7EEC] transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLinkClick}  // Close menu and dropdown when clicked
                >
                  Free Consulting
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};
