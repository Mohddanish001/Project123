import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  faSearch,
  faClock,
  faPenNib,
  faRedo,
} from "@fortawesome/free-solid-svg-icons";
import { motion, useAnimation } from "framer-motion";

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
// import BlogSection from "./BlogSection";
import Services from "./Services";

export default function Content() {
  const [leftRef, leftInView] = useInView({ threshold: 0.2 });
  const [rightRef, rightInView] = useInView({ threshold: 0.2 });

  // Animations
  const leftAnimation = useAnimation();
  const rightAnimation = useAnimation();

  useEffect(() => {
    AOS.init({ duration: 1000 });
    if (leftInView) {
      leftAnimation.start({ y: 0, opacity: 1 });
    } else {
      leftAnimation.start({ y: "-100px", opacity: 0 });
    }

    if (rightInView) {
      rightAnimation.start({ y: 0, opacity: 1 });
    } else {
      rightAnimation.start({ y: "100px", opacity: 0 });
    }
  }, [leftInView, rightInView, leftAnimation, rightAnimation]);


  // const [showMore, setShowMore] = useState(false);
  // const [expandedCard, setExpandedCard] = useState(null);

  // const toggleExpanded = (id) => {
  //   if (expandedCard === id) {
  //     setExpandedCard(null);
  //   } else {
  //     setExpandedCard(id);
  //   }
  // };

  return (
    <>
   <section className="bg-white px-4 sm:px-6 lg:px-20 py-12">
  {/* Left Image Section */}
  <div className="container mx-auto md:flex md:items-center md:space-x-12">
    <motion.div
      ref={leftRef}
      className="md:w-1/2 w-full"
      initial={{ y: "-100px", opacity: 0 }}
      animate={leftAnimation}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <img
        src="/first1.png"
        alt="About Us Illustration"
        className="w-full rounded-lg h-auto"
      />
    </motion.div>

    {/* Right Content Section */}
    <motion.div
      ref={rightRef}
      className="md:w-1/2 w-full mt-8 md:mt-0"
      initial={{ y: "100px", opacity: 0 }}
      animate={rightAnimation}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
    >
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        We Create <span className="text-[#0e6938]">Amazing</span> Content!
      </h2>
      <p className="text-gray-600 mb-6">
        Welcome to writeout, your go-to hub for creative content and digital
        marketing solutions. As content experts, we provide a full spectrum of
        services tailored to help your business excel in today’s fast-paced
        digital world. From crafting premium-quality content to ensuring every
        detail aligns with your vision, we’re committed to meeting your needs
        and exceeding your expectations — always on time. Let us bring your ideas
        to life and drive your success!
      </p>
      <ul className="list-none space-y-4">
        <li className="flex items-center">
          <span className="text-[#0e6938] mr-2">✔</span>
          We Create Premium Quality Content
        </li>
        <li className="flex items-center">
          <span className="text-[#0e6938] mr-2">✔</span>
          We Focus on Client’s Needs and Satisfaction
        </li>
        <li className="flex items-center">
          <span className="text-[#0e6938] mr-2">✔</span>
          We Deliver On Time
        </li>
      </ul>
      {/* <button className="mt-6 px-6 py-2 bg-[#0e6938] text-white rounded-lg hover:bg-[#113b25]">
        Connect With Us
      </button> */}
    </motion.div>
  </div>
</section>


      <OurServices />

      <WebUI />
      <ContactInfo />
    </>
  );
}

