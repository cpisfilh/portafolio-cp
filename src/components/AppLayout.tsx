import { Redirect, Route, Router } from "wouter";
import AboutPage from "../pages/AboutPage";
import SideCard from "./SideCard";
import SideNav from "./SideNav";
import ThemeButton from "./ThemeButton";
import ProjectsPage from "../pages/ProjectsPage";
import ExperiencePage from "../pages/ExperiencePage";
import SkillsPage from "../pages/SkillsPage";

const AppLayout = () => {
  return (
    <div className="flex flex-col xl:flex-row p-2">
      <div className="w-full xl:w-4/12 rounded-lg shadow-inner shadow-slate-500 dark:shadow-white">
        <SideCard />
      </div>
      <div className="w-full xl:w-7/12 hidden xl:block">
        <div className="p-8">
          <Router>
            <Route path="/" component={AboutPage} />
            <Route path="/projects" component={ProjectsPage} />
            <Route path="/experience" component={ExperiencePage} />
            <Route path="/skills" component={SkillsPage} />
            <Redirect to="/" />
          </Router>
        </div>
      </div>
      <div className="w-full xl:w-1/12 hidden xl:block ">
        <SideNav />
      </div>
      <div className="absolute top-3 left-3">
        <ThemeButton />
      </div>
    </div>
  );
};
export default AppLayout;
