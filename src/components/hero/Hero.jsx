import "./Hero.css";

import SocialLink from "./../SocialLink";
import { motion } from "framer-motion";
import { socialData } from "../../data/socialData";
import { ShowMoreButton } from "../Buttons/ShowMoreButton";
import GlowingText from "../GlowingText";
import HeroSvg from "./HeroSvg";
import Button from "../Buttons/Button";
import { FaFolderTree, FaUserNinja } from "react-icons/fa6";
import { Link } from "react-router-dom";
import AnimatedText from "../animations/AnimatedText";
import VerticalLines from "../backgrounds/VerticalLines";

const Hero = () => {
  return (
    <section className="hero__section container">
      <div className="hero__content ">
        {/* <div className="hero__action-container">
          <h1>I'm Oussama</h1>
          <GlowingText className="profession" text={"wEB developer"} />

          <p>
            <AnimatedText
              speed={0.02}
              text={
                "I work with React Ecosystem, and write to teach people how to rebuild and redefine fundamental concepts through mental models."
              }
            />
          </p>
          <div className="hero__buttons">
            <a href={"#projects"}>
              <Button
                to={"#projects"}
                icon={<FaFolderTree />}
                title={"projects"}
              />
            </a>
            <Link to={"/about"}>
              <Button icon={<FaUserNinja />} title={"about me"} />
            </Link>
          </div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 2 }}
            className="hero__social"
          >
            {socialData.map(({ link, icon }, i) => {
              return <SocialLink key={i} link={link} icon={icon} />;
            })}
          </motion.div>
        </div> */}
        <div className="hero__svg-container">
          <HeroSvg />
        </div>
        {/* <GlowingText text={<AnimatedText text={"Web Developer"} />} /> */}

        {/* <p className="hero__description">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { duration: 1 } }}
                className="bg"
              ></motion.span>
              I’m an avid web developer passionate about building websites
              you’ll love to use. Specializing in Frontend and Backend
              technologies React, Next.js and Node.js, craft fully responsive
              and performance-driven web applications. <br /> I’ve helped
              businesses successfully launch production-ready solutions,
              enhancing their digital presence. I’m driven by a love for
              programming, creating, and continuously learning. Oh, and I enjoy
              gaming too! I believe in the transformative power of technology to
              turn ideas into reality. <br />
              Let’s collaborate and bring your vision to life, creating an
              online experience that leaves a lasting impact.
            </p> */}
        {/* <div className="hero__buttons">
              <ButtonPrimary
                title="Let's Talk"
                icon="uil uil-message"
                link="#contact"
              />
              <ButtonPrimary
                title="download cv"
                icon="uil uil-file-download-alt"
                link="./documents/cv.pdf"
                download
              />
            </div>
            <div className="hero__scroll">
              <a href="#projects" className="hero__scroll-button button--flex">
                <i className="uil uil-mouse-alt hero__scroll-mouse" />
                <span className="hero__scroll-name">My Projects ?</span>
                <i className="uil uil-angle-double-down hero__scroll-arrow" />
              </a>
            </div> */}

        {/* <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, bounce: 1 }}
            className="hero__img__container"
          >

            <img
              src={IMAGES.cartoonImg}
              alt="me"
              className="hero__img__container-img"
            />
            <img src={IMAGES.patternThree} alt="" className="hero__img-back" />
          </motion.div> */}
        <div className="hero__bg-gradient"></div>
      </div>
      {/* <VerticalLines /> */}
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
