import projectsData from "../../data/projectsData";
import Section from "../../components/Section";
import { useState } from "react";
import FilterTags from "../../components/projects/FilterTags";

import "./ProjectPage.css";
import ProjectsContainer from "../../components/projects/ProjectsContainer";

const ProjectsPage = () => {
  const [selectedFilter, setSelectedFilter] = useState("");

  const filteredProjects =
    selectedFilter === ""
      ? projectsData
      : projectsData.filter(
          (project) =>
            project.type.toLowerCase() === selectedFilter ||
            selectedFilter === "all"
        );

  const handleFilter = (filterTag) => {
    setSelectedFilter(filterTag);
  };

  return (
    <Section
      className="projects"
      id="projects"
      icon="uil uil-folder-open"
      sectionTitle="Projects"
      sectionSubtitle="my projects"
    >
      <div className="project__container">
        <div className="tags">
          <p>filter by:</p>
          <FilterTags onClickFilterButton={handleFilter} />
        </div>
        <ProjectsContainer filteredProjects={filteredProjects} />
      </div>
    </Section>
  );
};

export default ProjectsPage;
