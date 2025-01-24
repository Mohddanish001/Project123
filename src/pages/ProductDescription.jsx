import React from 'react';
import { Link } from 'react-router-dom';

const ProductDescription = () => {
  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto rounded-md px-6 sm:px-8 md:px-12 lg:px-24 py-10 bg-white shadow-md">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-josefin font-bold text-black mb-4">
              Product Descriptions
            </h1>
            <p className="text-black font-josefin text-base sm:text-lg text-justify">
              Crafting compelling product descriptions highlighting key features,
              benefits, and value propositions to increase sales.
            </p>
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-10 px-2 sm:px-4 md:px-8 text-justify">
          {[
            {
              title: 'E-commerce Product Descriptions',
              description:
                'As experts in the field, we create compelling and informative product descriptions that spotlight the features, benefits, and unique selling points of your products. The descriptions are intended to attract and convert customers, whether they utilize SEO-friendly keywords. ',
            },
            {
              title: 'Catalog Descriptions',
              description:
                'Our catalog descriptions are brief, consistent, and captivating and are the first step to looking forward to your product offerings. They are customized, making the users’ browsing experience both forceful and fun, thus tempting them to go deep into your catalog. ',
            },
            {
              title: 'Custom Product Copywriting',
              description:
                ' This product-specific service produces a unique copy that reflects your brand’s tone and message. The piece is intended to be catchy, hit the mark with the target audience, and still cater to their unique wants and preferences.',
            },
            {
              title: 'Guidelines and Manuals',
              description:
                'We produce detailed guides and manuals that will guide your clients on using your products most effectively and thus help them better understand a product. These are direct and simple, well-arranged, and can be used effectively by the users to ensure high satisfaction and thus reduce customer support.',
            },
          ].map((service, index) => (
            <div key={index} className="mb-6">
              <h2 className="text-lg sm:text-xl text-left text-black font-josefin font-bold mb-2">
                {service.title}:
              </h2>
              <p className="text-gray-600 font-josefin text-justify text-sm sm:text-base">
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
              className="mt-4 md:mt-0 bg-white font-josefin bg-gradient-to-r from-[#DB7EEC] to-[#42175B] font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-md hover:bg-gray-100 transitionhover:bg-gradient-to-r hover:from-[#42175B] hover:to-[#DB7EEC]
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

export default ProductDescription;
