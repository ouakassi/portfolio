import "./ProjectCard.css";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useScroll,
  useTransform,
} from "framer-motion";
import { Link } from "react-router-dom";

import { GiArmoredBoomerang } from "react-icons/gi";
import { PiLinkBreakDuotone } from "react-icons/pi";

import AnimatedText from "../animations/AnimatedText";
import checkColor from "../../utils/checkColor";

export default function Card({ project }) {
  const [isHovering, setIsHovering] = useState(false);
  const cardRef = useRef(null);
  const isCardInView = useInView(cardRef, { amount: 0.8 });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 300, damping: 30, mass: 2 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30, mass: 2 });

  // Format project type
  const formattedProjectType = useMemo(
    () => project.projectType.split("-").join(" "),
    [project.projectType]
  );

  // Handle mouse movement for rotation and gradient
  const handleMouseMove = useCallback(
    (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      setIsHovering(true);

      // Set CSS custom properties
      const card = cardRef.current;
      card.style.setProperty("--mouseX", `${x}px`);
      card.style.setProperty("--mouseY", `${y}px`);
      card.style.setProperty("--project-color", project.color);

      // Calculate rotation based on mouse position
      const middleX = rect.width / 2;
      const middleY = rect.height / 2;
      const offsetX = ((x - middleX) / middleX) * 10;
      const offsetY = ((y - middleY) / middleY) * 10;

      mouseX.set(x);
      mouseY.set(y);

      card.style.setProperty("--rotateX", `${-offsetY}deg`);
      card.style.setProperty("--rotateY", `${offsetX}deg`);
    },
    [mouseX, mouseY, project.color]
  );

  // Reset rotation and gradient on mouse leave
  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
    const card = cardRef?.current;

    if (!card) return; // ✅ Prevents crash if card is not in DOM yet

    // Reset to center and no rotation
    card.style.setProperty("--mouseX", "250px");
    card.style.setProperty("--mouseY", "200px");
    card.style.setProperty("--rotateX", "0deg");
    card.style.setProperty("--rotateY", "0deg");
  }, []);

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="card__container"
      animate={{
        scale: isHovering ? 1.02 : 1,
      }}
      transition={{
        scale: { duration: 0.4, ease: "easeOut" },
      }}
    >
      <motion.span
        style={{
          top: springY,
          left: springX,
        }}
        animate={
          isHovering
            ? {
                opacity: 1,
                scale: 1.1,
                y: 20,
              }
            : {
                opacity: 0,
                scale: 0,
                y: 0,
              }
        }
        transition={{
          scale: { type: "spring", stiffness: 300, damping: 20 },
          y: { type: "spring", stiffness: 300, damping: 20 },
          opacity: { duration: 0.4, ease: "easeInOut" },
        }}
        className="card__link"
      >
        <PiLinkBreakDuotone />
        See Details
      </motion.span>
      <Link to={"/projects/" + project.slug}>
        <motion.div
          className="card__content"
          onMouseMove={handleMouseMove}
          // onMouseLeave={handleMouseLeave}
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

          <motion.div
            style={{ scale: isHovering ? 1.02 : 1 }}
            className="img__container"
          >
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
          </motion.div>
        </motion.div>
      </Link>
      <span className="card__type">{formattedProjectType}</span>
    </motion.div>
  );
}
