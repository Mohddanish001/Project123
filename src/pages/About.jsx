import React, { useEffect, useState } from "react";
import { TiTick } from "react-icons/ti";
import "aos/dist/aos.css";
import AOS from "aos";
import axios from "axios";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export const About = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    requirement: "",
  });
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://apiig.fourbrick.in/contact",
        formData, // Data to be sent in JSON format
        {
          headers: {
            "Content-Type": "application/json", // Explicitly set the content type
          },
        }
      );
      console.log("Response:", response.data);

      // Reset the form fields
      setFormData({
        name: "",
        email: "",
        contact: "",
        requirement: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
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
              <img src="about1.png" alt="Illustration" className="w-full" />
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
                    <TiTick className="border border-[#42175B] bg-gradient-to-r from-[#DB7EEC] to-[#42175B]  h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 text-white rounded-full" />
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
            <h2 className="text-5xl font-josefin font-bold mb-4">
              We Create{" "}
              <span className="font-josefin bg-gradient-to-r from-[#DB7EEC] to-[#42175B] bg-clip-text text-transparent">
                Amazing
              </span>{" "}
              Content
              <span className="bg-gradient-to-r from-[#DB7EEC] to-[#42175B] bg-clip-text text-transparent">
                !
              </span>
            </h2>
            {/* Add Text Content */}
            <p className="text-gray-700 font-josefin mb-4">
              Welcome to QuillWhale – where words come to life, and ideas take
              flight! We're not just a content provider; we're your creative
              partner in building captivating, impactful, and memorable
              narratives. Whether it's blog posts, articles, social media
              scripts, or website copy, our expert team crafts tailor-made
              content that not only speaks to your audience but also leaves a
              lasting impression.
            </p>
            <p className="text-gray-700 font-josefin mb-4">
              At QuillWhale, we know that behind every great business is a great
              story – and we’re here to help you tell yours. We bring passion,
              precision, and personality to every piece of content, ensuring
              that your voice stands out in today’s noisy digital world. From
              compelling articles to catchy social media scripts, we specialize
              in turning your ideas into engaging, results-driven written
              content.
            </p>
            <p className="text-gray-700 font-josefin mb-4">
              What sets us apart? It’s our unwavering commitment to quality,
              creativity, and collaboration. We take the time to understand your
              goals, audience, and brand tone, so we can deliver content that
              truly reflects who you are. We’re not just about writing; we’re
              about writing right to help your business grow, connect, and
              thrive. Join the QuillWhale family today and let us bring your
              content vision to life. Whether you're a startup or an established
              brand, we've got the perfect words waiting for you! Let’s create
              something extraordinary together.
            </p>
            <p className="text-gray-700 font-josefin mb-4">
              We’re not just about writing; we’re about writing right to help
              your business grow, connect, and thrive. Join the QuillWhale
              family today and let us bring your content vision to life. Whether
              you're a startup or an established brand, we've got the perfect
              words waiting for you! Let’s create something extraordinary,
              together.
            </p>
          </div>
        </div>

        {/* Steps Section */}
        <div className="mt-16 px-10 grid md:grid-cols-3 gap-8">
          {["Get Started", "Requirement", "Final Approval"].map(
            (title, index) => (
              <div
                key={index}
                className="bg-white shadow-md p-6 rounded-md relative"
                data-aos="zoom-in"
              >
                <span className="absolute top-3 -left-3 border border-[#42175B] p-2 bg-gradient-to-r from-[#DB7EEC] to-[#42175B] text-white">
                  {index + 1}
                </span>
                <h4 className="text-2xl font-josefin font-bold mb-2">{title}</h4>
                <p className="text-gray-700 font-josefin  ">
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
      <div className="p-8 bg-gray-100">
        <div className="flex flex-wrap lg:flex-nowrap">
          <form
            onSubmit={handleSubmit}
            className="max-w-lg mx-auto bg-white shadow-2xl  p-6 rounded-3xl w-full lg:w-1/2 mb-6 lg:mb-0"
          >
            <div className="mb-4 font-josefin">
              <label htmlFor="name" className="block font-medium mb-1">
                Your name *
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name here"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4 font-josefin">
              <label htmlFor="email" className="block font-medium mb-1">
                Email *
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email here"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4 font-josefin">
              <label htmlFor="contact" className="block font-medium mb-1">
                Contact Number *
              </label>
              <input
                type="text"
                id="contact"
                value={formData.contact}
                onChange={handleChange}
                placeholder="Enter your number"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4 font-josefin">
              <label htmlFor="requirement" className="block font-medium mb-1">
                Your requirement *
              </label>
              <textarea
                id="requirement"
                value={formData.requirement}
                onChange={handleChange}
                placeholder="Brief us your requirement"
                className="w-full px-4 py-2 font-josefin border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full sm:w-20 font-josefin bg-gradient-to-r from-[#DB7EEC] to-[#42175B] text-white py-2 rounded-full hover:bg-gradient-to-r hover:from-[#42175B] hover:to-[#DB7EEC]
                   transition-all duration-300 "
            >
              Submit
            </button>
          </form>
          <div className="w-full lg:w-1/2 flex flex-col justify-between  lg:mt-0">
            <div></div>
            <div className="text-start">
              <p className="mb-2 font-josefin">
                <span className="font-bold">Address:</span> C-65, 1st Floor
                Sector - 02, Noida Uttar Pradesh - 201301 India
              </p>
              <p className="text-black mb-2 font-josefin flex items-center gap-2">
                {/* Phone Icon */}
                <FaPhoneAlt />
                +91 84485 74664
              </p>
              <p className="text-black font-josefin  flex items-center gap-2">
                {/* Email Icon */}
                <FaEnvelope />
                <a
                  href="mailto:info@quillwhale.com"
                  className="text-black hover:text-gray-300 font-josefin"
                >
                  info@quillwhale.com
                </a>
              </p>
              {/* <p>
                <span className="font-bold">Email:</span>{" "}
                <a
                  href="mailto:fourbrick@gmail.com"
                  className="text-blue-500 underline"
                >
                  fourbrick@gmail.com
                </a>
              </p> */}
            </div>
            <div className="mt-4">
              <iframe
                title="Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3366.668574207347!2d77.31452569999999!3d28.5840224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5690a6731fd%3A0x432b6ff72b9ab2f4!2sFourbrick%20Technology%20OPC%20Pvt.%20Ltd.!5e1!3m2!1sen!2sin!4v1737546047282!5m2!1sen!2sin"
                className="w-full h-64 border-0"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
