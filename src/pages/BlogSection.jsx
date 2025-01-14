import React, { useState } from "react";
import { Header } from "../components/Header";
// import { Footer } from "../components/Footer";

const BlogSection = () => {
  // Blog content data
  const blogContent = {
    title: "Social Media Content Ideas to Boost Engagement",
    introduction:
      "Opened social media accounts, but still couldn’t keep up with the fast-paced digital environment of the 21st century? Well, it is difficult to understand what your current audience wants. To increase engagement and build a stronger connection with your audience, you need to create content that hits the spot. Let us give you some powerful social media content ideas to keep your audience hooked on your page:",
    sections: [
      {
        heading: "1. Polls and Quizzes",
        description:
          "Have you ever been scrolling through poll-related reels where you have to select an option, even though your opinion isn't relevant, you select it just to see how many people agree with your opinion. That’s how polls and quizzes encourage people to participate. Businesses can use polls to gather the public's opinions, feedback, and preferences, whereas with quizzes, we can increase engagement by asking educational and fun questions. Example: 'Of all designs, which one is best suited to reflect my personality? Try out our quiz to determine it!'",
        image: "image 11.png",
      },
      {
        heading: "2. Behind-the-Scenes Content",
        description:
          "Displaying your processes, workspace, or people makes your brand more human. We can share short clips of our day-to-day activities in team building and product development with you. In addition to being curious about how things work, we can also find inspiration in these short clips. Sharing them can make your business more authentic and reliable, and you can quickly gain the public's trust.",
        image:
          "Untitled design (47).png",
      },
      {
        heading: "3. User Generated Content (UGC)",
        description:
          "For years and years, we have seen celebrities promoting products they themselves don’t even use. But nowadays, people are becoming more aware of these small lies. Thus, when someone like us uses that exact product, we believe their words and try it. This is why UGC is getting viral these days. Let your users promote your product or service by sharing pictures and videos on social media. You can showcase real customer experiences by reposting these UGCs.",
        image: "image23.png",
      },
      {
        heading: "4. Educational Carousels and Infographics",
        description:
          "Visuals always appeal to us, right? Books with a lot of pictures catch our attention right away. Same thing with carousels and infographics. They break down complex information in an interesting format that makes it easy to understand and share. These are great for bite-sized tips, how-to’s, or industry insights.",
        image:
          "Untitled design (48).png",
      },
      {
        heading: "5. Trending Challenges and Hashtags",
        description:
          "Join viral trends and use popular hashtags to stay relevant. Whether it's participating in TikTok challenges or sharing themed posts for #ThrowbackThursday, riding the trend wave can increase visibility.",
        image: "Trending Challenges and Hashtags.png",
      },
      {
        heading: "6. Giveaways and Contests",
        description:
          "Free stuff is everybody's favorite! Contests and giveaways that have only simple rules of entry like 'Tag a friend' or 'Share this post' can lead to a substantial increase in engagement and exposure.",
        image: "Trending Challenges and Hashtags (1) (1).png",
      },
      {
        heading: "7. Engaging Stories and Reels",
        description:
          "Short, captivating videos such as Instagram videos are effective for sharing quick tips, announcements, or fun content. Use stickers, GIFs, and countdown timers to make them more interactive.",
        image: "Trending Challenges and Hashtags (2).png",
      },
      {
        heading: "8. Inspirational Quotes and Success Stories",
        description:
          "Share motivational quotes, client success stories, or milestones. Positive content resonates well with audiences and encourages sharing and commenting.",
        image:
          "image24.png",
      },
      {
        heading: "9. Live Q&A and Webinars",
        description:
          "Run live events, where you answer questions posed by the public, to provide your insights, or even work with people possessing authority in that area. Live interaction between the performer and audience assistant is very beneficial, and it also establishes brand awareness.",
        image: "image25.png",
      },
      {
        heading: "10. Memes and Humor",
        description:
          "Humor can make your content more shareable. Choose from the most serious and light-hearted levity genres, and let it go if it is off-kilter. Ensure they align with your brand's voice and audience preferences.",
        image: "Trending Challenges and Hashtags (3).png",
      },
    ],
  };

  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (index) => {
    setExpandedSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <>
      <Header />
      <div className=""  style={{
    backgroundImage: 'url("Trending Challenges and Hashtags (4).png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}>
      <div
  className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8 py-8"
>
  <h1 className="text-4xl font-bold text-[#0e6938] mb-6 text-center">
    {blogContent.title}
  </h1>
  <p className="text-lg text-gray-700 mb-8">{blogContent.introduction}</p>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {blogContent.sections.map((section, index) => (
      <div
        key={index}
        className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
      >
        <img
          src={section.image}
          alt={section.heading}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-bold text-[#0e6938] mb-2">
            {section.heading}
          </h2>
          <p
            className={`text-gray-700 text-sm leading-relaxed overflow-hidden transition-all duration-500 ${
              expandedSections[index] ? 'max-h-full' : 'line-clamp-3'
            }`}
          >
            {section.description}
          </p>
          <button
            onClick={() => toggleSection(index)}
            className="mt-4 text-sm font-bold text-[#0e6938] hover:text-green-700"
          >
            {expandedSections[index] ? 'Show Less' : 'Read More'}
          </button>
        </div>
      </div>
    ))}
  </div>
</div>
</div>
    </>
  );
};

export default BlogSection;
