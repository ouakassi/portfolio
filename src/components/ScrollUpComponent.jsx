import "./ScrollUpComponent.css";

import { motion } from "framer-motion";
import useWindowHeight from "../hooks/useWindowHeight";

const ScrollUpComponent = () => {
  const windowHeight = useWindowHeight();

  const handlClick = () => window.scrollTo(0, 0);

  if (windowHeight >= 500)
    return (
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ transition: 0.5 }}
        onClick={handlClick}
        className="scrollup"
      >
        <i className="uil uil-arrow-up scrollup__icon" />
      </motion.div>
    );
};

export default ScrollUpComponent;
