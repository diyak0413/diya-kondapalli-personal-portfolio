// ============================================
// PERSONAL VISUALS CONFIGURATION
// ============================================
// 
// TO DISABLE ALL PERSONAL VISUALS:
// Set enablePersonalVisuals to false below.
// This removes Polaroid photos, parallax effects,
// and personal story elements.
//
// Time to disable: < 5 seconds
// ============================================

export const enablePersonalVisuals = true;

// INTRO OVERLAY TOGGLE — Set to false to skip intro animation
// This controls the full-screen welcome sequence on first load
export const enableIntroOverlay = true;

export const personalConfig = {
  // Intro overlay animation on first load
  introOverlay: true,
  
  // Polaroid-style floating photos
  polaroidPhotos: true,
  
  // Parallax scroll effects
  parallaxEffects: true,
  
  // Photo tilt on hover/scroll
  photoTiltEffects: true,
  
  // "Outside the Code" interests section
  interestsSection: true,
  
  // Warm accent color theme
  warmAccents: true,
  
  // Mini photo collage on homepage
  miniCollage: true,
  
  // Scrolling image strip
  imageStrip: true,
};

// Helper to check if a feature is enabled
export const isPersonalEnabled = (feature) => {
  return enablePersonalVisuals && personalConfig[feature];
};
