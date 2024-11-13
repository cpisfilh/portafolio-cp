import { Router, useLocation } from "wouter";
import { AnimatePresence, motion } from "framer-motion";
import AboutPage from "../pages/AboutPage";
import SideCard from "./SideCard";
import SideNav from "./SideNav";
import ThemeButton from "./ThemeButton";
import ProjectsPage from "../pages/ProjectsPage";
import ExperiencePage from "../pages/ExperiencePage";
import SkillsPage from "../pages/SkillsPage";

// Configuración de la animación mejorada
const AnimationSettings = {
  transition: { duration: 0.5},
  initial: { opacity: 0 },
  animate: { opacity: 1 }, 
  exit: { opacity: 0 },   
};

const AppLayout = () => {
  return (
    <div className="flex flex-col lg:flex-row p-2">
      <div className="w-full lg:w-4/12 rounded-lg shadow-inner shadow-slate-500 dark:shadow-white">
        <SideCard />
      </div>
      <div className="w-full lg:w-7/12 hidden lg:block">
        <div className="p-8">
          <Router>
            <AnimatePresence mode="wait">
              <RouteWrapper />
            </AnimatePresence>
          </Router>
        </div>
      </div>
      <div className="w-full lg:w-1/12 hidden lg:block">
        <SideNav />
      </div>
      <div className="absolute top-3 left-3">
        <ThemeButton />
      </div>
    </div>
  );
};

// Componente para envolver cada ruta
const RouteWrapper = () => {
  const [location] = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location}
        initial={AnimationSettings.initial}
        animate={AnimationSettings.animate}
        exit={AnimationSettings.exit}
        transition={AnimationSettings.transition}
      >
        {location === "/" && <AboutPage />}
        {location === "/projects" && <ProjectsPage />}
        {location === "/experience" && <ExperiencePage />}
        {location === "/skills" && <SkillsPage />}
      </motion.div>
    </AnimatePresence>
  );
};

export default AppLayout;
