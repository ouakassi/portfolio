import { motion, useScroll, useTransform } from "framer-motion";
export default function PageProgress() {
  const { scrollYProgress } = useScroll();
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <motion.div
      style={{
        background: "var(--main-color)",
        position: "fixed",
        width: width,
        height: "2px",
        left: 0,
        top: 0,
        zIndex: 10000,
      }}
    ></motion.div>
  );
}
