import React from "react";

const SocialMediaContent = () => {
  return (
    <div className="min-h-screen mt-10    py-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto rounded-md px-24 py-10">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
          <div className="flex-1">
            <h1 className="text-5xl font-bold  text-black mb-4">
              Social Media Content.
            </h1>
            <p className="text-black font-josefin text-justify text-lg">
              Writing engaging and shareable content tailored for social media
              platforms to boost engagement and brand awareness.
            </p>
          </div>
        </div>

        <div className="mb-10 px-10">
          <div className="mb-6">
            <h2 className="text-gray-600  ">
              <span className="text-black text-xl font-bold">
                Facebook, Twitter, LinkedIn, and Instagram Posts:-
              </span>
            </h2>
            <p>
              Creating content for each platform to interact with the audience
              and make your company grow.
            </p>
          </div>
          <div className="mb-6">
            <h2 className="text-gray-600 ">
              <span className="text-black text-xl font-bold">
                Social Media Campaigns:-
              </span>
            </h2>
            <p>
              {" "}
              Build and execute campaigns strategically to raise brand
              recognition and commitment.{" "}
            </p>
          </div>
          <div className="mb-6">
            {" "}
            <h2 className="text-gray-600  ">
              <span className="text-black text-xl font-bold">
                Hashtag Research:-
              </span>
            </h2>
            <p>
              Recognizing trendy & pertinent tags using hashtags to increase the
              visibility and reach of the content.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-gray-600 ">
              <span className="text-black text-xl font-bold">
                Community Management:-
              </span>
            </h2>
            <p>
              Creating and keeping close-knit online communities to project the
              feelings of brand loyalty and engagement.
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

export default SocialMediaContent;
