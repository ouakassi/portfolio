import ProjectCard from "./ProjectCard";
import checkColor from "./checkColor";

const ProjectsContainer = ({ filteredProjects, limitProjectsCount = null }) => {
  if (limitProjectsCount !== null) {
    // If limitProjectsCount is provided, return a limited number of projects
    return filteredProjects
      .slice(0, limitProjectsCount)
      .map(
        (
          { id, imgurl, description, slug, title, tags, website, github },
          index
        ) => (
          <ProjectCard
            key={id}
            title={title}
            image={imgurl}
            tags={tags.map((tag, i) => {
              return checkColor(tag, i, "project__language");
            })}
            description={description}
            website={website}
            github={github}
            link={slug}
          />
        )
      );
  } else {
    // If no limitProjectsCount is provided, render all filtered projects
    return filteredProjects.map(
      (
        { id, imgurl, description, slug, title, tags, website, github },
        index
      ) => (
        <div className="project__container">
          <ProjectCard
            key={id}
            title={title}
            image={imgurl}
            tags={tags.map((tag, i) => {
              return checkColor(tag, i, "project__language");
            })}
            description={description}
            website={website}
            github={github}
            link={slug}
          />
        </div>
      )
    );
  }
};

export default ProjectsContainer;
