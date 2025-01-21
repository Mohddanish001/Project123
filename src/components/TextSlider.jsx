import React, { useEffect, useRef, useState } from "react";

const TextSlider = () => {
  const sliderRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false); // Track hover state

  useEffect(() => {
    const slider = sliderRef.current;

    let interval = null;

    // Start the slider animation
    const startSlider = () => {
      interval = setInterval(() => {
        if (slider) {
          // Scroll the content to the left
          if (slider.scrollLeft >= slider.scrollWidth / 2) {
            slider.scrollLeft = 0; // Reset for seamless looping
          } else {
            slider.scrollLeft += 1; // Adjust this value to control the scrolling speed
          }
        }
      }, 10); // Lower interval for smoother scrolling
    };

    // Stop the slider animation
    const stopSlider = () => {
      clearInterval(interval);
    };

    if (!isHovering) {
      startSlider();
    } else {
      stopSlider();
    }

    // Cleanup on unmount
    return () => {
      clearInterval(interval);
    };
  }, [isHovering]); // Re-run the effect when hovering changes

  const items = [
    "SEO-friendly Content Writing",
    "Blog & Articles Writing",
    "Website Content Writing",
    "Copywriting for Ads",
    "Product Descriptions",
    "Social Media Content",
    "Email Marketing Copy",
    "Press Releases",
    "Ghostwriting",
    "Content Editing & Error-free",
    "Script & Content Marketing",
  ];

  return (
    <>
      <div
        className="w-[38rem] flex justify-center items-center h-10 overflow-hidden relative top-10"
        style={{ borderRadius: "50px" }}
        onMouseEnter={() => setIsHovering(true)} // Stop slider on hover
        onMouseLeave={() => setIsHovering(false)} // Start slider when hover ends
      >
        <div
          ref={sliderRef}
          className="flex items-center whitespace-nowrap px-4 py-2 transition-all"
          style={{ scrollBehavior: "smooth" }}
        >
          {/* Original and duplicated content for seamless looping */}
          <div className="flex gap-4">
            {items.concat(items).map((item, index) => (
              <a
                key={index}
                href={`/${item.toLowerCase().replace(/ /g, "-")}`}
                className="text-white font-josefin px-6 py-2 rounded-full bg-gray-900 transition-colors cursor-pointer"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TextSlider;
