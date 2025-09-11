import Hero from "../../components/hero/Hero";
import LatestProjects from "../../components/projects/LatestProjects";
import Contact from "../../components/contact/Contact";
import Experience from "../../components/experience/Experience";
import About from "../../components/About/About";
import Services from "../../components/Services/Services";
import "./Home.css";
import { motion, useScroll, useTransform } from "framer-motion";
import ProgressBar from "../../components/animations/ProgressBar";
import TechStackBanner from "../../components/Services/TechStackBanner";
import Section from "../../components/Section";
import { FaServicestack } from "react-icons/fa6";
import { MouseProvider } from "../../hooks/useMouse";
import {
  GlowCard,
  GlowCardGrid,
  MouseDebugger,
} from "../../components/GlowingCard";
import { useRef } from "react";
import AnimatedText from "../../components/animations/AnimatedText";

const Home = () => {
  const iconRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: iconRef,
    offset: ["start start", "end end"],
  });

  const Y = useTransform(scrollYProgress, [0, 1], [-30, 100]);

  const cardSetting = {
    baseHue: 200,
    spread: 0,
    saturation: 300,
    lightness: 20,
    size: 300,
    radius: 20,
    border: 3,
    bgSpotOpacity: 0.1,
    outerGlow: false,
  };
  return (
    <main className="home container ">
      {/* <Hero /> */}
      <LatestProjects />

      <Section
        sectionTitle="services"
        icon={<FaServicestack />}
        sectionSubtitle="what i offer to you as client"
      >
        <MouseProvider>
          <div className="home__quotes">
            <GlowCard className="ss one" {...cardSetting}>
              <div ref={iconRef} className="content-container">
                <h1>Frontend Excellence, Backend Mastery</h1>
                <p>
                  <AnimatedText
                    speed={0.02}
                    text="I design sleek, responsive interfaces and build powerful
                      server-side systems—delivering complete, end-to-end web
                      solutions with efficiency and scalability."
                  />
                </p>
                <div className="img__container ">
                  <motion.img
                    style={{ y: Y }}
                    src="./front-icon.png"
                    alt="frontend icon"
                  />
                </div>
              </div>
            </GlowCard>

            <GlowCard className="ss two" {...cardSetting} baseHue={700}>
              <div className="content-container">
                <h1>From UI to API, I’ve Got It Covered</h1>
                <p>
                  <AnimatedText
                    speed={0.02}
                    text="With expertise in frontend frameworks, backend
                      architectures, and databases, I create seamless
                      applications that connect performance with usability."
                  />
                </p>

                <div className="img__container ">
                  <motion.img
                    style={{ y: Y }}
                    src="./ui-icon.png"
                    alt="ui icon"
                  />
                </div>
              </div>
            </GlowCard>

            <GlowCard className="ss three" {...cardSetting} baseHue={840}>
              <div className="content-container">
                <h1>Scaling Ideas into Real-World Products</h1>
                <p>
                  <AnimatedText
                    speed={0.02}
                    text="Whether building interactive user interfaces or
                      engineering secure, high-performance backends, I turn
                      concepts into impactful digital products."
                  />
                </p>

                <div className="img__container ">
                  <motion.img
                    style={{ y: Y }}
                    src="./back-icon.png"
                    alt="backend icon"
                  />
                </div>
              </div>
            </GlowCard>

            {/* Optional fourth card */}
            <GlowCard className="ss four" {...cardSetting} baseHue={400}>
              <div className="content-container">
                <h1>Full-Stack Development, One Skillset</h1>
                <p>
                  <AnimatedText
                    speed={0.02}
                    text="I integrate frontend, backend, and cloud technologies to
                      deliver complete web applications—scalable, maintainable,
                      and built for long-term growth."
                  />
                </p>

                <div className="img__container ">
                  <motion.img
                    style={{ y: Y }}
                    src="./cloud-icon.png"
                    alt="cloud icon"
                  />
                </div>
              </div>
            </GlowCard>
          </div>
        </MouseProvider>
      </Section>
      <TechStackBanner />

      {/* <div>
        <h1>More than a decade building for the web</h1>
        <p>
          Design is at the heart of everything I do, I believe that a close
          relationship between visual design, UX and front-end engineering
          expertise leads to a better customer experience within digital
          products. As a specialist in modular design systems and component
          libraries, I work to bridge the gap between design and engineering
          disciplines and am a catalyst for fast, iterative processes within
          agile product teams. My technical experience spans a wealth of
          front-end technologies ranging from modern SPA frameworks to run-time
          performance profiling, testing and accessibility.
        </p>
      </div> */}
      {/* <Services /> */}

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
