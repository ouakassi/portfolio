import IMAGES from "../images";

const projects = [
  {
    id: 1,
    slug: "sodev",
    imgUrl: IMAGES.projectSodev,
    title: "Sodev",
    description:
      "SODEV's landing page showcases its digital services with a professional, multilingual design that caters to diverse audiences. ",
    tags: ["html", "css", "javascript", "next"],
    projectType: "frontend",
    githubLink: "github.com",
    websiteLink: "https://sodevtherealworld.com/",
    createdAt: "2022-08-01",
    updatedAt: "2023-08-02",
  },
  {
    id: 2,
    slug: "project-2",
    imgUrl: IMAGES.projectTwoImg,
    title: "Collaborative Task Tracker",
    description:
      "This project focuses on simplifying task management for teams. It includes features for task collaboration, sharing, and progress tracking. Users can create, assign, and prioritize tasks efficiently.",
    githubLink: "github.com",
    tags: ["javascript", "css"],
    projectType: "backend",
    websiteLink: "google.com",
  },
  {
    id: 3,
    slug: "project-3",
    imgUrl: IMAGES.projectOneImg,
    title: "Task Management System",
    description:
      "A comprehensive web app for task management. Simplify your workflow with this intuitive tool that enables easy task creation, assignment, and tracking for both individuals and teams.",
    githubLink: "github.com",
    tags: ["javascript", "css"],
    projectType: "fullstack",
    websiteLink: "google.com",
  },
  {
    id: 4,
    slug: "project-4",
    imgUrl: IMAGES.projectOneImg,
    title: "Efficient Task Organizer",
    description:
      "Manage tasks efficiently with this streamlined web app. Create, assign, and track tasks effortlessly with features tailored for individual and team productivity.",
    githubLink: "github.com",
    tags: ["javascript", "css", "html"],
    projectType: "backend",
    websiteLink: "google.com",
  },
  {
    id: 5,
    slug: "project-5",
    imgUrl: IMAGES.projectTwoImg,
    title: "Project Collaboration Tool",
    description:
      "Enhance project collaboration with this tool. Track tasks, share progress, and manage deadlines seamlessly in one place.",
    githubLink: "github.com",
    tags: ["javascript", "html"],
    projectType: "frontend",
    websiteLink: "google.com",
  },
  {
    id: 6,
    slug: "project-6",
    imgUrl: IMAGES.projectOneImg,
    title: "Team Task Management",
    description:
      "A dedicated tool for teams to manage tasks efficiently. Simplify task assignment, progress tracking, and collaboration.",
    githubLink: "github.com",
    tags: ["javascript", "html", "css"],
    projectType: "fullstack",
    websiteLink: "google.com",
  },
  {
    id: 7,
    slug: "project-6",
    imgUrl: IMAGES.projectOneImg,
    title: "Team Task Management",
    description:
      "A dedicated tool for teams to manage tasks efficiently. Simplify task assignment, progress tracking, and collaboration.",
    githubLink: "github.com",
    tags: ["javascript", "html", "css"],
    projectType: "ui",
    websiteLink: "google.com",
  },
  {
    id: 8,
    slug: "project-6",
    imgUrl: IMAGES.projectOneImg,
    title: "Team Task Management",
    description:
      "A dedicated tool for teams to manage tasks efficiently. Simplify task assignment, progress tracking, and collaboration.",
    githubLink: "github.com",
    tags: ["javascript", "html", "css"],
    projectType: "ui",
    websiteLink: "google.com",
  },
];

export default projects;
