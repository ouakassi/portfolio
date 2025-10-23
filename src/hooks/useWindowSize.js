import { useState, useEffect } from "react";

/**
 * Custom hook to detect and track window size changes
 * Returns current window dimensions and breakpoint information
 */
export const useWindowSize = () => {
  // Initialize state with current window size or default values
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  // Define breakpoints (you can customize these based on your design system)
  const breakpoints = {
    xs: 480,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    "2xl": 1536,
  };

  // Helper functions for breakpoint detection
  const getBreakpoint = (width) => {
    if (width >= breakpoints["2xl"]) return "2xl";
    if (width >= breakpoints.xl) return "xl";
    if (width >= breakpoints.lg) return "lg";
    if (width >= breakpoints.md) return "md";
    if (width >= breakpoints.sm) return "sm";
    return "xs";
  };

  const isBreakpoint = (breakpoint) => {
    return windowSize.width >= breakpoints[breakpoint];
  };

  const isMobile = windowSize.width < breakpoints.md;
  const isTablet =
    windowSize.width >= breakpoints.md && windowSize.width < breakpoints.lg;
  const isDesktop = windowSize.width >= breakpoints.lg;

  useEffect(() => {
    // Handler to call on window resize
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Add event listener with passive option for better performance
    window.addEventListener("resize", handleResize, { passive: true });

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures effect only runs on mount

  return {
    // Window dimensions
    width: windowSize.width,
    height: windowSize.height,

    // Current breakpoint
    breakpoint: getBreakpoint(windowSize.width),

    // Device type helpers
    isMobile,
    isTablet,
    isDesktop,

    // Breakpoint checkers
    isXs: windowSize.width < breakpoints.sm,
    isSm: isBreakpoint("sm") && windowSize.width < breakpoints.md,
    isMd: isBreakpoint("md") && windowSize.width < breakpoints.lg,
    isLg: isBreakpoint("lg") && windowSize.width < breakpoints.xl,
    isXl: isBreakpoint("xl") && windowSize.width < breakpoints["2xl"],
    is2xl: isBreakpoint("2xl"),

    // Min-width checkers (useful for mobile-first approach)
    isSmUp: isBreakpoint("sm"),
    isMdUp: isBreakpoint("md"),
    isLgUp: isBreakpoint("lg"),
    isXlUp: isBreakpoint("xl"),
    is2xlUp: isBreakpoint("2xl"),

    // Custom breakpoint checker
    isBreakpoint,

    // Aspect ratio
    aspectRatio: windowSize.width / windowSize.height,
    isLandscape: windowSize.width > windowSize.height,
    isPortrait: windowSize.height > windowSize.width,
  };
};

export default useWindowSize;
