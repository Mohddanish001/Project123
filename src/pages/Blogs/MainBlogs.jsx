import React, { useState } from 'react';
import { Link } from "react-router-dom";

function MainBlogs() {
    const [expandedSection, setExpandedSection] = useState(null);

    const handleReadMore = (id) => {
        setExpandedSection(expandedSection === id ? "" : id);
    };

    const blogContent = {
        title: "Blog Section",
        sections: [
            {
                id: "section1",
                title: "Social Media Content Ideas to Boost Engagement",
                content: "Opened social media accounts, but still couldn’t keep up with the fast-paced digital environment of the 21st century? Well, it is difficult to understand what your current audience wants.",
                image: "blog1.jpeg",
                route: "/Social-Media-Content-Ideas",
            },
            {
                id: "section2",
                title: "How to develop a content strategy that aligns with your brand goals",
                content: "Creating content is something that every brand has to do if they want to connect to the audience. That’s why a well-thought-out content strategy is essential for any business that wants to achieve their goal and connect to their audience.",
                image: "Untitled design (47).png",
                route: "/How-to-Develop-a-Content-Strategy-That-Aligns-With-Your-Brand-Goals",
            },
            {
                id: "section3",
                title: "5 Elements Every Great Marketing Video Script Needs",
                content: "Scripting is the soul of the video. If words don’t make sense, then the video is completely baseless. Videos have always been an impactful marketing strategy.",
                image: "image19.png",
                route: "/5-Elements-Every-Great-Marketing-Video-Script-Needs",
            },
            // {
            //     id: "section4",
            //     title: "How to Create a Multilingual Website for Global Reach.",
            //     content: "Growing audience is one of the major reasons for which your website has to reach audiences all around the world...",
            //     image: "image 11.png",
            //     route: "/blog4",
            // },
            // {
            //     id: "section5",
            //     title: "App Maintenance: Why It’s as Important as Development",
            //     content: "Making a mobile app is the preliminary step of quite a long process. Most of the time,...",
            //     image: "image 11.png",
            //     route: "/blog5",
            // },
        ],
    };

    return (
        <>
            <div>
                   
                   <header className="relative h-[60vh] mt-8 md:h-80 text-white">
               {/* Video Background */}
               <video
                 autoPlay
                 loop
                 muted
                 className="absolute inset-0 w-full h-full object-cover opacity-50"
               >
                 <source
                   src="" // Provide the path to the video here
                   type="video/mp4"
                 />
               </video>
             
               {/* Overlay */}
               <div className="absolute inset-0 bg-gray-900 bg-opacity-30"></div>
             
               {/* Content */}
               <div className="relative z-10 text-center flex flex-col justify-center items-center h-full px-4">
                 {/* <p className="text-xl md:text-2xl lg:text-4xl uppercase font-josefin text-black">
                   Who We Are
                 </p> */}
                 <h1 className="text-4xl md:text-6xl lg:text-7xl mt-4 md:mt-6 font-josefin text-black">
                   BLOGS
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
                     to="/blogs"
                     className="hover:underline font-josefin text-black hover:text-white cursor-pointer no-underline text-sm md:text-base"
                   >
                     Blogs
                   </Link>
                 </div>
               </div>
             </header>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:mb-9 mt-12 px-4 sm:px-6 md:px-10 lg:px-12">
                    {blogContent.sections.map((section) => (
                        <div
                            key={section.id}
                            className="shadow-lg overflow-hidden rounded-lg transition-transform duration-300 transform hover:scale-105 group"
                        >
                            {/* Image */}
                            <div className="relative group">
                                <img
                                    src={section.image}
                                    alt={section.title}
                                    className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-110 group-hover:filter group-hover:blur-sm"
                                />

                                {/* Overlay Content */}
                                <div className="absolute inset-0  bg-black bg-opacity-60 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <p className="text-white font-poppins text-center text-lg mt-2 px-4">
                                        {expandedSection === section.id
                                            ? section.content
                                            : `${section.content.slice(0, 200)}...`}
                                    </p>
                                    {/* Link Button */}
                                    <Link
                                        to={section.route}
                                        className=" text-sm font-medium  mt-4 bg-gradient-to-r from-[#DB7EEC] to-[#42175B] text-white px-4 py-2 rounded-full hover:bg-gradient-to-r hover:from-[#42175B] hover:to-[#DB7EEC] transition-all duration-300"
                                    >
                                        Go to Full Blog
                                    </Link>
                                </div>

                                {/* Title Below Image */}
                                <div className="bg-gray-100 py-3 px-4 text-center">
                                    <h2 className="text-lg font-semibold text-gray-800 group-hover:opacity-0 transition-opacity duration-300">
                                        {section.title}
                                    </h2>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default MainBlogs;
