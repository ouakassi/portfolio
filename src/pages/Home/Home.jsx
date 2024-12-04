import Hero from "../../components/hero/Hero";
import LatestProjects from "../../components/projects/LatestProjects";
import Contact from "../../components/contact/Contact";
import Experience from "../../components/experience/Experience";
import About from "../../components/About/About";
import Services from "../../components/Services/Services";
import "./Home.css";
import { motion } from "framer-motion";
import ProgressBar from "../../components/animations/ProgressBar";

const Home = () => {
  return (
    <main className="home">
      <Hero />
      <LatestProjects />
      <Services />
      {/* <About /> */}
      {/* <Experience /> */}
      <Contact />
      {/* <ProgressBar /> */}
    </main>
  );
};

export default Home;
<>
  <div className="home__bg">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 800"
      opacity="1"
      // width="800"
      // height="800"
      className="home__bg-svg"
    >
      <g strokeWidth="0.1" stroke="var(--main-color)" fill="none">
        {/* Squares */}
        {[...Array(15)].map((_, row) =>
          [...Array(30)].map((_, col) => (
            <motion.rect
              // initial={{ x: 0, y: 0 }}
              // animate={{ x: col * 30, y: row * 30 }}
              // transition={{ duration: 0.5, delay: 0.2 }}
              key={`${row}-${col}`}
              width="30"
              height="30"
              // fill="url(#hero)"
              x={col * 30}
              y={row * 30}
              animate={{
                // scale: [1, 4, 0.6, 0.5],
                opacity: [0, 1, 0.5, 0, 0.2],
                // fill: ["#ffffff20", "#ffffff80", "#ffffff20"]
              }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                delay: (row + col) * 0.05, // Stagger animation based on position
              }}
            />
          ))
        )}
      </g>
    </svg>
    <div className="home__bg-grain"></div>
    {/* <div className="home__bg-gradient"></div> */}
  </div>
  <div className="home__bgg">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 800"
      opacity="1"
      // width="800"
      // height="800"
      className="home__bg-svg"
    >
      <g strokeWidth="0.1" stroke="var(--second-color)" fill="none">
        {/* Squares */}
        {[...Array(10)].map((_, row) =>
          [...Array(20)].map((_, col) => (
            <motion.rect
              // initial={{ x: 0, y: 0 }}
              // animate={{ x: col * 30, y: row * 30 }}
              // transition={{ duration: 0.5, delay: 0.2 }}
              key={`${row}-${col}`}
              width="200"
              height="200"
              // fill="url(#hero)"
              x={col * 200}
              y={row * 200}
              animate={{
                // scale: [1, 4, 0.6, 0.5],
                opacity: [0, 1, 0.5, 0, 0.2],
                // fill: ["#ffffff20", "#ffffff80", "#ffffff20"]
              }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                delay: (row + col) * 0.1, // Stagger animation based on position
              }}
            />
          ))
        )}
      </g>
    </svg>
    <div className="home__bg-grain"></div>
    {/* <div className="home__bg-gradient"></div> */}
  </div>
  ;
</>;
