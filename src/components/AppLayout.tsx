import { BicepsFlexed, Briefcase, MonitorCog, User } from "lucide-react";
import SideCard from "./SideCard";
import ThemeButton from "./ThemeButton";

const AppLayout = () => {
  return (
    <div className="flex flex-col xl:flex-row p-2">
      <div className="w-full xl:w-4/12 rounded-lg shadow-inner shadow-slate-500 dark:shadow-white">
        <SideCard />
      </div>
      <div className="w-full xl:w-7/12 hidden xl:block">
        <div className="p-8">
          <div className="mx-5 flex flex-col gap-2">
            <h1 className="font-semibold text-3xl">Sobre mi</h1>
            <p className="text-xl">
              Desarrollador web con más de 1 año de experiencia, mi objetivo es
              brindar a los usuarios una experiencia de navegación fluida y
              atractiva, además de ser un desarrollador de software de calidad.
            </p>
            <p className="text-xl mt-5">
              Voy de la mano con las últimas tecnologías para crear soluciones, código
              limpio y eficiente, así que siempre estoy adquiriendo conocimiento
            </p>
          </div>
          <div className="flex justify-center">
          <img src="/images/about.png" width={300} alt="about-cp"/>
          </div>
        </div>
      </div>
      <div className="w-full xl:w-1/12 hidden xl:block ">
        <div className="flex flex-col items-center gap-5 p-8">
          <User strokeWidth={2.25} className="hover:scale-110 transition-all text-green-400" />
          <Briefcase
            strokeWidth={2.25}
            className="hover:scale-110 transition-all"
          />
          <BicepsFlexed
            strokeWidth={2.25}
            className="hover:scale-110 transition-all"
          />
          <MonitorCog
            strokeWidth={2.25}
            className="hover:scale-110 transition-all"
          />
        </div>
      </div>
      <div className="absolute top-3 left-3">
        <ThemeButton />
      </div>
    </div>
  );
};
export default AppLayout;
