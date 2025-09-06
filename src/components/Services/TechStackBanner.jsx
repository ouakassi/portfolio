import { useRef, useState } from "react";
import "./TechStackBanner.css";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import StackBox from "../About/StackBox";
import { stacks, stacksTwo } from "../../data/stackData";
import AnimatedText from "../animations/AnimatedText";
import Section from "../Section";
import { FaComputer } from "react-icons/fa6";

const fadeInScale = (delay) => ({
  initial: { scale: 0, opacity: 0 },
  whileInView: { scale: 1, opacity: 1 },
  transition: { delay, duration: 2 },
});

const orbitAnimation = (
  duration,
  delay,
  reverse = false,
  isContainerInView
) => ({
  initial: { rotate: reverse ? "360deg" : "0deg" },
  animate: { rotate: reverse ? "0deg" : "360deg" },
  transition: isContainerInView
    ? {
        duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
        delay,
      }
    : { duration: 0 },
});

export default function TechStackBanner() {
  const cardRef = useRef(null);
  const textContainerRef = useRef(null);

  const isCardInView = useInView(cardRef);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["end end", "end center"],
  });

  const { scrollYProgress: stackScrollYProgress } = useScroll({
    target: textContainerRef,
    offset: ["start end", "center center"],
  });

  const { scrollYProgress: stackTwoScrollYProgress } = useScroll({
    target: textContainerRef,
    offset: ["start end", "center center"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const rotateZ = useTransform(scrollYProgress, [0, 1], [0, 43]); // stays the same
  const y = useTransform(scrollYProgress, [0, 1], [0, 30]);
  const x = useTransform(scrollYProgress, [0, 1], [0, 30]);
  const z = useTransform(scrollYProgress, [0, 1], [0, 30]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const textX = useTransform(stackScrollYProgress, [0, 1], [100, -100]);
  const stackTwotextX = useTransform(
    stackTwoScrollYProgress,
    [0, 1],
    [-100, 100]
  );

  return (
    <Section
      className="home__stack"
      id="stack"
      icon={<FaComputer />}
      sectionTitle="Stack"
      sectionSubtitle="my go to stack"
    >
      <div className="home__techstack">
        <div ref={cardRef} className="stack-entry">
          <div className="home__techstack-text">
            {/* <h1>One Language, Endless Possibilities</h1> */}
            <h1 className="hero__title">
              <AnimatedText
                speed={0.05}
                text={"Code. Create. Scale. With JavaScript."}
              />
            </h1>
          </div>{" "}
          <div className="techstack__container">
            <motion.div
              style={{
                "--x": x,
                "--y": y,
                "--z": z,
                "--rotateX": rotateX,
                "--rotateZ": rotateZ,
                // opacity,
              }}
              className="tech-stack-banner"
            >
              <div className="banner-icons">
                <JavascriptIcon
                  isCardInView={isCardInView}
                  className="js__icon"
                />

                <div className="orbit">
                  <>
                    <motion.div
                      className="orbit__container"
                      key={isCardInView ? "orbitt-running" : "orbitt-stopped"}
                      {...orbitAnimation(20, 1.2, false, isCardInView)}
                    >
                      <IconWrapper
                        className="next__icon"
                        animation={fadeInScale(0.4)}
                      >
                        <NextJsIcon />
                      </IconWrapper>
                      <IconWrapper
                        className="express__icon"
                        animation={fadeInScale(0.6)}
                      >
                        <ExpressIcon />
                      </IconWrapper>
                    </motion.div>

                    <motion.div
                      className="orbit__container-two"
                      key={isCardInView ? "orbit-running" : "orbit-stopped"}
                      {...orbitAnimation(30, 0.4, false, isCardInView)}
                    >
                      <IconWrapper
                        className="node__icon"
                        animation={fadeInScale(0.8)}
                      >
                        <NodeIcon />
                      </IconWrapper>
                      <IconWrapper
                        className="react__icon"
                        animation={fadeInScale(1.0)}
                      >
                        <ReactIcon />
                      </IconWrapper>
                    </motion.div>
                  </>
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 800 800"
                opacity="1"
                className="tech-stack__bg"
              >
                <g strokeWidth="1" stroke="var(--second-color)" fill="none"></g>
              </svg>
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 800 800"
                opacity="1"
                className="tech-stack__bg-two"
                style={{
                  "--x": x,
                  "--y": y,
                  "--z": z,
                  "--rotateX": rotateX,
                  "--rotateZ": rotateZ,
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <g strokeWidth="0.5" stroke="var(--second-color)" fill="none">
                  {/* Squares */}
                  {[...Array(12)].map((_, row) =>
                    [...Array(12)].map((_, col) => (
                      <rect
                        key={`${row}-${col}`}
                        width="60"
                        height="60"
                        x={col * 80}
                        y={row * 80}
                        transform={`rotate(45 ${col * 80 + 30} ${
                          row * 80 + 30
                        })`}
                        opacity={0.6}
                      />
                    ))
                  )}
                </g>
              </motion.svg>
            </motion.div>
          </div>
        </div>

        {/* <motion.p className="stack-text">
        I craft modern web experiences with JavaScript—building dynamic
        interfaces, scalable backends, and seamless full-stack solutions.
      </motion.p> */}
        <div className="stacks-container">
          <div ref={textContainerRef} className="s-container">
            <motion.div className="s-timeline" style={{ x: textX }}>
              {stacks.map(({ title, description, icon, link }, i) => {
                return (
                  <div className="s-item">
                    <div className="s-item-img__container">
                      <img src={icon} alt={title} />
                    </div>
                    <span className="s-title">{title}</span>
                  </div>
                );
              })}
            </motion.div>
          </div>
          <div ref={textContainerRef} className="s-container">
            <motion.div className="s-timeline" style={{ x: stackTwotextX }}>
              {stacksTwo.map(({ title, description, icon, link }, i) => {
                return (
                  <div className="s-item">
                    <div className="s-item-img__container">
                      <img src={icon} alt={title} />
                    </div>
                    <span className="s-title">{title}</span>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>

        <div className="stack">
          {/* <div className="stack-text__container">
        <motion.p className="stack-text" style={{ top: textY }}>
            I craft modern web experiences with JavaScript—building dynamic
            interfaces, scalable backends, and seamless full-stack solutions.
          </motion.p>  
        </div> */}
          {/* <div ref={textContainerRef} className="stack-languages">
          {stacks.map(({ title, description, icon, link }, i) => {
            return (
              <StackBox
                key={i}
                title={title}
                description={description}
                icon={icon}
                link={link}
              />
            );
          })}
        </div> */}
        </div>
      </div>
    </Section>
  );
}

const IconWrapper = ({ children, className, animation }) => (
  <motion.span {...animation} className={`about-icon ${className}`}>
    {children}
  </motion.span>
);

const JavascriptIcon = ({ className, isCardInView }) => (
  <motion.span
    initial={{ scale: 0.8, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    transition={{ delay: 0.2, duration: 1, ease: "easeInOut" }}
    className={`about-icon ${className}`}
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
      animate={
        isCardInView
          ? {
              opacity: [0.5, 1, 0.8, 0.5],
              scale: [1, 1.2, 1.1, 1],
            }
          : { opacity: 0.5, scale: 1 } // freeze
      }
      transition={
        isCardInView
          ? {
              delay: 0,
              duration: 2,
              repeat: Infinity,
              repeatType: "mirror",
            }
          : { duration: 0 }
      }
    />

    <motion.span
      initial={{ opacity: 0.5, scale: 1 }}
      animate={
        isCardInView
          ? {
              opacity: [0.5, 0.9, 0.7, 0.5],
              scale: [1, 1.15, 1.05, 1],
            }
          : { opacity: 0.5, scale: 1 } // freeze
      }
      transition={
        isCardInView
          ? {
              delay: 0.5, // staggered effect
              duration: 2,
              repeat: Infinity,
              repeatType: "mirror",
            }
          : { duration: 0 }
      }
    />

    <motion.span
      animate={{ opacity: 1, scale: 1, transition: { delay: 0.1 } }}
    ></motion.span>
  </motion.span>
);

const NodeIcon = () => (
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
        <stop offset=".3" stopColor="#b0b0b0" />
        <stop offset=".5" stopColor="#a0a0a0" />
        <stop offset=".8" stopColor="#8f8f8f" />
      </linearGradient>

      <linearGradient
        id="d"
        x1="186.484"
        x2="297.349"
        y1="321.381"
        y2="239.465"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset=".57" stopColor="#b0b0b0" />
        <stop offset=".72" stopColor="#999999" />
        <stop offset="1" stopColor="#8f8f8f" />
      </linearGradient>

      <linearGradient
        id="f"
        x1="197.051"
        x2="288.72"
        y1="279.652"
        y2="279.652"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset=".16" stopColor="#cccccc" />
        <stop offset=".38" stopColor="#b3b3b3" />
        <stop offset=".47" stopColor="#a0a0a0" />
        <stop offset=".7" stopColor="#8f8f8f" />
        <stop offset=".9" stopColor="#7a7a7a" />
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

    <g clipPath="url(#a)" transform="translate(-68.564 -79.701) scale(.35278)">
      <path
        fill="url(#b)"
        d="m331.363 246.793-118.715-58.19-60.87 124.174L270.49 370.97zm0 0"
      />
    </g>

    <g clipPath="url(#c)" transform="translate(-68.564 -79.701) scale(.35278)">
      <path
        fill="url(#d)"
        d="m144.07 264.004 83.825 113.453 110.86-81.906-83.83-113.45zm0 0"
      />
    </g>

    <g clipPath="url(#e)" transform="translate(-68.564 -79.701) scale(.35278)">
      <path fill="url(#f)" d="M197.02 225.934v107.43h91.683v-107.43zm0 0" />
    </g>
  </svg>
);

const NextJsIcon = () => (
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
);

const ReactIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>react</title>
    <rect width="24" height="24" fill="none" />
    <path
      // fill="var(--main-color)"
      d="M12,10.11A1.87,1.87,0,1,1,10.13,12,1.88,1.88,0,0,1,12,10.11M7.37,20c.63.38,2-.2,3.6-1.7a24.22,24.22,0,0,1-1.51-1.9A22.7,22.7,0,0,1,7.06,16c-.51,2.14-.32,3.61.31,4m.71-5.74-.29-.51a7.91,7.91,0,0,0-.29.86c.27.06.57.11.88.16l-.3-.51m6.54-.76.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17,9,12.6,9,12,9s-1.17,0-1.71,0c-.29.47-.61.94-.91,1.47L8.57,12l.81,1.5c.3.53.62,1,.91,1.47.54,0,1.11,0,1.71,0s1.17,0,1.71,0c.29-.47.61-.94.91-1.47M12,6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0,10.44c.19-.22.39-.45.59-.72H11.41c.2.27.4.5.59.72M16.62,4c-.62-.38-2,.2-3.59,1.7a24.22,24.22,0,0,1,1.51,1.9,22.7,22.7,0,0,1,2.4.36c.51-2.14.32-3.61-.32-4m-.7,5.74.29.51a7.91,7.91,0,0,0,.29-.86c-.27-.06-.57-.11-.88-.16l.3.51m1.45-7c1.47.84,1.63,3.05,1,5.63,2.54.75,4.37,2,4.37,3.68s-1.83,2.93-4.37,3.68c.62,2.58.46,4.79-1,5.63s-3.45-.12-5.37-1.95c-1.92,1.83-3.91,2.79-5.38,1.95s-1.62-3-1-5.63c-2.54-.75-4.37-2-4.37-3.68S3.08,9.07,5.62,8.32c-.62-2.58-.46-4.79,1-5.63s3.46.12,5.38,1.95c1.92-1.83,3.91-2.79,5.37-1.95M17.08,12A22.51,22.51,0,0,1,18,14.26c2.1-.63,3.28-1.53,3.28-2.26S20.07,10.37,18,9.74A22.51,22.51,0,0,1,17.08,12M6.92,12A22.51,22.51,0,0,1,6,9.74c-2.1.63-3.28,1.53-3.28,2.26S3.93,13.63,6,14.26A22.51,22.51,0,0,1,6.92,12m9,2.26-.3.51c.31,0,.61-.1.88-.16a7.91,7.91,0,0,0-.29-.86l-.29.51M13,18.3c1.59,1.5,3,2.08,3.59,1.7s.83-1.82.32-4a22.7,22.7,0,0,1-2.4.36A24.22,24.22,0,0,1,13,18.3M8.08,9.74l.3-.51c-.31,0-.61.1-.88.16a7.91,7.91,0,0,0,.29.86l.29-.51M11,5.7C9.38,4.2,8,3.62,7.37,4s-.82,1.82-.31,4a22.7,22.7,0,0,1,2.4-.36A24.22,24.22,0,0,1,11,5.7Z"
    />
  </svg>
);

const ExpressIcon = () => (
  <svg viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 18.588a1.529 1.529 0 0 1-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 0 1-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 0 1 1.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 0 1 1.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 0 0 0 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 0 0 2.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 0 1-2.589 3.957 6.272 6.272 0 0 1-7.306-.933 6.575 6.575 0 0 1-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 0 1 0 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z" />
  </svg>
);
