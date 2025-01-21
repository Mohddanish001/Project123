import React from "react";

const AdContentCreation = () => {
  return (
    <div className="min-h-screen py-10 px-4 md:px-8 mt-10">
      <div className="max-w-7xl mx-auto rounded-md p-6 bg-white shadow-md">

        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Maximize Your ROI with Expert Ad Content Creation
            </h1>
            <p className="text-gray-600 text-lg">
              Our Ad Content Creation services provide attention-grabbing copy and visuals that drive results. We specialize in the creation of persuasive ad copy, video scripts, and graphics for use on advertising mediums like Google Ads, Facebook, Instagram, LinkedIn, and more.
            </p>
          </div>
          <div className="flex-1">
            <img
              src="https://via.placeholder.com/600x400"
              alt="Ad Content Creation"
              className="w-full h-auto rounded-md shadow-md"
            />
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-10">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Our Ad Content Creation Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service Card 1 */}
            <div className="bg-gray-50 shadow-md rounded-md p-4">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Ad Copywriting"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                Ad Copywriting (PPC, Social Media, Display Ads)
              </h3>
              <p className="text-gray-600">
                Writing persuasive ad copies for PPC campaigns, social media advertising, and display advertisements to drive leads and conversions.
              </p>
            </div>

            {/* Service Card 2 */}
            <div className="bg-gray-50 shadow-md rounded-md p-4">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Video Ad Scripts"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                Video Ad Script Writing
              </h3>
              <p className="text-gray-600">
                Crafting compelling video scripts that attract viewers and help sell products with the power of advertisements.
              </p>
            </div>

            {/* Service Card 3 */}
            <div className="bg-gray-50 shadow-md rounded-md p-4">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Graphic Design"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                Graphic Design for Ads (Social Media Graphics, Banners)
              </h3>
              <p className="text-gray-600">
                Creating compelling graphics for social media posts, banners, and ads to encourage audience engagement.
              </p>
            </div>

            {/* Service Card 4 */}
            <div className="bg-gray-50 shadow-md rounded-md p-4">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Product Promotion Videos"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                Product Promotion Videos and Reels
              </h3>
              <p className="text-gray-600">
                Short, impactful videos and reels showcasing product features to enhance brand visibility and sales.
              </p>
            </div>

            {/* Service Card 5 */}
            <div className="bg-gray-50 shadow-md rounded-md p-4">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Carousel Ads"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                Carousel and Interactive Ad Content
              </h3>
              <p className="text-gray-600">
                Developing interactive carousel ads and dynamic content that fosters audience engagement and storytelling.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-10">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Why Choose Us for Ad Content Creation?
          </h2>
          <p className="text-gray-600 mb-4">
            We create ads that not only grab attention but also convert. Here's why businesses trust us for ad content creation:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Customized ad strategies tailored to your target audience.</li>
            <li>Engaging visuals and compelling ad copy for maximum ROI.</li>
            <li>Expertise in crafting content for various advertising platforms.</li>
            <li>Focus on delivering measurable results and boosting conversions.</li>
            <li>Timely delivery and consistent quality across all ad formats.</li>
          </ul>
        </div>

        {/* Call-to-Action */}
        <div className="text-center bg-[#0e6938] text-white py-8 px-4 rounded-md shadow-md">
          <h2 className="text-3xl font-bold mb-2">Let's Create Ads That Work!</h2>
          <p className="text-lg mb-6">
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
