import "./Hero.css";

import SocialLink from "./../SocialLink";
import {
  AnimatePresence,
  motion,
  useAnimation,
  useScroll,
} from "framer-motion";
import { socialData } from "../../data/socialData";
import { ShowMoreButton } from "../Buttons/ShowMoreButton";
import GlowingText from "../GlowingText";
import HeroSvg from "../Services/IntoCodeSvg";
import Button from "../Buttons/Button";
import { FaFolderTree, FaUserNinja } from "react-icons/fa6";
import { Link } from "react-router-dom";
import AnimatedText from "../animations/AnimatedText";
import VerticalLines from "../backgrounds/VerticalLines";
import TechStackBanner from "../Services/TechStackBanner";
import { useEffect, useRef, useState } from "react";
import IMAGES from "../../images";

const BlurAnimation = ({ text }) => {
  // const words = sentence.split(/(\s+)/);

  const sentenceAnimation = {
    hidden: {
      // opacity: 0,
    },
    visible: {
      // opacity: 1,
      transition: {
        staggerChildren: 0.1, // Stagger each letter animation
        when: "beforeChildren",
      },
    },
  };

  const letterAnimation = {
    hidden: {
      opacity: 0,
      filter: "blur(10px)",
      color: "#000",
      y: -100, // Start above
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      color: "#fff",

      y: 0, // Drop to original position
      transition: {
        type: "spring",
        damping: 12, // Control the bounciness
        stiffness: 200,
        // delay: 0.6,
      },
    },
  };

  return (
    <div>
      {text.split("").map((char, i) => {
        return (
          <motion.span key={i} variants={letterAnimation}>
            {char}
          </motion.span>
        );
      })}
    </div>
  );
};

const Hero = () => {
  return (
    <section className="hero__section">
      {/* <div className="hero__header">
        <GlitchText text="oussana" />
        <h1>
          <GlowingText
            className="profession"
            text={<AnimatedText text={"Hi you, I'm"} />}
          />
        </h1>
        <div>
          <BlurAnimation text={"oussama"} />
          <BlurAnimation text={"ouakassi"} />
        </div>

        <GlowingText
          className="profession"
          text={<AnimatedText text={"oussama"} />}
        />
      </div> */}
      <div className="hero__content">
        <img src={IMAGES.heroBg} alt="" />
        <div className="bg"></div>
        <div className="hero__body">
          <div className="hero__intro">
            <h3 className="hero__subtitle">
              <GlowingText
                fs={"1.8rem"}
                color={"var(--second-color)"}
                text={<AnimatedText speed={0.1} text={"Software Engineer"} />}
              />
            </h3>
            <h1 className="hero__title">
              {/* Building next-generation user interfaces out of the UK */}
              <AnimatedText
                speed={0.05}
                text={"Designing & developing the future of the web."}
              />
            </h1>
            <div className="hero__actions">
              <a href={"#projects"}>
                <Button
                  to={"#projects"}
                  icon={<FaFolderTree />}
                  title="Explore My Work"
                />
              </a>
              <Link to={"/about"}>
                <Button icon={<FaUserNinja />} title="Want to Know Me?" />
              </Link>
            </div>
          </div>
          <SpotlightCard>
            <motion.div className="hero__image-container">
              <div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                ></motion.div>
                <motion.img
                  initial={{ clipPath: "circle(10% at -5% -8%)" }}
                  whileInView={{ clipPath: "circle(110% at 40% 11%)" }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  viewport={{ once: true }}
                  src={IMAGES.oussamaImg}
                  alt="it's me"
                />
              </div>
              <motion.div
                initial={{ y: -10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: 0.8 }}
                className="hero__social"
              >
                {socialData.map(({ link, icon }, i) => {
                  return <SocialLink key={i} link={link} icon={icon} />;
                })}
              </motion.div>
              {/* <span>Web Developer</span> */}
              <motion.span className="image__bg"></motion.span>
            </motion.div>
          </SpotlightCard>

          {/* <GlowingText text={<AnimatedText text={"Web Developer"} />} /> */}
        </div>

        <div className="hero__bg-gradient"></div>
      </div>
      <div className="timeline">
        <h3 className="timeline-title">Trusted by companies of all sizes</h3>
        <HorizontalTimeline />
      </div>
      {/* <VerticalLines /> */}
      {/* <SpaceDots /> */}
    </section>
  );
};

export default Hero;

const SpaceDots = () => {
  const generateDots = () => {
    const dots = [];
    const dotCount = 200; // Number of dots
    for (let i = 0; i < dotCount; i++) {
      const size = Math.random() * 0.2; // Random size for each dot
      dots.push(
        <motion.div
          key={i}
          className="dot"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            top: `${Math.random() * 100}vh`,
            left: `${Math.random() * 100}vw`,
          }}
          animate={{
            y: [0, -50, 0], // Slight vertical movement
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: Math.random() * 5 + 2, // Random duration between 2-7s
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      );
    }
    return dots;
  };

  return <div className="space-dots">{generateDots()}</div>;
};

const SpotlightCard = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left; // Mouse X relative to the card
    const y = e.clientY - rect.top; // Mouse Y relative to the card

    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <div
      className="card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        borderRadius: "25px",
        background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.4), #000 60%)`,
        boxShadow: "0 15px 25px rgba(0, 0, 0, 0.2)",
        position: "relative",
        overflow: "hidden",
        transition: "box-shadow 0.3s ease",
      }}
    >
      {children}
    </div>
  );
};

const GlitchText = ({ text }: { text: string }) => {
  const [glitch, setGlitch] = useState(false);

  // Random glitch activation
  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(Math.random() > 0.8); // 20% chance to glitch
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="relative text-4xl font-bold text-white uppercase tracking-widest"
      onMouseEnter={() => setGlitch(true)}
      onMouseLeave={() => setGlitch(false)}
    >
      {/* Base text */}
      <span className="relative z-10">{text}</span>

      {/* Red Offset */}
      <motion.span
        className="absolute top-0 left-0 text-red-500"
        initial={{ x: 0, y: 0, opacity: 0.5 }}
        animate={{
          x: glitch ? Math.random() * 4 - 2 : 0,
          y: glitch ? Math.random() * 4 - 2 : 0,
          opacity: glitch ? 1 : 0,
        }}
        transition={{ duration: 0.1 }}
      >
        {text}
      </motion.span>

      {/* Blue Offset */}
      <motion.span
        className="absolute top-0 left-0 text-blue-500"
        initial={{ x: 0, y: 0, opacity: 0.5 }}
        animate={{
          x: glitch ? Math.random() * 4 - 2 : 0,
          y: glitch ? Math.random() * 4 - 2 : 0,
          opacity: glitch ? 1 : 0,
        }}
        transition={{ duration: 0.1 }}
      >
        {text}
      </motion.span>
    </motion.div>
  );
};

// timelineData.js
export const timelineData = [
  {
    company: "vfs global",
    icon: "/companies/vfs-logo.png",
  },
  {
    company: "Sodev",
    icon: "/companies/sodev.png",
  },
  {
    company: "sanipro",
    icon: "/companies/sanipro-logo.png",
  },
];

const HorizontalTimeline = () => {
  const tripleData = [...timelineData, ...timelineData, ...timelineData];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.2 }}
      className="timeline-container"
    >
      <motion.div
        className="timeline-track"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        }}
      >
        {tripleData.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-icon">
              <img src={item.icon} alt={item.company} />
            </div>
            {/* <GlowingText className="timeline-text" text={item.company} /> */}
            <div className="timeline-text">{item.company}</div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};
