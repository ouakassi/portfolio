import { motion } from "framer-motion";
import React from "react";
import { useRef, useEffect, useState } from "react";
import "./Pointer.css";
export default function Pointer() {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const pointerRef = useRef(null);
  useEffect(() => {
    //  check if DOM element referenced by ref has been mounted
    if (pointerRef.current) {
      const handlePointerMove = ({ clientX, clientY }) => {
        const element = pointerRef.current;
        // calculate x and y coordinates
        const x = clientX - (element.offsetLeft - element.offsetWidth / 2) + 4;
        const y = clientY - element.offsetTop - element.offsetHeight / 2;
        // update state
        setCoordinates({ x, y });
      };

      window.addEventListener("pointermove", handlePointerMove);
      return () => window.removeEventListener("pointermove", handlePointerMove);
    }
  }, []);

  return (
    <motion.div
      ref={pointerRef}
      className="circle"
      animate={{ x: coordinates.x, y: coordinates.y }}
      transition={{
        type: "spring",
      }}
    />
  );
}
