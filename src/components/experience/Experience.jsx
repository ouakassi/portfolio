import Section from "../Section";
import "./Experience.css";

import { ShowMoreButton } from "../Buttons/ShowMoreButton";
import { useState } from "react";
import ExperienceJobsTab from "./ExperienceJobsTab";
import ExperienceEducationTab from "./ExperienceEducationTab";
import { motion } from "framer-motion";
import IMAGES from "../../images/index.js";
import { FaRegIdCard } from "react-icons/fa6";

const selectors = [
  { title: "education", icon: IMAGES.educationIcon },
  { title: "jobs", icon: IMAGES.jobsIcon },
];

const activeSelectorStyle = {
  backgroundColor: "var(--main-color-lite)",
  borderRadius: "10px 10px 0 0",
  color: "#fff",

  // fontSize: "2rem",
};

const iconStyle = {
  color: "var(--second-color)",
  transform: "scale(1.3)",
};

const boxAnimation = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      staggerChildren: 0.1,
    },
  },
};

export default function Experience() {
  const [activeSelectedTab, setActiveSelectedTab] = useState("jobs");

  return (
    <Section
      className="experience"
      id="experience"
      icon={<FaRegIdCard />}
      sectionTitle="professional experience"
      sectionSubtitle="all my experience in the field"
    >
      {/* <div className="exp__selector">
        {selectors.map(({ title, icon }, i) => {
          return (
            <ShowMoreButton
              key={i}
              title={title}
              icon={icon}
              style={activeSelectedTab === title ? selectorStyle : null}
              iconStyle={activeSelectedTab === title ? iconStyle : null}
              onClick={() => {
                setActiveSelectedTab(title);
              }}
            />
          );
        })}
      </div> */}

      <div className="exp__selectors-container"></div>

      <motion.div layout className="slider__container">
        <div className="tab__buttons-container">
          {selectors.map(({ title, icon }, i) => (
            <motion.span
              key={i}
              whileTap={{ scale: 0.9 }}
              className="tab__button"
              style={activeSelectedTab === title ? activeSelectorStyle : null}
              onClick={() => {
                setActiveSelectedTab(title);
              }}
            >
              <motion.img
                transition={{ duration: 0.4, ease: "linear" }}
                layout
                src={icon}
                alt={title}
                style={
                  activeSelectedTab === title
                    ? { filter: "contrast(1.5)" }
                    : { filter: "none" }
                }
              />
              <span>{title}</span>
            </motion.span>
          ))}
        </div>
        <motion.span
          layout
          transition={{ duration: 0.2, ease: "linear", delay: 0.2 }}
          className="tab__slider"
          style={
            activeSelectedTab === "education"
              ? { justifySelf: "start" }
              : { justifySelf: "end" }
          }
        ></motion.span>
      </motion.div>

      {activeSelectedTab === "jobs" && <ExperienceJobsTab />}

      {activeSelectedTab === "education" && <ExperienceEducationTab />}
    </Section>
  );
}
