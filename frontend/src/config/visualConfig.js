// ============================================
// VISUAL EXPERIMENTS CONFIGURATION
// ============================================
// 
// HOW TO DISABLE ALL VISUAL EXPERIMENTS:
// Simply set ENABLE_VISUALS to false below.
// This will instantly disable all 3D elements,
// parallax effects, and decorative visuals.
//
// Time to disable: < 10 seconds
// ============================================

// MASTER TOGGLE — Set to false to disable all visual experiments
export const ENABLE_VISUALS = false;

// Individual toggles for fine-grained control
export const visualConfig = {
  // Background mesh/gradient effect on hero
  meshBackground: true,
  
  // Floating abstract shapes
  floatingShapes: true,
  
  // Parallax scroll effects
  parallaxEffects: true,
  
  // Enhanced card hover effects (3D tilt)
  cardHoverEffects: true,
  
  // Animated gradient orbs
  gradientOrbs: true,
  
  // Subtle noise texture overlay
  noiseTexture: true,
};

// Helper to check if a specific visual is enabled
export const isVisualEnabled = (visualName) => {
  return ENABLE_VISUALS && visualConfig[visualName];
};
