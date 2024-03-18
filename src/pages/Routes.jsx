import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./Home/Home";
import Contact from "../components/contact/Contact";
import NotFound from "./Errors/NotFound";
import ProjectsPage from "./Projects/ProjectsPage";
import { AnimatePresence } from "framer-motion";

export default function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}
