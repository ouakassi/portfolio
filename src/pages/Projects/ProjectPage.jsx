import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

import projects from "../../data/projectsData";

import Section from "../../components/Section";
import "./ProjectPage.css";
import Loader from "../../components/animations/Loader";
import checkColor from "../../utils/checkColor";
import { AnimatePresence, motion, useInView } from "framer-motion";
import Button from "../../components/Buttons/Button";
import { BsGithub } from "react-icons/bs";
import { TbBrowserMaximize } from "react-icons/tb";
import {
  FaEye,
  FaLeftLong,
  FaUpRightFromSquare,
  FaUserGear,
} from "react-icons/fa6";
import { IoReturnUpBackOutline } from "react-icons/io5";
import { FaCode, FaClock, FaGlobe, FaLayerGroup } from "react-icons/fa";
import { BiLink, BiRightArrow } from "react-icons/bi";
import { FiArrowUpRight } from "react-icons/fi";
import projectsData from "../../data/projectsData";
import SyntaxHighlighter from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function ProjectPage() {
  const [projectMarkdown, setProjectMarkdown] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [tocHeaders, setTocHeaders] = useState([]);
  const [activeId, setActiveId] = useState(null);
  const [isBottom, setIsBottom] = useState(false);

  const btnsRef = useRef();

  const isHeaderBtnsInView = useInView(btnsRef);

  const { slug: projectSlug } = useParams();

  const {
    // id,
    title,
    slug,
    imgUrl,
    mobileImgUrl,
    color,
    description,
    timeline,
    projectImages,
    tags,
    projectType,
    projectNature,
    githubLink,
    demoLink,
    realLink,
  } = projects.find((project) => project.slug === projectSlug);

  const projectDetails = [
    {
      id: 1,
      icon: <FaLayerGroup />,
      title: "Type",
      info: projectType.split("-").join(" "),
    },
    {
      id: 2,
      icon: <FaCode />,
      title: "Nature",
      info: projectNature,
    },
    {
      id: 3,
      icon: <FaClock />,
      title: "Timeline",
      info: timeline,
    },

    {
      id: 4,
      icon: <FaEye />,
      title: "Role",
      info: "full-stack dev",
    },
  ];

  // function to fetch the markdown file content
  const fetchProjectMarkdown = useCallback(async () => {
    try {
      setIsLoading(true);
      const res = await fetch("/projects/markdown/" + projectSlug + ".md");
      const result = await res.text();
      setProjectMarkdown(result);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [projectSlug]);

  // Fetch the markdown file content
  useEffect(() => {
    fetchProjectMarkdown();
  }, [fetchProjectMarkdown]);

  // extract headers from markdown
  useEffect(() => {
    if (!projectMarkdown) return;

    const headers = document.querySelectorAll(
      ".markdown h1, .markdown h2, .markdown h3, .markdown h4, .markdown h5, .markdown h6"
    );
    setTocHeaders([...headers]);
  }, [projectMarkdown]);

  // IntersectionObserver to highlight the active header
  useEffect(() => {
    if (!tocHeaders.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "0% 0px -80% 0px", threshold: 0 }
    );

    tocHeaders.forEach((header) => observer.observe(header));

    return () => observer.disconnect();
  }, [tocHeaders]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Check if the user is near the bottom (5px margin)
      if (scrollTop + windowHeight >= documentHeight - 5) {
        setIsBottom(true);
        console.log("last");
      } else {
        setIsBottom(false);
        console.log("not last");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle click on header links to scroll to the corresponding section smoothly
  const handleLinkClick = useCallback((e, id) => {
    e.preventDefault(); // Prevent default jump-to-top behavior

    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to section
    }
  }, []);

  const tocContainerAnimation = {
    hidden: {
      x: "-10%",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,

      transition: {
        delay: 1,
      },
    },
  };

  return (
    <main className="project__page container ">
      <Link to="/projects" className="back__link">
        <FaLeftLong /> Back to Projects
      </Link>
      <header>
        <div ref={btnsRef} className="project-data-header">
          <h1 className="project__title">{title}</h1>
          <p>{description}</p>
          <ProjectBtns
            githubLink={githubLink}
            demoLink={demoLink}
            realLink={realLink}
          />
        </div>

        <div className="project-presentation">
          {projectImages?.map((img, index) => (
            <div
              key={index}
              className="img-container"
              style={{
                background: `radial-gradient(circle at center, ${color}, #000)`,
              }}
            >
              <img
                src={img}
                alt={img + index}
                className="project-presentation__image desktop-image"
              />
            </div>
          ))}
        </div>
        <div className="project-data">
          {projectDetails?.map((item) => (
            <div key={item.id} className="data-card">
              <span className="data-card__title ">
                {item.icon}
                {item.title}
              </span>
              <span className="data-card__info ">{item.info}</span>
            </div>
          ))}
        </div>
      </header>

      <div className="content">
        <ReactMarkdown
          className={"markdown"}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw, rehypeSlug]}
          components={{
            code({ className, children }) {
              const language = className?.replace("language-", "");
              return (
                <SyntaxHighlighter style={oneDark} language={language}>
                  {children}
                </SyntaxHighlighter>
              );
            },
            img: ({ node, ...props }) => <ImageContainer {...props} />,
          }}
        >
          {projectMarkdown}
        </ReactMarkdown>

        <nav className="content__table">
          <motion.div
            className="headers"
            variants={tocContainerAnimation}
            initial="hidden"
            animate="visible"
          >
            {tocHeaders?.map((header, index) => {
              return (
                <Link
                  onClick={(e) => handleLinkClick(e, header.id)}
                  to={`#${header.id}`}
                  key={index}
                >
                  {React.createElement(
                    header.tagName.toLowerCase(),
                    {
                      key: index,
                      className: `${activeId === header.id ? "active" : ""}`,
                    },
                    header.textContent
                  )}
                </Link>
              );
            })}
          </motion.div>
        </nav>
      </div>

      {/* <div className="lines__background"></div> */}
      {/* <div className="gradient__background"></div> */}
      <div className="more-projects">
        <div className="more-projects-header">
          <p>more projects</p>
          <Link to={"/projects/"}>
            see all <FiArrowUpRight />
          </Link>
        </div>
        <div className="mini-card-container">
          {projectsData
            .filter((data) => data.slug !== slug)
            ?.map((data) => {
              if (data.id > 3) return;

              return (
                <Link key={data.id} to={"/projects/" + data.slug}>
                  <div className="project-mini-card">
                    <div className="img-container">
                      <img src={data.imgUrl} alt={data.title} />
                    </div>
                    <div className="data">
                      <h3>{data.title}</h3>
                      <FaUpRightFromSquare />
                    </div>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
      <AnimatePresence>
        {!isHeaderBtnsInView && !isBottom && (
          <motion.div
            initial={{ y: -30, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 30, opacity: 0 }}
            className="project-btns-fixed"
          >
            <ProjectBtns
              githubLink={githubLink}
              demoLink={demoLink}
              realLink={realLink}
              withTitle={false}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

const ImageContainer = ({ src, alt }) => {
  return (
    <div className="image-container">
      <img loading="lazy" src={src} alt={alt} />
    </div>
  );
};

const ProjectBtns = ({ githubLink, demoLink, realLink, withTitle = true }) => (
  <div className="project-btns">
    {githubLink && (
      <Link target="_blank" to={githubLink}>
        <Button title={withTitle && "Github Code"} icon={<BsGithub />} />
      </Link>
    )}
    {demoLink && (
      <Link target="_blank" to={demoLink}>
        <Button title={withTitle && "live demo"} icon={<TbBrowserMaximize />} />
      </Link>
    )}
    {realLink && (
      <Link target="_blank" to={realLink}>
        <Button title={withTitle && "client website"} icon={<FaUserGear />} />
      </Link>
    )}
  </div>
);
