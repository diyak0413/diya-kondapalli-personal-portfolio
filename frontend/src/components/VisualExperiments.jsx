// ============================================
// OPTIONAL VISUAL — SAFE TO REMOVE
// ============================================
// This file contains all experimental visual components.
// To remove: Delete this file and remove imports from App.js
// Or simply set ENABLE_VISUALS = false in visualConfig.js
// ============================================

import React, { useEffect, useState, useRef } from 'react';
import { ENABLE_VISUALS, isVisualEnabled } from '../config/visualConfig';

// ============================================
// MESH GRADIENT BACKGROUND
// A subtle, animated gradient mesh effect
// ============================================
export const MeshBackground = () => {
  if (!isVisualEnabled('meshBackground')) return null;

  return (
    <div className="visual-mesh-background" aria-hidden="true">
      <div className="mesh-gradient mesh-1" />
      <div className="mesh-gradient mesh-2" />
      <div className="mesh-gradient mesh-3" />
    </div>
  );
};

// ============================================
// FLOATING ABSTRACT SHAPES
// Subtle geometric shapes that float gently
// ============================================
export const FloatingShapes = () => {
  if (!isVisualEnabled('floatingShapes')) return null;

  return (
    <div className="visual-floating-shapes" aria-hidden="true">
      <div className="shape shape-1">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="currentColor"
            d="M45.3,-51.2C58.3,-40.9,68.4,-25.6,71.2,-8.6C74,8.4,69.5,27.1,58.6,40.1C47.7,53.1,30.4,60.4,12.4,64.1C-5.6,67.8,-24.3,67.9,-39.8,60.1C-55.3,52.3,-67.6,36.6,-72.1,18.6C-76.6,0.6,-73.3,-19.7,-63.1,-35.1C-52.9,-50.5,-35.8,-61,-18.5,-64.7C-1.2,-68.4,16.3,-65.3,32.3,-61.5C48.3,-57.7,62.8,-53.2,45.3,-51.2Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
      <div className="shape shape-2">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="80" fill="currentColor" />
        </svg>
      </div>
      <div className="shape shape-3">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <polygon points="100,10 190,190 10,190" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
};

// ============================================
// GRADIENT ORBS
// Soft, glowing orbs that add depth
// ============================================
export const GradientOrbs = () => {
  if (!isVisualEnabled('gradientOrbs')) return null;

  return (
    <div className="visual-gradient-orbs" aria-hidden="true">
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
    </div>
  );
};

// ============================================
// NOISE TEXTURE OVERLAY
// Subtle grain texture for depth
// ============================================
export const NoiseOverlay = () => {
  if (!isVisualEnabled('noiseTexture')) return null;

  return <div className="visual-noise-overlay" aria-hidden="true" />;
};

// ============================================
// PARALLAX CONTAINER
// Wrapper that adds parallax scroll effect
// ============================================
export const ParallaxLayer = ({ children, speed = 0.5, className = '' }) => {
  const [offset, setOffset] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    if (!isVisualEnabled('parallaxEffects')) return;

    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const scrolled = window.scrollY;
        const rate = scrolled * speed * 0.1;
        setOffset(rate);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  if (!isVisualEnabled('parallaxEffects')) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div
      ref={ref}
      className={`visual-parallax-layer ${className}`}
      style={{ transform: `translateY(${offset}px)` }}
    >
      {children}
    </div>
  );
};

// ============================================
// 3D TILT CARD WRAPPER
// Adds subtle 3D tilt effect on hover
// ============================================
export const TiltCard = ({ children, className = '', intensity = 10 }) => {
  const [transform, setTransform] = useState('');
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    if (!isVisualEnabled('cardHoverEffects') || !ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -intensity;
    const rotateY = ((x - centerX) / centerX) * intensity;

    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
  };

  const handleMouseLeave = () => {
    setTransform('');
  };

  if (!isVisualEnabled('cardHoverEffects')) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div
      ref={ref}
      className={`visual-tilt-card ${className}`}
      style={{ transform, transition: 'transform 0.15s ease-out' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};

// ============================================
// ABSTRACT 3D ELEMENT
// A decorative 3D-inspired element for hero section
// ============================================
export const Abstract3DElement = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    if (!ENABLE_VISUALS) return;

    const handleScroll = () => {
      const scrolled = window.scrollY;
      setRotation(scrolled * 0.1);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!ENABLE_VISUALS) return null;

  return (
    <div className="visual-abstract-3d" aria-hidden="true">
      <div
        className="abstract-ring ring-1"
        style={{ transform: `rotateX(60deg) rotateZ(${rotation}deg)` }}
      />
      <div
        className="abstract-ring ring-2"
        style={{ transform: `rotateX(60deg) rotateZ(${-rotation * 0.7}deg)` }}
      />
      <div
        className="abstract-ring ring-3"
        style={{ transform: `rotateX(60deg) rotateZ(${rotation * 0.5}deg)` }}
      />
      <div className="abstract-sphere" />
    </div>
  );
};

// ============================================
// VISUAL WRAPPER
// Main component that wraps all visual experiments
// ============================================
export const VisualExperiments = ({ section = 'global' }) => {
  if (!ENABLE_VISUALS) return null;

  if (section === 'hero') {
    return (
      <>
        <MeshBackground />
        <GradientOrbs />
        <Abstract3DElement />
      </>
    );
  }

  if (section === 'global') {
    return (
      <>
        <NoiseOverlay />
        <FloatingShapes />
      </>
    );
  }

  return null;
};

export default VisualExperiments;
