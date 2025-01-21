import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen); // Toggle the dropdown visibility
  };

  const handleItemClick = () => {
    setIsOpen(false); // Close the dropdown when an item is clicked
  };


  const contentWritingServices = [
    {
      name: "SEO-friendly Content Writing",
      icon: "📈", 
    },
    {
      name: "Blog & Articles Writing",
      icon: "✍️",
    },
    {
      name: "Website Content Writing",
      icon: "🌐",
    },
    {
      name: "Copywriting for Ads",
      icon: "📢",
    },
    {
      name: "Product Descriptions",
      icon: "🛒",
    },
    {
      name: "Social Media Content",
      icon: "📱",
    },
    {
      name: "Email Marketing Copy",
      icon: "📧",
    },
    {
      name: "Press Releases",
      icon: "📰",
    },
    {
      name: "Ghostwriting",
      icon: "👻",
    },
    {
      name: "Content Editing & Error-free",
      icon: "✅",
    },
    {
      name: "Script & Content Marketing",
      icon: "🎥",
    },
  ];

  return (
    <nav className="bg-white font-josefin w-full fixed top-0 z-50 shadow-md transition-all">
    <div className="px-4 md:px-8">
      <div className="flex justify-between items-center py-3">
        {/* Logo */}
        <div>
          <Link to="/">
            <img src="logos.png" alt="Logo" className="w-[130px] h-[60px]" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <ul className="flex  space-x-8  text-black">
            <li>
              <Link
                to="/"
                className="cursor-pointer font-josefin text-black hover:text-[#0e6938] text-xl transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="cursor-pointer font-josefin text-black hover:text-[#0e6938] text-xl transition-colors"
              >
                About Us
              </Link>
            </li>
            <li className="relative group">
  {/* Services Dropdown */}
  <button className="cursor-pointer text-black font-josefin hover:text-[#0e6938] text-xl transition-colors flex items-center">
    Services
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="ml-1 h-5 w-5 transform transition-transform group-hover:rotate-180"
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

  <div className="hidden group-hover:flex absolute top-full left-1/2 transform -translate-x-1/2 bg-white border border-gray-300 rounded-lg shadow-lg py-4 w-[300px] sm:w-[500px] lg:w-[600px] transition-all duration-300">
    <div className="flex w-full">
      {/* Left Column */}
      <div className="flex-1 px-4">
        <ul className="space-y-3">
          {contentWritingServices.slice(0, 5).map((service, index) => (
            <li key={index} className="flex items-center">
              <span className="text-lg mr-2">{service.icon}</span>
              <Link
                to={`/${service.name.toLowerCase().replace(/ /g, "-")}`}
                className="block font-josefin text-black hover:text-[#0e6938] transition-colors"
              >
                {service.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Divider */}
      <div className="w-[1px] bg-gray-300"></div>

      {/* Right Column */}
      <div className="flex-1 px-4">
        <ul className="space-y-3">
          {contentWritingServices.slice(5).map((service, index) => (
            <li key={index} className="flex items-center">
              <span className="text-lg mr-2">{service.icon}</span>
              <Link
                to={`/${service.name.toLowerCase().replace(/ /g, "-")}`}
                className="block font-josefin text-black hover:text-[#0e6938] transition-colors"
              >
                {service.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
</li>

            {/* <li className="">
              <Link
                to="/testimonials"
                className="cursor-pointer  text-black hover:text-[#0e6938] text-xl transition-colors"
              >
                Testimonials
              </Link>
            </li> */}
            {/* <li>
              <Link
                to="/faqs"
                className="cursor-pointer text-black hover:text-[#0e6938] text-xl transition-colors"
              >
                FAQs
              </Link>
            </li> */}
            <li>
              <Link
                to="/blogs"
                className="cursor-pointer font-josefin text-black hover:text-[#0e6938] text-xl transition-colors"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/free-consulting"
                className="cursor-pointer font-quicksand bg-[#0e6938] text-white px-4 py-2 rounded-full text-lg transition-colors hover:bg-[#1a7f3d]"
              >
                Free Consulting
              </Link>
            </li>
          </ul>
        </div>

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
          <ul className="space-y-4 text-black text-center">
            <li>
              <Link
                to="/"
                className="block cursor-pointer font-josefin hover:text-[#0e6938] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block cursor-pointer font-josefin hover:text-[#0e6938] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
            </li>
            <ul className="flex justify-center">
      <li className="relative group">
        {/* Services Dropdown */}
        <button
          className="cursor-pointer text-black text-center hover:text-[#0e6938] text-xl transition-colors flex items-center"
          onClick={handleToggle}
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

        {/* Dropdown Menu */}
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } absolute top-full left-1/2 transform -translate-x-1/2 bg-white border rounded-lg shadow-lg py-4 w-[600px] md:w-[500px] sm:w-[400px]`}
        >
          <div className="flex w-full">
            {/* Left Column */}
            <div className="flex-1 px-4">
              <ul className="space-y-2">
                {contentWritingServices.slice(0, 5).map((service, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-lg mr-2">{service.icon}</span>
                    <Link
                      to={`/${service.name.toLowerCase().replace(/ /g, "-")}`}
                      className="block text-black hover:text-[#0e6938] transition-colors"
                      onClick={handleItemClick} // Close on item click
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Divider */}
            <div className="w-[1px] bg-gray-300"></div>

            {/* Right Column */}
            <div className="flex-1 px-4">
              <ul className="space-y-2">
                {contentWritingServices.slice(5).map((service, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-lg mr-2">{service.icon}</span>
                    <Link
                      to={`/${service.name.toLowerCase().replace(/ /g, "-")}`}
                      className="block text-black hover:text-[#0e6938] transition-colors"
                      onClick={handleItemClick} // Close on item click
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </li>
    </ul>

            <li>
              <Link
                to="/free-consulting"
                className="block cursor-pointer font-josefin bg-[#0e6938] text-white px-4 py-2 rounded-full text-lg transition-colors hover:bg-[#1a7f3d]"
                onClick={() => setIsOpen(false)}
              >
                Free Consulting
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  </nav>
  );
};
