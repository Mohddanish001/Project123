import React, { useState } from "react";
import { Header } from "../components/Header";
import { Link } from "react-router-dom";
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
        image: "Untitled design (47).png",
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
        image: "Untitled design (48).png",
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
        image: "image24.png",
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
      <div
        className=""
        style={{
          backgroundImage: 'url("Trending Challenges and Hashtags (4).png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
      <header className="relative h-[60vh] md:h-80 text-white">
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
    <p className="text-xl md:text-2xl lg:text-4xl uppercase font-josefin text-black">
      Who We Are
    </p>
    <h1 className="text-4xl md:text-6xl lg:text-9xl mt-4 md:mt-6 font-josefin text-black">
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

        <div className="mx-auto  max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          
          {/* <h1 className="text-4xl font-bold  font-josefin bg-gradient-to-r from-[#42175B] to-[#DB7EEC] bg-clip-text text-transparent mb-6 text-center">
            Blogs
          </h1> */}
          <h1 className="text-4xl text-black font-bold  font-josefin   mb-6 text-start">
            {blogContent.title}
          </h1>
          <p className="text-lg font-josefin px-10 text-black mb-8">
            {blogContent.introduction}
          </p>
          <div className="grid grid-cols-1 px-10 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  <h2 className="text-xl font-josefin font-bold text-[#42175B] mb-2">
                    {section.heading}
                  </h2>
                  <p
                    className={`text-black font-josefin text-sm leading-relaxed overflow-hidden transition-all duration-500 ${
                      expandedSections[index] ? "max-h-full" : "line-clamp-3"
                    }`}
                  >
                    {section.description}
                  </p>
                  <button
                    onClick={() => toggleSection(index)}
                    className="mt-4 text-sm font-bold text-black"
                  >
                    {expandedSections[index] ? "Show Less" : "Read More"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* second blog */}
        <div className="px-4 sm:px-8 lg:px-36 mb-5">
          <h2 className="text-lg sm:text-xl font-josefin lg:text-2xl font-bold text-[#42175B] mb-4">
            How to Develop a Content Strategy That Aligns With Your Brand Goals
          </h2>
          <p className="text-black font-josefin text-xs sm:text-sm lg:text-base leading-relaxed mb-4">
            Creating content is something that every brand has to do if they
            want to connect to the audience. That’s why a well-thought-out
            content strategy is essential for any business that wants to achieve
            their goal and connect to their audience. Nowadays, everyone is
            creating material, but what content strategy will be most aligned
            with your brand? Whether your aim is to increase brand awareness,
            generate leads, or even build loyal customers, developing a
            well-defined content strategy is a must. Here's a short guide to how
            to achieve your goal:
          </p>

          <h3 className="text-md font-josefin  sm:text-lg lg:text-xl font-bold text-[#42175B] mb-2">
            Define Your Brand's Core Goal
          </h3>
          <p className="text-black text-xs font-josefin sm:text-sm lg:text-base leading-relaxed mb-4">
            Prior to developing a content strategy, you must first identify your
            brand's primary objective. These goals reflect the objectives of
            your business and guide the type of content you need. Sometimes
            following trends doesn’t work, and you wonder why. Why are my
            products not selling? But the answer is, "This is not what your
            business needs." Brand’s common goals can be:
          </p>
          <ul className="list-disc font-josefin pl-6 mb-4 text-xs sm:text-sm lg:text-base">
            <li  className="text-black font-josefin">
              Awareness: Letting people know about your existence and converting
              them into potential customers.
            </li>
            <li className="text-black font-josefin">
              Focus on content that attracts more visitors to increase website
              traffic.
            </li>
            <li className="text-black font-josefin">
              Lead generation: Focusing on content that attracts visitors and
              converts them into potential customers.
            </li>
            <li className="text-black font-josefin">
              Build customer loyalty: Creating content that satisfies current
              clients and strengthens relationships.
            </li>
            <li className="text-black font-josefin">
              To boost sales: Creating product-based content that can generate
              conversions.
            </li>
          </ul>

          <h3 className="text-md font-josefin sm:text-lg lg:text-xl font-bold text-[#42175B] mb-2">
            Understand Your Audience
          </h3>
          <p className="text-black font-josefin text-xs sm:text-sm lg:text-base leading-relaxed mb-4">
            “We have been creating content, but still, we are struggling to
            achieve our goals.” That is because you don’t understand your
            audience. If you understand your audience, you can produce content
            that directly speaks to their needs, preferences, and pain points.
            Audience persona depends on:
          </p>
          <ul className="list-disc pl-6 font-josefin mb-4 text-xs sm:text-sm lg:text-base">
            <li className="text-black font-josefin">Psychographics: Interests, values, behavior, etc.</li>
            <li className="text-black font-josefin">
              Content preferences: Blogs, reels, podcasts, infographics, etc.
            </li>
          </ul>

          <h3 className="text-md sm:text-lg font-josefin lg:text-xl font-bold text-[#42175B] mb-2">
            Content Audit
          </h3>
          <p className="text-black text-xs sm:text-sm lg:text-base font-josefin leading-relaxed mb-4">
            If you have already published your content, now it’s time to conduct
            a content audit. This audit will help you understand what’s working,
            what’s not, and what you can add.
          </p>

          <h3 className="text-md sm:text-lg font-josefin lg:text-xl font-bold text-[#42175B] mb-2">
            Select Appropriate Content Formats and Channels
          </h3>
          <p className="text-black text-xs font-josefin sm:text-sm lg:text-base leading-relaxed mb-4">
            Carefully select content formats and channels, as not all content
            and platforms will align with your brand goals. For example, if you
            want to create brand awareness, then social media platforms, blogs,
            and videos are better suited. Choosing the right distribution
            channel is also important. Consider what your targeted audience
            uses—whether it is a social media platform, YouTube, podcasts, or
            email distribution.
          </p>

          <h3 className="text-md font-josefin  sm:text-lg lg:text-xl font-bold text-[#42175B] mb-2">
            Set Key Performance Indicators (KPIs)
          </h3>
          <p className="text-black font-josefin text-xs sm:text-sm lg:text-base leading-relaxed mb-4">
            Set key performance indicators if you want to measure the success of
            your content strategy. Businesses use KPI metrics to monitor the
            effectiveness of their strategies.
          </p>

          <h3 className="text-md font-josefin sm:text-lg lg:text-xl font-bold text-[#42175B] mb-2">
            Make a Content Calendar
          </h3>
          <p className="text-black font-josefin text-xs sm:text-sm lg:text-base leading-relaxed mb-4">
            Once you have understood your goal, audience, and type of content,
            it’s time to make a calendar. This will assist you in scheduling
            your content and ensuring consistent posting across various
            channels. A calendar will help you maintain a steady flow of content
            and keep your team on track.
          </p>

          <h3 className="text-md sm:text-lg  font-josefin lg:text-xl font-bold text-[#42175B] mb-2">
            Adapt and Evolve
          </h3>
          <p className="text-black text-xs font-josefin sm:text-sm lg:text-base leading-relaxed mb-4">
            Continue to adjust your strategy, as a successful content strategy
            is never static. It’s not sufficient to just measure the results of
            your content; you should also remain flexible based on the data you
            collect. Test new formats and novel tactics that align with current
            trends.
          </p>

          <h3 className="text-md font-josefin sm:text-lg lg:text-xl font-bold text-[#42175B] mb-2">
            Conclusion
          </h3>
          <p className="text-black font-josefin text-xs sm:text-sm lg:text-base leading-relaxed">
            Forming a content strategy that aligns with the brand's basic
            objectives is a critical and significant step, requiring meticulous
            planning and an acceptance that the plan may take time to yield
            results. Analyze the results to understand engagement and establish
            a link between content topics and progress toward goals. Always
            monitor the success of your strategy and make necessary adjustments
            to ensure progress toward your targeted brand goals.
          </p>
        </div>

        {/* Third Blog */}
        <div className="px-4 sm:px-8 lg:px-36 mb-5">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold font-josefin text-[#42175B] mb-4">
            Social Media Content Ideas to Boost Engagement
          </h2>
          <p className="text-black text-xs sm:text-sm lg:text-base leading-relaxed mb-4 font-josefin">
            Opened social media accounts but still couldn’t keep up with the
            fast-paced digital environment of the 21st century? Understanding
            your audience's wants is crucial to increasing engagement and
            building a stronger connection. To help, here are some powerful
            social media content ideas that can keep your audience hooked:
          </p>
          <ol className="list-decimal pl-4 sm:pl-6 mb-4 space-y-2 text-black text-xs sm:text-sm lg:text-base font-josefin">
            <li className="font-josefin">
              <strong className="font-josefin">Polls and Quizzes:</strong>{" "}
              Encourage participation by creating polls and quizzes. Use these
              to gather opinions, feedback, and preferences, or just for fun!
              Example: "Of all designs, which one is best suited to reflect my
              personality? Try out our quiz to determine it!"
            </li>
            <li className="font-josefin">
              <strong className="font-josefin">
                Behind-the-Scenes Content:
              </strong>{" "}
              Share clips of your processes, workspace, or day-to-day
              activities. These insights make your brand more human, authentic,
              and trustworthy.
            </li>
            <li className="font-josefin">
              <strong className="font-josefin">
                User Generated Content (UGC):
              </strong>{" "}
              Highlight real customer experiences by sharing pictures, videos,
              and testimonials. Authentic UGC builds trust and promotes your
              brand effectively.
            </li>
            <li className="font-josefin">
              <strong className="font-josefin">
                Educational Carousels and Infographics:
              </strong>{" "}
              Use visuals to break down complex information into bite-sized,
              easily understandable tips or insights.
            </li>
            <li className="font-josefin">
              <strong className="font-josefin">
                Trending Challenges and Hashtags:
              </strong>{" "}
              Stay relevant by joining viral trends and using popular hashtags.
              Whether it's TikTok challenges or themed posts, these increase
              visibility.
            </li>
            <li className="font-josefin">
              <strong className="font-josefin">Giveaways and Contests:</strong>{" "}
              Engage your audience with simple contests or giveaways. Rules like
              "Tag a friend" or "Share this post" can boost exposure and
              engagement significantly.
            </li>
            <li className="font-josefin">
              <strong className="font-josefin">
                Engaging Stories and Reels:
              </strong>{" "}
              Short, captivating videos are perfect for quick tips,
              announcements, or fun content. Use interactive stickers, GIFs, and
              countdown timers to make them engaging.
            </li>
            <li className="font-josefin">
              <strong className="font-josefin">
                Inspirational Quotes and Success Stories:
              </strong>{" "}
              Share motivational quotes, client success stories, or milestones.
              Positive content resonates well with audiences and encourages
              sharing.
            </li>
            <li className="font-josefin">
              <strong className="font-josefin">
                Live Q&amp;A and Webinars:
              </strong>{" "}
              Host live events to answer audience questions or collaborate with
              industry experts. This builds brand awareness and fosters trust.
            </li>
            <li className="font-josefin">
              <strong className="font-josefin">Memes and Humor:</strong> Use
              humor to make your content more shareable. Ensure your memes align
              with your brand's voice and audience preferences.
            </li>
          </ol>
          <p className="text-black text-xs sm:text-sm lg:text-base leading-relaxed mb-4 font-josefin">
            <strong className="font-josefin">Final Tip:</strong> Consistency is
            key! Mix these content ideas into your posting schedule and analyze
            engagement metrics to understand what resonates best with your
            audience.
          </p>
          <p className="text-black text-xs sm:text-sm lg:text-base leading-relaxed font-josefin">
            Would you like some assistance in creating more engaging social
            media content? Fill out the form on the Write Out site, and let our
            content professionals help bring your project to life!
          </p>
        </div>

        {/* Fourth blog */}
        <div className="px-4 sm:px-8 lg:px-36 mb-5">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold font-josefin text-[#42175B] mb-4">
            5 Elements Every Great Marketing Video Script Needs
          </h2>
          <p className="text-black text-xs sm:text-sm lg:text-base leading-relaxed mb-4 font-josefin">
            Scripting is the soul of the video. If words don’t make sense, then
            the video is completely baseless. Videos have always been an
            impactful marketing strategy, from television advertisements to
            short Instagram reels. However, while the camera and creative ideas
            are important, the script provides the structure and life to your
            video. Here are five essential elements that every great marketing
            video script needs:
          </p>
          <ol className="list-decimal pl-4 sm:pl-6 mb-4 space-y-2 text-black text-xs sm:text-sm lg:text-base font-josefin">
            <li className="text-black font-josefin">
              <strong>Captivating Hook:</strong> The opening few seconds of your
              video are crucial. Start with a bold statement, surprising fact,
              or thought-provoking question that grabs attention and compels the
              viewer to continue watching.
            </li>
            <li className="text-black font-josefin">
              <strong>Clear Value Proposition:</strong> Communicate what makes
              your product or service unique and why it’s important. Use simple,
              clear language to explain the benefits, and give compelling
              reasons for the audience to act.
            </li>
            <li className="text-black font-josefin">
              <strong>Emotional Connection:</strong> Stories and emotions
              resonate with audiences more than facts. Include narrative
              elements that evoke feelings of happiness, curiosity, or empathy.
              Relatable situations and personal stories can strengthen the bond
              with viewers.
            </li>
            <li className="text-black font-josefin">
              <strong>Strong Call-to-Action (CTA):</strong> Every marketing
              video should include a clear and compelling CTA. Whether it’s
              signing up, visiting a website, or making a purchase, ensure your
              CTA is direct and motivating.
            </li>
            <li className="text-black font-josefin">
              <strong>Engaging Visuals and Pacing:</strong> Pair a well-written
              script with eye-catching visuals and a dynamic pace. Use visuals
              that complement the message, maintain a lively rhythm, and avoid
              redundancy to keep the audience engaged.
            </li>
          </ol>
          <p className="text-black text-xs sm:text-sm lg:text-base leading-relaxed mb-4 font-josefin">
            <strong>Final Thoughts:</strong> Incorporating these five elements
            into your marketing video script ensures content that not only
            captures attention but also drives engagement and conversions.
            Remember, a quality script is essential for creating a sensational
            marketing video!
          </p>
          <p className="text-black text-xs sm:text-sm lg:text-base leading-relaxed font-josefin">
            The making of a powerful marketing video consists not only of a
            camera and a creative idea. The script is a fundamental part of any
            successful video, ensuring consistency in delivering your message
            and driving positive outcomes.
          </p>
        </div>
      </div>
    </>
  );
};

export default BlogSection;
