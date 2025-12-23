import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Lightbulb, Rocket } from 'lucide-react';
import { Button } from './ui/button';
import { aboutContent } from '../data/mock';

const AboutPage = () => {
  return (
    <main className="min-h-screen pt-24 lg:pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Page Header */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          {/* Left - Text Content */}
          <div>
            <p className="text-sm tracking-widest uppercase text-neutral-400 mb-3">
              Get to know me
            </p>
            <h1 className="text-4xl lg:text-5xl font-light tracking-tight text-neutral-900 mb-8">
              {aboutContent.title}
            </h1>

            <div className="space-y-6 text-neutral-600 leading-relaxed">
              {aboutContent.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10">
              <Button
                size="lg"
                className="bg-neutral-900 text-white hover:bg-neutral-800 transition-all duration-300 group"
                asChild
              >
                <Link to="/projects">
                  See my work
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right - Profile Image Placeholder */}
          <div className="relative">
            <div className="aspect-[4/5] bg-gradient-to-br from-neutral-100 to-neutral-50 rounded-2xl flex items-center justify-center border border-neutral-100">
              <div className="text-center p-8">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-neutral-200/50 flex items-center justify-center">
                  <span className="text-4xl text-neutral-300 font-light">D</span>
                </div>
                <p className="text-sm text-neutral-400">
                  [REPLACE: Add your profile photo]
                </p>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full bg-neutral-100 rounded-2xl" />
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid sm:grid-cols-3 gap-6 mb-20">
          {aboutContent.stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-neutral-100 p-6 lg:p-8 text-center hover:border-neutral-200 hover:shadow-lg transition-all duration-500"
            >
              <p className="text-3xl lg:text-4xl font-light text-neutral-900 mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-neutral-500 uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <div className="mb-20">
          <h2 className="text-2xl font-light text-neutral-900 mb-8">
            Skills & Technologies
          </h2>
          <div className="flex flex-wrap gap-3">
            {aboutContent.skills.map((skill, index) => (
              <span
                key={index}
                className="px-5 py-2.5 bg-neutral-100 text-neutral-700 rounded-full text-sm hover:bg-neutral-200 transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div>
          <h2 className="text-2xl font-light text-neutral-900 mb-8">
            What Drives Me
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-neutral-50 rounded-2xl p-6 lg:p-8">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm">
                <Lightbulb className="h-6 w-6 text-neutral-600" />
              </div>
              <h3 className="text-lg font-medium text-neutral-900 mb-2">
                Curiosity
              </h3>
              <p className="text-sm text-neutral-500 leading-relaxed">
                [REPLACE: Write about your curiosity and what excites you about learning new things.]
              </p>
            </div>
            <div className="bg-neutral-50 rounded-2xl p-6 lg:p-8">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm">
                <Code2 className="h-6 w-6 text-neutral-600" />
              </div>
              <h3 className="text-lg font-medium text-neutral-900 mb-2">
                Building
              </h3>
              <p className="text-sm text-neutral-500 leading-relaxed">
                [REPLACE: Write about your approach to building things and creating solutions.]
              </p>
            </div>
            <div className="bg-neutral-50 rounded-2xl p-6 lg:p-8">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm">
                <Rocket className="h-6 w-6 text-neutral-600" />
              </div>
              <h3 className="text-lg font-medium text-neutral-900 mb-2">
                Impact
              </h3>
              <p className="text-sm text-neutral-500 leading-relaxed">
                [REPLACE: Write about your desire to create meaningful impact through technology.]
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
