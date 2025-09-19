import "./Hero.css";

import SocialLink from "./../SocialLink";
import {
  AnimatePresence,
  motion,
  useAnimation,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import { socialData } from "../../data/socialData";
import { ShowMoreButton } from "../Buttons/ShowMoreButton";
import GlowingText from "../GlowingText";
import HeroSvg from "../Services/IntoCodeSvg";
import Button from "../Buttons/Button";
import { FaCircleDot, FaFolderTree, FaUserNinja } from "react-icons/fa6";
import { Link } from "react-router-dom";
import AnimatedText from "../animations/AnimatedText";
import VerticalLines from "../backgrounds/VerticalLines";
import TechStackBanner from "../Services/TechStackBanner";
import { useEffect, useRef, useState } from "react";
import IMAGES from "../../images";
import { DiDotnet } from "react-icons/di";
import { BsDot } from "react-icons/bs";
import SocialIcon from "../contact/SocialIcon";

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
  const [isHovered, setIsHovered] = useState(false);
  const texts = ["Oussama Ouakassi", "Software Engineer"];
  const [index, setIndex] = useState(0);

  const isMyName = index === 0;

  useEffect(() => {
    // Duration of one cycle = length * speed + pause
    const typingSpeed = 0.1 * 1000; // convert to ms
    const currentText = texts[index];
    const typingDuration = currentText.length * typingSpeed;

    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % texts.length); // loop back
    }, typingDuration + 1200); // wait typing + 1s pause

    return () => clearTimeout(timer);
  }, [index]);

  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const rotateY = useTransform(scrollY, [0, 400], [0, 360]);
  const rotateX = useTransform(scrollY, [0, 400], [0, 360]);

  return (
    <section className="hero__section">
      <div className="hero__content">
        <motion.img
          className="hero__img-background"
          initial={{ scale: 0.2 }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 1, delay: 0.5 }}
          src={IMAGES.heroBg}
          alt=""
        />
        <motion.div
          initial={{ opacity: 0.2 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1.5, delay: 0.6 }}
          className="bg"
        ></motion.div>
        <div className="hero__body">
          <span className="work-badge">
            <FaCircleDot fontSize={"1rem"} />
            open for work
          </span>
          <div className="hero__intro">
            <h3 className="hero__subtitle ">
              <AnimatePresence mode="wait">
                <motion.div
                  key={texts[index]} // 🔑 important so AnimatePresence knows it's new
                  initial={{ opacity: 0, x: -40 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    // color: isMyName
                    //   ? "var(--main-color)"
                    //   : "var(--second-color)",
                    // textTransform: isMyName ? "uppercase" : "capitalize",
                    // fontFamily: isMyName ? "var(--font-6)" : null,
                  }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.4 }}
                  className="absolute w-full text-center"
                  style={{ width: "100%" }}
                >
                  <GlowingText
                    fs={"1.8rem"}
                    color={"inherit"}
                    text={<AnimatedText speed={0.1} text={texts[index]} />}
                  />
                </motion.div>
              </AnimatePresence>
            </h3>
            <h1 className="hero__title">
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

          <motion.div className="hero__main">
            {/* <SpotlightCard> */}

            <motion.div
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              transition={{ ease: "easeOut", duration: 0.2 }}
              className="hero__image-container"
            >
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
              <motion.span className="image__bg"></motion.span>
              <motion.div
                initial={false}
                animate={isHovered ? { x: "100%" } : { x: "-100%" }}
                transition={{ duration: 0.4 }}
                className="glow"
              ></motion.div>
            </motion.div>
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: 0.8 }}
              className="hero__social"
            >
              {socialData.map(({ link, icon, title, color }, i) => {
                return (
                  <SocialIcon
                    key={title}
                    link={link}
                    title={title}
                    icon={icon}
                    color={color}
                  />
                );
              })}
            </motion.div>
            {/* </SpotlightCard> */}
          </motion.div>
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
        background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(1, 255, 255, 0.4), #000 60%)`,
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

const timelineData = [
  {
    company: "Sodev",
    icon: "/companies/sodev.png",
  },
  {
    company: "vfs global",
    icon: "/companies/vfs-logo.png",
  },
  {
    company: "fiverr",
    icon: "/companies/fiver-logo.png",
  },
  {
    company: "sanipro",
    icon: "/companies/sanipro-logo.png",
  },
  {
    company: "upwork",
    icon: "/companies/upwork-logo.svg",
  },
];

const HorizontalTimeline = () => {
  const timelineRef = useRef();
  const isTimelineInView = useInView(timelineRef, { amount: 0.8 });

  const timeLineDataArray = Array(5).fill(timelineData).flat();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.2 }}
      className="timeline-container"
      ref={timelineRef}
    >
      <motion.div
        className="timeline-track"
        key={isTimelineInView ? "running" : "stopped"}
        animate={isTimelineInView ? { x: ["0%", "-100%"] } : {}}
        transition={
          isTimelineInView
            ? {
                delay: 1.2,
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              }
            : { duration: 0 }
        }
      >
        {timeLineDataArray.map((item, index) => (
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

const Noise = ({
  patternSize = 250,
  patternScaleX = 1,
  patternScaleY = 1,
  patternRefreshInterval = 2,
  patternAlpha = 15,
}) => {
  const grainRef = useRef(null);

  useEffect(() => {
    const canvas = grainRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let frame = 0;
    let animationId;
    const canvasSize = 1024;

    const resize = () => {
      if (!canvas) return;
      canvas.width = canvasSize;
      canvas.height = canvasSize;

      canvas.style.width = "100vw";
      canvas.style.height = "100vh";
    };

    const drawGrain = () => {
      const imageData = ctx.createImageData(canvasSize, canvasSize);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const value = Math.random() * 255;
        data[i] = value;
        data[i + 1] = value;
        data[i + 2] = value;
        data[i + 3] = patternAlpha;
      }

      ctx.putImageData(imageData, 0, 0);
    };

    const loop = () => {
      if (frame % patternRefreshInterval === 0) {
        drawGrain();
      }
      frame++;
      animationId = window.requestAnimationFrame(loop);
    };

    window.addEventListener("resize", resize);
    resize();
    loop();

    return () => {
      window.removeEventListener("resize", resize);
      window.cancelAnimationFrame(animationId);
    };
  }, [
    patternSize,
    patternScaleX,
    patternScaleY,
    patternRefreshInterval,
    patternAlpha,
  ]);

  return (
    <canvas
      className="noise-overlay"
      ref={grainRef}
      style={{ imageRendering: "pixelated" }}
    />
  );
};
