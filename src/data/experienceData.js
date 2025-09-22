import IMAGES from "../images";

const jobsData = [
  {
    id: 1,
    companyName: "VFS Global (Mawared House)",
    companyImg: IMAGES.vfsLogo,
    position: "Web Developer",
    tenure: "Sep 2019 – Nov 2021",
    color: "rgb(11 117 216)",
    desc: [
      "Built and maintained production UIs for internal/external portals using React and modern tooling.",
      "Collaborated with designers to implement accessible, responsive components and design systems.",
      "Optimized performance (code-splitting, memoization) and improved Lighthouse/Core Web Vitals.",
      "Integrated REST/GraphQL services with robust error handling and retry strategies.",
    ],
    highlights: [
      "Reduced bundle size by ~30% through tree-shaking and route-based splitting.",
      "Shipped a shared UI library adopted by multiple internal teams.",
    ],
  },
  {
    id: 2,
    companyName: "Freelancing",
    companyImg: "./companies/fiver-logo.png",
    position: "Web Developer",
    tenure: "2022 – 2023",
    color: " rgb(24 176 80)",
    desc: [
      "Delivered end-to-end websites and SPA dashboards for SMEs and creators.",
      "Set up CI/CD, analytics, and SEO baselines; provided performance budgets and audits.",
      "Built CMS-driven content pipelines (Sanity/Contentful) with preview and draft flows.",
      "Consulted on UX, accessibility, and scalable component architecture.",
    ],
    highlights: [
      "Launched 8+ client projects with sub‑1s TTFB on edge hosting.",
      "Achieved consistent 90+ Lighthouse scores on core pages.",
    ],
  },
  {
    id: 3,
    companyName: "SODEV",
    companyImg: IMAGES.sodev,
    position: "Frontend Web Developer",
    tenure: "01 Jul 2023 – Aug 2023",
    color: "rgb(188 151 66)",
    desc: [
      "Implemented feature work on a React/TypeScript codebase with strict linting and tests.",
      "Created reusable UI primitives with Storybook and visual regression coverage.",
      "Collaborated with backend to align API contracts and improve DX with typed schemas.",
      "Contributed to accessibility passes (keyboard nav, focus traps, color contrast).",
    ],
    highlights: [
      "Cut UI defect rate sprint‑over‑sprint by introducing Storybook controls and test IDs.",
    ],
  },
];

const educationData = [
  {
    id: 1,
    company: "The Specialized Institute of Applied Technology",
    companyImg: IMAGES.ofpptLogo,
    position: "Diploma Technician Specialized in Computer Development",
    date: "2016 - 2018",
    desc: "Working with a fantastic team of UI folks to develop and maintain purpose-built UI for the Traceable platform and Hypertrace UI library.",
  },
  {
    id: 2,
    company: "high school",
    companyImg: IMAGES.highSchoolLogo,
    position: "bachelor's degree",
    date: "2015 - 2016",
    desc: "Working with a fantastic team of UI folks to develop and maintain purpose-built UI for the Traceable platform and Hypertrace UI library.",
  },
];

export { jobsData, educationData };
