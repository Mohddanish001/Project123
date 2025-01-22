import React, { useState } from "react";

const InfoSection = () => {
  const [activeSection, setActiveSection] = useState("Hire Article Experts");

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
        {["Hire Article Experts", "Content Marketing", "Article Experts"].map(
          (section) => (
            <span
              key={section}
              onClick={() => handleClick(section)}
              className={`cursor-pointer font-josefin text-center bg-black hover:-gradient-to-r from-[#DB7EEC] to-[#42175B] bg-clip-text text-transparent transition-colors duration-300 text-base sm:text-lg md:text-xl ${
                activeSection === section
                  ? "bg-gradient-to-r from-[#DB7EEC] to-[#42175B] bg-clip-text text-transparent underline"
                  : ""
              }`}
            >
              {section}
            </span>
          )
        )}
      </div>

      {/* Active Section Content */}
      {activeSection && (
        <div className="flex flex-col items-center lg:flex-row lg:items-center justify-between gap-10 space-x-10 py-12 px-6 sm:px-12 md:px-20 lg:px-40">
          {/* Text Content */}
          <div className="flex-1 max-w-full lg:max-w-lg text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-josefin text-black mb-4">
              {activeSection}
            </h2>
            <div className="text-base sm:text-lg lg:text-xl text-black font-josefin leading-relaxed">
              {activeSection === "Hire Article Experts" && (
                <p className="text-lg text-justify">
                 Wanting to produce well-researched, captivating articles? Ordered copywriting service from our skilled article writers, QuillWhale! We provide content that is not only SEO-optimized and research-focused but also tailored to your specific requirements. Blogs, websites, and publications are intended to give the Butter team breath and connect them with LiQuid Papers.
                </p>
              )}
              {activeSection === "Content Marketing" && (
                <>
                  <p className="text-lg text-justify">
                  Step up your brand with impactful content marketing by QuillWhale! Our skilled team provides incredible content that your audience gets, trusts, and makes abroad conversions according to the stay they may refer. We create strategies that are ani-visible-sta and boost your online visibility. Join us for a storytelling session and have the chance of your business flourishing!{" "}
                  </p>
                </>
              )}
              {activeSection === "Article Experts" && (
                <>
                  <p className="text-lg text-justify">
                  How-to content on industry topics, links to the hottest trends, and SEO tips are the main highlights of our writers' work. Our experts are masters of the written word; they write with flair and are readily accessible. You will experience the magic of your topics, and we will give them life with our exquisite touch. We will all be awe-inspiring when we produce memorable articles for you!
                  </p>
                  
                </>
              )}
            </div>
          </div>

          {/* Image Content */}
          <div className="flex-1 max-w-full sm:max-w-md lg:max-w-lg">
            {activeSection === "Hire Article Experts" && (
              <img
                src="hire.png"
                alt="Ads Copywriting"
                className="rounded-lg shadow-lg object-cover w-full h-56 sm:h-64 md:h-72 lg:h-80"
              />
            )}
            {activeSection === "Content Marketing" && (
              <img
                src="content.png"
                alt="Content Marketing"
                className="rounded-lg shadow-lg object-cover w-full h-56 sm:h-64 md:h-72 lg:h-80"
              />
            )}
            {activeSection === "Article Experts" && (
              <img
                src="Article.png"
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
