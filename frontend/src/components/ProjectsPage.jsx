import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github } from 'lucide-react';
import { projectsContent } from '../data/mock';
import { enablePersonalVisuals } from '../config/personalConfig';

const ProjectsPage = () => {
  return (
    <main className="min-h-screen pt-24 lg:pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <p className={`text-sm tracking-widest uppercase mb-3 ${enablePersonalVisuals ? 'text-amber-700/60' : 'text-neutral-400'}`}>
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
              className={`group grid lg:grid-cols-5 gap-8 lg:gap-12 py-12 border-t first:border-t-0 first:pt-0 ${
                enablePersonalVisuals ? 'border-amber-100' : 'border-neutral-100'
              }`}
            >
              {/* Project Preview Image */}
              <div className="lg:col-span-2">
                <div className={`project-preview-image rounded-xl overflow-hidden border transition-all duration-300 ${
                  enablePersonalVisuals 
                    ? 'border-amber-100 group-hover:border-amber-200 group-hover:shadow-lg' 
                    : 'border-neutral-100 group-hover:border-neutral-200'
                }`}>
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={`${project.title} preview`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="project-preview-placeholder flex flex-col items-center justify-center h-full">
                      <div className={`w-14 h-14 mb-3 rounded-lg flex items-center justify-center ${
                        enablePersonalVisuals ? 'bg-amber-100/50' : 'bg-neutral-200/50'
                      }`}>
                        <span className={`text-xl font-light ${enablePersonalVisuals ? 'text-amber-400' : 'text-neutral-400'}`}>
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                      <p className="text-xs text-center">
                        [REPLACE: Add project screenshot]
                      </p>
                    </div>
                  )}
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
                        className={`p-2 transition-colors rounded-lg ${
                          enablePersonalVisuals 
                            ? 'text-amber-500 hover:text-amber-700 hover:bg-amber-50' 
                            : 'text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100'
                        }`}
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
                        className={`p-2 transition-colors rounded-lg ${
                          enablePersonalVisuals 
                            ? 'text-amber-500 hover:text-amber-700 hover:bg-amber-50' 
                            : 'text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100'
                        }`}
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
                    <div className={`rounded-lg p-4 ${enablePersonalVisuals ? 'bg-amber-50/50' : 'bg-neutral-50'}`}>
                      <p className={`text-xs uppercase tracking-wider mb-2 ${enablePersonalVisuals ? 'text-amber-600/70' : 'text-neutral-400'}`}>
                        Problem
                      </p>
                      <p className="text-sm text-neutral-600 leading-relaxed">
                        {project.problem}
                      </p>
                    </div>
                    <div className={`rounded-lg p-4 ${enablePersonalVisuals ? 'bg-amber-50/50' : 'bg-neutral-50'}`}>
                      <p className={`text-xs uppercase tracking-wider mb-2 ${enablePersonalVisuals ? 'text-amber-600/70' : 'text-neutral-400'}`}>
                        Solution
                      </p>
                      <p className="text-sm text-neutral-600 leading-relaxed">
                        {project.solution}
                      </p>
                    </div>
                    <div className={`rounded-lg p-4 ${enablePersonalVisuals ? 'bg-amber-50/50' : 'bg-neutral-50'}`}>
                      <p className={`text-xs uppercase tracking-wider mb-2 ${enablePersonalVisuals ? 'text-amber-600/70' : 'text-neutral-400'}`}>
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
                      className={`px-3 py-1.5 text-xs rounded-full ${
                        enablePersonalVisuals 
                          ? 'bg-amber-50 text-amber-700' 
                          : 'bg-neutral-100 text-neutral-600'
                      }`}
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
        <div className={`mt-16 p-8 border-2 border-dashed rounded-2xl text-center ${
          enablePersonalVisuals ? 'border-amber-200' : 'border-neutral-200'
        }`}>
          <p className="text-neutral-400 text-sm">
            [To add more projects, edit the <code className={`px-2 py-0.5 rounded ${enablePersonalVisuals ? 'bg-amber-50' : 'bg-neutral-100'}`}>mock.js</code> file]
          </p>
        </div>
      </div>
    </main>
  );
};

export default ProjectsPage;
