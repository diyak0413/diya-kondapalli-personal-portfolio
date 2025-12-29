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

// INTRO COLLAGE TOGGLE — Set to false to skip intro animation
export const enableIntroCollage = true;

export const personalConfig = {
  // Intro collage animation on first load
  introCollage: true,
  
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
