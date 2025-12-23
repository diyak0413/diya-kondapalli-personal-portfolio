import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import { Button } from './ui/button';
import { projectsContent } from '../data/mock';

const FeaturedProjects = () => {
  const featuredProjects = projectsContent.projects.filter((p) => p.featured);

  return (
    <section id="featured-work" className="py-24 lg:py-32 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-16">
          <div>
            <p className="text-sm tracking-widest uppercase text-neutral-400 mb-2">
              Selected Work
            </p>
            <h2 className="text-3xl lg:text-4xl font-light tracking-tight text-neutral-900">
              Featured Projects
            </h2>
          </div>
          <Button
            variant="ghost"
            className="text-neutral-600 hover:text-neutral-900 group self-start sm:self-auto"
            asChild
          >
            <Link to="/projects">
              View all projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <article
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden border border-neutral-100 hover:border-neutral-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image Placeholder */}
              <div className="aspect-[16/10] bg-gradient-to-br from-neutral-100 to-neutral-50 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-neutral-200/50 flex items-center justify-center">
                    <span className="text-2xl text-neutral-400 font-light">
                      {project.title.charAt(0).replace('[', 'P')}
                    </span>
                  </div>
                  <p className="text-sm text-neutral-400">
                    [REPLACE: Add project screenshot]
                  </p>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 lg:p-8">
                <h3 className="text-xl font-medium text-neutral-900 mb-3 group-hover:text-neutral-700 transition-colors">
                  {project.title}
                </h3>

                {/* Problem & Solution */}
                <div className="space-y-3 mb-6">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-neutral-400 mb-1">
                      Problem
                    </p>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-neutral-400 mb-1">
                      Solution
                    </p>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs bg-neutral-100 text-neutral-600 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
