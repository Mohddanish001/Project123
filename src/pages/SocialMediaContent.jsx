import React from "react";
// import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const SocialMediaContent = () => {
  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 md:px-8">
       {/* <Helmet>
        <title>Social Media Content Writing  
        </title>
        <meta
          name="description"
          content="Engage your audience with creative Social Media Content Writing. Boost brand presence with tailored, impactful, and shareable content."
        />
        <meta name="keywords" content="react, meta tags, helmet async" />
      </Helmet> */}
      <div className="max-w-7xl mx-auto rounded-md px-6 sm:px-8 md:px-12 lg:px-24 py-10 bg-white ">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
          <div className="flex-1">
            <h1 className="text-3xl font-josefin sm:text-4xl md:text-5xl font-bold text-black mb-4">
              Social Media Content
            </h1>
            <p className="text-black font-josefin text-justify text-base sm:text-lg">
              Writing engaging and shareable content tailored for social media platforms to boost engagement and brand awareness.
            </p>
          </div>
        </div>

        {/* Service Sections */}
        <div className="mb-10 px-2 sm:px-4 md:px-8 ">
          {[
            {
              title: "Facebook, Twitter, LinkedIn, and Instagram Posts",
              description:
                " We write interesting and specifically for each platform's audience in the best position to communicate with your audience. Be it informative, promotional, or entertaining, every post is customized to perform at its peak, whether on Facebook, Twitter, LinkedIn, or Instagram. ",
            },
            {
              title: "Social Media Campaigns",
              description:
                " Our social media campaigns are thematically composed to get the most from your marketing objectives, like brand awareness, traffic, and sales. We curate creative concepts, engaging content, and successful timelines for multi-platform campaigns.",
            },
            {
              title: "Hashtag Research",
              description:
                "We do in-depth hashtag research to get your industry's most relevant, popular, and high-performing hashtags. This way, your content will be easier to find, your audience will be more prominent, and you will interact more with them. ",
            },
            {
              title: "Community Management",
              description:
                "We take care of your social media communities by creating a hub where the interaction is fostered by replying to comments and messages as well as our brand maintaining a positive image. This service contributes to developing a loyal and active online community around your brand.",
            },
          ].map((service, index) => (
            <div key={index} className="mb-6">
              <h2 className="text-lg sm:text-xl font-josefin text-black font-bold mb-2">
                {service.title}:
              </h2>
              <p className="text-gray-600 text-sm font-josefin text-justify sm:text-base">{service.description}</p>
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

export default SocialMediaContent;
