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
  <section className={` section ${className}`} id={id}>
    <motion.h2
      initial={{
        backgroundPosition: "100% 100%",

        backgroundSize: "100% 20%",
      }}
      whileInView={{
        backgroundPosition: "100% 100%",
        backgroundSize: "25% 20%",
        // borderRadius: "10px",
      }}
      // viewport={{ once: true }}
      transition={{ delay: 0.4, duration: 0.8 }}
      // viewport={{ once: true, amount: 1 }}
      className="section__title"
    >
      {/* <div className="bg"></div> */}

      <span className="section__icon">{icon}</span>
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
  </section>
);

export default Section;
