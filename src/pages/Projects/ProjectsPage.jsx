import projectsData from "../../data/projectsData";
import Section from "../../components/Section";
import { useState } from "react";
import FilterTags from "../../components/projects/FilterTags";

import "./ProjectsPage.css";
import ProjectsContainer from "../../components/projects/ProjectsContainer";
import CurveAnimation from "../../components/animations/CurveAnimation";
import { FaFolderTree } from "react-icons/fa6";
import IMAGES from "../../images";
import { motion } from "framer-motion";

const ProjectsPage = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filteredProjects =
    selectedFilter === "all"
      ? projectsData
      : projectsData.filter(
          (project) => project.projectType.toLowerCase() === selectedFilter
        );

  const handleFilter = (filterTag) => {
    setSelectedFilter(filterTag);
  };

  console.log(filteredProjects);
  console.log();

  const rectVariants = {
    hidden: { width: "0%", height: "0%" },
    visible: { width: "100%", height: "100%" },
  };

  // Variant for stagger effect on the entire group
  const groupVariants = {
    visible: {
      transition: {
        staggerChildren: 0.1, // Stagger each child by 0.1s
      },
    },
  };

  return (
    <Section
      className="projects"
      id="projects"
      icon={<FaFolderTree />}
      sectionTitle="Projects"
      sectionSubtitle="my projects"
      // style={{ backgroundImage: `url(${IMAGES.grain}) ` }}
    >
      <div className="projects__container">
        <div className="tags">
          <p>filter by:</p>
          <FilterTags onClickFilterButton={handleFilter} />
        </div>

        {/* <motion.svg
          initial={{ opacity: 1 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
          className="grain__svg"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          viewBox="0 0 800 800"
          width="800"
          height="800"
        >
          <motion.g
            strokeWidth="0.5"
            stroke="var(--first-color)"
            fill="none"
            initial="hidden"
            animate="visible"
            variants={groupVariants}
          >
            {[...Array(16)].map((_, i) => (
              <motion.rect
                key={i}
                width="266.6666666666667"
                height="266.6666666666667"
                x={(i % 4) * 266.6666666666667}
                y={Math.floor(i / 4) * 266.6666666666667}
                variants={rectVariants}
                transition={{ duration: 0.8, delay: 1, ease: "easeInOut" }}
              />
            ))}
          </motion.g>
        </motion.svg>
        <motion.svg
          initial={{ opacity: 1 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="grain__svg svg-two"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          viewBox="0 0 800 800"
          width="800"
          height="800"
        >
          <motion.g strokeWidth="0.5" stroke="var(--first-color)" fill="none">
            <rect
              width="266.6666666666667"
              height="266.6666666666667"
              x="0"
              y="0"
            ></rect>
            <rect
              width="266.6666666666667"
              height="266.6666666666667"
              x="266.6666666666667"
              y="0"
            ></rect>
            <rect
              width="266.6666666666667"
              height="266.6666666666667"
              x="533.3333333333334"
              y="0"
            ></rect>
            <rect
              width="266.6666666666667"
              height="266.6666666666667"
              x="800"
              y="0"
            ></rect>
            <rect
              width="266.6666666666667"
              height="266.6666666666667"
              x="0"
              y="266.6666666666667"
            ></rect>
            <rect
              width="266.6666666666667"
              height="266.6666666666667"
              x="266.6666666666667"
              y="266.6666666666667"
            ></rect>
            <rect
              width="266.6666666666667"
              height="266.6666666666667"
              x="533.3333333333334"
              y="266.6666666666667"
            ></rect>
            <rect
              width="266.6666666666667"
              height="266.6666666666667"
              x="800"
              y="266.6666666666667"
            ></rect>
            <rect
              width="266.6666666666667"
              height="266.6666666666667"
              x="0"
              y="533.3333333333334"
            ></rect>
            <rect
              width="266.6666666666667"
              height="266.6666666666667"
              x="266.6666666666667"
              y="533.3333333333334"
            ></rect>
            <rect
              width="266.6666666666667"
              height="266.6666666666667"
              x="533.3333333333334"
              y="533.3333333333334"
            ></rect>
            <rect
              width="266.6666666666667"
              height="266.6666666666667"
              x="800"
              y="533.3333333333334"
            ></rect>
            <rect
              width="266.6666666666667"
              height="266.6666666666667"
              x="0"
              y="800"
            ></rect>
            <rect
              width="266.6666666666667"
              height="266.6666666666667"
              x="266.6666666666667"
              y="800"
            ></rect>
            <rect
              width="266.6666666666667"
              height="266.6666666666667"
              x="533.3333333333334"
              y="800"
            ></rect>
            <rect
              width="266.6666666666667"
              height="266.6666666666667"
              x="800"
              y="800"
            ></rect>
          </motion.g>
        </motion.svg> */}
        <div className="home__bg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 800"
            opacity="1"
            // width="800"
            // height="800"
            className="home__bg-svg"
          >
            <g strokeWidth="0.1" stroke="var(--first-color-alt)" fill="none">
              {/* Squares */}
              {[...Array(10)].map((_, row) =>
                [...Array(10)].map((_, col) => (
                  <motion.rect
                    // initial={{ x: 0, y: 0 }}
                    // animate={{ x: col * 30, y: row * 30 }}
                    // transition={{ duration: 0.5, delay: 0.2 }}
                    // key={`${row}-${col}`}
                    width="100"
                    height="100"
                    // fill="url(#hero)"
                    x={col * 100}
                    y={row * 100}
                    animate={{
                      scale: [1, 0.8, 0.6, 0.5, 1],
                      opacity: [0, 1, 0.2],
                      // fill: ["#ffffff20", "#ffffff80", "#ffffff20"],
                    }}
                    transition={{
                      duration: 0.8,
                      ease: "easeInOut",
                      delay: col * 0.2, // Stagger animation based on position
                    }}
                  />
                ))
              )}
            </g>
          </svg>
          {/* <div className="home__bg-gradient"></div> */}
        </div>
        <ProjectsContainer filteredProjects={filteredProjects} />
      </div>
    </Section>
  );
};

export default ProjectsPage;
