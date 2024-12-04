import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import "./ContactIcon.css";

export default function ContactIcon() {
  const animationVariants = {
    initial: { opacity: 0, y: -100 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.2 },
    },
    exit: { opacity: 0, y: -100 },
  };

  const location = useLocation();

  return location.pathname !== "/" ? (
    <Link to="/contact">
      <motion.div
        variants={animationVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="floated-contact"
      >
        <i className=" uil uil-phone" />
      </motion.div>
    </Link>
  ) : (
    <a href="#contact">
      <motion.div
        variants={animationVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="floated-contact"
      >
        <i className=" uil uil-phone" />
      </motion.div>
    </a>
  );
}
