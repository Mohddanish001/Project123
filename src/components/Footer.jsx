import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Connect With Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-center">
            Connect With Us.
          </h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-center">
            Useful Links
          </h3>
          <ul className="space-y-2 text-center">
            <li>
              <a href="/" className="hover:text-gray-400 ">
                Home
              </a>
            </li>
            {/* <li>
              <a href="#" className="hover:text-gray-400">
                Services
              </a>
            </li> */}
            <li>
              <a href="/about" className="hover:text-gray-400">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-400">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Blog & Articles */}
        {/* <div>
          <h3 className="text-lg font-semibold mb-4">Blog & Articles</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium">
                Content Creation: How Your Business Can Benefit from Outsourcing
                Content Creation
              </h4>
              <p className="text-gray-400 text-xs">October 19, 2023</p>
            </div>
            <div>
              <h4 className="text-sm font-medium">
                Content Strategy: How to Create Effective Content for Your
                Business
              </h4>
              <p className="text-gray-400 text-xs">July 19, 2023</p>
            </div>
          </div>
        </div> */}

        {/* Get in Touch */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
          <form className="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Your email"
              className="p-2 bg-gray-800 text-white rounded border border-gray-600 focus:outline-none focus:border-gray-400"
            />
            <button
              type="submit"
              className="p-2 bg-purple-600 text-white rounded hover:bg-purple-700"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center">
        <p className="text-xs">Copyright by Writeout. All rights reserved.</p>
        <div className="space-x-4 mt-2">
          <a href="#" className="text-xs hover:text-gray-400">
            Privacy & Policy
          </a>
          <span>|</span>
          <a href="#" className="text-xs hover:text-gray-400">
            Conditions
          </a>
        </div>
      </div>
    </footer>
  );
};
