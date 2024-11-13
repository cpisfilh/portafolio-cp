import { BicepsFlexed, Briefcase, MonitorCog, User } from "lucide-react";
import { Link, useLocation } from "wouter";
const SideNav = () => {
  const [location] = useLocation();
  return (
    <div className="flex flex-col items-center gap-5 p-8">
      <Link
        to="/"
        className={`hover:scale-110 transition-all ${
          location === "/" ? "text-green-400" : ""
        }`}
      >
        <User strokeWidth={2.25} />
      </Link>
      <Link
        to="/projects"
        className={`hover:scale-110 transition-all ${
          location === "/projects" ? "text-green-400" : ""
        }`}
      >
        <Briefcase strokeWidth={2.25} />
      </Link>
      <Link
        to="/skills"
        className={`hover:scale-110 transition-all ${
          location === "/skills" ? "text-green-400" : ""
        }`}
      >
        <BicepsFlexed strokeWidth={2.25} />
      </Link>
      <Link
        to="/experience"
        className={`hover:scale-110 transition-all ${
          location === "/experience" ? "text-green-400" : ""
        }`}
      >
        <MonitorCog strokeWidth={2.25} />
      </Link>
    </div>
  );
};
export default SideNav;
