import "./Section.css";
import { motion } from "framer-motion";

const Section = ({
  id,
  className,
  icon,
  sectionTitle,
  sectionSubtitle,
  children,
}) => (
  <motion.section
    className={` section ${className}`}
    id={id}
    initial={{ y: -200 }}
    animate={{ y: 0 }}
    // exit={{ y: -100, opacity: 0 }}
  >
    <motion.h2
      initial={{
        opacity: 0,
        y: -20,
        backgroundPosition: "100% 100%",
        backgroundSize: "100% 50%",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        backgroundPosition: "50% 100%",
        backgroundSize: "70% 5px",
      }}
      viewport={{ once: true }}
      transition={{ type: "tween", delay: 0.5 }}
      className="section__title"
    >
      <div className="bg"></div>

      <i className={icon + " section__icon"} />
      {sectionTitle}
    </motion.h2>
    <motion.span
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: "spring", delay: 0.4 }}
      className="section__subtitle"
    >
      {sectionSubtitle}
    </motion.span>
    {children}
  </motion.section>
);

export default Section;
