import projectsData from "../../data/projectsData";
import Section from "../../components/Section";
import { useEffect, useRef, useState } from "react";
import FilterTags from "../../components/projects/FilterTags";

import "./ProjectsPage.css";

import CurveAnimation from "../../components/animations/CurveAnimation";
import { FaFolderTree } from "react-icons/fa6";
import IMAGES from "../../images";
import { motion } from "framer-motion";
import ProjectCard from "../../components/projects/ProjectCard";

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

  return (
    <Section
      className="projects"
      id="projects"
      icon={<FaFolderTree />}
      sectionTitle="Projects"
      sectionSubtitle="my projects"
      // style={{ backgroundImage: `url(${IMAGES.grain}) ` }}
    >
      <div className="projects__container container">
        <div className="tags">
          <p>filter by:</p>
          <FilterTags onClickFilterButton={handleFilter} />
        </div>
        <div className="home__bg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 800"
            opacity="1"
            // width="800"
            // height="800"
            className="home__bg-svg"
          >
            <g strokeWidth="0.1" stroke="var(--second-color)" fill="none">
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
                      // scale: [1, 0.8, 0.6, 0.5, 1],
                      opacity: [0, 1, 0.1],
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
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
};

export default ProjectsPage;
