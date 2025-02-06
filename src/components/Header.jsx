import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const menuRef = useRef(null);
  const servicesRef = useRef(null);
  const [activeLink, setActiveLink] = useState("/");
  const location = useLocation();

  const contentWritingServices = [
    { name: "SEO-friendly Content Writing", icon: "📈" },
    { name: "Blog & Articles Writing", icon: "✍️" },
    { name: "Website Content Writing", icon: "🌐" },
    { name: "Copywriting for Ads", icon: "📢" },
    { name: "Product Descriptions", icon: "🛒" },
    { name: "Social Media Content", icon: "📱", url: "social-media-content-writing" },
    { name: "Email Marketing Copy", icon: "📧", url: "email-marketing-content-marketing" },
    { name: "Press Releases", icon: "📰" },
    { name: "Ghostwriting", icon: "👻" },
    { name: "Content Editing & Error-free", icon: "✅" },
    { name: "Script & Content Marketing", icon: "🎥" },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        servicesRef.current &&
        !servicesRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
        setIsServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsMenuOpen(false);
      setIsServicesOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActiveLink(location.pathname);
  }, [location.pathname]);

  const handleLinkClick = (path) => {
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    setActiveLink(path);
  };

  return (
    <nav className="bg-white font-josefin w-full fixed top-0 z-50 shadow-md transition-all">
      <div className="px-4 md:px-10 lg:px-20">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <div>
            <Link to="/">
              <img src="logos.png" alt="Logo" className="w-[130px] h-[60px]" />
            </Link>
          </div>

          {/* Desktop & Tablet Navigation */}
          <div className="hidden md:flex space-x-6 lg:space-x-8 items-center">
            <Link
              to="/"
              className={`text-black font-josefin text-lg ${
                activeLink === "/" ? "bg-gradient-to-r from-[#DB7EEC] to-[#42175B] bg-clip-text text-transparent" : ""
              } hover:bg-gradient-to-r hover:from-[#DB7EEC] hover:to-[#42175B] hover:bg-clip-text hover:text-transparent`}
              onClick={() => handleLinkClick("/")}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-black font-josefin text-lg ${
                activeLink === "/about" ? "bg-gradient-to-r from-[#DB7EEC] to-[#42175B] bg-clip-text text-transparent" : ""
              } hover:bg-gradient-to-r hover:from-[#DB7EEC] hover:to-[#42175B] hover:bg-clip-text hover:text-transparent`}
              onClick={() => handleLinkClick("/about")}
            >
              About Us
            </Link>
            <div className="relative group flex items-center" ref={servicesRef}>
              <div className="flex items-center"  onClick={() => setIsServicesOpen((prev) => !prev)}>
              <button
               
                className=" font-josefin text-black text-lg hover:bg-gradient-to-r hover:from-[#DB7EEC] hover:to-[#42175B] hover:bg-clip-text hover:text-transparent"
              >
                Services
                
              </button>
              <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-1 h-5 w-5 hover:text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
          </div>
              {isServicesOpen && (
                <div className="absolute top-full bg-white border shadow-lg rounded-lg w-60">
                  <ul className="py-3">
                    {contentWritingServices.map((service, index) => (
                      <li key={index} className="px-4 py-2 hover:bg-gray-100">
                        <Link
                          to={`/${service.url || service.name.toLowerCase().replace(/ /g, "-")}`}
                          className="flex items-center font-josefin text-black"
                          onClick={() => handleLinkClick(`/${service.url || service.name.toLowerCase().replace(/ /g, "-")}`)}
                        >
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
              className={`text-black font-josefin text-lg ${
                activeLink === "/blogs" ? "bg-gradient-to-r from-[#DB7EEC] to-[#42175B] bg-clip-text text-transparent" : ""
              } hover:bg-gradient-to-r hover:from-[#DB7EEC] hover:to-[#42175B] hover:bg-clip-text hover:text-transparent`}
              onClick={() => handleLinkClick("/blogs")}
            >
              Blog
            </Link>
            <a
              href="/contact"
              className="block bg-gradient-to-r from-[#DB7EEC] to-[#42175B] text-white px-4 py-2 rounded-full hover:bg-gradient-to-r hover:from-[#42175B] hover:to-[#DB7EEC] transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleLinkClick("/contact")}
            >
              Free Consulting
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
              setIsServicesOpen(false);
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
                d={isMenuOpen ? "" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      {/* </div> */}

        {/* Mobile Menu */}
        {isMenuOpen && (
        <div className="md:hidden py-4 mt-2" ref={menuRef}>
              <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-2 right-2 text-gray-700 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mt-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          <ul className="space-y-4 text-left">
            <li>
              <Link
                to="/"
                className={`block font-josefin text-black ${
                  activeLink === "/" ? "bg-gradient-to-r from-[#DB7EEC] to-[#42175B] bg-clip-text text-transparent" : ""
                } hover:bg-gradient-to-r hover:from-[#DB7EEC] hover:to-[#42175B] hover:bg-clip-text hover:text-transparent`}
                onClick={() => handleLinkClick("/")}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`block font-josefin text-black ${
                  activeLink === "/about" ? "bg-gradient-to-r from-[#DB7EEC] to-[#42175B] bg-clip-text text-transparent" : ""
                } hover:bg-gradient-to-r hover:from-[#DB7EEC] hover:to-[#42175B] hover:bg-clip-text hover:text-transparent`}
                onClick={() => handleLinkClick("/about")}
              >
                About Us
              </Link>
            </li>
            <li className="relative ">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-start font-josefin justify-start w-full text-black hover:bg-gradient-to-r hover:from-[#DB7EEC] hover:to-[#42175B] hover:bg-clip-text hover:text-transparent"
              >
                Services
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-1 h-5 w-5 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isServicesOpen && (
  <div className="bg-white border shadow-lg rounded-lg mt-2">
    <ul className="py-4 px-2">
      {contentWritingServices.map((service, index) => (
        <li key={index} className="px-4 py-2 hover:bg-gray-100">
          <Link
            to={`/${service.url || service.name.toLowerCase().replace(/ /g, "-")}`}
            className={`flex font-josefin items-start text-black ${
              activeLink === `/${service.name.toLowerCase().replace(/ /g, "-")}`
                ? "bg-gradient-to-r from-[#DB7EEC] to-[#42175B] bg-clip-text text-transparent"
                : ""
            } hover:bg-gradient-to-r hover:from-[#DB7EEC] hover:to-[#42175B] hover:bg-clip-text hover:text-transparent`}
            onClick={() => handleLinkClick(`/${service.url || service.name.toLowerCase().replace(/ /g, "-")}`)}
          >
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
                className={`block font-josefin text-black ${
                  activeLink === "/blogs" ? "bg-gradient-to-r from-[#DB7EEC] to-[#42175B] bg-clip-text text-transparent" : ""
                } hover:bg-gradient-to-r hover:from-[#42175B] hover:to-[#DB7EEC] transition-all duration-300`}
                onClick={() => handleLinkClick("/blogs")}
              >
                Blog
              </Link>
            </li>
            <li>
              <a
                href="/contact"
                className="block bg-gradient-to-r lg:w-auto from-[#DB7EEC] to-[#42175B] text-white px-4 py-2 rounded-full hover:bg-gradient-to-r hover:from-[#42175B] hover:to-[#DB7EEC] transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleLinkClick("/contact")}
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
