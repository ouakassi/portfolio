import { motion } from "framer-motion";
import "./LanguageComponent.css";
import IMAGES from "../../images";

// IMAGES.mongoImg

const DEFAULT_LANGUAGE_IMG = IMAGES.defaultLanguageImg;
const DEFAULT_LANGUAGE_COLOR = "#fff";
const LanguageComponent = ({
  mainColor = DEFAULT_LANGUAGE_COLOR,
  className,
  image = DEFAULT_LANGUAGE_IMG,
  tag,
}) => (
  <motion.span
    style={{
      color: mainColor,
      backgroundColor: `${
        mainColor === "#000" ? DEFAULT_LANGUAGE_COLOR : mainColor + 33
      }`,
    }}
    className={`language__tag-container ${className}`}
  >
    <img src={image} alt={tag} />

    <span>{tag}</span>
  </motion.span>
);

export default LanguageComponent;
