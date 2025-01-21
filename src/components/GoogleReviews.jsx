import { useState, useEffect } from "react";

const reviews = [
    {
      name: "James Anderson",
      rating: 4.5,
      review: "WriteOut has been a game-changer for my business! Their team delivers top-notch content tailored perfectly to my needs. Whether it’s blogs, website copy, or newsletters, their creativity and attention to detail shine through. Highly recommended.",
    },
    {
      name: "Michael Johnson",
      rating: 4.0,
      review: "WriteOut exceeded my expectations with their professional approach and high-quality content. They understand the essence of my brand and communicate it effectively. Their quick turnaround time is the cherry on top!",
    },
    {
      name: "David Miller",
      rating: 5.0,
      review: "I’ve worked with many content agencies, but WriteOut stands out. Their writers not only have a great command of language but also bring fresh, engaging ideas to the table. Their services are worth every penny!",
    },
    {
      name: "Robert Wilson",
      rating: 4.2,
      review: "WriteOut has been my go-to content partner for months now. Their ability to adapt to different tones and styles makes them unique. Every piece of content they deliver aligns perfectly with my brand's voice. Fantastic team!",
    },
    {
      name: "Oliver Bennett",
      rating: 5.0,
      review: "WriteOut has transformed the way my business communicates online. Their expertise in SEO content writing has helped my website rank higher, and their articles are always engaging and informative. I couldn’t be happier with their service!",
    },
    {
      name: "Emily Clarke",
      rating: 4.5,
      review: "As someone who runs a blog, finding quality content writers was always a challenge—until I discovered WriteOut. Their team consistently produces well-researched, captivating content that keeps my readers coming back. Brilliant service!",
    },
    {
      name: "Harry Morgan",
      rating: 4.7,
      review: "WriteOut’s web content writing service has been outstanding. They perfectly captured the essence of my brand and created content that resonates with my audience. Highly recommended for anyone looking to elevate their online presence!",
    },
    {
      name: "Sophie Turner",
      rating: 5.0,
      review: "The team at WriteOut is phenomenal! Their article writing service is thorough, creative, and perfectly optimized for SEO. It’s a pleasure working with a company that genuinely understands the power of words.",
    },
    {
      name: "James Carter",
      rating: 4.8,
      review: "WriteOut delivered exactly what I needed—quality content that drives traffic. Their attention to detail and ability to craft compelling SEO content has given my website a competitive edge. A+ service!",
    },
    {
      name: "Charlotte Davies",
      rating: 4.5,
      review: "I’ve been using WriteOut for my e-commerce site, and they’ve truly exceeded my expectations. Their product descriptions and blogs are not only persuasive but also beautifully written. Excellent work every time!",
    },
    {
      name: "William Hughes",
      rating: 4.6,
      review: "WriteOut has a fantastic team of writers who bring creativity and professionalism to every project. Their articles are well-structured and full of valuable insights, which has helped me establish authority in my niche. Highly impressed!",
    },
    {
      name: "Amelia Walker",
      rating: 5.0,
      review: "From SEO content to web copy, WriteOut has delivered nothing but excellence. Their work is timely, engaging, and always aligned with my goals. I’d recommend them to anyone looking for top-tier content writing services.",
    },
    {
      name: "George Wilson",
      rating: 4.8,
      review: "I’ve worked with WriteOut for a few months now, and they’ve been exceptional in creating content that speaks to my target audience. Their SEO-friendly articles have boosted my website traffic significantly. Superb service!",
    },
    {
      name: "Isabella Foster",
      rating: 5.0,
      review: "WriteOut is simply the best when it comes to content writing. Their creativity, attention to detail, and understanding of SEO are unmatched. I couldn’t ask for a better partner to support my business goals.",
    },
    {
      name: "Aarav Patel",
      rating: 4.9,
      review: "WriteOut has truly elevated my website’s content. Their SEO-focused writing has boosted my search engine rankings, and their articles are always relevant, engaging, and well-researched. A fantastic team to work with!",
    },
    {
      name: "Priya Sharma",
      rating: 4.7,
      review: "I’ve been using WriteOut for my blog’s content, and I’m amazed at their consistency and quality. Their ability to blend creativity with SEO strategies has helped me build a loyal reader base. Highly recommended!",
    },
    {
      name: "Ravi Kumar",
      rating: 4.8,
      review: "The web content that WriteOut provides is nothing short of exceptional. They understand the nuances of SEO and deliver articles that are informative and keyword-optimized. I’ve seen significant improvements in my website traffic!",
    },
    {
      name: "Ananya Gupta",
      rating: 4.9,
      review: "WriteOut’s team has delivered outstanding content for my business. They took the time to understand my brand’s voice and produced SEO-rich content that resonates with my audience. Their commitment to quality is evident in every piece!",
    },
    {
      name: "Vikram Singh",
      rating: 5.0,
      review: "Working with WriteOut has been a game-changer for my business. Their articles are insightful, well-written, and always tailored to my needs. Their SEO expertise has made a real difference in driving traffic to my site!",
    },
    {
      name: "Neha Reddy",
      rating: 4.6,
      review: "I’ve had the pleasure of working with WriteOut for several months, and I’m always impressed by their ability to deliver top-notch SEO content on time. Their articles have helped me establish a stronger online presence and connect with my audience.",
    },
    {
      name: "Arjun Joshi",
      rating: 4.7,
      review: "WriteOut’s SEO content writing has had a remarkable impact on my website. Their content is not only optimized for search engines but also deeply informative and engaging. I’ve seen a significant rise in my online visibility.",
    },
    {
      name: "Kavya Desai",
      rating: 4.8,
      review: "If you need professional content that helps your business stand out, WriteOut is the company to choose. Their SEO articles have helped me reach a wider audience, and their content writing services are second to none.",
    },
    {
      name: "Mohit Mehta",
      rating: 4.6,
      review: "I’ve worked with several content writing agencies, but WriteOut stands out with its professionalism and attention to detail. Their SEO-focused writing and well-structured web content have contributed significantly to my business’s growth.",
    },
    {
      name: "Simran Kapoor",
      rating: 5.0,
      review: "WriteOut’s content writing service is a real asset to my brand. Their ability to create SEO-friendly content that also speaks to my audience has helped improve my site’s rankings and keep my readers engaged. Truly impressive!",
    }
  ];
  

