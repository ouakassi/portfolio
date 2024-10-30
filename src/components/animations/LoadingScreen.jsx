import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./LoadingScreen.css";

const words = ["Hello", "Bonjour", "السلام عليكم", "Hola"];

const LoadingScreen = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showHello, setShowHello] = useState(true);

  useEffect(() => {
    const showNextWord = setTimeout(() => {
      if (currentWordIndex < words.length - 1) {
        setCurrentWordIndex(currentWordIndex + 1);
      } else {
        setShowHello(false);
      }
    }, 500); // Show each word for 1 second

    return () => clearTimeout(showNextWord);
  }, [currentWordIndex]);

  return (
    showHello && (
      <motion.div
        initial={{ y: "-100vh", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{
          y: "100vh",
          opacity: 0,
          transition: { duration: 0.5 },
        }}
        className="loading-screen"
      >
        <AnimatePresence>
          <motion.p
            key={currentWordIndex}
            initial={
              currentWordIndex % 2
                ? { opacity: 0, y: -50 }
                : { opacity: 0, y: 50 }
            }
            animate={{
              opacity: 1,
              y: 0,
              x: 0,
            }}
            exit={
              currentWordIndex % 2
                ? { opacity: 0, y: -50 }
                : { opacity: 0, y: 50 }
            }
            transition={{
              easings: [0, 0, 0.23, 1],
              delay: 0.2,
            }}
          >
            {words[currentWordIndex]}
          </motion.p>
        </AnimatePresence>
      </motion.div>
    )
  );
};

export default LoadingScreen;
