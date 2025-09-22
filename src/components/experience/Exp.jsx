import { FaCarSide, FaCediSign, FaReadme } from "react-icons/fa6";
import "./Exp.css";
import IMAGES from "../../images";
import StyledParagraph from "../StyledParagrapgh";
import Section from "../Section";
import {
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";
import { jobsData } from "../../data/experienceData";
import { IoBriefcase } from "react-icons/io5";

export default function Exp() {
  const containerRef = useRef(null);
  const lineContainerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Transform scroll progress to line height (0% to 100%)
  // const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Add smooth spring animation to the line
  const smoothLineHeight = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <Section
      sectionTitle="experiences"
      icon={<FaCarSide />}
      className="experiences-section"
    >
      <div ref={containerRef} className="line-container">
        <motion.span
          className="linnn"
          style={{
            scaleY: smoothLineHeight,
          }}
        />
        <div className="exp-container">
          <div className="jobs">
            <motion.div
              initial={{
                opacity: 0,
                x: 30,
                scale: 0.8,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              transition={{ duration: 0.5, delay: 0.2, bounce: 10 }}
              className="name-container"
            >
              <h1>
                <IoBriefcase />
                <span>
                  jobs
                  {/* <span style={{ visibility: "hidden" }}>catioj</span> */}
                </span>
              </h1>
            </motion.div>
            <div className="containerrr">
              {jobsData
                .sort((a, b) => b.id - a.id)
                .map(
                  ({
                    companyImg,
                    companyName,
                    tenure,
                    position,
                    desc,
                    color,
                    highlights,
                  }) => (
                    <ExpBox
                      companyImg={companyImg}
                      companyName={companyName}
                      tenure={tenure}
                      position={position}
                      desc={desc}
                      color={color}
                      highlights={highlights}
                    />
                  )
                )}
            </div>
          </div>
          <div className="education">
            <div className="name-container">
              <h1>
                <FaReadme />
                <span>Education</span>
              </h1>
            </div>
            <div className="containerrr">
              {jobsData
                .sort((a, b) => b.id - a.id)
                .map(
                  ({
                    companyImg,
                    companyName,
                    tenure,
                    position,
                    desc,
                    color,
                    highlights,
                  }) => (
                    <ExpBox
                      companyImg={companyImg}
                      companyName={companyName}
                      tenure={tenure}
                      position={position}
                      desc={desc}
                      color={color}
                      highlights={highlights}
                    />
                  )
                )}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

const ExpBox = ({
  companyName,
  companyImg,
  tenure,
  position,
  desc,
  color,
  highlights,
}) => {
  const [isCardHovered, setisCardHovered] = useState(false);
  const cardRef = useRef();
  const isCardInView = useInView(cardRef, { amount: 0.5 });

  return (
    <motion.div
      onMouseEnter={() => setisCardHovered(true)}
      onMouseLeave={() => setisCardHovered(false)}
      ref={cardRef}
      className="exp-box"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      animate={{
        background: isCardHovered
          ? "linear-gradient(60deg, #131e25, transparent 500px)"
          : "linear-gradient(200deg, #131a25, transparent 500px)",
      }}
      transition={{ duration: 0.8 }}
    >
      {/* <span className="date">2024</span> */}
      <div className="exp-content">
        <header>
          <div className="entreprise-data">
            <motion.img
              style={{ borderColor: color }}
              animate={
                isCardInView
                  ? { scale: 1, opacity: 1, x: 0 }
                  : { scale: 0.5, opacity: 0, x: 20 }
              }
              transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
              src={companyImg}
              alt={companyName}
            />
            <div>
              <span className="name">@{companyName}</span>
              <span className="role">{position}</span>
            </div>
          </div>
          <span className="tenure">{tenure}</span>
        </header>
        <ul>
          {desc?.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
        {/* <div>
          {highlights?.map((item) => (
            <p>{item}</p>
          ))}
        </div> */}
      </div>
    </motion.div>
  );
};
