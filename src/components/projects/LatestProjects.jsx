import ProjectsContainer from "./ProjectsContainer";
import projectsData from "../../data/projectsData";

import Section from "../Section";
import { ShowMoreButton } from "../Buttons/ShowMoreButton";

import { Link } from "react-router-dom";
import { FaFolderTree, FaServer } from "react-icons/fa6";

export default function LatestProjects() {
  return (
    <Section
      className="projects"
      id="projects"
      icon={<FaFolderTree />}
      sectionTitle="Projects"
      sectionSubtitle="latest projects"
    >
      <div className="project__container container">
        <ProjectsContainer
          filteredProjects={projectsData}
          limitProjectsCount={2}
        />
        <div>
          <Link to={"/projects"}>
            <ShowMoreButton icon={<FaServer />} title="see all projects" />
          </Link>
        </div>
      </div>
    </Section>
  );
}
