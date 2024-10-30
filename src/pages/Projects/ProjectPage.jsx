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

  useEffect(() => {
    if (projectMarkdown) {
      const headers = document.querySelectorAll(
        ".markdown h1 , .markdown h2 , .markdown h3 , .markdown h4 , .markdown h5 , .markdown h6"
      );
      setTocHeaders([...headers]);
    }
  }, [projectMarkdown]);

  const param = useParams();

  const projectSlug = param.slug;

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
  } = projects.find((project) => project.slug === projectSlug);

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

  // IntersectionObserver to highlight the active header
  useEffect(() => {
    if (projectMarkdown) {
      const headers = document.querySelectorAll(
        ".markdown h1, .markdown h2, .markdown h3, .markdown h4, .markdown h5, .markdown h6"
      );
      setTocHeaders([...headers]);

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveId(entry.target.id);
            }
          });
        },
        { rootMargin: "0px 0px -90% 0px" } // Trigger when headers are partially visible
      );

      headers.forEach((header) => observer.observe(header));

      return () => observer.disconnect();
    }
  }, [projectMarkdown]);

  // Handle click on header links to scroll to the corresponding section smoothly
  const handleLinkClick = useCallback((e, id) => {
    e.preventDefault(); // Prevent default jump-to-top behavior

    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to section
    }
  }, []);

  return (
    <div className="project__page  ">
      <div className="back"></div>
      <div className="back2"></div>

      <Section className="project" id="project" sectionTitle={title} />
      {/* {isLoading && <Loader />} */}
      {/* <div style={{ maxWidth: "4rem", position: "absolute", top: "1rem" }}>
        <Loader />
      </div> */}
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
          <header className="title">Table of Contents:</header>
          <div className="headers">
            <ul>
              {tocHeaders.map((header, index) => {
                return (
                  <li key={index}>
                    <Link
                      onClick={(e) => handleLinkClick(e, header.id)}
                      reloadDocument
                      to={`#${header.id}`}
                    >
                      {React.createElement(
                        header.tagName.toLowerCase(),
                        {
                          key: index,
                          className: `${
                            activeId === header.id ? "active" : ""
                          }`,
                        },
                        header.textContent
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
