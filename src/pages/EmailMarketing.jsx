import React from 'react'

const EmailMarketing = () => {
  return (
    <div className="min-h-screen mt-10    py-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto rounded-md px-24 py-10">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
          <div className="flex-1">
            <h1 className="text-5xl font-bold  text-black mb-4">
            Email Marketing Copy.
            </h1>
            <p className="text-black font-josefin text-justify text-lg">
            Writing persuasive email copy for newsletters, promotions, and follow-up sequences that prompt action from recipients.

            </p>
          </div>
        </div>

        <div className="mb-10 px-10">
          <div className="mb-6">
            <h2 className="text-gray-600  ">
              <span className="text-black text-xl font-bold">
              Promotional Emails:-
              </span>
            </h2>
            <p>
            To promote sales and bring in new clients, persuading emails are made out to customers.

            </p>
          </div>
          <div className="mb-6">
            <h2 className="text-gray-600 ">
              <span className="text-black text-xl font-bold">
              Newsletter Content:-
              </span>
            </h2>
            <p>
              {" "}
              Creating newsletters that are not only fascinating but also helpful can be a great way to retain your audience and keep them in touch. {" "}
            </p>
          </div>
          <div className="mb-6">
            {" "}
            <h2 className="text-gray-600  ">
              <span className="text-black text-xl font-bold">
              Welcome Sequences:-
              </span>
            </h2>
            <p>
            Structuring and uploading a seriously underpriced greet program, which is best for newcomers, is a good way of getting their names and addresses. 
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-gray-600 ">
              <span className="text-black text-xl font-bold">
              Product Launch Emails:-
              </span>
            </h2>
            <p>
            The emails written should be impactful enough to generate the desired excitement and drive conversions by introducing new products to the market.

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

export default EmailMarketing
