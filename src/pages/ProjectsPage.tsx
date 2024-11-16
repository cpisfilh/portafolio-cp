import CardProject from "../components/CardProject";

const ProjectsPage = () => {
  const projects = [
    {
      imagen: "/images/projects/projects1.png",
      nombre: "Piura Rent a Car",
      tecnologias: "React + Typescript & Tailwind",
      color: "red-500",
    },
    {
      imagen: "/images/projects/projects2.png",
      nombre: "Landing page HeoMoney",
      tecnologias: "NextJs + Typescript & Tailwind",
      color: "yellow-500",
    },
  ];

  return (
    <div>
      <h1 className="font-semibold text-center lg:text-left text-3xl mb-5">
        Proyectos
      </h1>
      <div className="flex flex-wrap gap-5 justify-center text-center">
        {projects.map((project, index) => (
          <CardProject key={index} data={project} bColor={project.color} />
        ))}
      </div>
    </div>
  );
};
export default ProjectsPage;
