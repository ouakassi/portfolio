import "./AboutStyle.css";

import Section from "../Section";
import checkColor from "../projects/checkColor";
import StyledParagraph from "../StyledParagrapgh";
import IMAGES from "../../images";

const stackLangs = [
  "html",
  "css",
  "javascript",
  "react",
  "node",
  "express",
  "mongodb",
  "typescript",
];

const descriptionText = [
  {
    id: 1,
    text: "Over 3 years of professional exposure in JavaScript technology such as Node JS , Express.js ,<b>React JS</b> , D3 JS, MongoDB and .",
  },
  {
    id: 2,
    text: "Web developer, with extensive knowledge and years of experience, working in web technologies and Ui / Ux design, delivering quality work.",
  },
  {
    id: 3,
    text: "Expertise in developing web pages using HTML5, CSS3, MVC, SASS, LESS, Object Oriente Java script, ES6, JQuery, AJAX, JSON, XML. Good understanding of Document Object Model (DOM) and DOM Functions.",
  },
];

export default function About() {
  return (
    <Section
      className="about"
      id="about"
      icon="uil uil-user-square"
      sectionTitle="About me"
      sectionSubtitle="everything about me"
    >
      <div className="about__container container">
        <div className="about__heading">
          <div>
            <img
              className="about__stack-dots"
              src={IMAGES.background}
              alt="dots"
            />
            <img
              className="about__stack-img"
              src={IMAGES.oussamaImg}
              alt="it's me"
            />
          </div>

          <div>
            <span className="about__stack-quote">&rdquo;</span>
            we changed the
            <span className="about__stack-text">game</span>
            <span className="about__stack-quote">&rdquo;</span>
          </div>
        </div>
        <div className="about__stack__languages">
          {stackLangs.map((lang, i) => {
            return checkColor(lang, i, "about__stack__languages-lang");
          })}
        </div>
        <div className="about__stack__paragraphs">
          {descriptionText.map(({ id, text }) => {
            return <StyledParagraph key={id}>{text}</StyledParagraph>;
          })}
        </div>
      </div>
    </Section>
  );
}
