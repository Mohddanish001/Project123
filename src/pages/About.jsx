import React, { useEffect, useState } from "react";
import { TiTick } from "react-icons/ti";
import "aos/dist/aos.css";
import AOS from "aos";
import axios from "axios";
// import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
// import React, { useState } from "react";
// import axios from "axios";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import Select from "react-select";
import countries from "i18n-iso-countries";
import en from "i18n-iso-countries/langs/en.json";



countries.registerLocale(en);

// Country Options
const countryOptions = [
  { code: "IN", label: "🇮🇳 India", value: "+91", maxLength: 10 },
  { code: "US", label: "🇺🇸 USA", value: "+1", maxLength: 10 },
  { code: "GB", label: "🇬🇧 UK", value: "+44", maxLength: 10 },
  { code: "AU", label: "🇦🇺 Australia", value: "+61", maxLength: 9 },
];


export const About = () => {
 const [formData, setFormData] = useState({
     name: "",
     email: "",
     contact: "",
     requirement: "",
     type: "1",
     countryCode: "+91",
   });
  const [selectedCountry, setSelectedCountry] = useState(countryOptions[0]); // Default: India
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === "name" && !/^[a-zA-Z ]*$/.test(value)) return;
//      if (id === "email" && !/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(value)) {
//   return;
// }
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };


 
  // Handle Phone Number Change
  const handlePhoneChange = (value) => {
    if (!value || value.length <= selectedCountry.maxLength + selectedCountry.value.length) {
      setFormData((prevData) => ({ ...prevData, contact: value }));
    }
  };

  // Handle Country Change
  const handleCountryChange = (selected) => {
    setSelectedCountry(selected);
    setFormData((prevData) => ({
      ...prevData,
      countryCode: selected.value,
      contact: "",
    }));
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("https://apiwt.fourbrick.in/contact", formData, {
        headers: { "Content-Type": "application/json" },
      });

      setFormData({
        name: "",
        email: "",
        contact: "",
        requirement: "",
        type: "1",
        countryCode: "+91",
      });

      setSuccess(response.status >= 200 && response.status < 300);
    } catch (error) {
      setSuccess(false);
    } finally {
      setLoading(false);
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
    <header className="relative h-[60vh] md:h-80 text-white">
  {/* Video Background */}
  <video
    autoPlay
    loop
    muted
    className="absolute inset-0 w-full h-full object-cover opacity-50"
  >
    <source
      src="3255275-uhd_3840_2160_25fps.mp4"
      type="video/mp4"
    />
  </video>

  {/* Overlay */}
  <div className="absolute inset-0 bg-gray-900 bg-opacity-30"></div>

  {/* Content */}
  <div className="relative z-10 text-center flex flex-col justify-center items-center h-full px-4">
    <p className="text-xl md:text-2xl lg:text-4xl uppercase font-josefin text-black">
      Who We Are
    </p>
    <h1 className="text-4xl md:text-6xl lg:text-9xl mt-4 md:mt-6 font-josefin text-black">
      ABOUT US
    </h1>
    <div className="flex justify-center items-center mt-6 md:mt-10 space-x-2">
      <Link
        to="/"
        className="hover:underline font-josefin text-black hover:text-white cursor-pointer no-underline text-sm md:text-base"
      >
        Home
      </Link>
      <span className="text-black text-sm md:text-base">&gt;</span>
      <Link
        to="/about"
        className="hover:underline font-josefin text-black hover:text-white cursor-pointer no-underline text-sm md:text-base"
      >
        About
      </Link>
    </div>
  </div>
</header>

      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row gap-8 p-4">
        <div className="md:w-1/2 px-4 md:px-10" data-aos="fade-up">
            {/* <h1 className="text-xl font-bold font-josefin mb-2">About Us</h1> */}
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
          <div className="flex flex-col md:w-1/2 gap-8" data-aos="fade-down">
           
           
            <div>
              <img src="about1.png" alt="Illustration" className="w-full" />
            </div>
            <div className="px- md:px-20 font-josefin">
              {/* Points */}
              {[
                "We Create Premium Quality Content",
                "We Focus on Client’s Needs and Satisfaction",
                "We Deliver On Time",
              ].map((text, index) => (
                <h1
                  key={index}
                  className="flex items-center gap-2 text-base sm:text-md md:text-md font-josefin lg:text-md mb-2"
                >
                  <span>
                    <TiTick className="=  border-[#42175B] bg-gradient-to-r from-[#DB7EEC] to-[#42175B]  h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 text-white rounded-full" />
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
        
        
        </div>

        {/* Steps Section */}
        <div className="mt-16 lg:px-20 grid md:grid-cols-3 gap-8">
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
      <div className="lg:px-24 mb-10 bg-gray-100">
        <div className="flex flex-wrap gap-14 lg:flex-nowrap">
        <form onSubmit={handleSubmit} className="w-full lg:w-2/5 bg-white shadow-2xl p-8 rounded-3xl">
            <div className="mb-4">
              <label className="block font-medium mb-1">Your Name *</label>
              <input type="text" id="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" required />
            </div>
            <div className="mb-4">
              <label className="block font-medium mb-1">Email *</label>
              <input type="email" id="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" required />
            </div>
            <div className="mb-4">
              <label className="block font-medium mb-1">Contact Number *</label>
              <div className="flex items-center">
                <PhoneInput
                  international
                  defaultCountry={selectedCountry.code.toLowerCase()}
                  value={formData.contact}
                  onChange={handlePhoneChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block font-medium mb-1">Your Requirement *</label>
              <textarea id="requirement" value={formData.requirement} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" rows="4" required></textarea>
            </div>

            <button type="submit" className="w-40 bg-gradient-to-r from-[#DB7EEC] to-[#42175B] text-white py-2 rounded-full transition-all duration-300" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>

            {success === true && <p className="text-green-600 mt-4">Thank you! We will contact you soon.</p>}
            {success === false && <p className="text-red-600 mt-4">Failed to send message. Please try again.</p>}
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
