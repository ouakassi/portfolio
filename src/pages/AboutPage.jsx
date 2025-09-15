import React from "react";
import About from "../components/About/About";
import Experience from "../components/experience/Experience";
import "./AboutPage.css";
import StackBox from "../components/About/StackBox";
import VerticalLines from "../components/backgrounds/VerticalLines";
import { stacks } from "../data/stackData";

export default function AboutPage() {
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
