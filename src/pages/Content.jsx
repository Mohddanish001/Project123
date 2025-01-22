import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AOS from "aos";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
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
import TextSlider from "../components/TextSlider";
import { TypingContent } from "../components/TypingContent";
import GoogleReviews from "../components/GoogleReviews";
import HappyClientsCounter from "../components/HappyClientsCounter";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

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
      {/* <TextSlider /> */}
      <section className="bg-white ">
        {/* Left Image Section */}
        <TypingContent />
        <div className="p-4 sm:p-6 md:p-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4  bg-gradient-to-r from-[#DB7EEC] to-[#42175B]  text-white py-6 sm:py-8 md:py-10 px-6 sm:px-10 md:px-16 lg:px-28 rounded-md shadow-md">
            <h2 className="text-lg sm:text-2xl md:text-3xl text-center md:text-start font-josefin">
              <span className="font-bold">Are you looking for </span>
              <br className="hidden md:block" /> personalized assistance
            </h2>
            <Link
                  to="/contact">
            <button
              className="mt-4 flex justify-between items-center gap-2 md:mt-0 bg-white bg-gradient-to-r from-[#DB7EEC] to-[#42175B] font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-md
             hover:bg-gray-100 hover:bg-gradient-to-r hover:from-[#42175B] hover:to-[#DB7EEC]
             transition-all duration-300 group"
            >
              Get Started Now
              <FaLongArrowAltRight className="transform transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
            </button>
            </Link>
          </div>
        </div>
        <div className="container shadow-xl border rounded-lg p-2  mx-auto md:flex md:items-center md:space-x-12">
          <motion.div
            ref={leftRef}
            className="md:w-1/2 w-full"
            initial={{ y: "-100px", opacity: 0 }}
            animate={leftAnimation}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img
              src="/first1 quillwhale image.png"
              alt="About Us Illustration"
              className="w-full rounded-lg h-auto"
            />
          </motion.div>

          {/* Right Content Section */}
          <motion.div
            ref={rightRef}
            className="md:w-1/2 w-full mt-8 md:mt-0 px-4 md:px-6 lg:px-8"
            initial={{ y: "100px", opacity: 0 }}
            animate={rightAnimation}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold font-josefin text-black mb-4">
              Crafting Authentic Content, Powered by{" "}
              <span className="font-normal font-josefin">100% Human </span>{" "}
              Creativity.
            </h2>
            <p className="text-gray-600 font-josefin  mb-6 text-base sm:text-lg">
              At QuillWhale, we believe in the ability of authentic, human-made
              content to impact people. Our group of professional writers
              creates original, captivating, and carefully adjusted content that
              connects with your audience. We ensure that each iteration
              displays your brand's exceptional tone of voice and is backed by
              100% human creativity and diligence.
            </p>
            <ul className="list-none space-y-4">
              <li className="flex items-start font-josefin text-sm sm:text-base">
                <span className="text-[#0e6938] mr-2 mt-[2px]">✔</span>
                100% content generated by people for authenticity and
                originality.
              </li>
              <li className="flex items-start font-josefin text-sm sm:text-base">
                <span className="text-[#0e6938] mr-2 mt-[2px]">✔</span>
                Customized to project your brand identity and tone of voice.
              </li>
              <li className="flex items-start font-josefin text-sm sm:text-base">
                <span className="text-[#0e6938] mr-2 mt-[2px]">✔</span>
                Emotionally rich and relevant content that attracts a target
                audience.
              </li>
              <li className="flex items-start font-josefin text-sm sm:text-base">
                <span className="text-[#0e6938] mr-2 mt-[2px]">✔</span>
                Ability to make SEO writing creative and professional.
              </li>
              <li className="flex items-start font-josefin text-sm sm:text-base">
                <span className="text-[#0e6938] mr-2 mt-[2px]">✔</span>
                Precision and an innovative approach to communication for good
                content.
              </li>
            </ul>
            {/* <button className="mt-6 px-6 py-3 bg-[#0e6938] text-white text-sm sm:text-base rounded-lg hover:bg-[#113b25] transition-colors">
    Connect With Us
  </button> */}
          </motion.div>
        </div>
      </section>

      <HappyClientsCounter />

      <OurServices />

      <WebUI />
      <ContactInfo />
    </>
  );
}

