import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const CopyWriting = () => {
  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto rounded-md px-6 sm:px-8 md:px-12 lg:px-24 py-10 bg-white shadow-md">
        {/* Hero Section */}
        <div className="flex flex-col mt-10 md:flex-row items-center gap-8 mb-10">
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl font-josefin md:text-5xl font-bold text-black mb-4">
              Copywriting for Ads.
            </h1>
            <p className="text-black text-base sm:text-lg font-josefin text-justify">
              Writing attention-grabbing ad copy for both online and offline
              advertising platforms.
            </p>
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-10 px-2 sm:px-4 md:px-8 text-justify">
          {[
            {
              title: "Google Ads Copy",
              description:
                "We produce high-performing Google Ads that are short, step-by-step, and oriented for clicks. The emphasis is on crafting a highly engaging message that checks the search intent and brings conversion while keeping the platform's rules at the forefront. ",
            },
            {
              title: "Copy for Social Media Advertising",
              description:
                " Our social media ad copy is fine-tuned to suit each platform, involving users with attention-stealing headlines, persuasive language, and strong calls to action. It's supposed to evoke the same feelings as your target audience. The performance of the campaign can be improved to the maximum.",
            },
            {
              title: "Display Ads",
              description:
                "We design visual and textual display ads that effectively communicate your brand's message. These ads are crafted to be more engaging, making you grab more attention, and thus, the traffic across the websites and the apps will increase.",
            },
            {
              title: "Banner Ads",
              description:
                " Our banner ads are enhanced by adding striking images and less narrative but convincing headlines to make these ads stand out. They can be used in various digital spaces to promote the brand, attract clicks, and increase conversions.",
            },
          ].map((service, index) => (
            <div key={index} className="mb-6">
              <h2 className="text-lg sm:text-xl  text-left text-black font-josefin mb-2">
                {service.title}:
              </h2>
              <p className="text-gray-600 font-josefin text-sm sm:text-base">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call-to-Action Section */}
        <div className="p-4 sm:p-6 md:p-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4=  bg-gradient-to-r from-[#DB7EEC] to-[#42175B]  text-white py-6 sm:py-8 md:py-10 px-6 sm:px-10 md:px-16 lg:px-28 rounded-md shadow-md">
            <h2 className="text-lg sm:text-2xl md:text-3xl text-center md:text-start font-josefin">
              <span className="font-bold font-josefin">Are you looking for </span>
              <br className="hidden md:block font-josefin" /> personalized assistance
            </h2>
            <Link
                  to="/contact">
            <button
  className="mt-4 flex  font-josefin items-center justify-between gap-2 md:mt-0 bg-white bg-gradient-to-r from-[#DB7EEC] to-[#42175B] font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-md 
             hover:bg-gray-100 hover:bg-gradient-to-r hover:from-[#42175B] hover:to-[#DB7EEC]
             transition-all duration-300 group"
>
  Get Started Now
  <FaLongArrowAltRight 
    className="transform transition-transform duration-300 ease-in-out group-hover:translate-x-2"
  />
</button>
</Link>     
          </div>  
        </div>
      </div>
    </div>
  );
};

export default CopyWriting;
