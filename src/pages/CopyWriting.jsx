import React from "react";

const CopyWriting = () => {
  return (
    <div className="min-h-screen mt-10    py-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto rounded-md px-24 py-10">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
          <div className="flex-1">
            <h1 className="text-5xl font-bold  text-black mb-4">
              Copywriting for Ads.
            </h1>
            <p className="text-black font-josefin text-justify text-lg">
              Writing attention-grabbing ad copy for both online and offline
              advertising platforms.
            </p>
          </div>
        </div>

        <div className="mb-10 px-10">
          <div className="mb-6">
            <h2 className="text-gray-600  ">
              <span className="text-black text-xl font-bold">
                Google Ads Copy:-
              </span>
            </h2>
            <p>
              Write ad copies that will drive more clicks and conversions in
              Google Ads by using target ad copies with rich keywords.
            </p>
          </div>
          <div className="mb-6">
            <h2 className="text-gray-600 ">
              <span className="text-black text-xl font-bold">
                Social Media Ad Copy:-
              </span>
            </h2>
            <p>
              {" "}
              Post ads with captivating and platform-specific content to engage
              social media audiences.{" "}
            </p>
          </div>
          <div className="mb-6">
            {" "}
            <h2 className="text-gray-600  ">
              <span className="text-black text-xl font-bold">
                Display Ads:-
              </span>
            </h2>
            <p>
              Create visually appealing and persuasive ad content that will be a
              great source of attraction across websites.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-gray-600 ">
              <span className="text-black text-xl font-bold">Banner Ads:-</span>
            </h2>
            <p>
              Writing powerful banner ads that can improve brand identity on the
              web and increase customer engagement.
            </p>
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="text-center bg-[#0e6938] text-white py-8 px-4 rounded-md shadow-md">
          <h2 className="text-3xl font-bold mb-2">
            Grow Your Business with Website Content Writing
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

export default CopyWriting;
