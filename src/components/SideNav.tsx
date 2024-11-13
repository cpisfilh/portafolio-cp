import { BicepsFlexed, Briefcase, MonitorCog, User } from "lucide-react";
import { Link, useLocation } from "wouter";
import { Tooltip } from "react-tooltip";
import { useThemeStore } from "../stores/ThemeStore";
const SideNav = () => {
  const [location] = useLocation();
  const {theme} = useThemeStore((state) => state);
  return (
    <div className="flex flex-col items-center gap-5 p-8">
      <Link
        href="/"
        className={`hover:scale-110 transition-all ${
          location === "/" ? "text-green-400" : ""
        }`}
        data-tooltip-id="my-tooltip"
        data-tooltip-content="Sobre mi"
        data-tooltip-place="top"
      >
        <User strokeWidth={2.25} />
      </Link>
      <Link
        href="/projects"
        className={`hover:scale-110 transition-all ${
          location === "/projects" ? "text-green-400" : ""
        }`}
        data-tooltip-id="my-tooltip"
        data-tooltip-content="Proyectos"
        data-tooltip-place="top"
      >
        <Briefcase strokeWidth={2.25} />
      </Link>
      <Link
        href="/skills"
        className={`hover:scale-110 transition-all ${
          location === "/skills" ? "text-green-400" : ""
        }`}
        data-tooltip-id="my-tooltip"
        data-tooltip-content="Habilidades"
        data-tooltip-place="top"
      >
        <BicepsFlexed strokeWidth={2.25} />
      </Link>
      <Link
        href="/experience"
        className={`hover:scale-110 transition-all ${
          location === "/experience" ? "text-green-400" : ""
        }`}
        data-tooltip-id="my-tooltip"
        data-tooltip-content="Experiencia"
        data-tooltip-place="top"
      >
        <MonitorCog strokeWidth={2.25} />
      </Link>
      <Tooltip id="my-tooltip" style={{ backgroundColor: theme==="dark" ? "white" : "black", color: theme==="dark" ? "black" : "white"}} />
    </div>
  );
};
export default SideNav;
