import IndicatorPing from "./IndicatorPing";

export interface ExperienceModel {
  empresa: string;
  roles: {
    puesto: string;
    fecha: string;
    descripcion: string;
    tecnologias: string;
  }[];
}
const CardExperience = ({ data }: { data: ExperienceModel }) => {
  return (
    <div className="flex flex-col gap-1 border-2 border-black dark:border-white  p-10 shadow-inner shadow-slate-500 rounded-2xl">
      <h1 className="font-extrabold text-xl italic">{data.empresa} </h1>
      <div className="flex flex-col gap-5">
        {data.roles.map((role, index) => (
          <div key={index} className="flex flex-col gap-1">
            <div className="flex items-center justify-between sm:justify-start gap-2">
              <h1 className="font-semibold">{role.puesto}</h1>{" "}
              {role.fecha.includes("Actualidad") && <IndicatorPing />}
            </div>
            <span className="text-xs text-green-500 dark:text-green-400">
              {role.fecha}
            </span>
            <p className="p-0">{role.descripcion}</p>
            <div>Stack: {role.tecnologias}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CardExperience;
