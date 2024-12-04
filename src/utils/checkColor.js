import LanguageComponent from "../components/projects/LanguageComponent";

import IMAGES from "../images";

const languageColors = {
  javascript: {
    color: "#f0db4f",
    image: IMAGES.jsImg,
  },
  react: {
    color: "#58c6e5",
    image: IMAGES.reactImg,
  },
  next: {
    color: "#000",
    image: IMAGES.nextImg,
  },
  node: {
    color: "#16b501",
    image: IMAGES.nodeImg,
  },
  mongodb: {
    color: "#6cac48",
    image: IMAGES.mongoImg,
  },
  html: {
    color: "#e44d26",
    image: IMAGES.htmlImg,
  },
  css: {
    color: "#1572b6",
    image: IMAGES.cssImg,
  },
  typescript: {
    color: "#007acc",
    image: IMAGES.tsImg,
  },
  express: {
    color: "#ffffff",
    image: IMAGES.expressImg,
  },
};

const checkColor = (tag, i, className) => {
  const lowerCaseTag = tag.toLowerCase();
  const language = languageColors[lowerCaseTag];

  if (language) {
    return (
      <LanguageComponent
        className={className}
        mainColor={language.color}
        key={i}
        tag={tag}
        image={language.image}
      />
    );
  } else {
    return <LanguageComponent className={className} key={i} tag={tag} />;
  }
};

export default checkColor;
