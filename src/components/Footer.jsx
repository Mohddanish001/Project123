// import { useState } from "react";
// import axios from "axios";
import React from "react";
import {
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

export const Footer = () => {
  const location = useLocation();

  // Function to handle smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-white py-12">
    <div className="container mx-auto px-6 md:px-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
      
      {/* Connect With Us */}
      <div>
        <Link to="/" onClick={scrollToTop}>
          <img
            className="w-32 md:w-40 mb-6"
            src="logos.png"
            alt="Company Logo"
          />
        </Link>
        <p className="text-gray-400 mb-6 font-josefin leading-relaxed">
          Welcome to QuillWhale, your go-to hub for creative content and
          digital marketing solutions. We offer a full spectrum of services tailored 
          to help your business excel in today’s fast-paced digital world.
        </p>

        {/* Contact Info */}
        <div className="mb-4 flex items-center gap-2 text-gray-400">
          <FaPhoneAlt />
          <span className="font-josefin">+91 123456789</span>
        </div>

        <div className="flex items-center gap-2 text-gray-400">
          <FaEnvelope />
          <span className="font-josefin">test@quillwhale.com</span>
        </div>
      </div>

      {/* Useful Links */}
      <div>
        <h3 className="text-xl font-josefin font-bold mb-4 text-white">Company</h3>
        <ul className="space-y-4 font-josefin">
          {[
            { name: "Home", path: "/" },
            { name: "Blogs", path: "/blogs" },
            { name: "About Us", path: "/about" },
            { name: "Contact Us", path: "/contact" },
            { name: "Privacy Policy", path: "/privacy-policy" },
            { name: "Our Partners", path: "https://www.qiconindia.com/", external: true }
          ].map((item, index) => (
            <li key={index}>
              {item.external ? (
                <a
                  href={item.path}
                  className="text-gray-400 hover:text-white transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  to={item.path}
                  onClick={() => {
                    if (location.pathname === item.path) {
                      scrollToTop();
                    }
                  }}
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div>
  <h3 className="text-xl font-josefin font-bold mb-4 sm:text-left text-white">
    Services
  </h3>
  <ul className="space-y-4 sm:text-left font-josefin">
    {[
      { name: "SEO-friendly Content Writing", path: "/seo-friendly-content-writing" },
      { name: "Blog & Articles Writing", path: "/blog-&-articles-writing" },
      { name: "Website Content Writing", path: "/website-content-writing" },
      { name: "Copywriting for Ads", path: "/copywriting-for-ads" },
      { name: "Product Descriptions", path: "/product-descriptions" },
      { name: "Email Copywriting", path: "/email-marketing-copy" }
    ].map((service, index) => (
      <li key={index}>
        <a
          href={service.path}
          className="text-gray-400 hover:text-white transition duration-300"
          onClick={(e) => {
            e.preventDefault();
            if (window.location.pathname === service.path) {
              window.scrollTo({ top: 0, behavior: "smooth" });
            } else {
              window.location.href = service.path;
            }
          }}
        >
          {service.name}
        </a>
      </li>
    ))}
  </ul>
</div>

<div>
  <h3 className="text-xl font-semibold mb-4 sm:text-left text-white font-josefin">
    Blog and Articles
  </h3>
  <div className="space-y-6">
    {[
      {
        title: "Social Media Content Ideas to Boost Engagement",
        date: "January 15, 2025",
        imgSrc: "blog1.jpeg",
        path: "/Social-Media-Content-Ideas",
      },
      {
        title: "How to develop a content strategy that aligns with your brand goals",
        date: "January 10, 2025",
        imgSrc: "Untitled design (47).png",
        path: "/How-to-Develop-a-Content-Strategy-That-Aligns-With-Your-Brand-Goals",
      },
      {
        title: "5 Elements Every Great Marketing Video Script Needs",
        date: "January 5, 2025",
        imgSrc: "image23.png",
        path: "/5-Elements-Every-Great-Marketing-Video-Script-Needs",
      }
    ].map((blog, index) => (
      <div key={index} className="flex items-center space-x-4">
        <img
          src={blog.imgSrc}
          alt={blog.title}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <a
            href={blog.path}
            className="block text-gray-200 hover:text-gray-400 font-medium font-josefin"
            onClick={(e) => {
              e.preventDefault();
              if (window.location.pathname === blog.path) {
                window.scrollTo({ top: 0, behavior: "smooth" });
              } else {
                window.location.href = blog.path;
              }
            }}
          >
            {blog.title}
          </a>
          <p className="text-gray-400 text-sm font-josefin">{blog.date}</p>
        </div>
      </div>
    ))}
  </div>
</div>

        {/* Get in Touch */}
        {/* <div> */}
        {/* <h3 className="text-lg font-semibold mb-4 text-center sm:text-left text-gray-300 font-josefin">
            Get in Touch
          </h3> */}
        {/* <form
            className="flex flex-col space-y-4 w-full max-w-sm mx-auto sm:mx-0"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 font-josefin text-black rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-blue-500 px-6 py-3 rounded-full font-josefin text-white font-semibold hover:bg-blue-600 transition duration-300"
            >
              Subscribe
            </button>
          </form>
          {message && (
            <p className={`mt-4 text-center ${message.includes("Error") ? "text-red-500" : "text-green-500"}`}>
              {message}
            </p>
          )}
        </div> */}
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t flex  justify-around space-x-10 items-center border-gray-300 pt-6 text-center text-gray-600 ">
        <p className="font-josefin">
          &copy; {new Date().getFullYear()} QuillWhale. All Rights Reserved.
        </p>
        <div className="flex justify-center space-x-6 text-xl">
          {/* <a href="#" className="hover:text-gray-400">
            <FaFacebookF className="text-blue-600 hover:text-gray-400" />
          </a> */}
          {/* company/writeoutq/ */}
          {/* /quillwhale/ */}
          <a 
           href="https://www.linkedin.com/"
           target="_blank"
           rel="noopener noreferrer"
           className="hover:text-gray-400">
            <FaLinkedinIn className="text-blue-700 " />
          </a>
          <a 
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
           className="hover:text-gray-400">
            <FaInstagram className="text-pink-500" />
          </a>
          {/* <a href="#" className="hover:text-gray-400">
            <FaTwitter className="text-blue-500 hover:text-gray-400" />
          </a>
          <a href="#" className="hover:text-gray-400">
            <FaYoutube className="text-red-600 hover:text-gray-400" />
          </a>
          <a href="#" className="hover:text-gray-400">
            <FaPinterestP className="text-red-700 hover:text-gray-400" />
          </a> */}
        </div>
      </div>
    </footer>
  );
};
