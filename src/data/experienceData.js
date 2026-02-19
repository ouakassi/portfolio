import IMAGES from "../images";

const jobsData = [
  {
    id: 1,
    companyName: "VFS Global (Mawared House)",
    companyImg: IMAGES.vfsLogo,
    position: "Trainee IT Support & Developer",
    tenure: "Sep 2018 – march 2019",
    color: "rgb(11 000 216)",
    desc: [
      "Provided first-line IT support, troubleshooting hardware, software, and network issues.",
      "Assisted in administering local networks (LAN) and Windows/UNIX operating systems.",
      "Managed local databases and optimized existing web tools to improve site performance.",
      "Bridged IT infrastructure maintenance with hands-on full-stack web development.",
    ],
  },
  {
    id: 2,
    companyName: "VFS Global (Mawared House)",
    companyImg: IMAGES.vfsLogo,
    position: "full stack web developer",
    tenure: "Sep 2019 – Nov 2021",
    color: "rgb(11 117 216)",
    desc: [
      "Engineered an internal form-filling application to automate data entry and assist consular staff with accurate visa processing.",
      "Maintained, debugged, and optimized existing web applications to ensure high availability, security, and performance.",
      "Developed secure, responsive web interfaces for high-traffic visa application and appointment booking portals.",
      "Built robust backend APIs to seamlessly process high-volume applicant data and track consular service statuses.",
      "Optimized relational databases using SQL to guarantee the fast and reliable retrieval of sensitive user information.",
    ],
  },
  {
    id: 3,
    companyName: "Freelancing",
    companyImg: "./companies/fiver-logo.png",
    position: "full stack web developer",
    tenure: "2022 – 2023",
    color: " rgb(24 176 80)",
    desc: [
      "Delivered end-to-end websites and SPA dashboards for SMEs and creators.",
      "Set up CI/CD, analytics, and SEO baselines; provided performance budgets and audits.",
      "Built CMS-driven content pipelines (Sanity/Contentful) with preview and draft flows.",
      "Consulted on UX, accessibility, and scalable component architecture.",
    ],
  },
  {
    id: 4,
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
  },
  {
    id: 5,
    companyName: "Freelancing",
    companyImg: "./companies/fiver-logo.png",
    position: "full stack web developer",
    tenure: "2024 – now",
    color: " rgb(24 176 80)",
    desc: [
      "Delivered end-to-end websites and SPA dashboards for SMEs and creators.",
      "Set up CI/CD, analytics, and SEO baselines; provided performance budgets and audits.",
      "Built CMS-driven content pipelines (Sanity/Contentful) with preview and draft flows.",
      "Consulted on UX, accessibility, and scalable component architecture.",
    ],
  },
];

const educationData = [
  {
    id: 1,
    schoolName: "high school Mohammed 6 of SALA AL JADIIDA",
    schoolImg: IMAGES.highSchoolLogo,

    grade: "bachelor's degree",
    date: "2015 - 2016",
    desc: [
      "Cellular & Molecular Biology and Genetics",
      "Biostatistics, Applied Mathematics, and Data Analysis",
      "Ecosystem Dynamics and Environmental Conservation",
      "Physiology, Earth Structures, and Geodynamics",
    ],
  },
  {
    id: 2,
    schoolName: "The Specialized Institute of Applied Technology",
    schoolImg: IMAGES.ofpptLogo,
    grade: "Diploma Technician Specialized in Computer Development",
    date: "2016 - 2018",
    desc: [
      "Gained practical expertise in designing clear system architectures using UML.",
      "Acquired the ability to engineer scalable OOP applications in C and C#.",
      "Developed full-stack proficiency across HTML/CSS/JS, ASP.NET, and Node.js.",
      "Mastered the fundamentals of native mobile app development for Android using Java.",
      "Learned to architect, query, and optimize relational databases in SQL Server.",
    ],
  },
  {
    id: 3,
    schoolName: "High Tech University of Rabat",
    schoolImg: IMAGES.hightechLogo,
    grade: "licence degree in computer science",
    color: "rgb(188 151 66)",
    date: "2025 - 2026",
    desc: [
      "Acquired strong foundational programming skills in Java and Python.",
      "Gained deep expertise in enterprise database management using SQL, PL/SQL, and Oracle.",
      "Developed the capability to administer IT infrastructure across Windows and UNIX.",
      "Learned to drive business intelligence through advanced data analysis in Excel.",
      "Acquired essential cybersecurity knowledge to secure and protect IT environments.",
      "Gained practical insights into technical project management and entrepreneurship.",
      "Developed professional technical English skills and a solid grasp of corporate ethics.",
    ],
  },
];

export { jobsData, educationData };
