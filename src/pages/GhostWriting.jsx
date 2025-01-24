import React from "react";
import { Link } from "react-router-dom";

const GhostWriting = () => {
  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto rounded-md px-6 sm:px-8 md:px-12 lg:px-24 py-10 bg-white shadow-md">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
          <div className="flex-1">
            <h1 className="text-3xl font-josefin sm:text-4xl md:text-5xl font-bold text-black mb-4">
              Ghostwriting
            </h1>
            <p className="text-black font-josefin text-base sm:text-lg text-justify">
              Crafting compelling content for individuals or brands who wish to
              publish under their name without writing it themselves.
            </p>
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-10 px-2 sm:px-4 md:px-8 ">
          {[
            {
              title: "Biographies",
              description:
                "We specialize in biographical services. Our biographies show the true character of the subject. They talk about their youth life, accomplishments, and, more importantly, their unique personality. Personal or professional, these are customized to give a brief overview of certain events that can help readers to get inspired.",
            },
            {
              title: "eBooks Writing",
              description:
                " Our ebook writing service writes essays, looks for them, writes them, and then turns them into educational resources. In our established mix, these books can be amulets for clients, knowledge resources, or extensive explanations on topics. ",
            },
            {
              title: "Books Writing",
              description:
                "The array of services starts with concept development to the final proofread manuscript. The book writing we offer extends from fiction non-fiction to memoirs and all of which we will create an engaging narrative that will make your vision come true. ",
            },
            {
              title: "Speeches",
              description:
                "We are pretty good at preparing assertive and convincing speeches for all types of events. The key to our success is crafting messages that will be felt and memorized by you speaking and your audience listening. Our speeches are adapted to the tone, the purpose, and the style you want.",
            },
          ].map((service, index) => (
            <div key={index} className="mb-6">
              <h2 className="text-lg font-josefin sm:text-xl text-black font-bold mb-2">
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
              <span className="font-bold">Are you looking for </span>
              <br className="hidden md:block" /> personalized assistance
            </h2>
            <Link
                  to="/contact">
            <button
              className="mt-4 md:mt-0 bg-white font-josefin   bg-gradient-to-r from-[#DB7EEC] to-[#42175B] font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-md hover:bg-gray-100 transitionhover:bg-gradient-to-r hover:from-[#42175B] hover:to-[#DB7EEC]
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

export default GhostWriting;
