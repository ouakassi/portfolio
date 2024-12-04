import "./ProjectCardOld.css";
import ButtonPrimary from "../Buttons/ButtonPrimary";

import { Link } from "react-router-dom";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import IMAGES from "../../images";
import { useLayoutEffect, useMemo, useRef } from "react";
import { FaGithub, FaLink } from "react-icons/fa6";
import checkColor from "../../utils/checkColor";
import Button from "../Buttons/Button";
import { HiArrowCircleRight } from "react-icons/hi";
import AnimatedText from "../animations/AnimatedText";

const patternBackground = IMAGES.patternFour;

const ProjectCard = ({ project, style }) => {
  const cardRef = useRef();

  const isCardInView = useInView(cardRef, { amount: 1 });

  const formattedProjectType = useMemo(
    () => project.projectType.split("-").join(" "),
    [project.projectType]
  );

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
        // style={
        //   {
        //     backgroundImage: `url(${patternBackground}) `,
        //   }
        // }
        style={style}
      >
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={
            isCardInView
              ? {
                  y: 0,
                  opacity: 1,
                }
              : null
          }
          viewport={{ amount: 1, once: true }}
          className="project__img"
        >
          <Link to={"/projects/" + project.slug}>
            <img src={project.imgUrl} alt={project.title} />
          </Link>
        </motion.div>
        <div className="project__data">
          <span className="project__title">{project.title}</span>
          <div className="project__description">
            <AnimatedText
              speed={0.02}
              once={true}
              text={project.description?.slice(0, 200)}
            />
          </div>
          <div className="project__languages">
            {project.tags.map((tag, index) => checkColor(tag, index))}
          </div>
          <div className="project__links">
            <div>
              <ButtonPrimary
                title="Github"
                icon={<FaGithub />}
                link={project.githubLink}
              />
              <ButtonPrimary
                title="Website"
                icon={<FaLink />}
                link={project.websiteLink}
              />
            </div>
            <Link to={"/projects/" + project.slug}>
              <Button
                title={"view project"}
                icon={<HiArrowCircleRight />}
                iconDirection="right"
              />
            </Link>
            {/* <Link to={link}>Details</Link> */}
          </div>
          <div className="bgg"></div>
        </div>
        <span className="project__type">{formattedProjectType}</span>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
