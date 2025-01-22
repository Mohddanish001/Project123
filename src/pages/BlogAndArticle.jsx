import React from "react";
import { Link } from "react-router-dom";

const BlogAndArticle = () => {
  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 md:px-8 font-josefin">
      <div className="max-w-7xl mx-auto rounded-md px-6 sm:px-8 md:px-12 lg:px-24 py-10 bg-white shadow-md">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
              Blog & Articles Writing
            </h1>
            <p className="text-black text-justify text-base sm:text-lg">
              Creating informative, engaging, and shareable blog content that resonates with readers while promoting a brand or providing valuable insights.
            </p>
          </div>
        </div>

        {/* What We Offer Section */}
        <div className="mb-10 px-2 sm:px-4 md:px-8 text-justify">
          {[
            {
              title: "Regular Blog Post Writing",
              description:
                " We give you a unique and high-quality blog post written in your voice and befitting your audience. These posts are solely made to make your website look fresh, captivate the readers, and increase your search engine rankings.",
            },
            {
              title: "Articles Content Writing",
              description:
                "This service is inclined to profound, educational, and thoroughly investigated articles that permit you to announce your capacity within your field. The articles are generated to assist your concerned readers, address customer’s issues, and introduce vital insights to the reader.",
            },
            // {
            //   title: "Articles Content Writing",
            //   description:
            //     "Writing well-researched and thought-provoking articles that sync with the objective defined by the specific field or area.",
            // },
            {
              title: "Industry-Related Posts",
              description:
                " We plant the seeds of creation linked to the industry trends, changes, etc., in your particular industry. Such articles are more than helpful in introducing your brand, making you an authority in a specific area, and putting your professional audience on the right topics.",
            },
            {
              title: "Product & Reviews",
              description:
                " Product and review news is a snapshot of your unique features, what your clients can get, and the various selling points at which you can be different. Reviews are tailored to spur a culture of trust, educate clients properly, and lead them to make wise decisions when buying products.",
            },
            {
              title: "Guest Posts",
              description:
                " We do it by posting over the internet, a technique to increase your brand's visibility and become a reliable voice on other platforms. The guest posts will focus on the publishing requirements and the benefits that the publishing site gets, such as where traffic going back to your website is generated, and the backlink quality is improved.",
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

export default BlogAndArticle;
