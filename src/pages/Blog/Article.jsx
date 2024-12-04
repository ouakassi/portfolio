// import "./Article.css";
// import { useEffect, useLayoutEffect } from "react";
// import { useParams, useNavigate, useLocation } from "react-router-dom";
// import { useFetch } from "../../hooks/useFetch";

// import Section from "../../components/Section";
// import URL from "../../api/URL";

// export default function Article() {
//   let { slug } = useParams();
//   let navigate = useNavigate();
//   let location = useLocation();

//   const url = URL + "/articles/" + slug;

//   const { data: article, isPending, error } = useFetch(url);

//   // change ARTICLE page theme

//   useLayoutEffect(() => {
//     const locationPathName = "/blog/" + slug;

//     console.log(location.pathname);

//     if (location.pathname !== locationPathName) {
//       document.querySelector(".header").classList.add("blog-header");
//       document.querySelector("body").classList.add("blog-body");
//       document.querySelector(".floated-contact").style.display = "none";
//     } else {
//       document.querySelector(".header").classList.remove(".blog-header");
//       document.querySelector("body").classList.remove(".blog-body");
//     }
//   });

//   // redirect if there is an error

//   useEffect(() => {
//     if (error)
//       setTimeout(() => {
//         navigate("/blog");
//       }, 1000);
//   }, [error, navigate]);

//   return (
//     <div className="article-ds">
//       {isPending && <div>Loading .....</div>}
//       {error && <div>{error} .....</div>}

//       {article && (
//         <Section
//           className="blog"
//           id="blog"
//           sectionTitle={article.title}
//           sectionSubtitle={`${article.publishedDate.split("T")[0]} ${
//             article.readTime
//           } min `}
//         >
//           <div>{article.description}</div>
//         </Section>
//       )}
//     </div>
//   );
// }
