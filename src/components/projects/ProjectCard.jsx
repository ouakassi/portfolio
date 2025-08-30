import "./ProjectCard.css";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";

import { GiArmoredBoomerang } from "react-icons/gi";
import { PiLinkBreakDuotone } from "react-icons/pi";

import AnimatedText from "../animations/AnimatedText";
import checkColor from "../../utils/checkColor";

export default function Card({ project }) {
  const mouseInitialPosition = { x: 500, y: 500 };
  const [mousePosition, setMousePosition] = useState(mouseInitialPosition);
  const [isHovering, setIsHovering] = useState(false);

  const cardRef = useRef();
  const isCardInView = useInView(cardRef, { amount: 0.8 });

  // Format project type
  const formattedProjectType = useMemo(
    () => project.projectType.split("-").join(" "),
    [project.projectType]
  );

  // Handle mouse movement for rotation and gradient
  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left; // Mouse X relative to the card
    const y = e.clientY - rect.top; // Mouse Y relative to the card

    setMousePosition({ x, y });
    setIsHovering(true);

    // Calculate rotation based on mouse position
    const middleX = rect.width / 2;
    const middleY = rect.height / 2;
    const offsetX = ((x - middleX) / middleX) * 10; // Adjust rotation intensity
    const offsetY = ((y - middleY) / middleY) * 10;

    cardRef.current.style.setProperty("--rotateX", -1 * offsetY + "deg");
    cardRef.current.style.setProperty("--rotateY", -1 * offsetX + "deg");
  }, []);

  // Reset rotation and gradient on mouse leave
  const handleMouseLeave = () => {
    setIsHovering(false);
    setMousePosition(mouseInitialPosition);
    cardRef.current.style.setProperty("--rotateX", "0deg");
    cardRef.current.style.setProperty("--rotateY", "0deg");
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="card__container"
      ref={cardRef}
      style={{
        background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, ${project.color} 5%, #000 200%)`,
      }}
    >
      <motion.span
        animate={
          isHovering
            ? {
                opacity: 1,
                x: mousePosition.x - 0, // Offset for better positioning
                y: mousePosition.y - 60,
                scale: 1.1, // Slightly larger on hover
              }
            : {
                opacity: 0,
                scale: 0.8, // Shrink when not hovering
              }
        }
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
          opacity: { duration: 0.2 }, // Faster fade-in/out
        }}
        className="card__link"
      >
        <PiLinkBreakDuotone />
        See Details
      </motion.span>
      <Link to={"/projects/" + project.slug}>
        <motion.div
          className="card__content"
          initial={{
            background: `radial-gradient(circle at ${mouseInitialPosition.x}px ${mouseInitialPosition.y}px, rgb(49 49 49 / 20%) 10%, rgba(0, 0, 0, 1) 100%)`,
          }}
          animate={{
            background: isHovering
              ? `radial-gradient(circle at ${mousePosition.x}px ${
                  mousePosition.y
                }px, ${
                  project.color || "rgb(49 49 49 / 20%)"
                } 10%, rgba(0, 0, 0, 1) 100%)`
              : `radial-gradient(circle at ${mouseInitialPosition.x}px ${mouseInitialPosition.y}px, rgb(49 49 49 / 20%) 10%, rgba(0, 0, 0, 1) 100%)`,
          }}
          transition={{
            duration: isHovering ? 0.1 : 2,
            ease: "easeOut",
          }}
        >
          <header>
            <div>
              <h1>{project.title}</h1>
              <AnimatedText
                className="card__description"
                text={project.description}
                speed={0.02}
              />
            </div>
            <span className="card__icon">
              <GiArmoredBoomerang />
            </span>
          </header>
          <div className="card__stack">
            {project.tags.map((tag, index) => (
              <span key={tag}>{checkColor(tag, index)}</span>
            ))}
          </div>

          <div className="img__container">
            <motion.img
              initial={{ opacity: 0, y: 50 }}
              animate={isCardInView ? { opacity: 1, y: 10 } : { y: 100 }}
              transition={{ duration: 0.5 }}
              src={project.imgUrl}
              alt={project.title}
            />
            {project.mobileImgUrl && (
              <motion.img
                initial={{ opacity: 0, y: 50 }}
                animate={isCardInView ? { opacity: 1, y: 10 } : { y: 100 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                src={project.mobileImgUrl}
                alt={project.title}
              />
            )}
          </div>
        </motion.div>
      </Link>
      <span className="card__type">{formattedProjectType}</span>
    </div>
  );
}
