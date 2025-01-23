// import { useState } from "react";
// import axios from "axios";
import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export const Footer = () => {
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post(
  //       "https://apiig.fourbrick.in/subscribe",
  //       { email },
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );

  //     // Extract a success message (if available) and set it
  //     const successMessage = response.data?.message || "Subscription successful!";
  //     setMessage(successMessage);
  //     setEmail(""); // Clear input field
  //   } catch (error) {
  //     // Set error message
  //     const errorMessage =
  //       error.response?.data?.message || "Error subscribing. Please try again.";
  //     setMessage(errorMessage);
  //   }
  // };

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6 md:px-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:text-left">
        {/* Connect With Us */}
        <div>
          <img
            className="w-32 md:w-40 mx-auto mb-6"
            src="logos.png"
            alt="Company Logo"
          />
          <p className="text-gray-400 mb-6 font-josefin">
            Welcome to QuillWhale, your go-to hub for creative content and
            digital marketing solutions. As content experts, we provide a full
            spectrum of services tailored to help your business excel in today’s
            fast-paced digital world.
          </p>

          {/* Contact Number */}
          <div className="mb-4">
            <p className="text-gray-400 font-josefin flex items-center gap-2">
              {/* Phone Icon */}
              <FaPhoneAlt />
              +91 84485 74664
            </p>
          </div>

          {/* Gmail Address */}
          <div>
            <p className="text-gray-400 font-josefin flex items-center gap-2">
              {/* Email Icon */}
              <FaEnvelope />
              <a
                href="mailto:info@quillwhale.com"
                className="hover:text-gray-300 font-josefin"
              >
                info@quillwhale.com
              </a>
            </p>
          </div>
        </div>

        {/* Useful Links */}
        <div >
          <h3 className="text-xl font-josefin font-bold mb-4    text-white sm:text-left">
            Company
          </h3>
          <ul className="space-y-4  font-josefin sm:text-left">
            <li>
              <a href="/" className="text-gray-400 font-josefin">
                Home
              </a>
            </li>
            <li>
              <a href="/blogs" className="text-gray-400 font-josefin">
                Blogs
              </a>
            </li>
            <li>
              <a href="/about" className="text-gray-400 font-josefin">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="text-gray-400 font-josefin">
                Contact Us
              </a>
            </li>
            <li>
              <a href="privacy-policy" className="text-gray-400 font-josefin">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-josefin font-bold mb-4  sm:text-left text-white">
            Services
          </h3>
          <ul className="space-y-4  sm:text-left font-josefin">
            <li>
              <a
                href="/seo-friendly-content-writing"
                className="text-gray-400 font-josefin"
              >
                SEO-friendly Content Writing
              </a>
            </li>
            <li>
              <a
                href="/blog-&-articles-writing"
                className="text-gray-400 font-josefin"
              >
                Blog & Articles Writing
              </a>
            </li>
            <li>
              <a
                href="/website-content-writing"
                className="text-gray-400 font-josefin"
              >
                Website Content Writing
              </a>
            </li>
            <li>
              <a
                href="/copywriting-for-ads"
                className="text-gray-400 font-josefin"
              >
                Copywriting for Ads
              </a>
            </li>
            <li>
              <a
                href="/product-descriptions"
                className="text-gray-400 font-josefin"
              >
               Product Descriptions
              </a>
            </li>
            <li>
              <a
                href="/email-marketing-copy"
                className="text-gray-400 font-josefin"
              >
              Eamil Copywriting
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4  sm:text-left text-white font-josefin">
            Blog and Articles
          </h3>
          <div className="space-y-6">
            {/* Blog Post 1 */}
            <div className="flex items-center space-x-4">
              <img
                src="image 11.png"
                alt="Blog 1"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <a
                  href="/blogs"
                  className="block text-gray-200 hover:text-gray-400 font-medium font-josefin"
                >
                  Polls and Quizzes
                </a>
                <p className="text-gray-400 text-sm font-josefin">
                  January 15, 2025
                </p>
              </div>
            </div>

            {/* Blog Post 2 */}
            <div className="flex items-center space-x-4 ">
              <img
                src="Untitled design (47).png"
                alt="Blog 2"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <a
                  href="/blogs"
                  className="block text-gray-200 hover:text-gray-400 font-medium font-josefin"
                >
                  Behind-the-Scenes Content
                </a>
                <p className="text-gray-400 text-sm font-josefin">
                  January 10, 2025
                </p>
              </div>
            </div>

            {/* Blog Post 3 */}
            <div className="flex items-center space-x-4">
              <img
                src="image23.png"
                alt="Blog 3"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <a
                  href="/blogs"
                  className="block text-gray-200 hover:text-gray-400 font-medium font-josefin"
                >
                  User Generated Content (UGC)
                </a>
                <p className="text-gray-400 text-sm font-josefin">
                  January 5, 2025
                </p>
              </div>
            </div>
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
          <a href="#" className="hover:text-gray-400">
            <FaFacebookF className="text-blue-600 hover:text-gray-400" />
          </a>
          <a href="#" className="hover:text-gray-400">
            <FaLinkedinIn className="text-blue-700 hover:text-gray-400" />
          </a>
          <a href="#" className="hover:text-gray-400">
            <FaInstagram className="text-pink-500 hover:text-gray-400" />
          </a>
          <a href="#" className="hover:text-gray-400">
            <FaTwitter className="text-blue-500 hover:text-gray-400" />
          </a>
          <a href="#" className="hover:text-gray-400">
            <FaYoutube className="text-red-600 hover:text-gray-400" />
          </a>
          <a href="#" className="hover:text-gray-400">
            <FaPinterestP className="text-red-700 hover:text-gray-400" />
          </a>
        </div>
      </div>
    </footer>
  );
};