const GoogleReviews = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  // Function to slide to the next review
  const nextReview = () => {
    setCurrentReviewIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to slide to the previous review
  const prevReview = () => {
    setCurrentReviewIndex(
      (prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1)
    );
  };

  // Set up auto-slide effect
  useEffect(() => {
    const interval = setInterval(nextReview, 5000); // 5000 ms = 5 seconds

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="">
      <div
        className="w-full h-auto text-center bg-cover bg-center"
        style={{
          backgroundImage: "url('bgmmain.jpeg')",
        }}
      >
        <h2 className="text-3xl font-bold mb-6 py-4">What Our Customers Are Saying</h2>

        <div className="relative flex justify-center items-center py-20">
          <div className="w-full sm:w-[80%] md:w-[70%] lg:w-[60%] bg-white p-6 rounded-lg shadow-xl">
            <div className="flex items-center justify-center mb-4">
              <img
                src="google-search-logo_578229-273.png"
                alt="Google Logo"
                className="h-6 bg-transparent mr-2"
              />
            </div>

            <div className="mb-4">
              {/* Rating Display */}
              <div className="flex items-center justify-center">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-6 w-6 ${
                      index < reviews[currentReviewIndex].rating
                        ? "text-yellow-500"
                        : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 17.27l4.18 2.73-1.64-5.03L20 9.24l-5.19-.42L12 2 9.19 8.82 4 9.24l3.46 5.73-1.64 5.03L12 17.27z"
                    />
                  </svg>
                ))}
              </div>
              <span className="text-xl font-semibold">{reviews[currentReviewIndex].rating} / 5</span>
            </div>

            <p className="text-lg mb-4 italic">"{reviews[currentReviewIndex].review}"</p>

            <div className="text-lg font-semibold">{reviews[currentReviewIndex].name}</div>

            {/* Sliding Controls */}
            <div className="absolute top-1/2 left-4 sm:left-10 md:left-20 lg:left-56 transform -translate-y-1/2 px-2">
              <button
                onClick={prevReview}
                className="bg-black text-white rounded-full px-4 py-2"
              >
                &#60;
              </button>
            </div>
            <div className="absolute top-1/2 right-4 sm:right-10 md:right-20 lg:right-56 transform -translate-y-1/2 px-2">
              <button
                onClick={nextReview}
                className="bg-black text-white rounded-full px-4 py-2"
              >
                &#62;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
