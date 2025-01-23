import React from "react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 md:px-8 font-josefin">
      <div className="max-w-7xl mx-auto rounded-md px-6 sm:px-8 md:px-12 lg:px-24 py-10 bg-white shadow-md">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
              Privacy Policy
            </h1>
            <p className="text-black text-justify text-base sm:text-lg">
              QuillWhale is the website's owner and operator. We respect your privacy and are committed to safeguarding your data. This privacy policy details what data we collect, how we use it, and the measures we take to ensure its confidentiality when you visit our website or provide us with information.
            </p>
          </div>
        </div>

        {/* Privacy Policy Content */}
        <div className="mb-10 px-2 sm:px-4 md:px-8 text-justify">
          <div className="mb-6">
            <h2 className="text-lg sm:text-xl text-black font-bold mb-2">Information We Collect:</h2>
            <p className="text-gray-600 text-sm sm:text-base">
              <strong>Personal Details:</strong> We collect your name, Email, phone number, and payment information.<br />
              <strong>Project Data:</strong> Logos, videos, images, and documents are content provided for the project, making up the project data.<br />
              <strong>Website Usage Data:</strong> Non-personally identifiable Information, such as IP addresses, page content, dates, times, language preferences, the site visited, and the length or frequency of the visit, is some of the information that cookies and analytics tools collect.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-lg sm:text-xl text-black font-bold mb-2">How We Use Your Data:</h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Offering creative outsourced solutions in content creation, social media management, and direct marketing. We process payments securely through third-party platforms. Sending project updates and information and other relevant offers. Here at QuillWhale, we have strict policies that prevent the selling, renting, or sharing your data with third parties except as required to deliver our services or when we are compelled by law.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-lg sm:text-xl text-black font-bold mb-2">Data Security:</h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Your data is stored securely and protected with advanced encryption. We treat all materials with the same respect and promise to use them only on your projects.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-lg sm:text-xl text-black font-bold mb-2">Your Rights:</h2>
            <p className="text-gray-600 text-sm sm:text-base">
              You can ask for a copy of your data, correct it, or erase it whenever you want. To enable these rights, contact us at <a href="mailto:info@quillwhale.com" className="text-blue-600">info@quillwhale.com</a>.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-lg sm:text-xl text-black font-bold mb-2">Changes to the Policy:</h2>
            <p className="text-gray-600 text-sm sm:text-base">
              We may update this policy as needed; any changes will be communicated through our website.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-lg sm:text-xl text-black font-bold mb-2">Contact Us:</h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Email: <a href="mailto:info@quillwhale.com" className="text-blue-600">info@quillwhale.com</a><br />
              Phone: +91 84485 74664<br />
              Website: <a href="https://www.quillwhale.com/" className="text-blue-600">https://www.quillwhale.com/</a>
            </p>
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="p-4 sm:p-6 md:p-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4  bg-gradient-to-r from-[#DB7EEC] to-[#42175B]  text-white py-6 sm:py-8 md:py-10 px-6 sm:px-10 md:px-16 lg:px-28 rounded-md shadow-md">
            <h2 className="text-lg sm:text-2xl md:text-3xl text-center md:text-start font-josefin">
              <span className="font-bold">Have any concerns about your privacy?</span>
              <br className="hidden md:block" /> Feel free to reach out to us!
            </h2>
            <Link to="/contact">
              <button
                className="mt-4 md:mt-0 bg-white  bg-gradient-to-r from-[#DB7EEC] to-[#42175B] font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-md hover:bg-gray-100 transition hover:bg-gradient-to-r hover:from-[#42175B] hover:to-[#DB7EEC] transition-all duration-300"
              >
                Contact Us Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
