import React from "react";

const SEOContentCreation = () => {
  return (
    <div className="min-h-screen mt-10    py-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto rounded-md px-24 py-10">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
          <div className="flex-1">
            <h1 className="text-5xl font-bold  text-black mb-4">
              SEO-friendly Content Writing.
            </h1>
            <p className="text-black font-josefin text-justify text-lg">
              This type of writing focuses on creating content optimized for
              search engines, ensuring higher rankings on search engine results
              pages (SERPs). It includes the use of relevant keywords, meta
              tags, and a strategic approach to content structure.
            </p>
          </div>
          {/* <div className="flex-1">
            <img
              src="/public/224.png"
              alt="SEO Content Creation"
              className="w-full h-auto rounded-md shadow-md"
            />
          </div> */}
        </div>

        {/* What We Offer Section */}
        {/* <div className="mb-10">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 shadow-md rounded-md p-4">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Keyword Research"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                Blog Posts Optimized for SEO
              </h3>
              <p className="text-gray-600">
                Developing blog posts that are best optimized for search with the practice of SEO to increase ranking and organic traffic.
              </p>
            </div>

            <div className="bg-gray-50 shadow-md rounded-md p-4">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Website Content"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                SEO-Optimized Website Content
              </h3>
              <p className="text-gray-600">
                Developing keyword-optimized website content using advanced techniques for better visibility on search engines.
              </p>
            </div>

            <div className="bg-gray-50 shadow-md rounded-md p-4">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Meta Titles"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                Meta Titles and Descriptions
              </h3>
              <p className="text-gray-600">
                Crafting engaging meta titles and descriptions to increase clicks and search rankings.
              </p>
            </div>

            <div className="bg-gray-50 shadow-md rounded-md p-4">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Link Building"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                Content for Link-Building and Guest Posting
              </h3>
              <p className="text-gray-600">
                Creating compelling content for guest posts to enhance domain authority and improve backlinks.
              </p>
            </div>
          </div>
        </div> */}

        <div className="mb-10 px-10">
          <div className="mb-6">
            <h2 className="text-gray-600  ">
              <span className="text-black text-xl font-bold">
                Keyword Research and Integration:-
              </span>
            </h2>
            <p>
              Identifying and seamlessly incorporating high-impact keywords to
              boost content visibility and search rankings.{" "}
            </p>
          </div>
          <div className="mb-6" >
            <h2 className="text-gray-600 ">
              <span className="text-black text-xl font-bold">
                Engaging Blog Posts and Articles:-
              </span>
            </h2>
            <p>
              {" "}
              Crafting compelling, audience-focused content to inform,
              entertain, and engage readers.{" "}
            </p>
          </div>
          <div className="mb-6">
            {" "}
            <h2 className="text-gray-600  ">
              <span className="text-black text-xl font-bold">
                Localized SEO Content:-
              </span>
            </h2>
            <p>
              Creating region-specific content tailored to enhance local search
              engine visibility and audience relevance.{" "}
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-gray-600 ">
              <span className="text-black text-xl font-bold">
                Content Audits and Improvements:-
              </span>
            </h2>
            <p>
              Analyzing and optimizing existing content to align with best
              practices and performance goals.{" "}
            </p>
          </div>

          <div className="mb-6">
            {" "}
            <h2 className="text-gray-600">
              <span className="text-black text-xl font-bold">
                Website Content Optimization:-
              </span>
            </h2>
            <p>
              {" "}
              Enhancing website content to improve user experience, readability,
              and search engine rankings.{" "}
            </p>
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="text-center bg-[#0e6938] text-white py-8 px-4 rounded-md shadow-md">
          <h2 className="text-3xl font-bold mb-2">
            Grow Your Business with SEO Content
          </h2>
          <p className="text-lg mb-6">
            Ready to dominate search engine results and grow your business with
            expertly crafted SEO content? Contact us today!
          </p>
          <button className="bg-white text-[#0e6938] font-bold px-6 py-3 rounded-md shadow-md hover:bg-gray-100 transition">
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SEOContentCreation;
