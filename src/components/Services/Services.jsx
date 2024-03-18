import Section from "../Section";
import Service from "./Service";
import "./Services.css";
import IMAGES from "../../images/index";
import { useTransform, useScroll, motion } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    title: "Software Development",
    icon: IMAGES.serviceSoftwareIcon,
    text: "Experienced in both functional and OOP: Dart, Python, Java, JavaScript, TypeScript.",
    bgColor: "rgb(223 19 125 / 80%)",
  },
  {
    title: "Frontend Dev React,Next",
    icon: IMAGES.serviceFrontendIcon,
    text: "Passionate about UI/UX. Over 5 years of development experience in HTML, CSS, JS, React and NextJS frameworks.",
    bgColor: "var(--first-color-light)",
  },
  {
    title: "Backend Dev Node,Express",
    icon: IMAGES.serviceBackendIcon,
    text: "Experienced Node.js developer with a passion for crafting efficient backend solutions.",
    bgColor: "rgb(5 114 75/ 80%)",
  },
];

export default function Services() {
  const bgRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: bgRef,
    offset: ["0 1", "1.3 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

  return (
    <Section
      className="services"
      sectionTitle="My Expertise"
      sectionSubtitle="what i offer ?"
    >
      <div className="services__container">
        <div className="bgg"></div>
        {services.map(({ title, text, icon, bgColor }, i) => {
          return (
            <motion.div
              ref={bgRef}
              style={{ opacity: opacityProgress, scale: scaleProgress }}
            >
              <Service
                key={i}
                icon={icon}
                text={text}
                title={title}
                bgColor={bgColor}
              />
            </motion.div>
          );
        })}
      </div>
      <motion.div className="code__bg">
        <img src={IMAGES.codeBg} alt="code" />
      </motion.div>
    </Section>
  );
}
