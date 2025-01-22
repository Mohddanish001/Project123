import React from "react";

const ContentEditing = () => {
  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto rounded-md px-6 sm:px-8 md:px-12 lg:px-24 py-10 bg-white shadow-md">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
              Content Editing and Error-free.
            </h1>
            <p className="text-black text-base sm:text-lg text-justify">
              Refining and enhancing existing content by ensuring it is
              error-free, well-structured, and grammatically correct.
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-10 px-2 sm:px-4 md:px-8 text-justify">
          {[
            {
              title: "Grammar and Spelling Checks",
              description:
                "We meticulously review every content we receive to recognize all grammatical, punctuation, and spelling flaws to guarantee the correct content and ensure that your writing is serene and correct. We are also improving the quality of your writing so that it becomes more readable, fluent, and coherent. Also, we dry-wash and refine it. Alongside this, we shape the space for you to improve your writing and make it more engaging, clear, and impactful, thus enabling you to align with your brand voice.",
            },
            {
              title: "Content Polishing",
              description:
                "The content polishing process, possibly the deep-level reconstructions of text materials like paragraphs and sentences, is executed with the final goal of enhancing the intention of the holder of the information. We are here to ensure it is engaging, clear, and impactful, linking with your brand voice. ",
            },
            {
              title: "Rewriting for Clarity and Engagement",
              description:
                " We provide our thorough service to you to rewrite certain parts of your content in order to make it more straightforward, more engaging, and in a way that it is more concise. This service is particularly suited to simplifying complex ideas, improving sentence structure, and writing engaging content that arrests the audience's attention.",
            },
            {
              title: "Formatting and Structuring Content",
              description:
                " Moreover, as well, we ensure that the visualization of your content is the uppermost one by giving your content the right organization and form. This means we have accurately adjusted the fields, subfields, paragraphs, bullet points, and other elements in order to get a logical and interesting flow of users from one point to another.",
            },
          ].map((feature, index) => (
            <div key={index} className="mb-6">
              <h2 className="text-lg sm:text-xl text-black font-bold mb-2">
                {feature.title}
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call-to-Action Section */}
        <div className="p-4 sm:p-6 md:p-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4  bg-gradient-to-r from-[#DB7EEC] to-[#42175B]  text-white py-6 sm:py-8 md:py-10 px-6 sm:px-10 md:px-16 lg:px-28 rounded-md shadow-md">
            <h2 className="text-lg sm:text-2xl md:text-3xl text-center md:text-start font-josefin">
              <span className="font-bold">Are you looking for </span>
              <br className="hidden md:block" /> personalized assistance
            </h2>
            <button
              className="mt-4 md:mt-0 bg-white  bg-gradient-to-r from-[#DB7EEC] to-[#42175B] font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-md hover:bg-gray-100 transitionhover:bg-gradient-to-r hover:from-[#42175B] hover:to-[#DB7EEC]
                   transition-all duration-300"
            >
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentEditing;
