import { useState } from "react";
import axios from "axios";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

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
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6 md:px-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Connect With Us */}
        <div>
          <img className="w-32 md:w-40 mx-auto mb-6" src="logo34.png" alt="Company Logo" />
          <p className="text-gray-400 mb-6">
          Welcome to writeout, your go-to hub for creative content and digital marketing solutions. As content experts, we provide a full spectrum of services tailored to help your business excel in today’s fast-paced digital world. 
          </p>
          
         

<div className="flex justify-center space-x-6 text-xl">
  <a href="#" className="hover:text-gray-400">
    <FaFacebookF />
  </a>
  <a href="#" className="hover:text-gray-400">
    <FaLinkedinIn />
  </a>
  <a href="#" className="hover:text-gray-400">
    <FaInstagram />
  </a>
</div>

        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-center sm:text-left text-gray-300">Useful Links</h3>
          <ul className="space-y-4 text-center sm:text-left">
            <li>
              <a href="/" className="hover:text-gray-400">Home</a>
            </li>
            <li>
              <a href="/blogs" className="hover:text-gray-400">Blogs</a>
            </li>
            <li>
              <a href="/about" className="hover:text-gray-400">About Us</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-400">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Get in Touch */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-center sm:text-left text-gray-300">Get in Touch</h3>
          <form className="flex flex-col space-y-4 w-full max-w-sm mx-auto sm:mx-0" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 text-black rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button 
              type="submit"
              className="bg-blue-500 px-6 py-3 rounded-full text-white font-semibold hover:bg-blue-600 transition duration-300"
            >
              Subscribe
            </button>
          </form>
          {message && <p className="mt-4 text-green-600 text-center">{message}</p>}
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-gray-300 pt-6 text-center text-gray-600">
        <p>&copy; {new Date().getFullYear()} Writeout. All Rights Reserved.</p>
      </div>
    </footer>
  );
};
