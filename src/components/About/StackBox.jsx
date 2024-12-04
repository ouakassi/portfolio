import "./StackBox.css";

import { Link } from "react-router-dom";

import { TiArrowRightThick } from "react-icons/ti";

export default function StackBox({ title, description, icon, link }) {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <div className="stack__container">
        <div className="stack__item">
          <div>
            <span className="stack__item__icon">
              <img src={icon} alt="js-logo" />
            </span>
            <div>
              <span className="title">{title}</span>
              <span className="description">{description}</span>
            </div>
          </div>
          <TiArrowRightThick />
        </div>
      </div>
    </a>
  );
}
