import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./Home/Home";
import Contact from "../components/contact/Contact";
import NotFound from "./Errors/NotFound";
import ProjectsPage from "./Projects/ProjectsPage";
import { AnimatePresence } from "framer-motion";
import PageAnimation from "../components/animations/PageAnimation";
import ProjectPage from "./Projects/ProjectPage";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/projects", element: <ProjectsPage /> },
  { path: "projects/:slug", element: <ProjectPage /> },
  { path: "/contact", element: <Contact /> },
  { path: "*", element: <NotFound /> },
];

export default function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      {/* <div style={{ marginTop: "4rem" }}> */}
      <div>
        <Routes location={location} key={location.pathname}>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              // element=<PageAnimation>{route.element}</PageAnimation>
              element=<div>{route.element}</div>
            />
          ))}
        </Routes>
      </div>
    </AnimatePresence>
  );
}
