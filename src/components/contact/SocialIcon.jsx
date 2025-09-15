import "./SocialIcon.css";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const SocialIcon = ({ link, title, icon, color }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Link target="_blank" to={link}>
      <div
        className="icon-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span className="icon">{icon}</span>
        <div className="circles-container">
          <svg
            className="first-circle"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid meet"
          >
            <motion.circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              initial={{ opacity: 1 }}
              animate={isHovered ? { opacity: 0, rotate: 90 } : {}}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
          </svg>
          <svg
            className="second-circle"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid meet"
          >
            <motion.circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke={color}
              initial={{ pathLength: 0 }}
              animate={isHovered ? { pathLength: 1.01 } : {}}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />
          </svg>
        </div>
        <motion.span
          initial={{ opacity: 0, top: "-20%" }}
          animate={
            isHovered ? { opacity: 1, top: "-100%", skewY: 5, zIndex: 1 } : {}
          }
          // animate={{ opacity: 1, top: "-100%", skewY: 5 }}
          className="tooltip"
        >
          {title}
        </motion.span>
      </div>
    </Link>
  );
};

export default SocialIcon;
