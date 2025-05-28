import React, { useState } from "react";
import axios from "axios";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import Select from "react-select";
import countries from "i18n-iso-countries";
import en from "i18n-iso-countries/langs/en.json";

// Register country names
countries.registerLocale(en);

// Country Options
const countryOptions = [
  { code: "IN", label: "🇮🇳 India", value: "+91", maxLength: 10 },
  { code: "US", label: "🇺🇸 USA", value: "+1", maxLength: 10 },
  { code: "GB", label: "🇬🇧 UK", value: "+44", maxLength: 10 },
  { code: "AU", label: "🇦🇺 Australia", value: "+61", maxLength: 9 },
];

export const Contact = () => {
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
    if (id === "email" && !/^\S+@\S+\.\S+$/.test(value)) return;
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

  const backgroundImage = "contact.jpg";

  return (
    <div className="mt-20 ">
      <div
        style={{ backgroundImage: `url(${backgroundImage})` }}
        className="bg-cover bg-center bg-no-repeat w-full h-48 sm:h-64 md:h-80 lg:h-96"
      ></div>

      <div className="p-8 bg-gray-100 flex flex-col items-center">
        {/* Container for Form & Contact Details */}
        <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center lg:items-start justify-center gap-12">
          {/* Contact Form (Increased width) */}
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

          {/* Contact Details Section (Aligned Right) */}
          <div className="w-full lg:w-2/5 flex flex-col justify-between">
            <div className="text-center lg:text-start">
              <p className="mb-2 font-josefin">
                <span className="font-bold">Address:</span> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, quia?
              </p>
              <p className="text-black mb-2 font-josefin flex items-center justify-center lg:justify-start gap-2">
                <FaPhoneAlt />
                +91 123456789
              </p>
              <p className="text-black font-josefin flex items-center justify-center lg:justify-start gap-2">
                <FaEnvelope />
                
                  test@quillwhale.com
               
              </p>
            </div>
            <div className="mt-4">
              <iframe
                title="Location Map"
                               src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d142557.42016481556!2d77.94652302924904!3d29.09409224754969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1748403175698!5m2!1sen!2sin"

                // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3366.668574207347!2d77.31452569999999!3d28.5840224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5690a6731fd%3A0x432b6ff72b9ab2f4!2sFourbrick%20Technology%20OPC%20Pvt.%20Ltd.!5e1!3m2!1sen!2sin!4v1737546047282!5m2!1sen!2sin"
                className="w-full h-64 border-0 rounded-lg"
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
