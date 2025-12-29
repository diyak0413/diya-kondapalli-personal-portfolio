// ============================================
// PERSONAL VISUAL COMPONENTS
// ============================================
// TO DISABLE: Set enablePersonalVisuals = false
// in config/personalConfig.js
// ============================================

import React, { useState, useEffect, useRef } from 'react';
import { enablePersonalVisuals, isPersonalEnabled } from '../config/personalConfig';

// ============================================
// POLAROID PHOTO COMPONENT
// ============================================
export const Polaroid = ({ 
  src, 
  alt, 
  caption, 
  rotation = 0, 
  className = '',
  placeholder = '[REPLACE WITH PERSONAL PHOTO]'
}) => {
  if (!enablePersonalVisuals) return null;

  return (
    <div 
      className={`polaroid ${className}`}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <div className="polaroid-image flex items-center justify-center text-neutral-400 text-xs text-center p-4">
        {src ? (
          <img src={src} alt={alt} className="w-full h-full object-cover" />
        ) : (
          <span>{placeholder}</span>
        )}
      </div>
      {caption && (
        <p className="polaroid-caption">{caption}</p>
      )}
    </div>
  );
};

// ============================================
// FLOATING POLAROID GALLERY
// ============================================
export const FloatingPolaroids = ({ photos }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (!isPersonalEnabled('parallaxEffects')) return;

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!enablePersonalVisuals || !isPersonalEnabled('polaroidPhotos')) return null;

  return (
    <div className="floating-photos">
      {photos.map((photo, index) => {
        const parallaxOffset = isPersonalEnabled('parallaxEffects') 
          ? scrollY * (photo.parallaxSpeed || 0.1) 
          : 0;
        
        return (
          <div
            key={index}
            className="absolute"
            style={{
              top: photo.top,
              left: photo.left,
              right: photo.right,
              transform: `translateY(${parallaxOffset}px)`,
            }}
          >
            <Polaroid
              src={photo.src}
              alt={photo.alt}
              caption={photo.caption}
              rotation={photo.rotation}
              placeholder={photo.placeholder}
            />
          </div>
        );
      })}  
    </div>
  );
};

// ============================================
// PINNED NOTE COMPONENT
// ============================================
export const PinnedNote = ({ children, className = '' }) => {
  if (!enablePersonalVisuals) return null;

  return (
    <div className={`pinned-note ${className}`}>
      <div className="pinned-note-text">{children}</div>
    </div>
  );
};

// ============================================
// PHOTO STACK / COLLAGE
// ============================================
export const PhotoStack = ({ photos, className = '' }) => {
  if (!enablePersonalVisuals) return null;

  return (
    <div className={`photo-stack ${className}`}>
      {photos.map((photo, index) => (
        <Polaroid
          key={index}
          src={photo.src}
          alt={photo.alt}
          caption={photo.caption}
          rotation={photo.rotation || (index - 1) * 5}
          placeholder={photo.placeholder}
        />
      ))}
    </div>
  );
};

// ============================================
// TILT ON SCROLL WRAPPER
// ============================================
export const TiltOnScroll = ({ children, className = '', intensity = 5 }) => {
  const ref = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!isPersonalEnabled('photoTiltEffects')) return;

    const handleScroll = () => {
      if (!ref.current) return;
      
      const rect = ref.current.getBoundingClientRect();
      const centerY = window.innerHeight / 2;
      const elementCenter = rect.top + rect.height / 2;
      const offset = (elementCenter - centerY) / centerY;
      
      setTilt({
        x: offset * intensity,
        y: 0
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [intensity]);

  if (!isPersonalEnabled('photoTiltEffects')) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div
      ref={ref}
      className={`tilt-on-scroll ${className}`}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg)`,
      }}
    >
      {children}
    </div>
  );
};

// ============================================
// PARALLAX SECTION
// ============================================
export const ParallaxSection = ({ children, className = '', speed = 0.3 }) => {
  const [offset, setOffset] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    if (!isPersonalEnabled('parallaxEffects')) return;

    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const scrollProgress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
      setOffset(scrollProgress * 100 * speed);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div ref={ref} className={`parallax-container ${className}`}>
      <div 
        className="parallax-element"
        style={{ transform: `translateY(${offset}px)` }}
      >
        {children}
      </div>
    </div>
  );
};

export default {
  Polaroid,
  FloatingPolaroids,
  PinnedNote,
  PhotoStack,
  TiltOnScroll,
  ParallaxSection,
};
