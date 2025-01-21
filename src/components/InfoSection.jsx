import React, { useState } from "react";

const InfoSection = () => {
  const [activeSection, setActiveSection] = useState("Ads Copywriting");

  const handleClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div
      className="container mx-auto px-4 py-8 bg-cover bg-center"
      style={{ backgroundImage: "url('pettern-bg2.png')" }}
    >
      {/* Navigation Bar */}
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 rounded-full text-black py-4 px-6">
        {["Ads Copywriting", "GhostWriting", "Content Marketing", "Error-Free Content"].map((section) => (
          <span
            key={section}
            onClick={() => handleClick(section)}
            className={`cursor-pointer font-josefin text-center hover:text-[#0e6938] transition-colors duration-300 text-base sm:text-lg md:text-xl ${
              activeSection === section ? "text-[#0e6938] underline" : ""
            }`}
          >
            {section}
          </span>
        ))}
      </div>

      {/* Active Section Content */}
      {activeSection && (
       <div className="flex flex-col items-center lg:flex-row lg:items-center justify-between gap-10 py-12 px-6 sm:px-12 md:px-20 lg:px-40">
          {/* Text Content */}
          <div className="flex-1 max-w-full lg:max-w-lg text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-josefin text-black mb-4">
              {activeSection}
            </h2>
            <div className="text-base sm:text-lg lg:text-xl text-black font-josefin leading-relaxed">
              {activeSection === "Ads Copywriting" && (
                <p className="text-lg text-justify">
                  Our Ad Copywriting services are designed to create compelling, persuasive, and memorable content that drives action. Whether you're launching a new product, running a promotional campaign, or simply aiming to boost brand visibility, we craft powerful ad copy tailored to resonate with your target audience.
                </p>
              )}
              {activeSection === "GhostWriting" && (
                <>
                  <p  className="text-lg text-justify">
                    Writing content for individuals or brands who wish to publish under their name without actually writing it themselves.
                  </p>
                  <ul className="list-none text-lg text-justify  mt-4">
                    <li>Biographies</li>
                    <li>eBook Writing</li>
                    <li>Book Writing</li>
                    <li>Speeches</li>
                  </ul>
                </>
              )}
              {activeSection === "Content Marketing" && (
                <>
                  <p  className="text-lg text-justify">
                    Transforming words into impactful stories, we craft content that engages, informs, and converts.
                  </p>
                  <ul className="list-none text-lg text-justify  mt-4">
                    <li>SEO-friendly Content</li>
                    <li>Social Media Content</li>
                    <li>Product Copywriting</li>
                    <li>Ad Copywriting</li>
                  </ul>
                </>
              )}
              {activeSection === "Error-Free Content" && (
                <>
                  <p>
                    Refining and enhancing existing content by ensuring it is error-free, well-structured, and grammatically correct.
                  </p>
                  <ul className="list-disc text-start  mt-4">
                    <li>Grammar and Spelling Checks</li>
                    <li>Content Polishing</li>
                    <li>Rewriting for Clarity and Engagement</li>
                    <li>Formatting and Structuring Content</li>
                  </ul>
                </>
              )}
            </div>
          </div>

          {/* Image Content */}
          <div className="flex-1 max-w-full sm:max-w-md lg:max-w-lg">
            {activeSection === "Ads Copywriting" && (
              <img
                src="image.png"
                alt="Ads Copywriting"
                className="rounded-lg shadow-lg object-cover w-full h-56 sm:h-64 md:h-72 lg:h-80"
              />
            )}
            {activeSection === "GhostWriting" && (
              <img
                src="image1.png"
                alt="GhostWriting"
                className="rounded-lg shadow-lg object-cover w-full h-56 sm:h-64 md:h-72 lg:h-80"
              />
            )}
            {activeSection === "Content Marketing" && (
              <img
                src="Untitled design (3).jpg"
                alt="Content Marketing"
                className="rounded-lg shadow-lg object-cover w-full h-56 sm:h-64 md:h-72 lg:h-80"
              />
            )}
            {activeSection === "Editing & Error-Free" && (
              <img
                src="Untitled design (21).png"
                alt="Editing & Error-Free"
                className="rounded-lg shadow-lg object-cover w-full h-56 sm:h-64 md:h-72 lg:h-80"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default InfoSection;
    