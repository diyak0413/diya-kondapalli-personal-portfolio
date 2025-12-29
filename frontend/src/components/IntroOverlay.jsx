// ============================================
// INTRO OVERLAY: full-screen photo stacking sequence
// ============================================
// EDIT introImages array below to use your own photos
// Set enableIntroOverlay = false to remove intro completely
// ============================================

import React, { useState, useEffect, useCallback } from 'react';
import '../styles/introOverlay.css';

// ============================================
// CONFIGURATION
// ============================================

// Set to false to disable the intro completely
const enableIntroOverlay = true;

// EDIT THIS ARRAY to use your own photos
// Each item should have a src (image path) and placeholder text
const introImages = [
  {
    id: 1,
    src: null, // [PHOTO 1 — rowing]
    placeholder: '[PHOTO 1 — rowing]',
    alt: 'Rowing',
  },
  {
    id: 2,
    src: null, // [PHOTO 2 — powerlifting]
    placeholder: '[PHOTO 2 — powerlifting]',
    alt: 'Powerlifting',
  },
  {
    id: 3,
    src: null, // [PHOTO 3 — coding / project]
    placeholder: '[PHOTO 3 — coding / project]',
    alt: 'Coding project',
  },
  {
    id: 4,
    src: null, // [PHOTO 4 — candid / life]
    placeholder: '[PHOTO 4 — candid / life]',
    alt: 'Candid moment',
  },
  {
    id: 5,
    src: null, // [PHOTO 5 — another candid]
    placeholder: '[PHOTO 5 — another candid]',
    alt: 'Another candid',
  },
  {
    id: 6,
    src: null, // [PHOTO 6 — achievement or team]
    placeholder: '[PHOTO 6 — achievement or team]',
    alt: 'Achievement',
  },
  {
    id: 7,
    src: null, // [PHOTO 7 — workspace or creative]
    placeholder: '[PHOTO 7 — workspace or creative]',
    alt: 'Workspace',
  },
  {
    id: 8,
    src: null, // [PHOTO 8 — final memorable shot]
    placeholder: '[PHOTO 8 — final memorable shot]',
    alt: 'Memorable moment',
  },
];

// EDIT THESE to customize the intro text
const introText = {
  heading: "Hi, I'm Diya.",
  subheading: "I build things, I lift heavy things, and I chase ideas that matter.",
  buttonText: "Enter site",
};

// ============================================
// TIMING CONFIGURATION (in milliseconds)
// ============================================
const FADE_IN_DURATION = 700;      // 0.7 seconds fade-in
const DELAY_BETWEEN_PHOTOS = 1500; // 1.5 seconds between each photo
const PAUSE_AFTER_COLLAGE = 1500;  // 1.5 seconds pause after all photos
const TEXT_FADE_DURATION = 800;    // 0.8 seconds for text to fade in

// ============================================
// COMPONENT
// ============================================

const IntroOverlay = ({ onComplete }) => {
  const [visiblePhotos, setVisiblePhotos] = useState([]);
  const [showDarkOverlay, setShowDarkOverlay] = useState(false);
  const [showText, setShowText] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  // Check if intro should show (only on first load / hard refresh)
  const [shouldShow, setShouldShow] = useState(() => {
    if (!enableIntroOverlay) return false;
    // Check session storage - intro only plays once per session
    const hasSeenIntro = sessionStorage.getItem('diya-intro-seen');
    return !hasSeenIntro;
  });

  // Generate position/rotation for each photo to create overlap effect
  const getPhotoStyle = (index) => {
    // Positions spread across screen with slight overlaps
    const positions = [
      { x: -5, y: -3, rotate: -4 },
      { x: 8, y: 2, rotate: 3 },
      { x: -3, y: 5, rotate: -2 },
      { x: 6, y: -4, rotate: 5 },
      { x: -8, y: 3, rotate: -3 },
      { x: 4, y: -2, rotate: 2 },
      { x: -2, y: 6, rotate: -5 },
      { x: 5, y: 0, rotate: 4 },
    ];
    
    const pos = positions[index % positions.length];
    return {
      '--photo-x': `${pos.x}%`,
      '--photo-y': `${pos.y}%`,
      '--photo-rotate': `${pos.rotate}deg`,
      '--photo-z': index + 1,
    };
  };

  // Main animation sequence
  useEffect(() => {
    if (!shouldShow) {
      onComplete?.();
      return;
    }

    const timers = [];

    // Reveal photos one by one
    introImages.forEach((_, index) => {
      const timer = setTimeout(() => {
        setVisiblePhotos(prev => [...prev, index]);
      }, index * DELAY_BETWEEN_PHOTOS);
      timers.push(timer);
    });

    // After all photos are shown, wait, then show text
    const totalPhotoTime = introImages.length * DELAY_BETWEEN_PHOTOS;
    
    // Show dark overlay
    const darkOverlayTimer = setTimeout(() => {
      setShowDarkOverlay(true);
    }, totalPhotoTime + PAUSE_AFTER_COLLAGE);
    timers.push(darkOverlayTimer);

    // Show text
    const textTimer = setTimeout(() => {
      setShowText(true);
    }, totalPhotoTime + PAUSE_AFTER_COLLAGE + 400);
    timers.push(textTimer);

    return () => timers.forEach(t => clearTimeout(t));
  }, [shouldShow, onComplete]);

  // Handle entering the site
  const handleEnter = useCallback(() => {
    setIsExiting(true);
    sessionStorage.setItem('diya-intro-seen', 'true');
    
    setTimeout(() => {
      setShouldShow(false);
      onComplete?.();
    }, 600);
  }, [onComplete]);

  // Don't render if disabled or already seen
  if (!shouldShow) return null;

  return (
    <div 
      className={`intro-overlay-container ${isExiting ? 'is-exiting' : ''}`}
      aria-label="Welcome intro"
    >
      {/* Solid background */}
      <div className="intro-solid-bg" />

      {/* Photo stack */}
      <div className="intro-photo-stack">
        {introImages.map((image, index) => (
          <div
            key={image.id}
            className={`intro-stack-photo ${visiblePhotos.includes(index) ? 'is-visible' : ''}`}
            style={getPhotoStyle(index)}
          >
            {image.src ? (
              <img src={image.src} alt={image.alt} />
            ) : (
              <div className="intro-photo-placeholder-box">
                <span>{image.placeholder}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Dark overlay for text readability */}
      <div className={`intro-dark-overlay ${showDarkOverlay ? 'is-visible' : ''}`} />

      {/* Centered text content */}
      <div className={`intro-text-block ${showText ? 'is-visible' : ''}`}>
        <h1 className="intro-heading">{introText.heading}</h1>
        <p className="intro-subheading">{introText.subheading}</p>
        <button 
          className="intro-enter-button"
          onClick={handleEnter}
          type="button"
        >
          {introText.buttonText}
        </button>
      </div>
    </div>
  );
};

export default IntroOverlay;
