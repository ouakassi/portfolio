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

  const transformProgress = useTransform(scrollYProgress, [0, 1], [-100, 0]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const shadowProgress = useTransform(scrollYProgress, [0, 1], [0, 10]);
  const translateY = useTransform(scrollY, [0, 100, 200], [0, 0, -50]);

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
          <motion.div>
            <motion.img
              ref={bgRef}
              initial={{ opacity: 1, y: 0 }}
              style={{ opacity: opacityProgress, y: translateY }}
              className="about__stack-img"
              src={IMAGES.oussamaImg}
              alt="it's me"
            />
          </motion.div>

          <div>
            <span className="about__stack-quote">&rdquo;</span>
            we changed the
            <span className="about__stack-text">
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
                    <stop stopColor="var(--first-color-alt)" offset="0" />
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
            <span className="about__stack-quote">&rdquo;</span>
          </div>
        </div>
        <motion.span style={{ overflow: "hidden" }}>
          <motion.h1
            className="about__title"
            initial={{ y: 120, opacity: 0 }}
            whileInView={{ y: 0, opacity: [0, 1] }}
            transition={{ delay: 1, duration: 1 }}
            style={{ textShadow: `0px ${shadowProgress}px 2px #ffae0079` }}
          >
            One Path, Limitless Potential.
          </motion.h1>
        </motion.span>
        <div className="about-icons">
          <motion.span
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="about-icon"
          >
            <svg
              viewBox="0 0 24 24"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M24 18.588a1.529 1.529 0 0 1-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 0 1-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 0 1 1.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 0 1 1.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 0 0 0 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 0 0 2.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 0 1-2.589 3.957 6.272 6.272 0 0 1-7.306-.933 6.575 6.575 0 0 1-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 0 1 0 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z" />
            </svg>
          </motion.span>
          <motion.span
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="about-icon"
          >
            <svg
              width="800px"
              height="800px"
              viewBox="-3.8 -1.5 40.921 40.921"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="b"
                  x1="271.97"
                  x2="211.104"
                  y1="217.606"
                  y2="341.772"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset=".3" stop-color="#b0b0b0" />
                  <stop offset=".5" stop-color="#a0a0a0" />
                  <stop offset=".8" stop-color="#8f8f8f" />
                </linearGradient>

                <linearGradient
                  id="d"
                  x1="186.484"
                  x2="297.349"
                  y1="321.381"
                  y2="239.465"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset=".57" stop-color="#b0b0b0" />
                  <stop offset=".72" stop-color="#999999" />
                  <stop offset="1" stop-color="#8f8f8f" />
                </linearGradient>

                <linearGradient
                  id="f"
                  x1="197.051"
                  x2="288.72"
                  y1="279.652"
                  y2="279.652"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset=".16" stop-color="#cccccc" />
                  <stop offset=".38" stop-color="#b3b3b3" />
                  <stop offset=".47" stop-color="#a0a0a0" />
                  <stop offset=".7" stop-color="#8f8f8f" />
                  <stop offset=".9" stop-color="#7a7a7a" />
                </linearGradient>

                <clipPath id="a">
                  <path d="m239.03 226.605-42.13 24.317a5.085 5.085 0 0 0-2.546 4.406v48.668c0 1.817.968 3.496 2.546 4.406l42.133 24.336a5.1 5.1 0 0 0 5.09 0l42.126-24.336a5.096 5.096 0 0 0 2.54-4.406v-48.668c0-1.816-.97-3.496-2.55-4.406l-42.12-24.317a5.123 5.123 0 0 0-5.1 0" />
                </clipPath>

                <clipPath id="c">
                  <path d="M195.398 307.086c.403.523.907.976 1.5 1.316l36.14 20.875 6.02 3.46c.9.52 1.926.74 2.934.665.336-.027.672-.09 1-.183l44.434-81.36c-.34-.37-.738-.68-1.184-.94l-27.586-15.93-14.582-8.39a5.318 5.318 0 0 0-1.32-.53zm0 0" />
                </clipPath>

                <clipPath id="e">
                  <path d="M241.066 225.953a5.14 5.14 0 0 0-2.035.652l-42.01 24.247 45.3 82.51c.63-.09 1.25-.3 1.81-.624l42.13-24.336a5.105 5.105 0 0 0 2.46-3.476l-46.18-78.89a5.29 5.29 0 0 0-1.03-.102l-.42.02" />
                </clipPath>
              </defs>

              <g
                clip-path="url(#a)"
                transform="translate(-68.564 -79.701) scale(.35278)"
              >
                <path
                  fill="url(#b)"
                  d="m331.363 246.793-118.715-58.19-60.87 124.174L270.49 370.97zm0 0"
                />
              </g>

              <g
                clip-path="url(#c)"
                transform="translate(-68.564 -79.701) scale(.35278)"
              >
                <path
                  fill="url(#d)"
                  d="m144.07 264.004 83.825 113.453 110.86-81.906-83.83-113.45zm0 0"
                />
              </g>

              <g
                clip-path="url(#e)"
                transform="translate(-68.564 -79.701) scale(.35278)"
              >
                <path
                  fill="url(#f)"
                  d="M197.02 225.934v107.43h91.683v-107.43zm0 0"
                />
              </g>
            </svg>
          </motion.span>
          <motion.span
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="about-icon"
          >
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              enableBackground="new 0 0 512 512"
              xmlSpace="preserve"
            >
              <g id="5151e0c8492e5103c096af88a51e75c7">
                <path
                  // fill="yellow"
                  display="inline"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.008,0.5C0.438,0.583,0.48,1.27,0.521,1.958
		c0,169.668,0,339.31,0,508.974c169.364,1.135,340.808,0.162,510.979,0.486c0-170.309,0-340.61,0-510.918
		C341.342,0.5,171.167,0.5,1.008,0.5z M259.893,452.167c-11.822,11.919-30.478,18.938-53.429,18.938
		c-37.643,0-58.543-18.34-71.884-43.711c12.842-8.2,25.966-16.122,39.344-23.795c5.456,15.262,23.886,32.42,44.683,21.857
		c13.183-6.699,11.661-27.01,11.661-49.054c0-45.773,0-98.578,0-139.872c-0.042-0.688-0.083-1.375,0.482-1.458
		c15.707,0,31.413,0,47.116,0c0,36.788,0,78.402,0,117.529C277.866,395.199,280.91,430.988,259.893,452.167z M470.696,409.917
		c-2.674,39.884-35.243,61.063-79.17,61.188c-43.062,0.124-70.624-19.013-87.433-48.567c12.085-8.317,25.778-15.017,38.375-22.822
		c10.08,15.761,27.537,30.91,53.429,28.652c16.131-1.406,34.856-14.555,24.285-34.482c-5.127-9.66-17.516-14.567-28.656-19.425
		c-35.352-15.424-76.828-29.571-72.861-84.992c1.327-18.514,9.852-31.525,20.889-40.796c11.311-9.5,26.46-15.867,46.629-16.511
		c36.629-1.173,56.723,15.12,70.429,37.884c-11.664,8.891-24.514,16.608-37.401,24.281c-4.229-12.995-24.644-25.658-41.772-17.969
		c-7.789,3.493-14.788,13.761-10.684,26.224c3.66,11.115,18.589,17.199,30.599,22.344
		C433.706,340.486,474.331,355.693,470.696,409.917z"
                ></path>
              </g>
            </svg>
            <motion.span
              initial={{ opacity: 0.5, scale: 1 }}
              animate={{
                opacity: [0.5, 1, 0.8, 0.5],
                scale: [1, 1.2, 1.1, 1],
              }}
              transition={{
                delay: 0,
                duration: 2,
                repeat: Infinity,
                repeatType: "mirror",
              }}
            ></motion.span>

            <motion.span
              initial={{ opacity: 0.5, scale: 1 }}
              animate={{
                opacity: [0.5, 0.9, 0.7, 0.5],
                scale: [1, 1.15, 1.05, 1],
              }}
              transition={{
                delay: 0.5, // Slight delay to create a staggered, cohesive effect
                duration: 2,
                repeat: Infinity,
                repeatType: "mirror",
              }}
            ></motion.span>
            <motion.span
              animate={{ opacity: 1, scale: 1, transition: { delay: 0.1 } }}
            ></motion.span>
          </motion.span>
          <motion.span
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="about-icon"
          >
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <title>react</title>
              <rect width="24" height="24" fill="none" />
              <path
                // fill="var(--first-color)"
                d="M12,10.11A1.87,1.87,0,1,1,10.13,12,1.88,1.88,0,0,1,12,10.11M7.37,20c.63.38,2-.2,3.6-1.7a24.22,24.22,0,0,1-1.51-1.9A22.7,22.7,0,0,1,7.06,16c-.51,2.14-.32,3.61.31,4m.71-5.74-.29-.51a7.91,7.91,0,0,0-.29.86c.27.06.57.11.88.16l-.3-.51m6.54-.76.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17,9,12.6,9,12,9s-1.17,0-1.71,0c-.29.47-.61.94-.91,1.47L8.57,12l.81,1.5c.3.53.62,1,.91,1.47.54,0,1.11,0,1.71,0s1.17,0,1.71,0c.29-.47.61-.94.91-1.47M12,6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0,10.44c.19-.22.39-.45.59-.72H11.41c.2.27.4.5.59.72M16.62,4c-.62-.38-2,.2-3.59,1.7a24.22,24.22,0,0,1,1.51,1.9,22.7,22.7,0,0,1,2.4.36c.51-2.14.32-3.61-.32-4m-.7,5.74.29.51a7.91,7.91,0,0,0,.29-.86c-.27-.06-.57-.11-.88-.16l.3.51m1.45-7c1.47.84,1.63,3.05,1,5.63,2.54.75,4.37,2,4.37,3.68s-1.83,2.93-4.37,3.68c.62,2.58.46,4.79-1,5.63s-3.45-.12-5.37-1.95c-1.92,1.83-3.91,2.79-5.38,1.95s-1.62-3-1-5.63c-2.54-.75-4.37-2-4.37-3.68S3.08,9.07,5.62,8.32c-.62-2.58-.46-4.79,1-5.63s3.46.12,5.38,1.95c1.92-1.83,3.91-2.79,5.37-1.95M17.08,12A22.51,22.51,0,0,1,18,14.26c2.1-.63,3.28-1.53,3.28-2.26S20.07,10.37,18,9.74A22.51,22.51,0,0,1,17.08,12M6.92,12A22.51,22.51,0,0,1,6,9.74c-2.1.63-3.28,1.53-3.28,2.26S3.93,13.63,6,14.26A22.51,22.51,0,0,1,6.92,12m9,2.26-.3.51c.31,0,.61-.1.88-.16a7.91,7.91,0,0,0-.29-.86l-.29.51M13,18.3c1.59,1.5,3,2.08,3.59,1.7s.83-1.82.32-4a22.7,22.7,0,0,1-2.4.36A24.22,24.22,0,0,1,13,18.3M8.08,9.74l.3-.51c-.31,0-.61.1-.88.16a7.91,7.91,0,0,0,.29.86l.29-.51M11,5.7C9.38,4.2,8,3.62,7.37,4s-.82,1.82-.31,4a22.7,22.7,0,0,1,2.4-.36A24.22,24.22,0,0,1,11,5.7Z"
              />
            </svg>
          </motion.span>
          <motion.span
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="about-icon"
          >
            <svg
              viewBox="0 0 256 256"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid"
            >
              <g>
                <path d="M119.616813,0.0688905149 C119.066276,0.118932037 117.314565,0.294077364 115.738025,0.419181169 C79.3775171,3.69690087 45.3192571,23.3131775 23.7481916,53.4631946 C11.7364614,70.2271045 4.05395894,89.2428829 1.15112414,109.384595 C0.12512219,116.415429 0,118.492153 0,128.025062 C0,137.557972 0.12512219,139.634696 1.15112414,146.665529 C8.10791789,194.730411 42.3163245,235.11392 88.7116325,250.076335 C97.0197458,252.753556 105.778299,254.580072 115.738025,255.680985 C119.616813,256.106338 136.383187,256.106338 140.261975,255.680985 C157.453763,253.779407 172.017986,249.525878 186.382014,242.194795 C188.584164,241.068861 189.00958,240.768612 188.709286,240.518404 C188.509091,240.36828 179.124927,227.782837 167.86393,212.570214 L147.393939,184.922273 L121.743891,146.965779 C107.630108,126.098464 96.0187683,109.034305 95.9186706,109.034305 C95.8185728,109.009284 95.7184751,125.873277 95.6684262,146.465363 C95.5933529,182.52028 95.5683284,183.971484 95.1178886,184.82219 C94.4672532,186.048207 93.9667644,186.548623 92.915738,187.099079 C92.114956,187.499411 91.4142717,187.574474 87.6355816,187.574474 L83.3063539,187.574474 L82.1552297,186.848872 C81.4044966,186.373477 80.8539589,185.747958 80.4785924,185.022356 L79.9530792,183.896422 L80.0031281,133.729796 L80.0782014,83.5381493 L80.8539589,82.5623397 C81.25435,82.0369037 82.1051808,81.3613431 82.7057674,81.0360732 C83.7317693,80.535658 84.1321603,80.4856165 88.4613881,80.4856165 C93.5663734,80.4856165 94.4172043,80.6857826 95.7434995,82.1369867 C96.1188661,82.5373189 110.007429,103.454675 126.623656,128.650581 C143.239883,153.846488 165.962072,188.250034 177.122972,205.139048 L197.392766,235.839522 L198.418768,235.163961 C207.502639,229.259062 217.112023,220.852086 224.719453,212.09482 C240.910264,193.504394 251.345455,170.835585 254.848876,146.665529 C255.874878,139.634696 256,137.557972 256,128.025062 C256,118.492153 255.874878,116.415429 254.848876,109.384595 C247.892082,61.3197135 213.683675,20.9362052 167.288368,5.97379012 C159.105376,3.32158945 150.396872,1.49507389 140.637341,0.394160408 C138.234995,0.143952798 121.693842,-0.131275573 119.616813,0.0688905149 L119.616813,0.0688905149 Z M172.017986,77.4831252 C173.219159,78.0836234 174.195112,79.2345784 174.545455,80.435575 C174.74565,81.0861148 174.795699,94.9976579 174.74565,126.348671 L174.670577,171.336 L166.73783,159.17591 L158.780059,147.01582 L158.780059,114.313685 C158.780059,93.1711423 158.880156,81.2862808 159.030303,80.7108033 C159.430694,79.3096407 160.306549,78.2087272 161.507722,77.5581875 C162.533724,77.0327515 162.909091,76.98271 166.837928,76.98271 C170.541544,76.98271 171.19218,77.0327515 172.017986,77.4831252 Z"></path>
              </g>
            </svg>
          </motion.span>
        </div>

        <p className="about__text">
          Backed by 4+ years of web development experience, I prefer JavaScript
          (or TypeScript) and React for creating web applications. Their
          flexibility and vast ecosystem allow me to develop scalable, rapid
          solutions with ease.
        </p>

        {/* <div className="about__stack__languages">
          {stackLangs.map((lang, i) => {
            return checkColor(lang, i, "about__stack__languages-lang");
          })}
        </div> */}
        {/* <div className="about__stack__paragraphs">
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
            <g strokeWidth="0.2" stroke="var(--first-color-alt)" fill="none">
            
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
