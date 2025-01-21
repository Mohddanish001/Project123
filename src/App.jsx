import React from "react";
import { Outlet, useLocation, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import SocialMediaContent from "./pages/SocialMediaContent";

export const App = () => {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on route change
  }, [location.pathname]);

  return (
    <>
      <Header />
      <main className="min-h-[78vh]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

// Main Entry Point
export const AppWrapper = () => {
  return (
    <Router>
      <Routes>
        {/* Wrap App Component */}
          <Route path="/social-media-content" element={<SocialMediaContent />} />
      </Routes>
    </Router>
  );
};
