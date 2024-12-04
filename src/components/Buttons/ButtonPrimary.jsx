import "./ButtonPrimary.css";
import { motion } from "framer-motion";

export default function ButtonPrimary({ link, title, icon }) {
  return (
    <a
      target="_blank"
      className="button-primary"
      href={link}
      rel="noreferrer noopener"
    >
      <span className="button__icon">{icon}</span>
      {title}
      {/* <i className={`${icon} `}></i> */}
    </a>
  );
}
