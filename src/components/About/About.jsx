import "./About.css";

import Section from "../Section";
import checkColor from "./../../utils/checkColor";
import StyledParagraph from "../StyledParagrapgh";
import IMAGES from "../../images";
import { FaUserNinja } from "react-icons/fa6";
import { motion } from "framer-motion";

const stackLangs = [
  "html",
  "css",
  "javascript",
  "react",
  "node",
  "express",
  "mongodb",
  "typescript",
];

const descriptionText = [
  {
    id: 1,
    text: "Over 3 years of professional exposure in JavaScript technology such as Node JS , Express.js ,<b>React JS</b> , D3 JS, MongoDB and .",
  },
  {
    id: 2,
    text: "Web developer, with extensive knowledge and years of experience, working in web technologies and Ui / Ux design, delivering quality work.",
  },
  {
    id: 3,
    text: "Expertise in developing web pages using HTML5, CSS3, MVC, SASS, LESS, Object Oriente Java script, ES6, JQuery, AJAX, JSON, XML. Good understanding of Document Object Model (DOM) and DOM Functions.",
  },
];

export default function About() {
  return (
    <Section
      className="about"
      id="about"
      icon={<FaUserNinja />}
      sectionTitle="About me"
      sectionSubtitle="everything about me"
    >
      <div className="about__container container">
        <div className="about__heading">
          <div>
            <img
              className="about__stack-dots"
              src={IMAGES.background}
              alt="dots"
            />
            <img
              className="about__stack-img"
              src={IMAGES.oussamaImg}
              alt="it's me"
            />
          </div>

          <div>
            <span className="about__stack-quote">&rdquo;</span>
            we changed the
            <span className="about__stack-text">game</span>
            <span className="about__stack-quote">&rdquo;</span>
          </div>
        </div>
        <div className="about__stack__languages">
          {stackLangs.map((lang, i) => {
            return checkColor(lang, i, "about__stack__languages-lang");
          })}
        </div>
        <div className="about__stack__paragraphs">
          {descriptionText.map(({ id, text }) => {
            return <StyledParagraph key={id}>{text}</StyledParagraph>;
          })}
        </div>
        <div className="about__bg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 800"
            opacity="1"
            // width="800"
            // height="800"
            // className="about__bg-svg"
          >
            <g strokeWidth="0.2" stroke="var(--first-color-alt)" fill="none">
              {/* Squares */}
              {[...Array(20)].map((_, row) =>
                [...Array(20)].map((_, col) => (
                  <motion.rect
                    // initial={{ x: 0, y: 0 }}
                    // animate={{ x: col * 30, y: row * 30 }}
                    // transition={{ duration: 0.5, delay: 0.2 }}
                    key={`${row}-${col}`}
                    width="200"
                    height="200"
                    // fill="url(#hero)"
                    x={col * 200}
                    y={row * 200}
                    animate={{
                      // scale: [1, 4, 0.6, 0.5],
                      opacity: [0, 1, 0.5, 0, 0.2],
                      // fill: ["#ffffff20", "#ffffff80", "#ffffff20"]
                    }}
                    transition={{
                      duration: 1,
                      ease: "easeInOut",
                      delay: (row + col) * 0.05, // Stagger animation based on position
                    }}
                  />
                ))
              )}
            </g>
          </svg>
        </div>
      </div>
    </Section>
  );
}
