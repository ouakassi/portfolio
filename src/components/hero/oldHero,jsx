import ButtonPrimary from "../Buttons/ButtonPrimary";
import "./Hero.css";
import SocialLink from "./../SocialLink";
import { motion } from "framer-motion";
import GlowingText from "../GlowingText";
import IMAGES from "../../images";
import AnimatedText from "../animations/AnimatedText";
import { FaGithub, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";

const SOCIAL_LINKS = [
  {
    link: "https://www.linkedin.com/in/oussama-ouakassi-28372216a/",
    icon: <FaLinkedin />,
  },
  {
    link: "https://github.com/ouakassi",
    icon: <FaGithub />,
  },
  { link: "https://twitter.com/OuakassiOussama", icon: <FaSquareXTwitter /> },
];

const Hero = () => {
  const name = "OUSSAMA";
  const lastName = "OUAKASSI";

  const sentenceAnimation = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
        staggerChildren: 0.1,
        y: { delay: 1 },
      },
    },
  };

  const lettersAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
  };

  const patternBackground = IMAGES.patternOne;

  return (
    <section
      // style={{
      //   background: `url(${patternBackground}) right top no-repeat `,
      // }}
      className="home section"
    >
      <div className="home__container container ">
        <div className="home__content ">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="home__social"
          >
            {SOCIAL_LINKS.map(({ link, icon }, i) => {
              return <SocialLink key={i} link={link} icon={icon} />;
            })}
          </motion.div>
          <div className="home__data">
            <motion.div
              className="home__title"
              variants={sentenceAnimation}
              initial="hidden"
              whileInView="visible"
            >
              {name.split("").map((char, i) => {
                return (
                  <motion.span key={i} variants={lettersAnimation}>
                    {char}
                  </motion.span>
                );
              })}
              <br />
              {lastName.split("").map((char, i) => {
                return (
                  <motion.span key={i} variants={lettersAnimation}>
                    {char}
                  </motion.span>
                );
              })}
            </motion.div>

            <GlowingText text={<AnimatedText text={"Web Developer"} />} />

            <p className="home__description">
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
            </p>
            {/* <div className="home__buttons">
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
            <div className="home__scroll">
              <a href="#projects" className="home__scroll-button button--flex">
                <i className="uil uil-mouse-alt home__scroll-mouse" />
                <span className="home__scroll-name">My Projects ?</span>
                <i className="uil uil-angle-double-down home__scroll-arrow" />
              </a>
            </div> */}
          </div>
          {/* <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, bounce: 1 }}
            className="home__img__container"
          >

            <img
              src={IMAGES.cartoonImg}
              alt="me"
              className="home__img__container-img"
            />
            <img src={IMAGES.patternThree} alt="" className="home__img-back" />
          </motion.div> */}
        </div>
      </div>
      <div className="hero__bg-gradient"></div>
    </section>
  );
};

export default Hero;
