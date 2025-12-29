// ============================================
// OPTIONAL VISUAL — MINI COLLAGE & IMAGE STRIP
// ============================================
// TO DISABLE: Set enablePersonalVisuals = false
// or personalConfig.miniCollage = false
// ============================================

import React, { useEffect, useRef, useState } from 'react';
import { enablePersonalVisuals, isPersonalEnabled } from '../config/personalConfig';
import { miniCollagePhotos, imageStripPhotos } from '../data/introContent';

// Mini Collage Component
export const MiniCollage = ({ className = '' }) => {
  if (!enablePersonalVisuals || !isPersonalEnabled('miniCollage')) return null;

  return (
    <div className={`mini-collage-container ${className}`}>
      <div className="mini-collage-wrapper">
        {miniCollagePhotos.map((photo, index) => (
          <div
            key={photo.id}
            className="mini-collage-photo"
            style={{
              '--rotation': `${photo.rotation}deg`,
              '--index': index,
            }}
          >
            <div className="mini-polaroid">
              <div className="mini-polaroid-image">
                {photo.src ? (
                  <img src={photo.src} alt={photo.alt} />
                ) : (
                  <span className="mini-placeholder">{photo.placeholder}</span>
                )}
              </div>
              <div className="mini-polaroid-tape" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Scrolling Image Strip Component
export const ImageStrip = ({ className = '' }) => {
  const stripRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  if (!enablePersonalVisuals || !isPersonalEnabled('imageStrip')) return null;

  // Double the photos for seamless loop
  const allPhotos = [...imageStripPhotos, ...imageStripPhotos];

  return (
    <div 
      className={`image-strip-container ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div 
        ref={stripRef}
        className={`image-strip-track ${isPaused ? 'paused' : ''}`}
      >
        {allPhotos.map((photo, index) => (
          <div key={`${photo.id}-${index}`} className="image-strip-item">
            <div className="strip-photo">
              {photo.src ? (
                <img src={photo.src} alt={photo.alt} />
              ) : (
                <span className="strip-placeholder">{photo.placeholder}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Animated Photo Stack for About page
export const AnimatedPhotoStack = ({ photos, className = '' }) => {
  const [activeIndex, setActiveIndex] = useState(1);
  const stackRef = useRef(null);

  useEffect(() => {
    if (!isPersonalEnabled('photoTiltEffects')) return;

    const handleMouseMove = (e) => {
      if (!stackRef.current) return;
      const rect = stackRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      
      if (x < 0.33) setActiveIndex(0);
      else if (x > 0.66) setActiveIndex(2);
      else setActiveIndex(1);
    };

    const element = stackRef.current;
    if (element) {
      element.addEventListener('mousemove', handleMouseMove);
      return () => element.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  if (!enablePersonalVisuals) return null;

  return (
    <div ref={stackRef} className={`animated-photo-stack ${className}`}>
      {photos.map((photo, index) => {
        const isActive = index === activeIndex;
        const offset = (index - activeIndex) * 20;
        const rotation = (index - 1) * 8 + (isActive ? 0 : (index - activeIndex) * 3);
        
        return (
          <div
            key={photo.id || index}
            className={`stack-photo ${isActive ? 'active' : ''}`}
            style={{
              '--offset': `${offset}px`,
              '--rotation': `${rotation}deg`,
              '--z-index': isActive ? 10 : 10 - Math.abs(index - activeIndex),
            }}
          >
            <div className="stack-polaroid">
              <div className="stack-polaroid-image">
                {photo.src ? (
                  <img src={photo.src} alt={photo.alt} />
                ) : (
                  <span className="stack-placeholder">{photo.placeholder}</span>
                )}
              </div>
              {photo.caption && (
                <p className="stack-caption">{photo.caption}</p>
              )}
            </div>
          </div>
        );
      })}  
    </div>
  );
};

export default { MiniCollage, ImageStrip, AnimatedPhotoStack };