const OurServices = () => {
  // const [isPlaying, setIsPlaying] = useState(true);

  // const toggleAnimation = () => {
  //   setIsPlaying(!isPlaying);
  // };
  // const services = [
  //   {
  //     title: "Content creation ",
  //     description:
  //       "Enhance your brand with our professional content creation services, offering everything from engaging blog posts to attention-grabbing social media copy and dynamic video content. We craft personalized stories that resonate with your audience and deliver tangible results. We are here to help you create a lasting expression.",
  //     image: "/path-to-content-writing-image.png",
  //   },
  //   {
  //     title: "Content consultation",
  //     description:
  //       "Our expert consultants will develop a strategy that aligns your website content with your business objectives, audience preferences, and current market trends. By incorporating targeted keywords, we’ll enhance your website’s ranking. We provide high-quality writing and editing that perfectly reflects your brand, and we’ll turn our ideas into stunning visuals that tell your story.",
  //     image: "/path-to-graphic-designing-image.png",
  //   },

  //   {
  //     title: "Customized content solutions",
  //     description:
  //       "Unleash your brand’s full potential with expert content solutions. We develop strategies and content that align with your specific goals, ensuring every message speaks directly to your audience. Whether through written, visual, or video content, we offer impactful solutions that drive engagement and success. Let us help you shine with content crafted just for you.",
  //     image: "/path-to-app-development-image.png",
  //   },
  //   {
  //     title: "Content writing ",
  //     description:
  //       "Harness the power of storytelling through our expert content writing services. We create compelling narratives that engage your audience and elevate your brand’s voice. From SEO-driven blog posts to Instagram Reels and short films, we craft content that resonates with your audience and delivers measurable results. Let us help you connect, inspire, and boost your brand with impactful words.",
  //     image: "/path-to-consulting-image.png",
  //   },
  //   {
  //     title: "Content strategy ",
  //     description:
  //       "Our experienced strategists will work with you to create content that resonates with your audience and drives measurable outcomes. We develop tailored strategies, optimize for SEO, and ensure consistent messaging across all platforms. Using data-driven insights, we refine and deliver content that accelerates your business growth.",
  //     image: "/path-to-consulting-image.png",
  //   },
  //   {
  //     title: "Content optimization ",
  //     description:
  //       "We optimize every aspect of your content—text, images, and multimedia—to ensure it’s SEO-friendly, easy to read, and mobile-responsive. By strategically using the right keywords and targeting your audience, we help you improve your rankings, attract more attention, and drive meaningful results. Let us transform your content into a powerful tool for success.",
  //     image: "/path-to-consulting-image.png",
  //   },
  //   {
  //     title: "Content management ",
  //     description:
  //       "Our Content Management service takes the stress out of organizing and maintaining your digital content. We handle everything from planning and scheduling to ensuring your content stays fresh and aligned with your brand. We make sure your content is consistent, accessible, and optimized, helping you connect with your audience at the ideal moment. Let us simplify content management so you can focus on what truly matters! Welcome to Writeout, your go-to hub for creative content and digital marketing solutions. As content experts, we provide a full spectrum of services tailored to help your business excel in today’s fast-paced digital world. From crafting premium-quality content to ensuring every detail aligns with your vision, we’re committed to meeting your needs and exceeding your expectations — always on time. Together, we'll bring your ideas to life and propel your success!",
  //     image: "/path-to-consulting-image.png",
  //   },
  // ];

  return (
    <>
   <section className="bg-white py-8 px-4 sm:px-6 lg:px-20">
  <div
    className="bg-white p-8"
    style={{
      backgroundImage: 'url("./bg.png")',
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Left Section */}
      <div
        className="w-full lg:w-1/3 mx-auto rounded-lg shadow-md p-5 text-center"
        data-aos="fade-right"
      >
        <h2 className="text-2xl font-bold mb-2">
          What <span className="text-[#0e6938]">We Do?</span>
        </h2>
        <p className="text-gray-600 mb-4 text-sm">
          As dynamic Content Creation Specialists, writeout specializes in
          delivering engaging and impactful content solutions.
        </p>
        <img
          src="four.png"
          alt="Illustration"
          className="w-full rounded-md mb-4"
        />
        <ul className="text-gray-700 space-y-2">
          <li className="flex items-center font-bold gap-2">
            <span className="text-[#0e6938] font-bold">•</span> Know More About Us
          </li>
          <li className="flex items-center font-bold gap-2">
            <span className="text-[#0e6938] font-bold">•</span> Connect With Us
          </li>
          <li className="flex items-center font-bold gap-2">
            <span className="text-[#0e6938] font-bold">•</span> Find Our Services
          </li>
        </ul>
      </div>

      {/* Right Section */}
      <div
        className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8"
        data-aos="fade-left"
      >
        {/* SEO Optimized */}
        <div className="space-y-4">
          <FontAwesomeIcon
            icon={faSearch}
            className="text-[#0e6938] text-3xl"
          />
          <h3 className="font-bold text-xl">SEO Optimized</h3>
          <p className="text-gray-600">
            With a touch of creativity and a dash of smart keywords, we spin
            irresistible stories that captivate your audience and charm search
            engines, ensuring your message stands out and gets noticed.
          </p>
        </div>

        {/* Quick Delivery Time */}
        <div className="space-y-4">
          <FontAwesomeIcon
            icon={faClock}
            className="text-[#0e6938] text-3xl"
          />
          <h3 className="font-bold text-xl">Quick Delivery Time</h3>
          <p className="text-gray-600">
            At Writeout, we prioritize on-time delivery and have streamlined
            processes that ensure smooth and efficient project completion every
            time.
          </p>
        </div>

        {/* Original Content */}
        <div className="space-y-4">
          <FontAwesomeIcon
            icon={faPenNib}
            className="text-[#0e6938] text-3xl"
          />
          <h3 className="font-bold text-xl">Original Content</h3>
          <p className="text-gray-600">
            At Writeout, we take pride in crafting 100% original,
            plagiarism-free content that's perfectly aligned with your brand’s
            voice. This ensures that it truly connects with your audience and
            reflects your unique identity.
          </p>
        </div>

        {/* Quick Revisions */}
        <div className="space-y-4">
          <FontAwesomeIcon
            icon={faRedo}
            className="text-[#0e6938] text-3xl"
          />
          <h3 className="font-bold text-xl">Quick Revisions</h3>
          <p className="text-gray-600">
            Customer satisfaction is what we prioritize the most. With swift
            revisions and tailored support, we go above and beyond to ensure we
            not only meet, but exceed your expectations.
          </p>
        </div>
      </div>
    </div>
  </div>

  <div className="flex flex-col md:flex-row items-center justify-between bg-gray-50 p-4 sm:p-6 md:p-8 lg:p-12 gap-4 max-w-full mx-auto">
    {/* Left Section */}
    <div className="md:w-1/2 text-center md:text-left">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
        Content <span className="text-[#0e6938]">that Walks</span>, Talks & Sells
        for you
      </h1>
      <p className="text-gray-600 mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg">
        Introducing the ultimate marketing game-changer: Content that walks,
        talks, and sells for you. With writeout, we blend the art of
        storytelling, persuasive language, and stunning visuals to craft
        irresistible content that captures attention, keeps audiences hooked, and
        drives conversions. Let us turn your message into an experience that
        resonates and delivers results.
      </p>
      <p className="text-gray-600 mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg">
        Watch your business soar to new heights!
      </p>
      {/* <a
        href="#"
        className="inline-block mt-6 px-4 sm:px-6 py-2 sm:py-3 bg-[#0e6938] text-white font-semibold text-sm sm:text-base rounded-lg shadow-md hover:bg-red-600 transition duration-300"
        data-aos="flip-right"
      >
        CLICK HERE TO KNOW MORE
      </a> */}
    </div>

    {/* Right Section */}
    <div
      className="md:w-1/2 flex justify-center mt-6 md:mt-0"
      data-aos="flip-right"
    >
      <img
        src="82250 [Converted].png"
        alt="Illustration of content and marketing"
        className="max-w-full h-auto"
      />
    </div>
  </div>

  <Services />
  {/* service part */}
</section>

      {/* <BlogSection /> */}
    </>
  );
};

const ContactInfo = () => {
  return (
    <>
  <div>
  <div
    className="flex flex-col -mt-20 h-[31rem] md:flex-row items-center text-black"
    style={{
      backgroundImage: 'url("./pettern-bg2.png")',
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    {/* Left Section */}
    <div className="w-full md:w-1/2 space-y-8 px-4 md:px-20 py-8 rounded-lg">
      <h3 className="text-3xl sm:text-4xl font-bold text-black">
        Our Working Process.
      </h3>

      {/* Step 1 */}
      <div className="flex flex-col md:flex-row items-start space-y-4 md:space-x-4 md:space-y-0">
        <div className="flex-shrink-0 bg-[#0e6938] p-2 rounded-full">
          <span className="text-white text-lg font-bold">1</span>
        </div>
        <div>
          <h4 className="text-xl font-bold">Get Started</h4>
          <p className="text-sm">
            Reaching out to us is really easy! Simply hit "Contact Us" on
            our website, fill in your details, and we’ll get back to you in
            no time. Let’s start the conversation today!
          </p>
        </div>
      </div>

      {/* Step 2 */}
      <div className="flex flex-col md:flex-row items-start space-y-4 md:space-x-4 md:space-y-0">
        <div className="flex-shrink-0 bg-[#0e6938] p-2 rounded-full">
          <span className="text-white text-lg font-bold">2</span>
        </div>
        <div>
          <h4 className="text-xl font-bold">Requirement Gathering</h4>
          <p className="text-sm">
            Our team will reach out to chat about your needs and goals,
            providing all the details you need about pricing and timelines.
          </p>
        </div>
      </div>

      {/* Step 3 */}
      <div className="flex flex-col md:flex-row items-start space-y-4 md:space-x-4 md:space-y-0">
        <div className="flex-shrink-0 bg-[#0e6938] p-2 rounded-full">
          <span className="text-white text-lg font-bold">3</span>
        </div>
        <div>
          <h4 className="text-xl font-bold">Final Approval</h4>
          <p className="text-sm">
            Your content will be expertly crafted to meet your highest
            expectations by our team of specialists, then delivered to you
            on time for your final approval. We ensure quality and precision
            every step of the way!
          </p>
        </div>
      </div>
    </div>

    {/* Right Section */}
    <div className="w-full md:w-[30rem] mx-auto flex justify-center mt-8 md:mt-0">

      <div className="relative">
        <img src="Write Out Logo-Recovered.png edrfty.png" alt="Checklist Illustration" className="w-full " />
      </div>
    </div>
  </div>
</div>

  
    </>
  );
};

const WebUI = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
  <div className="py-8">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
    {/* Left Section: Image */}
    <div className="flex justify-center items-center">
      <img src="third.png" alt="Earth" className="w-full object-contain" />
    </div>

    {/* Right Section: FAQ Content */}
    <div className="text-center  md:text-left">
      <h2 className="text-2xl font-bold mb-4 mt-10">Frequently Asked Questions</h2>
      <div className="space-y-4">
        <div className="border-b px-4 border-gray-300">
          <button
            className="w-full text-left font-semibold py-2  focus:outline-none"
            onClick={() => toggleAccordion(0)}
          >
            What is writeout?
          </button>
          {openIndex === 0 && (
            <div className="mt-2">
              <p>
                writeout is a content management service that helps you create professional documents with ease.
              </p>
            </div>
          )}
        </div>

        <div className="border-b px-4 border-gray-300">
          <button
            className="w-full text-left font-semibold py-2  focus:outline-none"
            onClick={() => toggleAccordion(1)}
          >
            How can I contact support?
          </button>
          {openIndex === 1 && (
            <div className="mt-2">
              <p>
                You can reach us via email at info@writeout.in or call +91-9773754783.
              </p>
            </div>
          )}
        </div>

        <div className="border-b px-4 border-gray-300">
          <button
            className="w-full text-left font-semibold py-2 focus:outline-none"
            onClick={() => toggleAccordion(2)}
          >
            Where are you located?
          </button>
          {openIndex === 2 && (
            <div className="mt-2">
              <p>
                We are located at writeout, Block-A, Sangam Vihar, Dharampura Extension, Najafgarh, New Delhi, 110043.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
</div>

  );
};
