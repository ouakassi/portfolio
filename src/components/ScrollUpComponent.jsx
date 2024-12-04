import "./ScrollUpComponent.css";

import { AnimatePresence, motion } from "framer-motion";
import useWindowHeight from "../hooks/useWindowHeight";

const ScrollUpComponent = () => {
  const windowHeight = useWindowHeight();

  const handleClick = () => window.scrollTo(0, 0);

  return (
    <AnimatePresence>
      {windowHeight >= 500 && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ transition: 0.5 }}
          onClick={handleClick}
          className="scrollup"
        > 
          <i className="uil uil-arrow-up scrollup__icon" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollUpComponent;
