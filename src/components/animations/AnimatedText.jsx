import { motion } from "framer-motion";
import React from "react";

export default function AnimatedText({ text }) {
  return (
    <div>
      {text.split("").map((char, i) => {
        return (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: -50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: i * 0.1 },
            }}
          >
            {char}
          </motion.span>
        );
      })}
    </div>
  );
}
