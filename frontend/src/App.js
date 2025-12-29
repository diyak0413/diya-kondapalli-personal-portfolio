import React, { useState } from "react";
import "./App.css";
import "./styles/personal.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import FeaturedProjects from "./components/FeaturedProjects";
import OutsideTheCode from "./components/OutsideTheCode";
import Footer from "./components/Footer";
import ProjectsPage from "./components/ProjectsPage";
import BlogPage from "./components/BlogPage";
import BlogPostPage from "./components/BlogPostPage";
import AwardsPage from "./components/AwardsPage";
import AboutPage from "./components/AboutPage";
// INTRO OVERLAY — SAFE TO REMOVE
import IntroOverlay from "./components/IntroOverlay";
import { MiniCollage, ImageStrip } from "./components/ImageGallery";

// Home Page Component
const HomePage = () => {
  return (
    <>
      <Hero />
      {/* OPTIONAL VISUAL — Mini photo collage */}
      <MiniCollage className="bg-white" />
      <FeaturedProjects />
      {/* OPTIONAL VISUAL — Scrolling image strip */}
      <ImageStrip />
      <OutsideTheCode />
    </>
  );
};

// Layout wrapper with Header and Footer
const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

function App() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <>
              {/* INTRO OVERLAY — SAFE TO REMOVE */}
              <IntroOverlay onComplete={() => setIntroComplete(true)} />
              <Layout>
                <HomePage />
              </Layout>
            </>
          } />
          <Route path="/projects" element={<Layout><ProjectsPage /></Layout>} />
          <Route path="/blog" element={<Layout><BlogPage /></Layout>} />
          <Route path="/blog/:slug" element={<Layout><BlogPostPage /></Layout>} />
          <Route path="/awards" element={<Layout><AwardsPage /></Layout>} />
          <Route path="/about" element={<Layout><AboutPage /></Layout>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
