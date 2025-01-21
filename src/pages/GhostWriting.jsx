import React from "react";

const GhostWriting = () => {
  return (
    <div className="min-h-screen mt-10    py-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto rounded-md px-24 py-10">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
          <div className="flex-1">
            <h1 className="text-5xl font-bold  text-black mb-4">
              Ghostwriting.
            </h1>
            <p className="text-black font-josefin text-justify text-lg">
              Writing content for individuals or brands who wish to publish
              under their name without actually writing it themselves.
            </p>
          </div>
        </div>

        <div className="mb-10 px-10 text-justify">
          <div className="mb-6">
            <h2 className="text-gray-600  ">
              <span className="text-black text-xl font-bold">
                Biographies:-
              </span>
            </h2>
            <p className="text-justify">
              Let alone the attention of the readers, biographies are the
              stories of the lives of people described engagingly and accurately
              focused on the insights and accomplishments of the individual.
            </p>
          </div>
          <div className="mb-6">
            <h2 className="text-gray-600 ">
              <span className="text-black text-xl font-bold">
                eBooks Writing:-
              </span>
            </h2>
            <p>
              {" "}
              In a world that begs and brags about publishing digitally, eBooks
              writing is a significant piece of a commodity that is uplifting
              and engaging in a myriad of topics.{" "}
            </p>
          </div>
          <div className="mb-6">
            {" "}
            <h2 className="text-gray-600  ">
              <span className="text-black text-xl font-bold">
                Books Writing:-
              </span>
            </h2>
            <p>
              Every type of book is included in the genres. Technology, in the
              form of eBooks, has allowed authors to write short, powerful, and
              inspiring poetry, fiction, and non-fiction scripts, discourses,
              articles, and series to cater to the needs of their readers.{" "}
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-gray-600 ">
              <span className="text-black text-xl font-bold">Speeches:-</span>
            </h2>
            <p>
              Writing eloquent and compelling speeches that bring a person's
              thoughts and ideas forward to particular audiences is the job of
              speechwriters for events, conferences, and public speaking
              engagements.
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

export default GhostWriting;
