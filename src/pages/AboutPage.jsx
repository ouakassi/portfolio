import React from "react";
import About from "../components/About/About";
import Experience from "../components/experience/Experience";
import "./AboutPage.css";
import StackBox from "../components/About/StackBox";
import IMAGES from "../images";
import VerticalLines from "../components/backgrounds/VerticalLines";

export default function AboutPage() {
  const stacks = [
    {
      title: "JavaScript",
      description: "Versatile language for front-end and back-end development.",
      icon: IMAGES.jsImg,
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      title: "React",
      description: "Library for building reusable and dynamic user interfaces.",
      icon: IMAGES.reactImg,
      link: "https://react.dev/",
    },
    {
      title: "Next.js",
      description:
        "Framework for server-side rendering and static site generation.",
      icon: "./nextjs-white.svg",
      link: "https://nextjs.org/",
    },
    {
      title: "Node.js",
      description:
        "JavaScript runtime for server-side application development.",
      icon: "./node.svg",
      link: "https://nodejs.org/",
    },
    {
      title: "Express.js",
      description: "Minimal framework for building Node.js web applications.",
      icon: IMAGES.expressImg,
      link: "https://expressjs.com/",
    },
    {
      title: "MongoDB",
      description: "NoSQL database for flexible and scalable data storage.",
      icon: IMAGES.mongoImg,
      link: "https://www.mongodb.com/",
    },
    {
      title: "TypeScript",
      description:
        "JavaScript superset adding static typing and extra features.",
      icon: IMAGES.tsImg,
      link: "https://www.typescriptlang.org/",
    },
  ];

  return (
    <div>
      <About />

      <div className="stacks__container">
        {stacks.map(({ title, description, icon, link }, i) => {
          return (
            <StackBox
              key={i}
              title={title}
              description={description}
              icon={icon}
              link={link}
            />
          );
        })}
      </div>

      <VerticalLines />
      <Experience />
    </div>
  );
}
