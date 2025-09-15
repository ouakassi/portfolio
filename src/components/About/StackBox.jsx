import { motion } from "framer-motion";
import "./StackBox.css";

import { TiArrowRightThick } from "react-icons/ti";

export default function StackBox({ title, description, icon, link }) {
  return (
    <motion.a
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      href={link}
      target="_blank"
      rel="noreferrer"
    >
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
    </motion.a>
  );
}
