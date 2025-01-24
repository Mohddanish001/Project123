import React, { useState } from "react";
import axios from "axios";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    requirement: "",
  });
  const [success, setSuccess] = useState(null); 
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "https://apiwt.fourbrick.in/contact",
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
      if (response.ok) {
        setSuccess(true); // Set success to true
      } else {
        setSuccess(false); // Set success to false on failure
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSuccess(false);
    }finally {
      setLoading(false);
        }
  };

  const backgroundImage = "contact.jpg";
  return (
    <div className="mt-20">
      <div
        style={{ backgroundImage: `url(${backgroundImage})` }}
        className="bg-cover bg-center bg-no-repeat w-full h-48 sm:h-64 md:h-80 lg:h-96"
      ></div>

      <div className="p-8 bg-gray-100">
        
        <div className="flex flex-wrap lg:flex-nowrap">
          <form
            onSubmit={handleSubmit}
            className="max-w-lg mx-auto bg-white shadow-2xl p-6 rounded-3xl w-full lg:w-1/2 mb-6 lg:mb-0"
          >
            <div className="mb-4">
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
            <div className="mb-4">
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
            <div className="mb-4">
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
            <div className="mb-4">
              <label htmlFor="requirement" className="block font-medium mb-1">
                Your requirement *
              </label>
              <textarea
                id="requirement"
                value={formData.requirement}
                onChange={handleChange}
                placeholder="Brief us your requirement"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-40  bg-gradient-to-r from-[#DB7EEC] to-[#42175B] text-white py-2 rounded-full hover:bg-gradient-to-r hover:from-[#42175B] hover:to-[#DB7EEC]
                   transition-all duration-300 "
                   disabled={loading}
            >
          {loading ? "Sending..." : "Send Message"}
            </button>
            {success === true && (
  <p className="text-green-600 mt-4">
    Thank you for contacting us! Our team will contact you shortly.
  </p>
)}
{success === false && (
  <p className="text-red-600 mt-4">
    Failed to send message. Please try again.
  </p>
)}

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
