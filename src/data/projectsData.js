import IMAGES from "../images";

const projectsNature = {
  frontend: "frontend",
  backend: "backend",
};

const projectsType = {
  work: "work",
  freelance: "freelance",
  sideProject: "side-project",
};

const projectsData = [
  {
    id: 1,
    title: "Crypto vault",
    slug: "crypto-vault",
    duration: "1 week",
    projectType: projectsType.sideProject,
    projectNature: projectsNature.frontend,
    color: "rgb(33 5 73)",
    description:
      "Crypto vault is a modern NFT marketplace where users can explore, bid, and purchase digital assets seamlessly.",
    tags: ["html", "css", "javascript"],
    imgUrl: IMAGES.projectCryptoVault,
    mobileImgUrl: IMAGES.projectCryptoVaultMobile,

    projectImages: [
      IMAGES.projectCryptoVault1,
      IMAGES.projectCryptoVault,
      IMAGES.projectCryptoVault2,
      IMAGES.projectCryptoVaultMobile,
    ],
    githubLink: "https://github.com/ouakassi/crypto-landing-page",
    demoLink: "https://ouakassi-crypto.netlify.app",
    realLink: null,
  },
  {
    id: 2,
    title: "SODEV",
    slug: "sodev",
    projectType: projectsType.work,
    projectNature: projectsNature.frontend,
    color: "rgb(59 57 44)",
    description:
      "SoDev The Real World is a multi-language landing page built precisely to client ",
    tags: ["html", "css", "javascript"],
    imgUrl: IMAGES.projectSodev,
    mobileImgUrl: IMAGES.projectSodevMobile,
    projectImages: [
      IMAGES.projectCryptoVault1,
      IMAGES.projectSodev,
      IMAGES.projectCryptoVault2,
      IMAGES.projectSodevMobile,
    ],
    githubLink: "https://github.com/ouakassi/sodev",
    demoLink: "https://ouakassi-sodev.netlify.app",
    realLink: "https://sodevtherealworld.com/",
  },
  {
    id: 3,
    title: "Sanipro",
    slug: "sanipro",
    projectType: projectsType.freelance,
    projectNature: projectsNature.frontend,
    color: "#062b52 ",
    description:
      "Sanipro is a professional plumbing and renovation website built for a Dijon-based company. The landing page highlights key services such as plumbing, heating, leaks, tiling, and full bathroom renovation, with modern animations, responsive design, and a clean UX focused on quick contact and trust.",
    tags: ["html", "css", "next", "Vite", "Framer Motion", "EmailJS"],
    imgUrl: IMAGES.projectSanipro,
    mobileImgUrl: IMAGES.projectSaniproMobile,
    projectImages: [
      IMAGES.projectSanipro,
      IMAGES.projectSanipro1,
      IMAGES.projectSaniproMobile,
      IMAGES.projectSanipro2,
    ],
    githubLink: "https://github.com/ouakassi/sanipro",
    demoLink: "https://ouakassi-sanipro.netlify.app/",
    realLink: "https:///saniprosarl.fr/",
  },
];

export default projectsData;
