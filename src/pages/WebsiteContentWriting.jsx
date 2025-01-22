import React from "react";
import { Link } from "react-router-dom";

const WebsiteContentWriting = () => {
  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto rounded-md px-6 sm:px-8 md:px-12 lg:px-24 py-10 bg-white shadow-md">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
              Website Content Writing
            </h1>
            <p className="text-black font-josefin text-justify text-base sm:text-lg">
              Writing persuasive and precise copy for websites that engages visitors and drives conversions.
            </p>
          </div>
        </div>

        {/* Service Sections */}
        <div className="mb-10 px-2 sm:px-4 md:px-8 text-justify">
          {[
            {
              title: "Home Page Content",
              description: " We write amazing home page content that not only presents your brand in an impactful way but also hooks the readers from the first sentence to the following pages. Whether it is an intricate value proposition, or a story getting people involved, visitors will accept the invitation for further adventures and perhaps become customers, with easy navigation and the hospitality factor playing a critical role.",
            },
            {
              title: "About Us Pages",
              description: " Our About Us pages are customized according to how you want your brand to be portrayed. They are a way of your brand’s story, mission, vision, and values that would nicely suit the audience of your choice. The primary goal is to establish trust, get people to feel connected, and explain your expertise and purpose. ",
            },
            {
              title: "The Service/Product Descriptions",
              description:
                " We write comprehensive, persuasive, and SEO-friendly descriptions for your services or products. That way, you can use them to enumerate the special features, benefits, and value they have for your customers, and after choosing, they are more likely to convert. ",
            },
            {
              title: "Landing Pages",
              description:
                " We create landing page content heavily focused on different leading causes and effects, for example, the acquisition of leads, the promotion of a product, or the collection of sign-ups for an event. The content is developed around the action and is tweaked to lure more customers while complementing your marketing campaigns. ",
            },
            {
              title: "FAQs",
              description:
                "Our FAQs are well-structured and closely related to the problems that most customers experience. This copy enriches the user experience, develops customer confidence, and fights the customer's doubts, proactively leading the customer to the sale.",
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

export default WebsiteContentWriting;
