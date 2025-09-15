import React, { createContext, useContext, useEffect, useRef } from "react";

const MouseContext = createContext();

export const MouseProvider = ({ children }) => {
  const mouseRef = useRef({ x: 0, y: 0, xp: 0, yp: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const newPosition = {
        x: e.clientX,
        y: e.clientY,
        xp: e.clientX / window.innerWidth,
        yp: e.clientY / window.innerHeight,
      };

      mouseRef.current = newPosition;

      // Update CSS custom properties for glow positioning
      document.documentElement.style.setProperty(
        "--x",
        newPosition.x.toFixed(2)
      );
      document.documentElement.style.setProperty(
        "--xp",
        newPosition.xp.toFixed(2)
      );
      document.documentElement.style.setProperty(
        "--y",
        newPosition.y.toFixed(2)
      );
      document.documentElement.style.setProperty(
        "--yp",
        newPosition.yp.toFixed(2)
      );
    };

    document.addEventListener("pointermove", handleMouseMove);

    return () => {
      document.removeEventListener("pointermove", handleMouseMove);
    };
  }, []);

  return (
    <MouseContext.Provider value={mouseRef.current}>
      {children}
    </MouseContext.Provider>
  );
};

export const useMouse = () => {
  const context = useContext(MouseContext);
  if (!context) {
    throw new Error("useMouse must be used within MouseProvider");
  }
  return context;
};
