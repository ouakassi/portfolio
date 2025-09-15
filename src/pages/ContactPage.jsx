import "./ContactPage.css";

import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";

export default function ContactPage() {
  return (
    <div
      style={{
        padding: "2rem",
        fontFamily: "Arial, sans-serif",
        fontSize: "2rem",
      }}
    >
      <h1>Hover Over the Text Below</h1>
      <TextAnimator text="Hello, World!" />
    </div>
  );
}

const lettersAndSymbols = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "-",
  "_",
  "+",
  "=",
  ";",
  ":",
  "<",
  ">",
  ",",
];

// Helper to split text into individual characters
const splitText = (text) => text.split("");

const TextAnimator = ({ text }) => {
  const [chars] = useState(() => splitText(text)); // Store the original text as an array of characters

  const randomChar = () =>
    lettersAndSymbols[Math.floor(Math.random() * lettersAndSymbols.length)];

  console.log(lettersAndSymbols);

  return (
    <div
      style={{
        display: "flex",
        gap: "0.2em",
        cursor: "pointer",
        fontSize: "2rem",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {chars.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 1, y: 0 }}
          animate={{
            y: -10, // Move up
            opacity: [1, 0, 1], // Fade out and back in
            transition: {
              duration: 0.5,
              repeat: 2,
              repeatType: "reverse",
              delay: index * 0.1, // Stagger the animation
            },
          }}
          style={{
            display: "inline-block",
            position: "relative",
          }}
        >
          <motion.span
            initial={{ opacity: 1 }}
            animate={{
              transition: { duration: 0.2, repeat: 2, repeatType: "reverse" },
            }}
          >
            {randomChar()}
          </motion.span>
        </motion.span>
      ))}
    </div>
  );
};
