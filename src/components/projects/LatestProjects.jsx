import projects from "../../data/projectsData";

import Section from "../Section";
import { ShowMoreButton } from "../Buttons/ShowMoreButton";

import { Link } from "react-router-dom";
import { FaFolderTree, FaServer } from "react-icons/fa6";
import ProjectCard from "./ProjectCard";

export default function LatestProjects() {
  const LIMIT = 4;
  return (
    <Section
      className="projects"
      id="projects"
      icon={<FaFolderTree />}
      sectionTitle="Projects"
      sectionSubtitle="latest projects"
    >
      <div className="project__container container">
        {projects?.slice(0, LIMIT).map((project, index) => (
          <ProjectCard
            // style={index % 2 && { flexDirection: "coloumn" }}
            key={project.id}
            project={project}
          />
        ))}

        <Link to={"/projects"}>
          <ShowMoreButton icon={<FaServer />} title="see all projects" />
        </Link>
      </div>
    </Section>
  );
}
