import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { Button } from './ui/button';
import { heroContent } from '../data/mock';
// OPTIONAL VISUAL — SAFE TO REMOVE (import below)
import { VisualExperiments } from './VisualExperiments';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('featured-work');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-neutral-50 via-white to-white" />
      
      {/* OPTIONAL VISUAL — SAFE TO REMOVE */}
      <VisualExperiments section="hero" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-br from-neutral-100/50 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-gradient-to-tr from-neutral-100/30 to-transparent rounded-full blur-2xl" />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Greeting */}
          <p className="text-sm tracking-widest uppercase text-neutral-400 mb-4 animate-fade-in">
            {heroContent.greeting}
          </p>

          {/* Name */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight text-neutral-900 mb-6">
            {heroContent.name.replace('[REPLACE: Diya]', 'Diya')}
            <span className="text-neutral-300">.</span>
          </h1>

          {/* Headline */}
          <p className="text-xl sm:text-2xl lg:text-3xl font-light text-neutral-600 leading-relaxed mb-8 max-w-3xl">
            {heroContent.headline.replace(
              '[REPLACE: A high school student building meaningful things with code and curiosity.]',
              'A high school student building meaningful things with code and curiosity.'
            )}
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg text-neutral-500 leading-relaxed mb-12 max-w-2xl">
            {heroContent.description.replace(
              "[REPLACE: I'm passionate about using technology to solve real problems. Currently exploring machine learning, web development, and computational biology — always learning, always building.]",
              "I'm passionate about using technology to solve real problems. Currently exploring machine learning, web development, and computational biology — always learning, always building."
            )}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="bg-neutral-900 text-white hover:bg-neutral-800 transition-all duration-300 group"
              asChild
            >
              <Link to="/projects">
                {heroContent.cta.primary}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-neutral-200 text-neutral-700 hover:bg-neutral-50 hover:border-neutral-300 transition-all duration-300"
              asChild
            >
              <Link to="/blog">
                {heroContent.cta.secondary}
              </Link>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block">
          <button
            onClick={scrollToProjects}
            className="flex flex-col items-center gap-2 text-neutral-400 hover:text-neutral-600 transition-colors cursor-pointer"
            aria-label="Scroll to projects"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
