import React from 'react'

const ProductDescription = () => {
  return (
    <div className="min-h-screen mt-10    py-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto rounded-md px-24 py-10">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
          <div className="flex-1">
            <h1 className="text-5xl font-bold  text-black mb-4">
            Product Descriptions.

            </h1>
            <p className="text-black font-josefin text-justify text-lg">
            Crafting compelling product descriptions highlighting key features, benefits, and value propositions to increase sales.

            </p>
          </div>
        </div>

        <div className="mb-10 px-10">
          <div className="mb-6">
            <h2 className="text-gray-600  ">
              <span className="text-black text-xl font-bold">
              E-commerce Product Descriptions:-
              </span>
            </h2>
            <p>
            Producing engaging copywriting with enough of SEO mind to expound product usage and functions.

            </p>
          </div>
          <div className="mb-6">
            <h2 className="text-gray-600 ">
              <span className="text-black text-xl font-bold">
              Catalog Descriptions:-
              </span>
            </h2>
            <p>
              {" "}
              Drafting short, catchy, and engaging paragraphs that market the product perfectly in the catalogs. 
              {" "}
            </p>
          </div>
          <div className="mb-6">
            {" "}
            <h2 className="text-gray-600  ">
              <span className="text-black text-xl font-bold">
              Custom Product Copywriting:-
              </span>
            </h2>
            <p>
            Composing unique and original content that matches the customer's brand and addresses their needs.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-gray-600 ">
              <span className="text-black text-xl font-bold">Guidelines and Manuals:-</span>
            </h2>
            <p>
            Providing simple, user-friendly instructions and manuals for product usage and troubleshooting.
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
  )
}

export default ProductDescription
