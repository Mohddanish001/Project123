import React from 'react'
import {  useLocation } from "react-router-dom";

function TOp() {
      const location = useLocation();

      const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      };

  return (
<div>
  <button
    className="fixed bottom-10 right-10 bg-gradient-to-r lg:w-auto from-[#DB7EEC] to-[#42175B] text-white rounded-full p-3 shadow-lg  transition-all duration-300"
    onClick={scrollToTop}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 15l-7-7-7 7"
      />
    </svg>
  </button>
</div>

  )
}

export default TOp
