import IMAGES from "../images/index";

const stacks = [
  {
    title: "JavaScript",
    description: "Web development foundation",
    icon: IMAGES.jsImg,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    title: "React",
    description: "Interactive UI building",
    icon: IMAGES.reactImg,
    link: "https://react.dev/",
  },
  {
    title: "Next.js",
    description: "Server-side rendering",
    icon: "./nextjs-white.svg",
    link: "https://nextjs.org/",
  },
  {
    title: "Node.js",
    description: "Backend runtime environment",
    icon: "./node.svg",
    link: "https://nodejs.org/",
  },
  {
    title: "Express.js",
    description: "API server framework",
    icon: IMAGES.expressImg,
    link: "https://expressjs.com/",
  },
  {
    title: "MongoDB",
    description: "Flexible data storage",
    icon: IMAGES.mongoImg,
    link: "https://www.mongodb.com/",
  },
  {
    title: "TypeScript",
    description: "Typed JavaScript development",
    icon: IMAGES.tsImg,
    link: "https://www.typescriptlang.org/",
  },
];

const stacksTwo = [
  {
    title: "Redux",
    description: "State management for React",
    icon: IMAGES.reduxImg,
    link: "https://redux.js.org/",
  },
  {
    title: "Tailwind CSS",
    description: "Utility-first CSS framework",
    icon: IMAGES.tailwindImg,
    link: "https://tailwindcss.com/",
  },
  {
    title: "Framer Motion",
    description: "Animations for React",
    icon: IMAGES.framerImg,
    link: "https://www.framer.com/motion/",
  },
  {
    title: "Sass",
    description: "CSS with superpowers",
    icon: IMAGES.sassImg,
    link: "https://sass-lang.com/",
  },

  {
    title: "MySQL",
    description: "Popular relational database",
    icon: IMAGES.mysqlImg,
    link: "https://www.mysql.com/",
  },
  // {
  //   title: "Sequelize",
  //   description: "ORM for SQL databases",
  //   icon: IMAGES.sequelizeImg,
  //   link: "https://sequelize.org/",
  // },

  {
    title: "Git & GitHub",
    description: "Version control and collaboration",
    icon: IMAGES.gitImg,
    link: "https://git-scm.com/",
  },
  // {
  //   title: "Jest",
  //   description: "JavaScript testing framework",
  //   icon: IMAGES.jestImg,
  //   link: "https://jestjs.io/",
  // },

  {
    title: "Vite",
    description: "Next generation frontend tooling",
    icon: IMAGES.viteImg,
    link: "https://vitejs.dev/",
  },
  {
    title: "Docker",
    description: "Containerization platform",
    icon: IMAGES.dockerImg,
    link: "https://www.docker.com/",
  },
];

export { stacks, stacksTwo };
