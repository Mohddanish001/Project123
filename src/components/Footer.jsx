import { useState } from "react";
import axios from "axios";

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://192.168.1.2:8023/subscribe", { email });
      setMessage(response.data); // Success message
      setEmail(""); // Clear input
    } catch (error) {
      setMessage("Error subscribing. Please try again.");
    }
  };

  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Connect With Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-center md:text-left">
            Connect With Us.
          </h3>
          <div className="flex justify-center md:justify-start space-x-4">
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
          <h3 className="text-lg  font-semibold mb-4 text-center md:text-left ">
            Useful Links
          </h3>
          <ul className="space-y-2 text-center md:text-left ">
            <li>
              <a href="/" className="hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="/blogs" className="hover:text-gray-400">
                Blogs
              </a>
            </li>
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

        {/* Get in Touch */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-center md:text-left">
            Get in Touch
          </h3>
          <form className="flex flex-col space-y-4 w-full max-w-md" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your e-mail"
            className="w-full px-4 py-2 text-black rounded-full border border-gray-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button 
            type="submit"
            className="bg-blue-500 px-6 py-2 rounded-full text-white hover:bg-blue-600"
          >
            Subscribe
          </button>
        </form>
        {message && <p className="mt-4 text-green-600">{message}</p>}
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
