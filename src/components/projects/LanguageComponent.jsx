import { motion } from "framer-motion";
const LanguageComponent = ({ mainColor, className, image, tag }) => (
  <>
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{
        opacity: 1,
        scale: 1,
        transition: {
          type: "spring",
          bounce: 0.4,
          duration: 0.8,
        },
      }}
      whileHover={{ y: -5 }}
      style={{
        color: mainColor || "#00ffb3",
        backgroundColor: `${mainColor}33` || "#00ffb333",
      }}
      className={className}
    >
      <img src={image || "./images/languages/code.svg"} alt={tag} />
      <span>{tag}</span>
    </motion.span>
  </>
);

export default LanguageComponent;
