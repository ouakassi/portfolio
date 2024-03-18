import { motion } from "framer-motion";
import ExperienceBox from "./ExperienceBox";
import { jobsData } from "../../data/experienceData";

const containerAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.8,
      type: "spring",
      bounce: 0.25,
    },
  },
};

export default function ExperienceJobsTab() {
  return (
    <motion.div
      layout
      variants={containerAnimation}
      initial="hidden"
      animate="show"
      className="exp__container"
    >
      {jobsData
        .sort((a, b) => b.id - a.id)
        .map(({ id, company, companyImg, position, date, desc }) => (
          <ExperienceBox
            key={id}
            company={company}
            companyImg={companyImg}
            position={position}
            date={date}
            desc={desc}
          />
        ))}
    </motion.div>
  );
}
