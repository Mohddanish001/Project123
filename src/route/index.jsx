import { createBrowserRouter } from "react-router-dom";
import { App } from "../App";
import React from "react";
import { Home } from "../pages/Home";
import { Contact } from "../pages/Contact";
import { About } from "../pages/About";
import BlogSection from "../pages/BlogSection";

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
    ],
  },
]);

export default router;
