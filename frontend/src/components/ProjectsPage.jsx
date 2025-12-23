import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github } from 'lucide-react';
import { projectsContent } from '../data/mock';

const ProjectsPage = () => {
  return (
    <main className="min-h-screen pt-24 lg:pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-sm tracking-widest uppercase text-neutral-400 mb-3">
            Portfolio
          </p>
          <h1 className="text-4xl lg:text-5xl font-light tracking-tight text-neutral-900 mb-6">
            {projectsContent.title}
          </h1>
          <p className="text-lg text-neutral-500 leading-relaxed">
            {projectsContent.subtitle}
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-12">
          {projectsContent.projects.map((project, index) => (
            <article
              key={project.id}
              className="group grid lg:grid-cols-5 gap-8 lg:gap-12 py-12 border-t border-neutral-100 first:border-t-0 first:pt-0"
            >
              {/* Project Image */}
              <div className="lg:col-span-2">
                <div className="aspect-[4/3] bg-gradient-to-br from-neutral-100 to-neutral-50 rounded-xl flex items-center justify-center border border-neutral-100 group-hover:border-neutral-200 transition-colors">
                  <div className="text-center p-6">
                    <div className="w-14 h-14 mx-auto mb-3 rounded-lg bg-neutral-200/50 flex items-center justify-center">
                      <span className="text-xl text-neutral-400 font-light">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <p className="text-xs text-neutral-400">
                      [REPLACE: Add screenshot]
                    </p>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="lg:col-span-3">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h2 className="text-2xl font-medium text-neutral-900 group-hover:text-neutral-700 transition-colors">
                    {project.title}
                  </h2>
                  <div className="flex items-center gap-3 flex-shrink-0">
                    {project.links.demo && !project.links.demo.includes('[REPLACE') && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-neutral-400 hover:text-neutral-900 transition-colors rounded-lg hover:bg-neutral-100"
                        title="View demo"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                    {project.links.github && !project.links.github.includes('[REPLACE') && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-neutral-400 hover:text-neutral-900 transition-colors rounded-lg hover:bg-neutral-100"
                        title="View code"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Problem / Solution / Impact */}
                <div className="space-y-4 mb-6">
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="bg-neutral-50 rounded-lg p-4">
                      <p className="text-xs uppercase tracking-wider text-neutral-400 mb-2">
                        Problem
                      </p>
                      <p className="text-sm text-neutral-600 leading-relaxed">
                        {project.problem}
                      </p>
                    </div>
                    <div className="bg-neutral-50 rounded-lg p-4">
                      <p className="text-xs uppercase tracking-wider text-neutral-400 mb-2">
                        Solution
                      </p>
                      <p className="text-sm text-neutral-600 leading-relaxed">
                        {project.solution}
                      </p>
                    </div>
                    <div className="bg-neutral-50 rounded-lg p-4">
                      <p className="text-xs uppercase tracking-wider text-neutral-400 mb-2">
                        Impact
                      </p>
                      <p className="text-sm text-neutral-600 leading-relaxed">
                        {project.impact}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 text-xs bg-neutral-100 text-neutral-600 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Add More Projects Hint */}
        <div className="mt-16 p-8 border-2 border-dashed border-neutral-200 rounded-2xl text-center">
          <p className="text-neutral-400 text-sm">
            [To add more projects, edit the <code className="bg-neutral-100 px-2 py-0.5 rounded">mock.js</code> file]
          </p>
        </div>
      </div>
    </main>
  );
};

export default ProjectsPage;
