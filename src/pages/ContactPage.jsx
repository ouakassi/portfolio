import "./ContactPage.css";
import IMAGES from "../images";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ContactPage() {
  const imgRef = useRef(null);
  const containerRef = useRef(null);
  const { scrollY } = useScroll({ container: containerRef });

  // Use scroll position to transform the element properties
  // const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  // const transformX = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
  // const transformY = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);

  const images = [
    { id: "1", imgUrl: IMAGES.projectOneImg, title: "Project 1" },
    { id: "2", imgUrl: IMAGES.projectTwoImg, title: "Project 2" },
    { id: "3", imgUrl: IMAGES.projectTwoImg, title: "Project 3" },
    { id: "4", imgUrl: IMAGES.projectTwoImg, title: "Project 4" },
    { id: "5", imgUrl: IMAGES.projectTwoImg, title: "Project 5" },
  ];

  // transform: translate(24.4397%, 0%) translate3d(0px, 0px, 0.1px)
  // rotate(-4.8879deg) skew(7.3319deg, 0deg) scale(1.0244, 1);

  return (
    <div>
      <motion.div ref={containerRef} className="grid-container" style={{}}>
        {images.map(({ id, imgUrl, title }) => (
          <motion.div
            className="grid-item"
            style={{
              opacity: scrollY,
              //   x: scrollYProgress,
              //   y: scrollYProgress,
            }}
            transition={{
              duration: 0.5, // Adjust transition duration
            }}
          >
            <motion.img key={id} src={imgUrl} alt={title} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
