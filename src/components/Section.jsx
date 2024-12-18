import { useEffect, useRef, useState } from "react";
import "./Section.css";
import { motion, useInView } from "framer-motion";

// initial={{
//   backgroundPosition: "100% 100%",
//   backgroundSize: "100% 20%",
// }}
// whileInView={{
//   backgroundPosition: "100% 100%",
//   backgroundSize: "25% 20%",
// }}
// viewport={{ once: true }}
// transition={{ delay: 0.4, duration: 0.8 }}
// viewport={{ once: true, amount: 1 }}
const Section = ({
  id,
  className,
  icon,
  sectionTitle,
  sectionSubtitle,
  children,
}) => {
  return (
    <section className={` section ${className}`} id={id}>
      <motion.span
        style={{ overflow: "hidden" }}
        className="section__title-container"
      >
        <motion.h2
          initial={{ y: 70 }}
          whileInView={{ y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="section__title"
        >
          <span className="section__icon">{icon}</span>
          {sectionTitle}
        </motion.h2>
      </motion.span>
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
};
export default Section;
