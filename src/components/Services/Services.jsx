import Section from "../Section";
import Service from "./Service";
import "./Services.css";
import IMAGES from "../../images/index";
import { useTransform, useScroll, motion } from "framer-motion";
import { useRef } from "react";
import { FaLaptopCode } from "react-icons/fa";

const services = [
  {
    title: "Software Development",
    icon: IMAGES.serviceSoftwareIcon,
    text: "Master of both Functional and Object-Oriented Programming, with expertise in JavaScript, and TypeScript. I create scalable, maintainable software solutions tailored to your needs.",
    bgColor: "rgb(223 19 125 / 80%)",
  },
  {
    title: "Frontend Dev React,Next",
    icon: IMAGES.serviceFrontendIcon,
    text: "Bringing designs to life with pixel-perfect precision! With over 5 years of experience, I specialize in crafting intuitive and engaging user interfaces using HTML, CSS, JavaScript, React, and Next.js.",
    bgColor: "var(--main-color-lite)",
  },
  {
    title: "Backend Dev Node,Express",
    icon: IMAGES.serviceBackendIcon,
    text: "Experienced in building robust, scalable back-end systems with Node.js and Express. I ensure that your application runs smoothly, efficiently handling the logic and data processing behind the scenes.",
    bgColor: "rgb(5 114 75/ 80%)",
  },
];

export default function Services() {
  const bgRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: bgRef,
    offset: ["0 1", "1.3 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <Section
      className="services"
      sectionTitle="My Expertise"
      sectionSubtitle="what i offer ?"
      icon={<FaLaptopCode />}
    >
      <motion.div className="code__bg">
        <img src={IMAGES.codeBg} alt="code" />
      </motion.div>
      <div className="services__container">
        <div className="bgg"></div>
        {services.map(({ title, text, icon, bgColor }, i) => (
          <motion.div
            ref={bgRef}
            style={{ opacity: opacityProgress, scale: scaleProgress }}
            key={i}
          >
            <Service icon={icon} text={text} title={title} bgColor={bgColor} />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
