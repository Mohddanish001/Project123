import React from "react";

export const Contact = () => {
  const backgroundImage = "contact.webp";
  return (
    <div className="mt-20">
      <div
        style={{ backgroundImage: `url(${backgroundImage})` }}
        className="bg-cover bg-center bg-no-repeat h-96 w-full "
      ></div>

     
      <div className="p-8 bg-gray-100">
        {/* <h2 className="text-2xl text-[#29293a] font-bold ml-14 mb-4">
          We'd love to hear from you!
        </h2>
        <p className="text-left mb-6 ml-14">
          Brief us your requirements below, and let's connect. We won't spam you
          :)
        </p> */}
        <div className="flex flex-wrap lg:flex-nowrap">
          <form className="max-w-lg mx-auto bg-white shadow-2xl p-6 rounded-lg w-full lg:w-1/2 mb-6 lg:mb-0">
            <div className="mb-4">
              <label htmlFor="name" className="block font-medium mb-1">
                Your name *
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name here"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block font-medium mb-1">
                Email *
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email here"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="contact" className="block font-medium mb-1">
                Contact Number *
              </label>
              <input
                type="text"
                id="contact"
                placeholder="Enter your number"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="requirement" className="block font-medium mb-1">
                Your requirement *
              </label>
              <textarea
                id="requirement"
                placeholder="Brief us your requirement"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full sm:w-20 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Submit
            </button>
          </form>
          <div className="w-full lg:w-1/2 flex flex-col justify-between  lg:mt-0">
            <div>
              {/* <p className="text-sm text-gray-600">
                By providing your details, you consent to V2Infotech collecting
                and safeguarding your data per our{" "}
                <a href="/privacy-policy" className="text-blue-500 underline">
                  Privacy Policy
                </a>
                .
              </p> */}
            </div>
            <div className="text-start">
              <p className="mb-2">
                <span className="font-bold">Address:</span> C-65, 1st Floor
                Sector - 02, Noida Uttar Pradesh - 201301 India
              </p>
              <p className="mb-2">
                <span className="font-bold">Phone:</span> +91 0909090449
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.363758392!2d77.38589415000003!3d28.6286326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce54e8df5a2cd%3A0x4e8cdee408c1a5fd!2sV2%20Infotech%20-%20Website%20Design%20and%20Development!5e0!3m2!1sen!2sin!4v1673452133606!5m2!1sen!2sin"
                className="w-full h-64 border-0"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* <div className=" w-full py-10 px-4 sm:px-6 lg:px-12 mt-6">
        <div className="text-center mb-12">
          <h2 className="font-semibold text-[#29293a] text-xl sm:text-3xl">
            Reviewed By
          </h2>
          <div className="flex flex-wrap justify-center items-center  mt-8 gap-6 sm:gap-8">
            {[
              { name: "Clutch", rating: 4.6 },
              { name: "AppFutura", rating: 4.7 },
              { name: "PeoplePerHour", rating: 4.7 },
              { name: "GoodFirms", rating: 4.8 },
              { name: "Extract", rating: 4.9 },
              { name: "Upwork", rating: 4.6 },
            ].map((review, index) => (
              <div key={index} className="flex flex-col items-center">
                <span className="text-lg sm:text-xl font-medium text-[#29293a]">
                  {review.name}
                </span>
                <p className="mt-1 text-gray-400 text-sm sm:text-base">
                  {review.rating} ★
                </p>
              </div>
            ))}
          </div>
        </div>

       
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            { label: "Clients Served", value: "60+", icon: "🤝" },
            { label: "Delivered Projects", value: "500+", icon: "📋" },
            { label: "Years of Experience", value: "15+", icon: "⭐" },
            { label: "Engineering Team", value: "50+", icon: "👨‍💻" },
          ].map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg"
            >
              <div className="text-3xl sm:text-4xl">{stat.icon}</div>
              <p className="text-lg sm:text-2xl font-bold text-blue-400 mt-2">
                {stat.value}
              </p>
              <p className="text-gray-300 mt-1 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};
