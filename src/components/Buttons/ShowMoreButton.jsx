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
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,

      transition: { type: "spring", stiffness: 400, damping: 17 },
    },
    // whileHover: { scale: 1.05 },s
    whileTap: { scale: 0.95 },
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
      {icon && (
        <span style={iconStyle} className="button__icon">
          {icon}
        </span>
      )}
      {title ? title : "Show More"}
    </motion.span>
  );
};
