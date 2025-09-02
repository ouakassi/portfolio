import "./LatestProjects.css";
import projects from "../../data/projectsData";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

import Section from "../Section";
import ProjectCard from "./ProjectCard";
import Button from "../Buttons/Button";

import { Link } from "react-router-dom";
import { FaFolderTree } from "react-icons/fa6";

export default function LatestProjects() {
  const LIMIT = 4;
  const containerRef = useRef(null);
  const conRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // offset: ["start start", "end end"],
  });

  const { scrollYProgress: scrollYProgresss } = useScroll({
    container: conRef,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 0.75, 1.5]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const x = useTransform(scrollYProgress, [0, 1], [-3000, 0]);
  useEffect(() => {
    return scrollYProgresss.onChange((latest) => {
      console.log("Page scroll: ", latest);
    });
  }, [scrollYProgresss]);

  return (
    <Section
      className="latest__projects"
      id="projects"
      icon={<FaFolderTree />}
      sectionTitle="Projects"
      sectionSubtitle="latest projects"
    >
      <motion.div ref={containerRef} className="projects__container container">
        {projects?.slice(0, LIMIT).map((project, index) => {
          const targetScale = 1 - (projects.length - index) * 0.05;
          const range = [index * 0.25, 1];
          const positionSpace = `calc(-0% + ${index * 50}px)`;
          return (
            <CardContainer
              key={project.id}
              project={project}
              scrollYProgress={scrollYProgress}
              targetScale={targetScale}
              range={range}
              positionSpace={positionSpace}
            />
          );
        })}
        <div ref={conRef} className="explore__all__projects">
          <motion.h1
            style={{
              // scale,
              opacity,

              x,
            }}
          >
            You want to see more ?
          </motion.h1>
          <Link to={"/projects"}>
            <Button
              // to={"/projects"}
              icon={<FaFolderTree />}
              title="Explore all projects"
            />
            {/* <ShowMoreButton icon={<FaServer />} title="see all projects" /> */}
          </Link>
        </div>
      </motion.div>
    </Section>
  );
}

const CardContainer = ({
  project,
  scrollYProgress,
  targetScale,
  range,
  positionSpace,
}) => {
  const scale = useTransform(scrollYProgress, range, [1, targetScale]);
  return (
    <motion.div
      key={project.id}
      // ref={containerRef}
      className="card__containerr"
      style={{
        top: positionSpace,
        scale,
      }}
    >
      <ProjectCard project={project} />
    </motion.div>
  );
};
