import React from "react";

const Script = () => {
  return (
    <div className="min-h-screen mt-10    py-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto rounded-md px-24 py-10">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
          <div className="flex-1">
            <h1 className="text-5xl font-bold  text-black mb-4">
              Script & Content Marketing.
            </h1>
            <p className="text-black font-josefin text-justify text-lg">
              Writing scripts for video, TV, or radio commercials, as well as
              YouTube and explainer videos.
            </p>
          </div>
        </div>

        <div className="mb-10 px-10 text-justify">
          <div className="mb-6">
            <h2 className="text-gray-600  ">
              <span className="text-black text-xl font-bold">
                Script Writing:-
              </span>
            </h2>
            <p className="text-justify">
              The activity of scripting presentations that help the video
              content gain the maximum viewer engagement and bring up the
              attitude of success.
            </p>
          </div>
          <div className="mb-6">
            <h2 className="text-gray-600 ">
              <span className="text-black text-xl font-bold">
                YouTube Video Description:-
              </span>
            </h2>
            <p>
              {" "}
              The creation of search-engine- and informative-rich,
              attention-grabbing descriptions to promote the visibility of
              YouTube videos.{" "}
            </p>
          </div>
          <div className="mb-6">
            {" "}
            <h2 className="text-gray-600  ">
              <span className="text-black text-xl font-bold">
                Funnel Marketing:-
              </span>
            </h2>
            <p>
              Creating innovative strategies, especially video-based funnels,
              greatly influencing the client journey and lead generation.{" "}
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-gray-600 ">
              <span className="text-black text-xl font-bold">
                Influencer Strategy:-
              </span>
            </h2>
            <p>
              Weave custom stories that are interesting to the consumers we
              associate with brands and that come with a call to watch be it now
              or then. A goal of such online interactions can be sales or brand
              awareness.
            </p>
          </div>
          <div className="mb-6">
            <h2 className="text-gray-600 ">
              <span className="text-black text-xl font-bold">
                Video Content Strategy:-
              </span>
            </h2>
            <p>
              Creating videos to reach the public about the company and get more
              customers also widens the impact.
            </p>
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="flex bg-[#0e6938] text-white py-8  px-10 rounded-md shadow-md justify-between items-center">
        <h2 className="text-3xl text-start font-josefin  ">
            <span className="font-bold">Are you looking for </span>
            <br /> personalized assistance
          </h2>
          <button className="bg-white text-[#0e6938] font-bold px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition">
            Get Started Now 
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default Script;
