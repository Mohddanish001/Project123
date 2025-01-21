import React from "react";

const BlogAndArticle = () => {
  return (
    <div className="min-h-screen mt-10 py-10 px-4 md:px-8 font-josefin">
      <div className="max-w-7xl mx-auto rounded-md px-24 py-10">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
          <div className="flex-1">
            <h1 className="text-5xl font-bold text-black mb-4">
              Blog & Articles Writing
            </h1>
            <p className="text-black text-justify text-lg">
              Creating informative, engaging, and shareable blog content that
              resonates with readers while promoting a brand or providing
              valuable insights.
            </p>
          </div>
        </div>

        {/* What We Offer Section */}
        <div className="mb-10 px-10">
          <div className="mb-6">
            <h2 className="text-gray-600">
              <span className="text-black text-xl font-bold">
                Regular Blog Post Writing:
              </span>
            </h2>
            <p>
              Providing a consistent blog that is also informative and
              entertaining to keep the readers engaged and connected.
            </p>
          </div>
          <div className="mb-6">
            <h2 className="text-gray-600">
              <span className="text-black text-xl font-bold">
                Engaging Blog Posts and Articles:
              </span>
            </h2>
            <p>
              Crafting compelling, audience-focused content to inform,
              entertain, and engage readers.
            </p>
          </div>
          <div className="mb-6">
            <h2 className="text-gray-600">
              <span className="text-black text-xl font-bold">
                Articles Content Writing:
              </span>
            </h2>
            <p>
              Writing well-researched and thought-provoking articles that sync
              with the objective defined by the specific field or area.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-gray-600">
              <span className="text-black text-xl font-bold">
                Industry-Related Posts:
              </span>
            </h2>
            <p>
              Create super-specific content to become a thought leader and thus
              engage precisely the audience you have in mind.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-gray-600">
              <span className="text-black text-xl font-bold">
                Product & Reviews:
              </span>
            </h2>
            <p>
              Creating informative and valuable descriptions for consumers and
              fair and unbiased reviews intending to impact their purchasing
              decisions.
            </p>
          </div>
          <div className="mb-6">
            <h2 className="text-gray-600">
              <span className="text-black text-xl font-bold">
                Guest Posts:
              </span>
            </h2>
            <p>
              Produce high-quality content that will be published on other
              platforms to get more visibility and more links.
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

export default BlogAndArticle;
