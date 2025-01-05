import React from "react";

export const Contact = () => {
  return (
   <>
   <div className="flex justify-center items-center p-10 border bg-gray-50 ">
   <div className="flex flex-col lg:flex-row bg-gray-100 min-h-screen w-[900px] shadow-md mt-20">
      {/* Left Section */}
      <div className="relative bg-[#0e6938] text-white p-8 lg:w-1/2 flex flex-col justify-center">
        {/* Vertical Contact Us */}
        {/* <div className="absolute top-0 left-0 bg-red-600 text-white uppercase tracking-widest py-6 px-4 transform -translate-y-1/2 -rotate-90 origin-top-left">
          Contact Us
        </div> */}

        <div className="">
          {/* Address */}
          <div className="mb-6">
            <h3 className="text-xl font-bold">Address</h3>
            <p className="mt-2">
             c-65 1nd Floor sector 2 Noida U.P -201301
              
            </p>
          </div>

          {/* Email */}
          <div className="mb-6">
            <h3 className="text-xl font-bold">Email</h3>
            <p className="mt-2">leads@fourbrick.com</p>
          </div>

          {/* Phone */}
          <div>
            <h3 className="text-xl font-bold">Phone</h3>
            <p className="mt-2">+91-9773754783</p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="lg:w-2/3 bg-white p-10">
        <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
        <form className="space-y-4">
          {/* Name */}
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#0e6938]"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#0e6938]"
          />

          {/* Phone Number */}
          <input
            type="text"
            placeholder="Phone Number"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#0e6938]"
          />

          {/* Message */}
          <textarea
            placeholder="Write Message"
            rows="5"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#0e6938]"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#0e6938] text-white py-3 px-6 rounded-md hover:bg-[#0d3821] transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
   </div>
   </>
  );
};
