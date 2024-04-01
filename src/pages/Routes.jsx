import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./Home/Home";
import Contact from "../components/contact/Contact";
import NotFound from "./Errors/NotFound";
import ProjectsPage from "./Projects/ProjectsPage";
import { AnimatePresence } from "framer-motion";
import PageAnimation from "../components/animations/PageAnimation";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/projects", element: <ProjectsPage /> },
  { path: "/contact", element: <Contact /> },
  { path: "*", element: <NotFound /> },
];

export default function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element=<PageAnimation>{route.element}</PageAnimation>
          />
        ))}
      </Routes>
    </AnimatePresence>
  );
}
