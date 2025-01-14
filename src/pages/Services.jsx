import React, { useState } from "react";

function Services() {
  const services = [
    {
      title: "Content creation",
      paragraph:
        "Enhance your brand with our professional content creation services, offering everything from engaging blog posts to attention-grabbing social media copy and dynamic video content. We craft personalized stories that resonate with your audience and deliver tangible results. We are here to help you create a lasting expression.",
      image: "image.png",
    },
    {
      title: "Content consultation",
      paragraph:
        "Our expert consultants will develop a strategy that aligns your website content with your business objectives, audience preferences, and current market trends. By incorporating targeted keywords, we’ll enhance your website’s ranking. We provide high-quality writing and editing that perfectly reflects your brand, and we’ll turn our ideas into stunning visuals that tell your story.",
      image: "image (14).png",
    },
    {
      title: "Customized content solutions",
      paragraph:
        "Unleash your brand’s full potential with expert content solutions. We develop strategies and content that align with your specific goals, ensuring every message speaks directly to your audience. Whether through written, visual, or video content, we offer impactful solutions that drive engagement and success. Let us help you shine with content crafted just for you.",
      image: "image (15).png",
    },
    {
      title: "Content writing",
      paragraph:
        "Harness the power of storytelling through our expert content writing services. We create compelling narratives that engage your audience and elevate your brand’s voice. From SEO-driven blog posts to Instagram Reels and short films, we craft content that resonates with your audience and delivers measurable results. Let us help you connect, inspire, and boost your brand with impactful words.",
      image: "image (16).png",
    },
    {
      title: "Content strategy",
      paragraph:
        "Our experienced strategists will work with you to create content that resonates with your audience and drives measurable outcomes. We develop tailored strategies, optimize for SEO, and ensure consistent messaging across all platforms. Using data-driven insights, we refine and deliver content that accelerates your business growth.",
      image: "image (17).png",
    },
    {
      title: "Content optimization",
      paragraph:
        "We optimize every aspect of your content—text, images, and multimedia—to ensure it’s SEO-friendly, easy to read, and mobile-responsive. By strategically using the right keywords and targeting your audience, we help you improve your rankings, attract more attention, and drive meaningful results. Let us transform your content into a powerful tool for success.",
      image: "image19.png",
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
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-gray-900">
          Our <span className="text-[#0e6938]">Services</span>
        </h2>
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
              <h3 className="text-lg font-semibold text-gray-800 mb-2 hover:text-[#0e6938] transition-colors duration-200">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 flex-grow">
                {expanded[index]
                  ? service.paragraph
                  : `${service.paragraph.split(" ").slice(0, 30).join(" ")}...`}
              </p>
              <button
                onClick={() => toggleExpand(index)}
                className="mt-4 text-sm font-bold text-[#0e6938] hover:text-green-700"
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
