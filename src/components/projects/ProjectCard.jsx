import "./ProjectCard.css";
import StyledParagraph from "./../../components/StyledParagrapgh";
import StyledLinedTitle from "./../../components/StyledLinedTitle";
import ButtonPrimary from "../Buttons/ButtonPrimary";

import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import IMAGES from "../../images";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { FaCodeBranch } from "react-icons/fa6";
import { PiHardDrives } from "react-icons/pi";
import { IoHardwareChip } from "react-icons/io5";
import { BsBrowserChrome } from "react-icons/bs";
import checkColor from "../../utils/checkColor";

const patternBackground = IMAGES.coloredPattern;

const ProjectCard = ({ project }) => {
  const cardRef = useRef();

  // const {
  //   id,
  //   slug,
  //   title,
  //   description,
  //   imgUrl,
  //   tags,
  //   projectType,
  //   githubLink,
  //   websiteLink,
  //   createdAt,
  //   updatedAt,
  // } = project;

  const formattedProjectType = project.projectType.split("-").join(" ");

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["0 1", "1.4 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);
  // const yProgress = useTransform(scrollYProgress, [0, 1], [0, 100]);

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
      const offsetX = ((x - middleX) / middleX) * 20;
      const offsetY = ((y - middleY) / middleY) * 20;

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

  return (
    <motion.div
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      ref={cardRef}
    >
      <div
        className="project__box"
        style={{
          backgroundImage: `url(${patternBackground}) `,
        }}
      >
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { delay: 0.2, duration: 0.6 },
          }}
          viewport={{ amount: 1, once: true }}
          className="project__img"
        >
          <Link to={"./" + project.slug}>
            <img src={project.imgUrl} alt={project.title} />
          </Link>
        </motion.div>
        <div className="project__data">
          <span className="project__title">{project.title}</span>
          <p className="project__description">
            {project.description?.slice(0, 200)}...
          </p>
          <div className="project__languages">
            {project.tags.map((tag) => checkColor(tag))}
          </div>
          <div className="project__links">
            <ButtonPrimary
              title="Github"
              icon={<FaCodeBranch />}
              link={project.githubLink}
            />
            <ButtonPrimary
              title="Website"
              icon={<BsBrowserChrome />}
              link={project.websiteLink}
            />
            {/* <Link to={link}>Details</Link> */}
            <div className="bgg"></div>
          </div>
        </div>
        <span className="project__type">{formattedProjectType}</span>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
