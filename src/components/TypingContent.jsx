import React from "react";
import Typewriter from "typewriter-effect";
import InfoSection from "./InfoSection";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
// import TextSlider from "./TextSlider";

export const TypingContent = () => {
  return (
    <>
      <div
        className="flex bg-[#F7F7F7] flex-col items-center justify-center px-4 md:px-8 lg:px-16 py-32 
             bg-[url('newbg.jpeg')]  bg-center bg-no-repeat"
      >
        <h1 className="text-3xl md:text-4xl lg:text-7xl font-josefin font-bold text-black mb-6 text-center">
          We do content writing services for
        </h1>

        <div className="text-xl md:text-2xl lg:text-3xl bg-gradient-to-r from-[#DB7EEC] to-[#42175B] bg-clip-text text-transparent font-medium text-center mb-6">
          <Typewriter
            options={{
              strings: [
                "SEO-friendly Content",
                "Product Copywriting",
                "Social Media Content",
                "Copywriting for Ads",
                "Ebooks & Reviews",
              ],
              autoStart: true,
              loop: true,
              delay: 30,
              deleteSpeed: 30,
            }}
          />
        </div>

        <p className="text-sm md:text-base lg:text-lg font-josefin text-black text-center mb-8 px-4 md:px-16 lg:px-32">
          Create content for your blog, social media, website, and more! with{" "}
          <br />
          freelancers, marketing teams & agencies.
        </p>
  <Link
                  to="/contact">
        <button
          className="px-6 py-3 flex items-center justify-between gap-2 text-white font-bold text-sm md:text-base lg:text-lg rounded-full 
             bg-gradient-to-r from-[#DB7EEC] to-[#42175B]
             hover:bg-gradient-to-r hover:from-[#42175B] hover:to-[#DB7EEC]
             transition-all duration-300 group"
        >
          Get Started
          <FaLongArrowAltRight className="transform transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
        </button>
        </Link>
      </div>

      <section className="p-6 bg-black">
        <div className="flex items-center justify-center mb-8 px-4 md:px-12 lg:px-40">
          <div className="flex-1 h-[1px] bg-white"></div>
          <h1 className="text-lg md:text-xl lg:text-2xl text-white font-josefin mx-4 text-center">
            Our{" "}
            <span className="font-bold text-xl md:text-2xl lg:text-3xl">
              3-Step
            </span>{" "}
            Content Writing Process
          </h1>
          <div className="flex-1 h-[1px] bg-white"></div>
        </div>

        <div className="grid grid-cols-1 gap-6 px-4 sm:px-10 md:px-16 lg:px-30 md:grid-cols-3">
          <div className="p-6 bg-white rounded-3xl shadow-[0_4px_15px_rgba(255,255,255,0.5)]">
            <h2 className="text-lg md:text-xl font-josefin mb-4 text-center text-[#42175B]">
              1. Discovery & Strategy
            </h2>
            <p className="text-gray-700 font-josefin text-center">
              We begin by understanding your goals, audience, and brand voice.
              Through consultations and research, we develop a tailored strategy
              to ensure your content speaks directly to your target market.
            </p>
          </div>

          <div className="p-6 bg-white rounded-3xl shadow-[0_4px_15px_rgba(255,255,255,0.5)]">
            <h2 className="text-lg md:text-xl font-josefin mb-4 text-center text-[#42175B]">
              2. Expert Writing & Optimization
            </h2>
            <p className="text-gray-700 font-josefin text-center">
              Our skilled writers craft high-quality content, whether blog
              posts, website copy, or product descriptions. We'll make sure your
              content is SEO-friendly, engaging, and aligned with your business
              objectives.
            </p>
          </div>

          <div className="p-6 bg-white rounded-3xl shadow-[0_4px_15px_rgba(255,255,255,0.5)]">
            <h2 className="text-lg md:text-xl font-josefin mb-4 text-center text-[#42175B]">
              3. Review & Delivery
            </h2>
            <p className="text-gray-700 font-josefin text-center">
              Once the content is created, we review it thoroughly for accuracy,
              tone, and readability. After incorporating your feedback, we
              deliver the polished content on time and are ready to drive
              results.
            </p>
          </div>
        </div>

        <h1 className="text-white font-quicksand text-lg sm:text-xl md:text-2xl text-center py-10">
          <span className="font-bold font-quicksand">47,000++</span> clients
          trust us for high-quality, results-driven content
        </h1>

        <div className="flex justify-center px-4 md:px-20 lg:px-40">
          <img
            className="w-full max-w-[15rem] sm:max-w-[20rem] md:max-w-[25rem] lg:max-w-[30rem]"
            src="Capture-removebg-preview (1).png"
            alt="Content Writing Process"
          />
        </div>
      </section>

      <InfoSection />
    </>
  );
};
