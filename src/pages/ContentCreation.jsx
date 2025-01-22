import React from "react";

const AdContentCreation = () => {
  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <div className="max-w-7xl mx-auto rounded-md p-6 bg-white shadow-md">

        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center gap-8 mb-10">
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Maximize Your ROI with Expert Ad Content Creation
            </h1>
            <p className="text-gray-600 text-base sm:text-lg">
              Our Ad Content Creation services provide attention-grabbing copy and visuals that drive results. We specialize in the creation of persuasive ad copy, video scripts, and graphics for use on advertising mediums like Google Ads, Facebook, Instagram, LinkedIn, and more.
            </p>
          </div>
          <div className="flex-1">
            <img
              src="https://via.placeholder.com/600x400"
              alt="Ad Content Creation"
              className="w-full max-w-sm sm:max-w-md md:max-w-lg h-auto rounded-md shadow-md"
            />
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
            Our Ad Content Creation Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service Card */}
            {[
              {
                title: "Ad Copywriting (PPC, Social Media, Display Ads)",
                description:
                  "Writing persuasive ad copies for PPC campaigns, social media advertising, and display advertisements to drive leads and conversions.",
                image: "https://via.placeholder.com/300x200",
              },
              {
                title: "Video Ad Script Writing",
                description:
                  "Crafting compelling video scripts that attract viewers and help sell products with the power of advertisements.",
                image: "https://via.placeholder.com/300x200",
              },
              {
                title: "Graphic Design for Ads (Social Media Graphics, Banners)",
                description:
                  "Creating compelling graphics for social media posts, banners, and ads to encourage audience engagement.",
                image: "https://via.placeholder.com/300x200",
              },
              {
                title: "Product Promotion Videos and Reels",
                description:
                  "Short, impactful videos and reels showcasing product features to enhance brand visibility and sales.",
                image: "https://via.placeholder.com/300x200",
              },
              {
                title: "Carousel and Interactive Ad Content",
                description:
                  "Developing interactive carousel ads and dynamic content that fosters audience engagement and storytelling.",
                image: "https://via.placeholder.com/300x200",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 shadow-md rounded-md p-4 flex flex-col items-center"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base text-center">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
            Why Choose Us for Ad Content Creation?
          </h2>
          <p className="text-gray-600 mb-4 text-base sm:text-lg">
            We create ads that not only grab attention but also convert. Here's why businesses trust us for ad content creation:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 text-sm sm:text-base">
            <li>Customized ad strategies tailored to your target audience.</li>
            <li>Engaging visuals and compelling ad copy for maximum ROI.</li>
            <li>Expertise in crafting content for various advertising platforms.</li>
            <li>Focus on delivering measurable results and boosting conversions.</li>
            <li>Timely delivery and consistent quality across all ad formats.</li>
          </ul>
        </div>

        {/* Call-to-Action */}
        <div className="text-center bg-[#0e6938] text-white py-8 px-4 rounded-md shadow-md">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">
            Let's Create Ads That Work!
          </h2>
          <p className="text-base sm:text-lg mb-6">
            Ready to create attention-grabbing ads that convert? Contact us today to get started!
          </p>
          <button className="bg-white text-[#0e6938] font-bold px-6 py-3 rounded-md shadow-md hover:bg-gray-100 transition">
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdContentCreation;
