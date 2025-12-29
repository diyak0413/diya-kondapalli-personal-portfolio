// ============================================
// OPTIONAL VISUAL — INTRO COLLAGE ANIMATION
// ============================================
// TO DISABLE: Set enableIntroCollage = false
// in config/personalConfig.js
// ============================================

import React, { useState, useEffect, useCallback } from 'react';
import { ChevronDown } from 'lucide-react';
import { enableIntroCollage } from '../config/personalConfig';
import { introPhotos, introText } from '../data/introContent';
import '../styles/introAnimation.css';

const IntroCollage = ({ onComplete }) => {
  const [phase, setPhase] = useState('photos'); // photos, text, ready
  const [photosAnimated, setPhotosAnimated] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const [canScroll, setCanScroll] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  // Check if intro should be skipped (already seen)
  const [shouldShow, setShouldShow] = useState(() => {
    if (!enableIntroCollage) return false;
    const hasSeenIntro = sessionStorage.getItem('hasSeenIntro');
    return !hasSeenIntro;
  });

  useEffect(() => {
    if (!shouldShow) {
      onComplete?.();
      return;
    }

    // Phase 1: Photos animate in
    const photoTimer = setTimeout(() => {
      setPhotosAnimated(true);
    }, 100);

    // Phase 2: Text appears after photos settle
    const textTimer = setTimeout(() => {
      setPhase('text');
      setTextVisible(true);
    }, 2000);

    // Phase 3: Ready to scroll
    const readyTimer = setTimeout(() => {
      setPhase('ready');
      setCanScroll(true);
    }, 3500);

    return () => {
      clearTimeout(photoTimer);
      clearTimeout(textTimer);
      clearTimeout(readyTimer);
    };
  }, [shouldShow, onComplete]);

  const handleEnter = useCallback(() => {
    setIsExiting(true);
    sessionStorage.setItem('hasSeenIntro', 'true');
    
    setTimeout(() => {
      setShouldShow(false);
      onComplete?.();
    }, 800);
  }, [onComplete]);

  const handleScroll = useCallback((e) => {
    if (canScroll && e.deltaY > 0) {
      handleEnter();
    }
  }, [canScroll, handleEnter]);

  const handleKeyDown = useCallback((e) => {
    if (canScroll && (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown')) {
      handleEnter();
    }
  }, [canScroll, handleEnter]);

  useEffect(() => {
    if (shouldShow) {
      window.addEventListener('wheel', handleScroll, { passive: true });
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
      
      return () => {
        window.removeEventListener('wheel', handleScroll);
        window.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = '';
      };
    }
  }, [shouldShow, handleScroll, handleKeyDown]);

  if (!shouldShow) return null;

  const getSizeClass = (size) => {
    switch (size) {
      case 'large': return 'w-48 h-48 md:w-56 md:h-56';
      case 'medium': return 'w-36 h-36 md:w-44 md:h-44';
      case 'small': return 'w-28 h-28 md:w-36 md:h-36';
      default: return 'w-40 h-40';
    }
  };

  return (
    <div 
      className={`intro-collage-overlay ${isExiting ? 'exiting' : ''}`}
      onClick={canScroll ? handleEnter : undefined}
    >
      {/* Background gradient */}
      <div className="intro-background" />
      
      {/* Photo collage container */}
      <div className="intro-photos-container">
        {introPhotos.map((photo, index) => (
          <div
            key={photo.id}
            className={`intro-polaroid ${getSizeClass(photo.size)} ${photosAnimated ? 'animated' : ''}`}
            style={{
              '--start-x': `${photo.startX}%`,
              '--start-y': `${photo.startY}%`,
              '--end-x': `${photo.endX}%`,
              '--end-y': `${photo.endY}%`,
              '--rotation': `${photo.rotation}deg`,
              '--delay': `${photo.delay}ms`,
              '--scale': photo.scale,
              zIndex: index + 1,
            }}
          >
            <div className="intro-polaroid-inner">
              <div className="intro-polaroid-image">
                {photo.src ? (
                  <img src={photo.src} alt={photo.alt} />
                ) : (
                  <span className="intro-placeholder-text">{photo.placeholder}</span>
                )}
              </div>
              <div className="intro-polaroid-tape" />
            </div>
          </div>
        ))}
      </div>

      {/* Intro text */}
      <div className={`intro-text-container ${textVisible ? 'visible' : ''}`}>
        <h1 className="intro-greeting">{introText.greeting}</h1>
        <div className="intro-lines">
          {introText.lines.map((line, index) => (
            <p 
              key={index} 
              className="intro-line"
              style={{ '--line-delay': `${index * 200 + 400}ms` }}
            >
              {line}
            </p>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`intro-scroll-indicator ${canScroll ? 'visible' : ''}`}>
        <span className="intro-scroll-text">scroll to enter</span>
        <ChevronDown className="intro-scroll-arrow" />
      </div>

      {/* Skip button */}
      <button 
        className="intro-skip-button"
        onClick={handleEnter}
        aria-label="Skip intro"
      >
        Skip
      </button>
    </div>
  );
};

export default IntroCollage;
