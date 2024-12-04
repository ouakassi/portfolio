import "./ExperienceBox.css";
import StyledParagraph from "./../StyledParagrapgh";
import GlowingText from "../GlowingText";
import { motion } from "framer-motion";
import AnimatedText from "../animations/AnimatedText";

const boxAnimation = {
  hidden: { y: 50, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

export default function ExperienceBox({
  company,
  companyImg,
  position,
  date,
  desc,
}) {
  return (
    <motion.div variants={boxAnimation} className="exp__box">
      <div className="exp__data">
        <div className="exp__head">
          {/* <img src={companyImg} alt={company} /> */}
          <div className="exp__heading">
            <h3 className="exp__heading-name">{company}</h3>
            <GlowingText
              text={<AnimatedText text={position} />}
              textTransform="capitalize"
              fs="1.6rem"
              color="var(--second-color)"
            />
          </div>
        </div>

        <span className="exp__date">{date}</span>
      </div>
      <StyledParagraph
        style={{
          color: "var(--text-color)",
          fontFamily: " var(--font-1)",
        }}
      >
        {desc}
      </StyledParagraph>
    </motion.div>
  );
}
