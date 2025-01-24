import React, { useState } from "react";

function Services() {
  const services = [
    {
      title: "Ad Content Creation",
      paragraph:
        "Our Ad Content Creation services provide attention-grabbing copy and visuals that drive results. We specialize in the creation of persuasive ad copy, video scripts, and graphics for use on advertising mediums like Google Ads, Facebook, Instagram, LinkedIn, and more. Let's help you create ads that engage, convert, and maximize your ROI.",
      image: "image.png",
    },
    {
      title: "Social Media Content",
      paragraph:  
        "We help you in creating engaging and shareable posts, captions, images, videos, and stories for various social media platforms to build brand awareness, foster audience interaction, and drive business growth. Social Media Post Creation (Captions, Graphics, Hashtags): Developing captions, graphics, and hashtags for posts that attract high visibility and engagement. Social Media Campaign Content: Developing specific content for campaign in social media with the marketing objectives and that stimulates audience interaction. Content Calendars for Social Media Management: Planning the posting of content in social media through a content calendar to provide a structured, planned, and timely approach to content. Platform-Specific Content (Instagram Stories, LinkedIn Articles, Twitter Threads):  Instagram Stories, LinkedIn Articles, Twitter Threads: Developing platform-specific content such as Instagram Stories, LinkedIn Articles, and Twitter Threads to engage audiences.",
      image: "image (14).png",
    },
    {
      title: "SEO Content",
      paragraph:
        "Blog Posts Optimized for SEO:  Developing blog posts that are best optimized for search with the practice of SEO in order to increase ranking and organic traffic. SEO-Optimized Website Content: Developing keyword-optimized website content with techniques for better visibility on search. Meta Titles and Descriptions: Crafting engaging meta titles and descriptions to increase clicks and search rankings. Content for Link-Building and Guest Posting: How to create compelling content for the guest posts that will help domain authority and enhance backlinks",
      image: "image (15).png",
    },
    
  ];

  // State to manage expanded content for each service
  const [expanded, setExpanded] = useState(Array(services.length).fill(false));

  const toggleExpand = (index) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };

  return (
    <div className=" px-4 sm:px-6 lg:px-20">
   <div className="flex items-center justify-center mb-8 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 2xl:px-32">
  {/* <div className="flex-1 h-[1px] w-20 sm:w-24 md:w-32 lg:w-40 bg-black"></div> */}
    {/* <h1 className="text-lg sm:text-xl md:text-2xl text-black font-josefin mx-4">
      <span className="font-josefin font-bold">Our</span> Services
      <div className="border-b px-4 border-black"></div>
    </h1> */}
  
  {/* <div className="flex-1 h-[1px] w-20 sm:w-24 md:w-32 lg:w-40 bg-black"></div> */}
</div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-lg font-josefin text-gray-800 mb-2 hover:text-[#0e6938] transition-colors duration-200">
                {service.title}
              </h3>
              <p className="text-sm font-josefin text-gray-600 flex-grow">
                {expanded[index]
                  ? service.paragraph
                  : `${service.paragraph.split(" ").slice(0, 30).join(" ")}...`}
              </p>
              <button
                onClick={() => toggleExpand(index)}
                className="mt-4 text-sm font-bold bg-gradient-to-r from-[#DB7EEC] to-[#42175B] bg-clip-text text-transparent"
              >
                {expanded[index] ? "Show Less" : "Read More"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
