import "./ScrollUpComponent.css";

import { AnimatePresence, motion } from "framer-motion";
import useWindowHeight from "../hooks/useWindowHeight";
import { BiUpArrow } from "react-icons/bi";
import { FaArrowAltCircleUp } from "react-icons/fa";
import Button from "./Buttons/Button";

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
          transition={{ transition: 0.2, type: "spring" }}
          onClick={handleClick}
          className="scrollup"
        >
          <Button icon={<FaArrowAltCircleUp />} className="scrollup-btn" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollUpComponent;
