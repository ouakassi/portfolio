import ProjectCard from "./ProjectCard";
import checkColor from "./../../utils/checkColor";

const ProjectsContainer = ({ filteredProjects, limitProjectsCount = null }) => {
  if (limitProjectsCount !== null) {
    // If limitProjectsCount is provided, return a limited number of projects
    return filteredProjects
      .slice(0, limitProjectsCount)
      .map(
        (
          {
            id,
            imgUrl,
            description,
            slug,
            title,
            tags,
            website,
            github,
            projectType,
          },
          index
        ) => (
          <ProjectCard
            key={id}
            title={title}
            image={imgUrl}
            tags={tags.map((tag, i) => {
              return checkColor(tag, i, "project__language");
            })}
            description={description}
            website={website}
            github={github}
            link={slug}
            projectType={projectType}
          />
        )
      );
  } else {
    // If no limitProjectsCount is provided, render all filtered projects
    return filteredProjects.map(
      (
        {
          id,
          imgUrl,
          description,
          slug,
          title,
          tags,
          websiteLink,
          githubLink,
          projectType,
        },
        index
      ) => (
        <div key={id} className="project__container container">
          <ProjectCard
            title={title}
            image={imgUrl}
            tags={tags.map((tag, i) => {
              return checkColor(tag, i, "project__language");
            })}
            description={description}
            website={websiteLink}
            github={githubLink}
            link={slug}
            projectType={projectType}
            slug={slug}
          />
        </div>
      )
    );
  }
};

export default ProjectsContainer;
