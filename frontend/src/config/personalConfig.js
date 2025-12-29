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

export const personalConfig = {
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
};

// Helper to check if a feature is enabled
export const isPersonalEnabled = (feature) => {
  return enablePersonalVisuals && personalConfig[feature];
};
