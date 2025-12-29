// ============================================
// INTRO OVERLAY — SAFE TO REMOVE
// ============================================
// A simple full-screen welcome sequence that plays
// before the main homepage is shown.
//
// TO DISABLE: Set enableIntroOverlay = false
// in config/personalConfig.js
//
// TO REMOVE COMPLETELY: Delete this file and
// remove the import from App.js
// ============================================

import React, { useState, useEffect, useCallback } from 'react';
import { enableIntroOverlay } from '../config/personalConfig';
import { introOverlayPhotos, introOverlayText } from '../data/introOverlayContent';
import '../styles/introOverlay.css';

const IntroOverlay = ({ onComplete }) => {
  const [visiblePhotos, setVisiblePhotos] = useState([]);
  const [showText, setShowText] = useState(false);
  const [canSkip, setCanSkip] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  // Check if intro should be shown
  const [shouldShow, setShouldShow] = useState(() => {
    if (!enableIntroOverlay) return false;
    const hasSeenIntro = sessionStorage.getItem('hasSeenIntroOverlay');
    return !hasSeenIntro;
  });

  // Photo positions for overlap effect
  const getPhotoStyle = (index, total) => {
    // Create overlapping collage effect
    const positions = [
      { x: -15, y: -10, rotate: -8, scale: 1 },
      { x: 20, y: -5, rotate: 5, scale: 0.95 },
      { x: -10, y: 15, rotate: -3, scale: 0.9 },
      { x: 25, y: 10, rotate: 7, scale: 0.85 },
      { x: -5, y: -15, rotate: -5, scale: 0.88 },
      { x: 15, y: 20, rotate: 4, scale: 0.82 },
    ];
    
    const pos = positions[index % positions.length];
    return {
      transform: `translate(${pos.x}%, ${pos.y}%) rotate(${pos.rotate}deg) scale(${pos.scale})`,
      zIndex: index + 1,
    };
  };

  useEffect(() => {
    if (!shouldShow) {
      onComplete?.();
      return;
    }

    // Reveal photos one by one
    const photoInterval = 400; // ms between each photo
    const timers = [];

    introOverlayPhotos.forEach((photo, index) => {
      const timer = setTimeout(() => {
        setVisiblePhotos(prev => [...prev, photo.id]);
      }, index * photoInterval);
      timers.push(timer);
    });

    // Show text after all photos are visible
    const textTimer = setTimeout(() => {
      setShowText(true);
      setCanSkip(true);
    }, introOverlayPhotos.length * photoInterval + 500);
    timers.push(textTimer);

    return () => timers.forEach(t => clearTimeout(t));
  }, [shouldShow, onComplete]);

  const handleEnter = useCallback(() => {
    if (!canSkip && !showText) return;
    
    setIsExiting(true);
    sessionStorage.setItem('hasSeenIntroOverlay', 'true');
    
    setTimeout(() => {
      setShouldShow(false);
      onComplete?.();
    }, 600);
  }, [canSkip, showText, onComplete]);

  const handleSkip = useCallback(() => {
    setIsExiting(true);
    sessionStorage.setItem('hasSeenIntroOverlay', 'true');
    
    setTimeout(() => {
      setShouldShow(false);
      onComplete?.();
    }, 600);
  }, [onComplete]);

  if (!shouldShow) return null;

  return (
    <div className={`intro-overlay ${isExiting ? 'exiting' : ''}`}>
      {/* Background */}
      <div className="intro-overlay-bg" />

      {/* Photo collage */}
      <div className="intro-photo-collage">
        {introOverlayPhotos.map((photo, index) => (
          <div
            key={photo.id}
            className={`intro-photo ${visiblePhotos.includes(photo.id) ? 'visible' : ''}`}
            style={{
              ...getPhotoStyle(index, introOverlayPhotos.length),
              transitionDelay: `${index * 50}ms`,
            }}
          >
            {photo.src ? (
              <img src={photo.src} alt={photo.alt} />
            ) : (
              <div className="intro-photo-placeholder">
                <span>{photo.placeholder}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Dim overlay when text shows */}
      <div className={`intro-dim-overlay ${showText ? 'visible' : ''}`} />

      {/* Centered text */}
      <div className={`intro-text-content ${showText ? 'visible' : ''}`}>
        <h1 className="intro-main-line">{introOverlayText.mainLine}</h1>
        <p className="intro-subtext">{introOverlayText.subtext}</p>
        <button 
          className="intro-enter-btn"
          onClick={handleEnter}
        >
          {introOverlayText.buttonText}
        </button>
      </div>

      {/* Skip intro link */}
      <button 
        className={`intro-skip-link ${canSkip || visiblePhotos.length > 2 ? 'visible' : ''}`}
        onClick={handleSkip}
      >
        Skip intro
      </button>
    </div>
  );
};

export default IntroOverlay;
