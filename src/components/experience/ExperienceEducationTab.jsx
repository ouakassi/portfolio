import { motion } from "framer-motion";
import ExperienceBox from "./ExperienceBox";
import { educationData } from "../../data/experienceData";

const containerAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

export default function ExperienceEducationTab() {
  return (
    <motion.div
      variants={containerAnimation}
      initial="hidden"
      animate="show"
      className="exp__container"
    >
      {educationData.map(
        ({ id, company, companyImg, position, date, desc }) => (
          <ExperienceBox
            key={id}
            company={company}
            companyImg={companyImg}
            position={position}
            date={date}
            desc={desc}
          />
        )
      )}
    </motion.div>
  );
}
