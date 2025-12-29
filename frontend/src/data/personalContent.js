// ============================================
// PERSONAL PHOTO PLACEHOLDERS
// ============================================
// Replace these with actual photos.
// Filename hints indicate what should go where.
// ============================================

export const personalPhotos = {
  // Hero section floating photos
  hero: [
    {
      id: 'rowing-1',
      src: null, // [REPLACE WITH PERSONAL PHOTO: rowing on water]
      placeholder: '[REPLACE: Rowing on the water]',
      alt: 'Rowing',
      caption: '[CAPTION: Early morning rows]',
      rotation: -5,
      top: '15%',
      right: '8%',
      parallaxSpeed: 0.08,
    },
    {
      id: 'lifting-1', 
      src: null, // [REPLACE WITH PERSONAL PHOTO: powerlifting]
      placeholder: '[REPLACE: Powerlifting moment]',
      alt: 'Powerlifting',
      caption: '[CAPTION: PR day]',
      rotation: 4,
      top: '45%',
      right: '3%',
      parallaxSpeed: 0.12,
    },
    {
      id: 'candid-1',
      src: null, // [REPLACE WITH PERSONAL PHOTO: candid moment]
      placeholder: '[REPLACE: Candid moment]',
      alt: 'Candid',
      caption: '[CAPTION: A memory]',
      rotation: -3,
      top: '25%',
      right: '22%',
      parallaxSpeed: 0.05,
    },
  ],

  // About page photo stack
  about: [
    {
      id: 'about-1',
      src: null,
      placeholder: '[REPLACE: Profile or candid photo]',
      alt: 'About photo 1',
      caption: null,
      rotation: -8,
    },
    {
      id: 'about-2',
      src: null,
      placeholder: '[REPLACE: Working on a project]',
      alt: 'About photo 2', 
      caption: null,
      rotation: 0,
    },
    {
      id: 'about-3',
      src: null,
      placeholder: '[REPLACE: With friends or team]',
      alt: 'About photo 3',
      caption: null,
      rotation: 6,
    },
  ],

  // Interests section
  interests: {
    rowing: {
      id: 'rowing-main',
      src: null, // [REPLACE WITH PERSONAL PHOTO: rowing]
      placeholder: '[REPLACE: Rowing photo - on water, with team, or at competition]',
      alt: 'Rowing',
    },
    powerlifting: {
      id: 'lifting-main',
      src: null, // [REPLACE WITH PERSONAL PHOTO: powerlifting]
      placeholder: '[REPLACE: Powerlifting photo - training or competition]',
      alt: 'Powerlifting',
    },
  },
};

// Personal notes and reflections
export const personalNotes = {
  hero: "[PERSONAL NOTE: Write something that captures who you are beyond your work - a belief, a goal, or what drives you]",
  
  rowing: "[PERSONAL NOTE: What rowing means to you - the discipline, the team, the early mornings, what it teaches you]",
  
  powerlifting: "[PERSONAL NOTE: What powerlifting means to you - the mental game, pushing limits, the community]",
  
  outsideCode: "[PERSONAL NOTE: A reflection on how these interests shape who you are as a person and a builder]",
};
