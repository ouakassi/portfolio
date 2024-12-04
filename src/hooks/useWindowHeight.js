import { useState, useEffect } from "react";

const useWindowHeight = () => {
  const [windowHeight, setwindowHeight] = useState(0);

  useEffect(() => {
    const onScroll = () => setwindowHeight(window.scrollY);

    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return windowHeight;
};

export default useWindowHeight;
