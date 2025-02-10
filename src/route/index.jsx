import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import React from "react";
import { Home } from "../pages/Home";
import { Contact } from "../pages/Contact";
import { About } from "../pages/About";
import BlogSection from "../pages/BlogSection";
import ContentCreation from "../pages/ContentCreation";
import SocialMediaContent from "../pages/SocialMediaContent";
import SEOContentCreation from "../pages/SEOContentCreation";
import BlogAndArticle from "../pages/BlogAndArticle";
import WebsiteContentWriting from "../pages/WebsiteContentWriting";
import CopyWriting from "../pages/CopyWriting";
import ProductDescription from "../pages/ProductDescription";
import PressReleases from "../pages/PressReleases";
import EmailMarketing from "../pages/EmailMarketing";
import GhostWriting from "../pages/GhostWriting";
import ContentEditing from "../pages/ContentEditing";
import Script from "../pages/Script";
import PrivacyPolicy from "../components/PrivacyPolicy";
import MainBlogs from "../pages/Blogs/MainBlogs";
import Blog1 from "../pages/Blogs/Blog1";
import Blog2 from "../pages/Blogs/Blog2";
import Blog3 from "../pages/Blogs/Blog3";
import Blog4 from "../pages/Blogs/Blog4";
import Blog5 from "../pages/Blogs/Blog5";
import Blog6 from "../pages/Blogs/Blog6";
import Blog7 from "../pages/Blogs/Blog7";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "Social-Media-Content-Ideas",
        element: <Blog1 />,
      },
      {
        path: "/How-to-Develop-a-Content-Strategy-That-Aligns-With-Your-Brand-Goals",
        element: <Blog2 />,
      },
      {
        path: "/5-Elements-Every-Great-Marketing-Video-Script-Needs",
        element: <Blog3 />,
      },
      {
        path: "/blogs",
        element: <MainBlogs />,
      },
      {
        path: "content-creations",
        element: <ContentCreation />,
      },
      {
        path: "social-media-content-writing",
        element: <SocialMediaContent />,
      },
      {
        path: "seo-friendly-content-writing",
        element: <SEOContentCreation />,
      },
      {
        path: "blog-&-articles-writing",
        element: <BlogAndArticle />,
      },
      {
        path: "website-content-writing",
        element: <WebsiteContentWriting/>,
      },
      {
        path: "copywriting-for-ads",
        element: <CopyWriting/>,
      },
      {
        path: "product-descriptions",
        element: <ProductDescription/>,
      },
      {
        path: "email-marketing-content-marketing",
        element: <EmailMarketing/>,
      },
      {
        path: "press-releases",
        element: <PressReleases/>,
      },
      {
        path: "ghostwriting",
        element: <GhostWriting/>,
      },
      {
        path: "content-editing-&-error-free",
        element: <ContentEditing/>,
      },
      {
        path: "The-Rise-of-User-Generated-Content-Tips-for-Leveraging-It",
        element: <Blog5/>,
      },
      {
        path: "How-to-Convert-Data-into-Intriguing-Visual-Narratives",
        element: <Blog6/>,
      },
      {
        path: "The-Psychology-of-Fonts-How-Typography-Influences-Reader-Behavior",
        element: <Blog7/>,
      },
      {
        path: "Mastering-Content Planning-Your-Path-to-Digital-Success",
        element: <Blog4/>,
      },
      
      {
        path: "script-&-content-marketing",
        element: <Script/>,
      },
      {
        path: "privacy-policy",
        element: <PrivacyPolicy/>,
      },
    ],
  },
]);

export default router;
