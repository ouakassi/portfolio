import "./Services.css";

import Section from "../Section";
import Service from "./Service";
import IMAGES from "../../images/index";

import { useTransform, useScroll, motion } from "framer-motion";
import { useRef } from "react";

import { FaLaptopCode } from "react-icons/fa";
import IntoCodeSvg from "./IntoCodeSvg";
const services = [
  {
    title: "Software Development",
    icon: IMAGES.serviceSoftwareIcon,
    text: "I create scalable, maintainable software solutions tailored to your needs.",
    bgColor: "rgb(223 19 125 / 80%)",
    gradientBg: "rgb(53 1 27 / 80%) ",
  },
  {
    title: "Frontend Dev React,Next",
    icon: IMAGES.serviceFrontendIcon,
    text: "Specialize in crafting intuitive and engaging user interfaces using HTML, CSS, JavaScript, React, and Next.js.",
    bgColor: "var(--main-color-lite)",
    gradientBg: "rgb(7 46 51) ",
  },
  {
    title: "Backend Dev Node,Express",
    icon: IMAGES.serviceBackendIcon,
    text: "Experienced in building robust, scalable back-end systems with Node.js and Express.",
    bgColor: "rgb(5 114 75/ 80%)",
    gradientBg: "rgb(0 41 27) ",
  },
];

export default function Services() {
  // const bgRef = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: bgRef,
  //   offset: ["0 1", "1.3 1"],
  // });
  // const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  // const opacityProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <Section
      className="services"
      sectionTitle="My Expertise"
      sectionSubtitle="what i offer ?"
      icon={<FaLaptopCode />}
    >
      {/* <IntoCodeSvg /> */}
      <motion.div className="code__bg">
        <img src={IMAGES.heroBg} alt="code" />
      </motion.div>
      <div className="bgg"></div>
      <div className="services__container">
        {services.map(({ title, text, icon, bgColor, gradientBg }, i) => (
          <motion.div
            // ref={bgRef}
            // style={{ opacity: opacityProgress, scale: scaleProgress }}
            key={i}
          >
            <Service
              icon={icon}
              text={text}
              title={title}
              bgColor={bgColor}
              gradientBg={gradientBg}
            />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
