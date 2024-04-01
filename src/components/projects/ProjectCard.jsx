import "./ProjectCard.css";
import StyledParagraph from "./../../components/StyledParagrapgh";
import StyledLinedTitle from "./../../components/StyledLinedTitle";
import ButtonPrimary from "../Buttons/ButtonPrimary";

import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import IMAGES from "../../images";
import { useLayoutEffect, useRef } from "react";

const patternBackground = IMAGES.coloredPattern;

const ProjectCard = ({ image, title, description, tags, link }) => {
  const cardRef = useRef();

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["0 1", "1.3 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const newTitle = title.split("");

  console.log(newTitle);

  useLayoutEffect(() => {
    const cardElement = cardRef.current;

    const handleMouseOver = (e) => {
      // get mouse position
      const x = e.clientX;
      const y = e.clientY;

      // find the middle
      const middleX = window.innerWidth / 2;
      const middleY = window.innerHeight / 2;

      // get offset from middle as a percentage
      // and tone it down a little
      const offsetX = ((x - middleX) / middleX) * 15;
      const offsetY = ((y - middleY) / middleY) * 15;

      // set rotation
      cardElement.style.setProperty("--rotateX", -1 * offsetX + "deg");
      cardElement.style.setProperty("--rotateY", 1 * offsetY + "deg");

      cardElement.style.setProperty("--positionX", 1 * 1.5 * offsetX + "%");
      cardElement.style.setProperty("--positionY", 1 * 1.5 * offsetX + "%");
    };
    const handleMouseLeave = () => {
      // set rotation and position to default when not hovering
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
      if (cardElement) {
        cardElement.removeEventListener("mousemove", handleMouseOver);
      }
    };
  }, []);

  const sentenceAnimation = {
    hidden: { x: 50, y: -20, opacity: 0 },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
        staggerChildren: 0.2,
      },
    },
  };

  const lettersAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
  };

  const cardAnimation = {
    initial: {
      y: 90,
      opacity: 0,
      scale: 1,
      // backgroundPositionY: "50%",
    },
    whileInView: {
      y: 0,
      opacity: 1,
      transition: { ease: "easeOut", duration: 0.5 },
    },
    whileHover: { scale: 1.01 },
  };

  return (
    <motion.div
      variants={cardAnimation}
      // initial="initial"
      // whileInView="whileInView"
      // whileHover="whileHover"
      transition={{ type: "spring", mass: 0.5 }}
      viewport={{ once: true, amount: 0.4 }}
      ref={cardRef}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
    >
      <div
        className="project__box"
        style={{
          backgroundImage: `url(${patternBackground}) `,
        }}
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          transition={{ delay: 0.2, transition: 1 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 1 }}
          className="project__img"
          ref={cardRef}
        >
          <img src={image} alt={title} />
        </motion.div>
        <div className="project__data">
          <motion.div
            variants={sentenceAnimation}
            initial="hidden"
            whileInView="visible"
          >
            <StyledLinedTitle>
              {" "}
              {title.split("").map((char, i) => {
                return (
                  <>
                    <motion.span key={i} variants={lettersAnimation}>
                      {char}
                    </motion.span>
                  </>
                );
              })}
            </StyledLinedTitle>
          </motion.div>
          <StyledParagraph
            style={{
              padding: "0.5rem",
              borderRadius: "10px",
              backgroundColor: "rgb(1 4 44 / 60%)",
            }}
            className="project__description"
          >
            {description.slice(0, 200)}...
          </StyledParagraph>
          <div className="project__languages">{tags}</div>
          <div className="project__links">
            <ButtonPrimary
              title="Github"
              icon="uil uil-github"
              link="https://www.google.com"
            />
            <ButtonPrimary
              title="Website"
              icon="uil uil-globe"
              link="https://www.google.com"
            />
            <Link to={link}>Details</Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
