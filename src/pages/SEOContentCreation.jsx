import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const SEOContentCreation = () => {
  return (
    <>
    <div className="min-h-screen py-10 px-4 sm:px-6 md:px-8">
    <Helmet>
        <title>SEO Friendly Content Writing Services</title>
        <meta
          name="description"
          content="Get SEO-Friendly Content Writing Services to enhance your rankings. Drive traffic with engaging, optimized content tailored to your audience. "
        />
        <meta name="keywords" content="react, meta tags, helmet async" />
      </Helmet>
      <div className="max-w-7xl mx-auto rounded-md px-6 sm:px-8 md:px-12 lg:px-24 py-10 bg-white shadow-md">
        {/* Hero Section */}
        <div className="flex flex-col lg:mt-20 md:flex-row items-center gap-8 mb-10">
          <div className="flex-1">
            <h1 className="text-3xl font-josefin sm:text-4xl md:text-5xl font-bold text-black mb-4">
              SEO-friendly Content Writing
            </h1>
            <p className="text-black font-josefin  text-justify text-base sm:text-lg">
              This type of writing focuses on creating content optimized for
              search engines, ensuring higher rankings on search engine results
              pages (SERPs). It includes the use of relevant keywords, meta
              tags, and a strategic approach to content structure.
            </p>
          </div>
        </div>

        {/* Service Sections */}
        <div className="mb-10 px-2 sm:px-4 md:px-8 ">
          {[
            {
              title: "Keyword Research and Integration",
              description:
                "This service is related to determining the right keywords for your business's promotional activity, and these words are then naturally joined to your content. The point is to find a more appealing position for your company in the search engines, thus getting more quality traffic, and, of course, your content will not only be relevant but will also address the issues resonating with the audience. ",
            },
            {
              title: "Engaging Blog Posts and Articles",
              description:
                " Our blog posts and articles are compelling and designed to be interesting, provide a place where readers can be concerned with them, and go to a site of your business. Our focus lies in enabling the companies to reach their audiences with the help of storytellers, who are the leaders in the industry, and the best content specialists in the market.",
            },
            {
              title: "Localized SEO Content",
              description:
                " Our localized SEO content serves as a tool for the mountain of search engines to find your business effectively and then unite it with a local audience. First, the content is location-based; it uses particular keywords, and part of the content references the cultural aspect and specifies search preferences for a location.",
            },
            {
              title: "Content Audits and Improvements",
              description:
                "This service does not just look at the content you have carefully but also tries to figure out, optimize, and produce pieces that have high quality. The process includes evaluating how the content is performing, updating content that has gone out of date, and justifying the content under the leading marketing area. ",
            },
            {
              title: "Website Content Optimization",
              description:
                " We make changes and try to make it look more appealing to the audience, increase the website’s visibility, and thus increase our SEO performance and user engagement. For better UX, we not only perfect the headlines and meta descriptions but also make sure that internal links work well and use structural scalability to ease UX.",
            },
          ].map((service, index) => (
            <div key={index} className="mb-6">
              <h2 className="text-lg font-josefin sm:text-xl text-black font-bold mb-2">
                {service.title}:
              </h2>
              <p className="text-gray-600 font-josefin text-justify text-sm sm:text-base">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call-to-Action Section */}
        <div className="text-center  bg-gradient-to-r from-[#DB7EEC] to-[#42175B] text-white py-8 px-4 rounded-md shadow-md">
          <h2 className="text-3xl font-josefin font-bold mb-2">
            Grow Your Business with SEO Content
          </h2>
          <p className="text-lg mb-6 text-justify font-josefin">
            Ready to dominate search engine results and grow your business with
            expertly crafted SEO content? Contact us today!
          </p>
          <Link
                  to="/contact">
          <button className=" font-bold font-josefin px-6 py-3 rounded-md shadow-md hover:bg-gray-100 
           bg-gradient-to-r from-[#DB7EEC] to-[#42175B]
   hover:bg-gradient-to-r hover:from-[#42175B] hover:to-[#DB7EEC]
   transition-all duration-300 group">
            Get Started Now
          </button>
          </Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default SEOContentCreation;
