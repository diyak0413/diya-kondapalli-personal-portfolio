import React from 'react';
import { Award, Calendar, Building2 } from 'lucide-react';
import { awardsContent } from '../data/mock';

const AwardsPage = () => {
  return (
    <main className="min-h-screen pt-24 lg:pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-sm tracking-widest uppercase text-neutral-400 mb-3">
            Milestones
          </p>
          <h1 className="text-4xl lg:text-5xl font-light tracking-tight text-neutral-900 mb-6">
            {awardsContent.title}
          </h1>
          <p className="text-lg text-neutral-500 leading-relaxed">
            {awardsContent.subtitle}
          </p>
        </div>

        {/* Awards Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-neutral-200 hidden md:block" />

          <div className="space-y-8">
            {awardsContent.awards.map((award, index) => (
              <article
                key={award.id}
                className="group relative grid md:grid-cols-12 gap-6 md:gap-8"
              >
                {/* Timeline dot */}
                <div className="hidden md:flex md:col-span-1 justify-center">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-white border-2 border-neutral-200 group-hover:border-neutral-400 transition-colors flex items-center justify-center z-10 relative">
                      <Award className="h-5 w-5 text-neutral-400 group-hover:text-neutral-600 transition-colors" />
                    </div>
                  </div>
                </div>

                {/* Award Content */}
                <div className="md:col-span-11 bg-white rounded-2xl border border-neutral-100 hover:border-neutral-200 hover:shadow-lg transition-all duration-500 p-6 lg:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h2 className="text-xl font-medium text-neutral-900 mb-2">
                        {award.title}
                      </h2>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-500">
                        <span className="inline-flex items-center gap-1.5">
                          <Building2 className="h-4 w-4" />
                          {award.organization}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Calendar className="h-4 w-4" />
                          {award.year}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-neutral-600 leading-relaxed">
                    {award.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Add More Awards Hint */}
        <div className="mt-16 p-8 border-2 border-dashed border-neutral-200 rounded-2xl text-center">
          <p className="text-neutral-400 text-sm">
            [To add more awards, edit the <code className="bg-neutral-100 px-2 py-0.5 rounded">mock.js</code> file]
          </p>
        </div>
      </div>
    </main>
  );
};

export default AwardsPage;
