import React from "react";

const ContentEditing = () => {
  return (
    <div className="min-h-screen mt-10    py-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto rounded-md px-24 py-10">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
          <div className="flex-1">
            <h1 className="text-5xl font-bold  text-black mb-4">
              Content Editing and Error-free.
            </h1>
            <p className="text-black font-josefin text-justify text-lg">
              Refining and enhancing existing content by ensuring it is
              error-free, well-structured, and grammatically correct.
            </p>
          </div>
        </div>

        <div className="mb-10 px-10 text-justify">
          <div className="mb-6">
            <h2 className="text-gray-600  ">
              <span className="text-black text-xl font-bold">
                Grammar and Spelling Checks:-
              </span>
            </h2>
            <p className="text-justify">
              Ensure written material is error-free by checking the grammar and
              spelling errors.
            </p>
          </div>
          <div className="mb-6">
            <h2 className="text-gray-600 ">
              <span className="text-black text-xl font-bold">
                Content Polishing:-
              </span>
            </h2>
            <p>
              {" "}
              This is the process of improving and perfecting content,
              ultimately leading to more clarity, better retention, and a
              professional touch.{" "}
            </p>
          </div>
          <div className="mb-6">
            {" "}
            <h2 className="text-gray-600  ">
              <span className="text-black text-xl font-bold">
                Rewriting for Clarity and Engagement:-
              </span>
            </h2>
            <p>
              Throwing in new content to answer unknown questions and grab
              audiences' attention.{" "}
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-gray-600 ">
              <span className="text-black text-xl font-bold">
                Formatting and Structuring Content:-
              </span>
            </h2>
            <p>
              With proper formatting, you can ensure an effective presentation
              and improve the readability of the content.
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

export default ContentEditing;
