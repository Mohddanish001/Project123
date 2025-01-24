import React, { useState, useEffect } from "react";
import { AiOutlineFileText, AiOutlineGlobal } from "react-icons/ai"; // White Paper, Hindi Writing
import { BsBook, BsNewspaper, BsPencilSquare } from "react-icons/bs"; // Editing, E-Book, Newsletter
import { FaBlog, FaPenNib, FaProductHunt, FaSearch } from "react-icons/fa"; // Product Description, Blog Writing, Copywriting, SEO Writing
import { FiHeadphones, FiMail } from "react-icons/fi"; // Website Content, Emailers
import { GiFeather, GiNewspaper } from "react-icons/gi";
import { MdContentPaste } from "react-icons/md";
import { IoIosPeople } from "react-icons/io"; // FAQ's
import { SiStudyverse } from "react-icons/si";
// import { MdOutlineCaseStudy, MdOutlineTechnicalWriting } from "react-icons/md"; // Technical Writing, Case Study
import { TfiWrite } from "react-icons/tfi"; // Article Writing
import { Link } from "react-router-dom";

const gridItems2 = [
  {
    icon: <TfiWrite />,
    title: "Article Writing",
    description:
      "Tailored solutions for our clients with unique needs and requirements.",
  },
  {
    icon: <FaProductHunt />,
    title: "Product Description",
    description:
      "Offering product descriptions that your customers find irresistible.",
  },
  {
    icon: <FiHeadphones />,
    title: "Website Content",
    description:
      "Website content that helps you target the right audience",
  },
  {
    icon: <FaBlog />,
    title: "Blog Writing",
    description:
      "SEO-Optimized blogs help you rank higher on SERP",
  },
  {
    icon: <BsPencilSquare />,
    title: "Editing & Proofreading",
    description:
      "proofreading services for your content to be always error-free",
  },
  {
    icon: <FaSearch />,
    title: "SEO Writing",
    description:
      "Extensive keyword research helps us curate content optimized for you",
  },
  {
    icon: <AiOutlineFileText />,
    title: "White Paper",
    description:
      "Find hundred of orginial and catchy blogs based on your topic.",
  },
  {
    icon: <FaPenNib />,
    title: "Copy Writing",
    description:
      "Building a robust digital presence and creating compelling ad copy.",
  },
  {
    icon: <BsPencilSquare />,
    title: "Article Rewriting",
    description:
      "We strategize article and blog ideas and produce high-quality content",
  },
  {
    icon: <MdContentPaste />,
    title: "Technical Content Writing",
    description:
      "Complicated ideas presented using our niche-specific writers.",
  },
  {
    icon: <GiNewspaper />,
    title: "Press Release",
    description:
      "Generate media coverage and increase brand visibility.",
  },
  {
    icon: <FiMail />,
    title: "Emailers",
    description:
      "Meticulous e-mailers that help you generate quality leads.",
  },
  {
    icon: <IoIosPeople />,
    title: "FAQ's",
    description:
      "Inform and guide your clients through our impeccable FAQ",
  },
  {
    icon: <BsBook />,
    title: "E-book",
    description:
      "Our effective e-books help you reach untapped markets digitally.",
  },
  {
    icon: <SiStudyverse />,
    title: "Case Study",
    description:
      "Build trust among your customers using well-researched case studies",
  },
  {
    icon: <GiFeather />,
    title: "Magazine Writing",
    description:
      "Pool in niche content to market, inform and educate your clients.",
  },
  {
    icon: <AiOutlineGlobal />,
    title: "Hindi Content Writing",
    description:
      "Target 500 million+ Hindi speakers using Quality content.",
  },
  {
    icon: <BsNewspaper />,
    title: "Newsletter Writing",
    description:
      "Providing thorough newsletters to update your clients, subscribers.",
  },
];

const SliderComponent = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = 6;
  const totalPages = Math.ceil(gridItems2.length / cardsPerPage);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Increased the interval to 5000ms (5 seconds)
    return () => clearInterval(interval);
  }, [currentPage]);

  const handleNext = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  // Calculate visible items based on the current page
  const visibleItems = gridItems2.slice(
    currentPage * cardsPerPage,
    currentPage * cardsPerPage + cardsPerPage
  );

  return (
    <div className="container mx-auto  px-10 mt-16">
      <h2 className="text-2xl md:text-3xl  text-center mb-4 font-josefin">
        Build premium apps with advanced features
      </h2>
      <p className="text-center text-gray-600 mb-8 font-josefin">
        Deliver exceptional experiences with powerful functionalities that
        enhance usability and drive engagement.
      </p>

      {/* Card Slider */}
      <div className="overflow-hidden relative">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:mx-32 transition-transform duration-1000" // Increased duration to 1000ms (1 second)
        >
          {visibleItems.map((item, index) => (
            <div
              key={index}
              className="p-6 border border-gray-300 rounded-lg hover:bg-gradient-to-r from-purple-200 via-purple-300 to-purple-200 hover:text-black shadow-md hover:shadow-lg transition"
            >
              <div className="flex items-center justify-center border border-gray-300 shadow-lg w-10 h-10 rounded-lg bg-purple-50">
                <div className="text-3xl text-blue-400">{item.icon}</div>
              </div>

              <h3 className="text-lg font-semibold mb-2 font-josefin">
                {item.title}
              </h3>
              <p className="text-sm text-gray-700 font-josefin">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Buttons */}
      <div className="flex justify-center mt-6 space-x-4">
        {[...Array(totalPages)].map((_, pageIndex) => (
          <button
            key={pageIndex}
            onClick={() => handlePageChange(pageIndex)}
            className={`px-2 h-2 w-2 rounded-full ${
              pageIndex === currentPage
                ? "bg-black text-white"
                : "bg-gray-400 text-black"
            } hover:bg-black hover:text-white transition`}
          />
        ))}
      </div>
    </div>
  );
};

export default SliderComponent;
