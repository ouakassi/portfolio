import { motion } from "framer-motion";
import "./PageAnimation.css";

export default function PageAnimation({ children }) {
  const anim = (variants) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants,
    };
  };

  const opacity = {
    initial: { opacity: 0 },
    enter: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: { opacity: 1 },
  };

  const perspective = {
    initial: { opacity: 0 },
    enter: {
      opacity: 1,
      transition: { duration: 0.8, easing: [0.76, 0, 0.24, 1] },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.5, easing: [0.76, 0, 0.24, 1] },
    },
  };

  const slider = {
    initial: { top: "100vh" },
    enter: { top: "-100vh", transition: { duration: 0.8 } },
    exit: {
      top: "-100vh",
      transition: { easing: [0.76, 0, 0.24, 1] },
    },
  };

  // const slider2 = {
  //   initial: { bottom: "-100vh" },
  //   enter: { bottom: "100vh", transition: { delay: 0.4, duration: 1 } },
  //   exit: {
  //     bottom: "100vh",
  //     transition: { easing: [0.76, 0, 0.24, 1] },
  //   },
  // };
  return (
    <div>
      <motion.div className="slider" {...anim(slider)}></motion.div>
      <motion.div {...anim(perspective)}>
        <motion.div {...anim(opacity)}>{children}</motion.div>
      </motion.div>
    </div>
  );
}
