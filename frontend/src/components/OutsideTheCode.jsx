// ============================================
// OUTSIDE THE CODE - INTERESTS SECTION
// ============================================
// A section showcasing personal interests
// that shape who Diya is beyond coding.
// ============================================

import React from 'react';
import { Waves, Dumbbell } from 'lucide-react';
import { enablePersonalVisuals, isPersonalEnabled } from '../config/personalConfig';
import { personalPhotos, personalNotes } from '../data/personalContent';

const OutsideTheCode = () => {
  if (!enablePersonalVisuals || !isPersonalEnabled('interestsSection')) {
    return null;
  }

  const interests = [
    {
      id: 'rowing',
      title: 'Rowing',
      icon: Waves,
      photo: personalPhotos.interests.rowing,
      note: personalNotes.rowing,
      description: "[REPLACE: 1-2 sentences about what rowing means to you. Example: There's something about being on the water at 5am that teaches you discipline no classroom ever could.]",
    },
    {
      id: 'powerlifting',
      title: 'Powerlifting',
      icon: Dumbbell,
      photo: personalPhotos.interests.powerlifting,
      note: personalNotes.powerlifting,
      description: "[REPLACE: 1-2 sentences about powerlifting. Example: The barbell doesn't care about your excuses. It taught me that growth happens outside your comfort zone.]",
    },
  ];

  return (
    <section className="py-20 lg:py-28 warm-section">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-widest uppercase text-amber-700/70 mb-3">
            Beyond the Screen
          </p>
          <h2 className="text-3xl lg:text-4xl font-light tracking-tight text-neutral-900 mb-4">
            Things That Keep Me Grounded
          </h2>
          <p className="text-neutral-500 max-w-2xl mx-auto">
            Code is just one part of who I am. These are the things that teach me
            discipline, resilience, and remind me there's a world beyond the keyboard.
          </p>
        </div>

        {/* Interests Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {interests.map((interest) => (
            <article key={interest.id} className="interest-card">
              {/* Photo */}
              <div className="interest-card-image flex items-center justify-center text-neutral-400 text-sm">
                {interest.photo.src ? (
                  <img 
                    src={interest.photo.src} 
                    alt={interest.photo.alt}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-center px-4">{interest.photo.placeholder}</span>
                )}
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center">
                    <interest.icon className="w-5 h-5 text-amber-700" />
                  </div>
                  <h3 className="text-xl font-medium text-neutral-900">
                    {interest.title}
                  </h3>
                </div>

                <p className="text-neutral-600 leading-relaxed mb-4">
                  {interest.description}
                </p>

                {/* Personal Note */}
                <div className="bg-amber-50/50 rounded-lg p-4 border-l-2 border-amber-200">
                  <p className="text-sm text-amber-800/70 italic handwritten text-base">
                    {interest.note}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Closing reflection */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-white rounded-2xl px-8 py-6 shadow-sm border border-neutral-100">
            <p className="text-neutral-500 text-sm max-w-xl handwritten text-lg">
              {personalNotes.outsideCode}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutsideTheCode;
