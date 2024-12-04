import "./About.css";

import Section from "../Section";
import checkColor from "./../../utils/checkColor";
import StyledParagraph from "../StyledParagrapgh";
import IMAGES from "../../images";
import { FaUserNinja } from "react-icons/fa6";
import {
  motion,
  useScroll,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import { useRef } from "react";

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
  const bgRef = useRef(null);
  const { scrollYProgress, scrollY } = useScroll({
    target: bgRef,
    // offset: ["0 1", "1.3 1"],
    offset: ["start end", "end end"],
  });

  // const transformProgress = useTransform(scrollYProgress, [0, 1], [-100, 0]);
  // const opacityProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);
  // const shadowProgress = useTransform(scrollYProgress, [0, 1], [0, 10]);
  // const translateY = useTransform(scrollY, [0, 100, 200], [0, 0, -50]);

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
          <motion.div className="about__me-img">
            <motion.img
              ref={bgRef}
              initial={{ clipPath: "circle(0% at 0% 0%)" }}
              whileInView={{ clipPath: "circle(110% at 40% 11%)" }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              src={IMAGES.oussamaImg}
              alt="it's me"
            />
            <motion.span className="image__bg"></motion.span>
          </motion.div>

          <div>
            <span className="about__me-quote">&rdquo;</span>
            we changed the
            <span className="about__me-text">
              game
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 800 400"
                width="800"
                height="400"
              >
                {/* Define Gradient */}
                <defs>
                  <linearGradient id="gradientPath">
                    <stop stopColor="var(--second-color)" offset="0" />
                    <stop stopColor="hsl(316, 73%, 52%)" offset="1" />
                  </linearGradient>
                </defs>

                {/* Animated Path */}
                <motion.path
                  d="M8.520179748535156,8.968609809875488C73.81166127522788,101.28550103505454,201.70404154459635,294.6487317403157,253.3632354736328,355.1569519042969C305.0224294026693,415.665172068278,172.34679158528644,239.70103861490887,202.24215698242188,235.8744354248047C232.1375223795573,232.0478322347005,329.3572570800781,339.13304850260414,365.4708557128906,340.80718994140625C401.58445434570314,342.48133138020836,287.6831013997396,247.17489420572917,337.66815185546875,242.1524658203125C387.6532023111979,237.13003743489583,502.690576171875,321.7339192708333,552.914794921875,321.97308349609375C603.139013671875,322.2122477213542,462.8699584960938,258.8340810139974,526.0089721679688,243.04933166503906C589.1479858398437,227.26458231608072,719.3721964518229,257.51868896484376,789.6860961914062,262.7802734375"
                  fill="none"
                  strokeWidth="15"
                  stroke="url(#gradientPath)"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{
                    delay: 0.5,
                    duration: 3,
                    ease: "easeInOut",
                    // repeat: Infinity,
                    // repeatType: "reverse",
                  }}
                />
              </svg>
            </span>
            <span className="about__me-quote">&rdquo;</span>
          </div>
        </div>
       
        

        <p className="about__text">
          Backed by 4+ years of web development experience, I prefer JavaScript
          (or TypeScript) and React for creating web applications. Their
          flexibility and vast ecosystem allow me to develop scalable, rapid
          solutions with ease.
        </p>

        {/* <div className="about__me__languages">
          {stackLangs.map((lang, i) => {
            return checkColor(lang, i, "about__me__languages-lang");
          })}
        </div> */}
        {/* <div className="about__me__paragraphs">
          {descriptionText.map(({ id, text }) => {
            return <StyledParagraph key={id}>{text}</StyledParagraph>;
          })}
        </div> */}
        {/* <div className="about__bg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 800"
            opacity="1"
   
          >
            <g strokeWidth="0.2" stroke="var(--second-color)" fill="none">
            
              {[...Array(20)].map((_, row) =>
                [...Array(20)].map((_, col) => (
                  <motion.rect
                
                    key={`${row}-${col}`}
                    width="200"
                    height="200"
             
                    x={col * 200}
                    y={row * 200}
                    animate={{
               
                      opacity: [0, 1, 0.5, 0, 0.2],
                    
                    }}
                    transition={{
                      duration: 1,
                      ease: "easeInOut",
                      delay: (row + col) * 0.05, 
                    }}
                  />
                ))
              )}
            </g>
          </svg>
        </div> */}
      </div>
    </Section>
  );
}
