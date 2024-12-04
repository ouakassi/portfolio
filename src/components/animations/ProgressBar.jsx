import { motion } from "framer-motion";
import "./ProgressBar.css";

export default function ProgressBar({ progress }) {
  return (
    <div style={{ marginBottom: "100vh" }}>
      <motion.div
        layout
        initial={{ width: "0%" }}
        animate={{ width: `${progress}%` }}
        className="progress-bar"
      ></motion.div>
    </div>
  );
}
