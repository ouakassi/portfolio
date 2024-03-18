import "./ShowMoreButton.css";
import { motion } from "framer-motion";

export const ShowMoreButton = ({
  style,
  onClick,
  title,
  icon,
  iconStyle,
  img,
}) => {
  const animationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 400, damping: 17 },
    },
    whileHover: { scale: 1.1 },
    whileTap: { scale: 0.9 },
  };

  return (
    <motion.span
      layout
      variants={animationVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      whileHover="whileHover"
      whileTap="whileTap"
      style={style}
      className="show-more__button"
      onClick={onClick}
    >
      {img && img}
      {title ? title : "Show More"}
      {icon && <i style={iconStyle} className={`${icon} button__icon`}></i>}
    </motion.span>
  );
};

// uil uil-direction
