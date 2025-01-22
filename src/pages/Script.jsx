import React from "react";
import { Link } from "react-router-dom";

const Script = () => {
  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto rounded-md px-6 sm:px-8 md:px-12 lg:px-24 py-10 bg-white shadow-md">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
              Script & Content Marketing
            </h1>
            <p className="text-black font-josefin text-justify text-base sm:text-lg">
              Writing scripts for video, TV, or radio commercials, as well as
              YouTube and explainer videos.
            </p>
          </div>
        </div>

        {/* Service Sections */}
        <div className="mb-10 px-2 sm:px-4 md:px-8 text-justify">
          {[
            {
              title: "Script Writing",
              description:
                " We write different video clips to give the audience a complete understanding of the mood. The scripts are catered to informing, persuading, or entertaining you. ",
            },
            {
              title: "YouTube Video Description",
              description:
                "Our YouTube video descriptions are so great because they are tailored to maximize views and engagement. We use suitable keywords and give some obvious directions and a hint, making the videos more attractive to the users.",
            },
            {
              title: " Marketing Funnels",
              description:
                "One of the ways we recognize and lead a customer through the conversion process is by producing unique videos that fall into four categories or stages. Those videos are supposed to be appealing, informative, and persuasive to the viewers throughout the customer journey.",
            },
            {
              title: "Influencer Strategy",
              description:
                "The scope of our influencer content has been to come together with influencers to create mutually beneficial and particularly interesting material that speaks to their fan base and promotes your products and services. This content is always personal and genuine; therefore, success in influencing brand awareness and trust through the campaign is guaranteed.",
            },
            {
              title: "Video Content Strategy",
              description:
                " We specialize in developing video marketing strategies to advertise your products, services, and brand. We are committed to creating captivating videos, making them SEO-friendly, and using various social media platforms to spread the word and, thus, increase our sales.",
            },
          ].map((service, index) => (
            <div key={index} className="mb-6">
              <h2 className="text-lg sm:text-xl text-black font-bold mb-2">
                {service.title}:
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Call-to-Action Section */}
        <div className="p-4 sm:p-6 md:p-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4  bg-gradient-to-r from-[#DB7EEC] to-[#42175B]  text-white py-6 sm:py-8 md:py-10 px-6 sm:px-10 md:px-16 lg:px-28 rounded-md shadow-md">
            <h2 className="text-lg sm:text-2xl md:text-3xl text-center md:text-start font-josefin">
              <span className="font-bold">Are you looking for </span>
              <br className="hidden md:block" /> personalized assistance
            </h2>
            <Link
                  to="/contact">
            <button
              className="mt-4 md:mt-0 bg-white  bg-gradient-to-r from-[#DB7EEC] to-[#42175B] font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-md hover:bg-gray-100 transitionhover:bg-gradient-to-r hover:from-[#42175B] hover:to-[#DB7EEC]
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

export default Script;
