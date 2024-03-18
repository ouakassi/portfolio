// import "./Project.css";

// import { useEffect, useLayoutEffect } from "react";
// import { useParams, useNavigate, useLocation } from "react-router-dom";
// import { useFetch } from "../../hooks/useFetch";
// import Markdown from "markdown-to-jsx";
// import { render } from "react-dom";

// import Section from "../../components/Section";
// import { useState } from "react";
// import MarkdownContainer from "../../components/MarkdownContainer";
// import URL from "../../api/URL";

// export default function Article() {
//   let { slug } = useParams();
//   let navigate = useNavigate();
//   let location = useLocation();

//   const url = URL + "/projects/" + slug;

//   const { data: project, isPending, error } = useFetch(url);

//   // change ARTICLE page theme

//   // useLayoutEffect(() => {
//   //   if (location.pathname === "/projects/" + slug) {
//   //     document.querySelector(".header").classList.add("project-header");
//   //     document.querySelector("body").classList.add("project-body");
//   //     document.querySelector(".floated-contact").style.display = "none";
//   //   } else {
//   //     document.querySelector(".header").classList.remove("project-header");
//   //     document.querySelector("body").classList.remove("project-body");
//   //     // document.querySelector(".floated-contact").style.display = "none";
//   //   }
//   // });

//   // redirect if there is an error

//   useEffect(() => {
//     if (error)
//       setTimeout(() => {
//         navigate("/projects");
//       }, 1000);
//   }, [error, navigate]);

//   return (
//     <div className="project__more">
//       {isPending && <div>Loading .....</div>}
//       {error && <div>{error} .....</div>}

//       {project && (
//         <Section
//           // className="project"
//           sectionTitle={project.title}
//           // sectionSubtitle={project.description}
//         >
//           <div className="markdown project__more-container">
//             <MarkdownContainer>{project.markdown}</MarkdownContainer>
//           </div>
//         </Section>
//       )}
//     </div>
//   );
// }
