import React from "react";
import { Link } from "react-router-dom";

const PressReleases = () => {
  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto rounded-md px-6 sm:px-8 md:px-12 lg:px-24 py-10 bg-white shadow-md">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-josefin font-bold text-black mb-4">
              Press Releases
            </h1>
            <p className="text-black font-josefin text-base sm:text-lg text-justify">
              Writing impactful press releases to announce news, product
              launches, events, or company updates.
            </p>
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-10 px-2 sm:px-4 md:px-8 ">
          {[
            {
              title: "Company Announcements",
              description:
                " Press release writing solutions are our forte, as we are committed to supplying the reports that inform of forthcoming events, new signings, expansions, or a new top executive. They are made to be the captivating channel that sparks media interest and that constantly updates the stakeholders.",
            },
            {
              title: "Event Press Releases",
              description:
                "CNTO our event press releases to promote your events; they are the most popular types. It is time to invite participants to your conference, workshop, or product showcase. You can expect to receive all critical details for a greater possibility of attracting attendees, media coverage, and public interest. This will, in turn, create a buzz around your event. ",
            },
            {
              title: "Product Launch Press Releases",
              description:
                "We are the company that offers exclusive PR services and creates catchy product launch press releases that provide essential company information about new products in a way that is engaging and personable. Further, they stress the benefit of such a product as competition in its presentation. The releases cover all corners and targeting media and potential customers is the first step in successful exposure. ",
            },
          ].map((service, index) => (
            <div key={index} className="mb-6">
              <h2 className="text-lg sm:text-xl font-josefin text-black font-bold mb-2">
                {service.title}:
              </h2>
              <p className="text-gray-600 font-josefin text-justify text-sm sm:text-base">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call-to-Action Section */}
        <div className="p-4 sm:p-6 md:p-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4  bg-gradient-to-r from-[#DB7EEC] to-[#42175B]  text-white py-6 sm:py-8 md:py-10 px-6 sm:px-10 md:px-16 lg:px-28 rounded-md shadow-md">
            <h2 className="text-lg sm:text-2xl md:text-3xl text-center md:text-start font-josefin">
              <span className="font-bold font-josefin">Are you looking for </span>
              <br className="hidden md:block font-josefin" /> personalized assistance
            </h2>
            <Link
                  to="/contact">
            <button
              className="mt-4 md:mt-0 bg-white font-josefin  bg-gradient-to-r from-[#DB7EEC] to-[#42175B] font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-md hover:bg-gray-100 transitionhover:bg-gradient-to-r hover:from-[#42175B] hover:to-[#DB7EEC]
                   transition-all duration-300"
            >
              Get Started Now
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PressReleases;
