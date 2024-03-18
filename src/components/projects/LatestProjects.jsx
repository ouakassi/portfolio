import ProjectsContainer from "./ProjectsContainer";
import projectsData from "../../data/projectsData";
import { useState } from "react";
import Section from "../Section";
import { ShowMoreButton } from "../Buttons/ShowMoreButton";
import FilterTags from "./FilterTags";
import { Link } from "react-router-dom";

export default function LatestProjects() {
  const [selectedFilter, setSelectedFilter] = useState("");

  const handleFilter = (filterTag) => {
    setSelectedFilter(filterTag);
  };

  const filteredProjects =
    selectedFilter === ""
      ? projectsData
      : projectsData
          .filter(
            (project) =>
              project.type.toLowerCase() === selectedFilter ||
              selectedFilter === "all"
          )
          .sort((a, b) => b.id - a.id);

  return (
    <Section
      className="projects"
      id="projects"
      icon="uil uil-folder-open"
      sectionTitle="Projects"
      sectionSubtitle="latest projects"
    >
      <div className="project__container container">
        <div className="tags">
          <p>filter by:</p>
          <FilterTags onClickFilterButton={handleFilter} />
        </div>
        <ProjectsContainer
          filteredProjects={filteredProjects}
          limitProjectsCount={2}
        />
        <div>
          <Link to={"/projects"}>
            <ShowMoreButton
              icon="uil uil-folder-plus"
              title={"see all projects ?"}
            />
          </Link>
        </div>
      </div>
    </Section>
  );
}
