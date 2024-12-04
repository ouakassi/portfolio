import { Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import PageAnimation from "../components/animations/PageAnimation";
import ProgressBar from "../components/animations/ProgressBar";

const HomePage = lazy(() => import("./Home/Home"));
const ProjectsPage = lazy(() => import("./Projects/ProjectsPage"));
const AboutPage = lazy(() => import("..//pages/AboutPage"));
const ContactPage = lazy(() => import("../pages/ContactPage"));
const ProjectPage = lazy(() => import("./Projects/ProjectPage"));
const NotFoundPage = lazy(() => import("./Errors/NotFound"));

const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/projects", element: <ProjectsPage /> },
  { path: "projects/:slug", element: <ProjectPage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/contact", element: <ContactPage /> },
  { path: "*", element: <NotFoundPage /> },
];

export default function AnimatedRoutes() {
  const [progress, setProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    // setProgress(location.pathname.split("/").length * 50);

    setProgress(100);
  }, [location.pathname]);

  return (
    <>
      <Suspense fallback={<ProgressBar progress={progress} />}>
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            {routes.map((route) => (
              <Route
                key={location.pathname}
                path={route.path}
                element=<PageAnimation>{route.element}</PageAnimation>
                // element=<main style={{ minHeight: "80vh" }}>
                //   {route.element}
                // </main>
              />
            ))}
          </Routes>
        </AnimatePresence>
      </Suspense>
    </>
  );
}