const OurServices = () => {
  return (
    <>
      <section className="bg-white overflow-x-hidden">
        {/* Background Section */}
        <div
          className="bg-white p-4 sm:p-6 md:p-8 lg:p-10"
          style={{
            backgroundImage: 'url("./bg.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            {/* Left Section */}
            <div
              className="w-full lg:w-1/3 mx-auto rounded-lg shadow-md p-6 text-center bg-white"
              data-aos="fade-right"
            >
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 font-josefin">
                What{" "}
                <span className="bg-gradient-to-r from-[#DB7EEC] to-[#42175B] bg-clip-text text-transparent">
                  We Do?
                </span>
              </h2>
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg font-josefin mb-4">
                As dynamic Content Creation Specialists, QuillWhale specializes
                in delivering engaging and impactful content solutions.
              </p>
              <img
                src="four.png"
                alt="Illustration"
                className="w-full rounded-md mb-4 object-cover"
              />
              <ul className="text-gray-700 space-y-3">
                {[
                  "Know More About Us",
                  "Connect With Us",
                  "Find Our Services",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center font-bold gap-2 font-josefin"
                  >
                    <span className="bg-gradient-to-r from-[#DB7EEC] to-[#42175B] bg-clip-text text-transparent font-bold">
                      •
                    </span>{" "}
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Section */}
            <div
              className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6"
              data-aos="fade-left"
            >
              {[
                {
                  icon: faSearch,
                  title: "SEO Optimized",
                  description:
                    "With a touch of creativity and a dash of smart keywords, we spin irresistible stories that captivate your audience and charm search engines.",
                },
                {
                  icon: faClock,
                  title: "Quick Delivery Time",
                  description:
                    "At QuillWhale, we prioritize on-time delivery and have streamlined processes that ensure smooth and efficient project completion every time.",
                },
                {
                  icon: faPenNib,
                  title: "Original Content",
                  description:
                    "We take pride in crafting 100% original, plagiarism-free content that's perfectly aligned with your brand’s voice, ensuring that it truly connects with your audience.",
                },
                {
                  icon: faRedo,
                  title: "Quick Revisions",
                  description:
                    "Customer satisfaction is our priority. With swift revisions and tailored support, we go above and beyond to ensure we exceed your expectations.",
                },
              ].map((item, idx) => (
                <div key={idx} className="space-y-3">
                  <FontAwesomeIcon
                    icon={item.icon}
                    className="bg-gradient-to-r from-[#DB7EEC] to-[#42175B] bg-clip-text text-transparent text-3xl"
                  />
                  <h3 className="font-bold text-base sm:text-lg lg:text-xl font-josefin">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base font-josefin">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="p-10">
          <div className="flex flex-col  md:flex-row shadow-xl border rounded-2xl  items-center   justify-between gap-6 px-4 sm:px-6 md:px-8 lg:px-16 bg-gray-50 py-6 sm:py-8 md:py-10 lg:py-12">
            <div className="md:w-1/2 text-center  md:text-left ">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-josefin text-gray-800">
                Content{" "}
                <span className=" bg-gradient-to-r from-[#DB7EEC] to-[#42175B] bg-clip-text text-transparent">
                  that Walks
                </span>
                , Talks & Sells for you
              </h1>
              <p className="text-gray-600 mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg font-josefin">
                With QuillWhale, we craft irresistible content that blends
                storytelling, persuasive language, and stunning visuals to
                capture attention and drive conversions.
              </p>
              <p className="text-gray-600 mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg font-josefin">
                Watch your business soar to new heights!
              </p>
            </div>
            <div
              className="md:w-1/2 flex justify-center mt-6 md:mt-0"
              data-aos="flip-right"
            >
              <img
                src="82250 [Converted].png"
                alt="Illustration of content and marketing"
                className="max-w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>

        <Services />
      </section>

      {/* <BlogSection /> */}
    </>
  );
};

const ContactInfo = () => {
  const logos = [
    { src: "bcg-icon.svg", alt: "WordPress" },
    { src: "hsbc-icon.svg", alt: "Mailchimp" },
    { src: "redbus-icon.svg", alt: "Shopify" },
    { src: "icici-icon.svg", alt: "Meta" },

    { src: "thomas-icon.svg", alt: "HTML & CSS" },
    { src: "tata-icon.svg", alt: "Google Trends" },
    { src: "upgrad-icon.svg", alt: "SEMRush" },
    { src: "wazirx-icon.svg", alt: "Ubersuggest" },
    // { src: "googleanylics.webp", alt: "Google Analytics" },
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  return (
    <>
      <GoogleReviews />

      <div className="text-center flex flex-col items-center justify-center bg-white overflow-hidden">
        <h3 className="text-black text-2xl sm:text-3xl pt-10 font-josefin py-4">
          Our Clients
        </h3>

        <div className="w-full overflow-x-hidden ">
          <Slider
            {...sliderSettings}
            className="w-full max-w-screen-xl mx-auto px-4 py-5 sm:px-6 md:px-10 lg:px-20 xl:px-32"
          >
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-2 transition-transform duration-300 transform hover:scale-105"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-8 sm:h-8 md:h-6 lg:h-8 xl:h-6 object-contain"
                />
              </div>
            ))}
          </Slider>
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
    <>
      <div className="py-8 bg-white">
        <div className="flex items-center justify-center mb-8 px-4 sm:px-10 md:px-20 lg:px-40">
          <div className="flex-1 h-[1px] bg-black"></div>
          <h1 className="text-lg sm:text-xl md:text-2xl text-black font-josefin mx-4">
            Frequently Asked Questions
          </h1>
          <div className="flex-1 h-[1px] bg-black"></div>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-4 sm:px-10">
          <div className="flex justify-center items-center">
            <img
              src="third.png"
              alt="Earth"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain"
            />
          </div>

          <div className="text-center md:text-left">
            {/* <h2 className="text-xl sm:text-2xl font-josefin font-bold mb-4 mt-10">
              FAQ's
            </h2> */}
            <div className="space-y-4">
              <div className="border-b px-4  border-gray-300">
                <button
                  className="w-full text-left text-lg font-josefin text-black py-2 focus:outline-none"
                  onClick={() => toggleAccordion(0)}
                >
                  How can high-quality content help improve Your online
                  presence?
                </button>
                {openIndex === 0 && (
                  <div className="mt-2">
                    <p className="font-josefin text-gray-600">
                      The optimal content of the highest quality increases the
                      effectiveness of your online presence by persuading your
                      audience, gaining their trust, and growing the website's
                      position on the search engines. Establishing your brand as
                      an expert in your field draws more users in and raises the
                      number of people who visit your website for free, which
                      finally brings about the conversion of a sale.
                    </p>
                  </div>
                )}
              </div>

              <div className="border-b px-4  border-gray-300">
                <button
                  className="w-full text-left text-lg font-josefin py-2 focus:outline-none"
                  onClick={() => toggleAccordion(1)}
                >
                  Can you help with keyword research and integration?
                </button>
                {openIndex === 1 && (
                  <div className="mt-2">
                    <p className="font-josefin text-gray-600">
                      Yeah, sure, we can do a lot of things, including excellent
                      keyword research and integration. Observe the positions of
                      these keywords in your articles, how you present yourself,
                      and whether that directs people to your site, thus
                      allowing you to rank higher in search engine results.
                    </p>
                  </div>
                )}
              </div>

              <div className="border-b px-4 border-gray-300">
                <button
                  className="w-full text-left text-lg font-josefin py-2 focus:outline-none"
                  onClick={() => toggleAccordion(2)}
                >
                  Do you provide content for social media or email campaigns
                </button>
                {openIndex === 2 && (
                  <div className="mt-2">
                    <p className="font-josefin text-gray-600">
                      Absolutely! We create content articles for different
                      social media messages and e-mail strategies. We create
                      eye-catching content for Facebook, Twitter, LinkedIn, and
                      Instagram, as well as persuasive newsletters and
                      promotional and follow-up e-mail campaigns.
                    </p>
                  </div>
                )}
              </div>
              <div className="border-b px-4 border-gray-300">
                <button
                  className="w-full text-left text-lg font-josefin py-2 focus:outline-none"
                  onClick={() => toggleAccordion(3)}
                >
                  Do you have professional editors to review the content?
                </button>
                {openIndex === 3 && (
                  <div className="mt-2">
                    <p className="font-josefin text-gray-600">
                      Of course, we have a team of experienced editors who
                      carefully review articles, correct grammar and spelling
                      mistakes, and make the articles more comprehensible,
                      well-organized, and engaging. We pay close attention to
                      the specifics and subtleties of style and structure of the
                      writing itself, which, among other things, include
                      improving the readability and sharpness of the text and
                      providing scientific proofreading, which finally leads to
                      the perfect resolution of any grammar, spelling, and
                      structural errors.
                    </p>
                  </div>
                )}
              </div>
              <div className=" px-4 ">
                <button
                  className="w-full text-left text-lg font-josefin py-2 focus:outline-none"
                  onClick={() => toggleAccordion(4)}
                >
                  What is content writing, and why is it important for my
                  business?
                </button>
                {openIndex === 4 && (
                  <div className="mt-2">
                    <p className="font-josefin text-gray-600">
                      Writing content is concerned with writing articles, blogs,
                      product descriptions, and website copy, which, at the same
                      time, informs, engages, and persuades your audience. This
                      is one of the most important for your business because if
                      you want your business to reach new heights in the digital
                      world, you must be online. This method further develops
                      your bonding with your customer, a better SEO rank, and
                      better marketing results that will lead to more
                      conversions.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
