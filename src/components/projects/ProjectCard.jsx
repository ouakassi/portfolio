import { GiArmoredBoomerang } from "react-icons/gi";
import checkColor from "../../utils/checkColor";
import "./ProjectCard.css";
import AnimatedText from "../animations/AnimatedText";
import { useLayoutEffect, useMemo, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
export default function Card({ project }) {
  const cardRef = useRef();

  const isCardInView = useInView(cardRef, { amount: 0.8 });

  useLayoutEffect(() => {
    const cardElement = cardRef.current;
    let animationFrame;

    const handleMouseOver = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      const middleX = window.innerWidth / 2;
      const middleY = window.innerHeight / 2;

      const offsetX = ((x - middleX) / middleX) * 20;
      const offsetY = ((y - middleY) / middleY) * 20;

      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => {
        cardElement.style.setProperty("--rotateX", -1 * offsetX + "deg");
        cardElement.style.setProperty("--rotateY", 1 * offsetY + "deg");
        cardElement.style.setProperty("--positionX", 1 * 1.5 * offsetX + "%");
        cardElement.style.setProperty("--positionY", 1 * 1.5 * offsetX + "%");
      });
    };

    const handleMouseLeave = () => {
      cancelAnimationFrame(animationFrame);
      cardElement.style.setProperty("--rotateX", 0 + "deg");
      cardElement.style.setProperty("--rotateY", 0 + "deg");
      cardElement.style.setProperty("--positionX", 0 + "%");
      cardElement.style.setProperty("--positionY", 0 + "%");
    };

    if (cardElement) {
      cardElement.addEventListener("mousemove", handleMouseOver);
      cardElement.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      cancelAnimationFrame(animationFrame);
      if (cardElement) {
        cardElement.removeEventListener("mousemove", handleMouseOver);
        cardElement.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  const formattedProjectType = useMemo(
    () => project.projectType.split("-").join(" "),
    [project.projectType]
  );

  return (
    <div ref={cardRef} className="card__container">
      <Link to={"/projects/" + project.slug}>
        <div className="card__content">
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
              animate={isCardInView ? { opacity: 1, y: 10 } : {}}
              transition={{ duration: 0.5 }}
              src={project.imgUrl}
              alt={project.title}
            />
          </div>
        </div>
      </Link>
      <span className="card__type">{formattedProjectType}</span>
    </div>
  );
}
