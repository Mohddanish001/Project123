import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const EmailMarketing = () => {
  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 md:px-8 lg:px-12">
       <Helmet>
        <title>Email Marketing Content Marketing  </title>
        <meta
          name="description"
          content="Boost your business with targeted email & content marketing strategies. Drive engagement, build loyalty, and achieve measurable growth today!"
        />
        <meta name="keywords" content="react, meta tags, helmet async" />
      </Helmet>
      <div className="max-w-7xl mx-auto rounded-md px-6 sm:px-8 md:px-12 lg:px-24 py-10 bg-white shadow-md">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
          <div className="flex-1">
            <h1 className="text-3xl font-josefin sm:text-4xl md:text-5xl font-bold text-black mb-4">
              Email Marketing Copy.
            </h1>
            <p className="text-black text-base sm:text-lg text-justify">
              Writing persuasive email copy for newsletters, promotions, and
              follow-up sequences that prompt action from recipients.
            </p>
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-10 px-2 sm:px-4 md:px-8 ">
          {[
            {
              title: "Promotional Emails",
              description:
                "We create captivating promotional emails to direct clients to your offers, discounts, or special deals. These emails are customized to boost sales, grow your business, and inform your audience about your most recent promotions. ",
            },
            {
              title: "Newsletter Content",
              description:
                "Our newsletter content is interesting, informative, and encompasses your audience's options. It is a customer relationship development, sharing news, and a vehicle for promoting your brand with regular communication and topics of meaning. ",
            },
            {
              title: "Welcome Sequences",
              description:
                "We plan to welcome new subscribers or customers with remarkable personalized welcome emails. These sequences aim to set a favorable first impression, introduce the brand, and encourage the person to engage with your products or services.",
            },
            {
              title: "Product Launch Emails",
              description:
                "Our product launch emails are tailored to arouse exhilaration and enthusiasm about your latest offerings. These emails present the major characteristics, advantages, and the things that differentiate the product, thus, they create the interest for the purchase and also contribute towards encouraging the sales.",
            },
          ].map((service, index) => (
            <div key={index} className="mb-6">
              <h2 className="text-lg sm:text-xl font-josefin text-black font-bold mb-2">
                {service.title}:
              </h2>
              <p className="text-gray-600 text-justify font-josefin text-sm sm:text-base">
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

export default EmailMarketing;
