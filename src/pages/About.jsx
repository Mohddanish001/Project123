import React, { useEffect } from "react";
import { TiTick } from "react-icons/ti";
import "aos/dist/aos.css";
import AOS from "aos";

export const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 200,
    });
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen mt-20">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row gap-8 p-4">
          <div className="flex flex-col md:w-1/2 gap-8" data-aos="fade-down">
            <div>
              <img src="w1.png" alt="Illustration" className="rounded-md" />
            </div>
            <div className="px-4 md:px-10">
              {/* Points */}
              {[
                "We Create Premium Quality Content",
                "We Focus on Client’s Needs and Satisfaction",
                "We Deliver On Time",
              ].map((text, index) => (
                <h1
                  key={index}
                  className="flex items-center gap-2 text-base sm:text-md md:text-md lg:text-md mb-2"
                >
                  <span>
                    <TiTick className="border border-[#0e6938] bg-[#0e6938] h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 text-white rounded-full" />
                  </span>
                  {text}
                </h1>
              ))}
              <div className="mt-8 px-10">
                {/* <button className="bg-red-500 text-white px-6 py-2 font-semibold rounded-md">
                  Contact With Us
                </button> */}
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="md:w-1/2 px-4 md:px-10" data-aos="fade-up">
            <h1 className="text-xl font-bold mb-2">About Us</h1>
            <h2 className="text-5xl font-bold mb-4">
              We Create{" "}
              <span className="border-[#0e6938] text-[#0e6938]">Amazing</span>{" "}
              Content
              <span className="text-[#0e6938]">!</span>
            </h2>
            {/* Add Text Content */}
            <p className="text-gray-700 mb-4">
              Welcome to Write – where words come to life, and ideas take
              flight! We're not just a content provider; we're your creative
              partner in building captivating, impactful, and memorable
              narratives. Whether it's blog posts, articles, social media
              scripts, or website copy, our expert team crafts tailor-made
              content that not only speaks to your audience but also leaves a
              lasting impression.
            </p>
            <p className="text-gray-700 mb-4">
              At Write, we know that behind every great business is a great
              story – and we’re here to help you tell yours. We bring passion,
              precision, and personality to every piece of content, ensuring
              that your voice stands out in today’s noisy digital world. From
              compelling articles to catchy social media scripts, we specialize
              in turning your ideas into engaging, results-driven written
              content.
            </p>
            <p className="text-gray-700 mb-4">
              What sets us apart? It’s our unwavering commitment to quality,
              creativity, and collaboration. We take the time to understand your
              goals, audience, and brand tone, so we can deliver content that
              truly reflects who you are.
            </p>
            <p className="text-gray-700 mb-4">
              We’re not just about writing; we’re about writing right to help
              your business grow, connect, and thrive. Join the Write family
              today and let us bring your content vision to life. Whether you're
              a startup or an established brand, we've got the perfect words
              waiting for you! Let’s create something extraordinary, together.
            </p>
          </div>
        </div>

        {/* Steps Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {["Get Started", "Requirement", "Final Approval"].map(
            (title, index) => (
              <div
                key={index}
                className="bg-white shadow-md p-6 rounded-md relative"
                data-aos="zoom-in"
              >
                <span className="absolute top-3 -left-3 border border-[#0e6938] p-2 bg-[#0e6938] text-white">
                  {index + 1}
                </span>
                <h4 className="text-2xl font-bold mb-2">{title}</h4>
                <p className="text-gray-700">
                  {title === "Get Started"
                    ? "Getting in touch with us is a breeze"
                    : title === "Requirement"
                    ? "Our team will reach out to you for a detailed discussion."
                    : "Your content will be crafted with the highest quality, ensuring it stands out and makes an impact."}
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};
