import { motion } from "framer-motion";
import "./Service.css";

export default function Service({ icon, title, text, bgColor }) {
  return (
    <div
      // style={{ borderTopColor: bgColor, borderTopWidth: "6px" }}
      className="service__box"
    >
      <header>
        <motion.img
          initial={{ scale: 0.2 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          src={icon}
          alt={title}
        />
        <div>
          <h2>{title}</h2>
          <motion.span
            initial={{ width: "10%" }}
            whileInView={{ width: "90%" }}
            transition={{ delay: 0.4, duration: 0.8 }}
            style={{ backgroundColor: bgColor }}
            className="hline"
          ></motion.span>
        </div>
      </header>
      <main>
        <pre className="htmlcode">&lt;p&gt;</pre>
        <div>
          <span className="vline"></span>
          <p>{text}</p>
        </div>
        <pre className="htmlcode">&lt;p&gt;</pre>
      </main>
    </div>
  );
}
