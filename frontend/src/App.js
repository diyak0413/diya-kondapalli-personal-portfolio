import React from "react";
import "./App.css";
// OPTIONAL VISUAL — SAFE TO REMOVE (import below)
import "../src/styles/visuals.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import FeaturedProjects from "./components/FeaturedProjects";
import Footer from "./components/Footer";
import ProjectsPage from "./components/ProjectsPage";
import BlogPage from "./components/BlogPage";
import BlogPostPage from "./components/BlogPostPage";
import AwardsPage from "./components/AwardsPage";
import AboutPage from "./components/AboutPage";
// OPTIONAL VISUAL — SAFE TO REMOVE (import below)
import { VisualExperiments } from "./components/VisualExperiments";
import { ENABLE_VISUALS } from "./config/visualConfig";

// Home Page Component
const HomePage = () => {
  return (
    <>
      <Hero />
      <FeaturedProjects />
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
  return (
    // OPTIONAL VISUAL — Add 'visuals-enabled' class when visuals are on
    <div className={`App ${ENABLE_VISUALS ? 'visuals-enabled' : ''}`}>
      {/* OPTIONAL VISUAL — SAFE TO REMOVE */}
      <VisualExperiments section="global" />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/awards" element={<AwardsPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
