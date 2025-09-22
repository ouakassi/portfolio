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
import { motion } from "framer-motion";

export default function ProjectPage() {
  const [projectMarkdown, setProjectMarkdown] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [tocHeaders, setTocHeaders] = useState([]);
  const [activeId, setActiveId] = useState(null);

  const { slug: projectSlug } = useParams();

  const {
    title,
    // id,
    // slug,
    // imgUrl,
    // description,
    tags,
    // projectType,
    // websiteLink,
    // githubLink,
    createdAt,
    updatedAt,
  } = projects.find((project) => project.slug === projectSlug);

  const formattedDate = new Date(createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // function to fetch the markdown file content
  const fetchProjectMarkdown = useCallback(async () => {
    try {
      setIsLoading(true);
      const res = await fetch("/projects/" + projectSlug + ".md");
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
    <div className="project__page  ">
      <Section className="project" id="project" sectionTitle={title} />
      <span className="created">{`Created on ${formattedDate}`}</span>
      <div className="project__tags">
        {tags.map((tag, i) => {
          return checkColor(tag, i, "project__language");
        })}
      </div>
      <div className="content">
        <ReactMarkdown
          className={"markdown"}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw, rehypeSlug]}
        >
          {projectMarkdown}
        </ReactMarkdown>

        <nav className="content__table">
          <header className="title">On this Page:</header>
          <motion.div
            className="headers"
            variants={tocContainerAnimation}
            initial="hidden"
            animate="visible"
          >
            {tocHeaders.map((header, index) => {
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
      <div className="lines__background"></div>
      <div className="gradient__background"></div>
    </div>
  );
}
