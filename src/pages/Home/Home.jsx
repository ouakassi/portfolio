import Hero from "../../components/hero/Hero";
import LatestProjects from "../../components/projects/LatestProjects";
import Contact from "../../components/contact/Contact";
import Experience from "../../components/experience/Experience";
import About from "../../components/About/About";
import Services from "../../components/Services/Services";

const Home = () => {
  return (
    <>
      <Hero />
      <LatestProjects />
      <Services />
      <About />
      <Experience />
      <Contact />
    </>
  );
};

export default Home;
