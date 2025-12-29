// ============================================
// INTRO COLLAGE PHOTO PLACEHOLDERS
// ============================================
// Replace these with actual photos.
// Support for 6-12 images in the intro collage.
// ============================================

export const introPhotos = [
  {
    id: 'intro-rowing',
    src: null,
    placeholder: '[PHOTO — rowing]',
    alt: 'Rowing on the water',
    // Position and animation settings
    startX: -100,
    startY: -50,
    endX: 5,
    endY: 10,
    rotation: -8,
    scale: 1,
    delay: 0,
    size: 'large', // large, medium, small
  },
  {
    id: 'intro-lifting',
    src: null,
    placeholder: '[PHOTO — powerlifting]',
    alt: 'Powerlifting moment',
    startX: 150,
    startY: -80,
    endX: 60,
    endY: 5,
    rotation: 6,
    scale: 1,
    delay: 150,
    size: 'large',
  },
  {
    id: 'intro-coding',
    src: null,
    placeholder: '[PHOTO — coding project screenshot]',
    alt: 'Coding project',
    startX: -80,
    startY: 120,
    endX: 15,
    endY: 45,
    rotation: -4,
    scale: 0.9,
    delay: 300,
    size: 'medium',
  },
  {
    id: 'intro-candid1',
    src: null,
    placeholder: '[PHOTO — candid moment]',
    alt: 'Candid moment',
    startX: 120,
    startY: 100,
    endX: 55,
    endY: 40,
    rotation: 5,
    scale: 0.85,
    delay: 450,
    size: 'medium',
  },
  {
    id: 'intro-team',
    src: null,
    placeholder: '[PHOTO — with team/friends]',
    alt: 'With team',
    startX: -60,
    startY: -100,
    endX: 35,
    endY: 25,
    rotation: -2,
    scale: 0.75,
    delay: 600,
    size: 'small',
  },
  {
    id: 'intro-workspace',
    src: null,
    placeholder: '[PHOTO — workspace/desk]',
    alt: 'Workspace',
    startX: 100,
    startY: -60,
    endX: 75,
    endY: 55,
    rotation: 8,
    scale: 0.7,
    delay: 750,
    size: 'small',
  },
  {
    id: 'intro-achievement',
    src: null,
    placeholder: '[PHOTO — achievement/award moment]',
    alt: 'Achievement',
    startX: -120,
    startY: 80,
    endX: 25,
    endY: 65,
    rotation: -6,
    scale: 0.8,
    delay: 900,
    size: 'small',
  },
  {
    id: 'intro-outdoors',
    src: null,
    placeholder: '[PHOTO — outdoors/nature]',
    alt: 'Outdoors',
    startX: 80,
    startY: 150,
    endX: 45,
    endY: 70,
    rotation: 3,
    scale: 0.75,
    delay: 1050,
    size: 'small',
  },
];

// Intro text - edit this to personalize
export const introText = {
  greeting: "Hi, I'm Diya.",
  lines: [
    "I build things.",
    "I lift heavy things.",
    "I chase ideas that matter.",
  ],
  // Placeholder for custom intro
  placeholder: "[REPLACE: Write your own intro lines here]",
};

// Mini collage photos for homepage
export const miniCollagePhotos = [
  {
    id: 'mini-1',
    src: null,
    placeholder: '[PHOTO — favorite project moment]',
    alt: 'Project moment',
    rotation: -5,
  },
  {
    id: 'mini-2',
    src: null,
    placeholder: '[PHOTO — behind the scenes]',
    alt: 'Behind the scenes',
    rotation: 3,
  },
  {
    id: 'mini-3',
    src: null,
    placeholder: '[PHOTO — in progress work]',
    alt: 'Work in progress',
    rotation: -2,
  },
];

// Scrolling image strip photos
export const imageStripPhotos = [
  { id: 'strip-1', src: null, placeholder: '[PHOTO — project 1]', alt: 'Project 1' },
  { id: 'strip-2', src: null, placeholder: '[PHOTO — memory 1]', alt: 'Memory 1' },
  { id: 'strip-3', src: null, placeholder: '[PHOTO — rowing moment]', alt: 'Rowing' },
  { id: 'strip-4', src: null, placeholder: '[PHOTO — project 2]', alt: 'Project 2' },
  { id: 'strip-5', src: null, placeholder: '[PHOTO — lifting PR]', alt: 'Lifting' },
  { id: 'strip-6', src: null, placeholder: '[PHOTO — team photo]', alt: 'Team' },
];
