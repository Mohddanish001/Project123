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
        path: "/blogs",
        element: <BlogSection />,
      },
      {
        path: "/content-creations",
        element: <ContentCreation />,
      },
      {
        path: "/social-media-content-writing",
        element: <SocialMediaContent />,
      },
      {
        path: "/seo-friendly-content-writing",
        element: <SEOContentCreation />,
      },
      {
        path: "/best-blog-writing-services",
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
        path: "/email-marketing-content-marketing",
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
