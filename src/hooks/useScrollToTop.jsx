import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLenis } from "lenis/react";

const ScrollToTop = ({ children }) => {
  const location = useLocation();
  const lenis = useLenis(); // get the active Lenis instance

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: false }); // reset instantly
    } else {
      // fallback if Lenis isn't ready
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [location, lenis]);

  return <>{children}</>;
};

export default ScrollToTop;
