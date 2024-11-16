import CardExperience from "../components/CardExperience";

const ExperiencePage = () => {
  const experience= [
    {
      empresa: "Axioma Soluciones",
      roles: [
        {
          puesto: "Frontend Developer",
          fecha: "Marzo 2023 - Actualidad",
          descripcion: "Desarrollo frontend de aplicaciones web.",
          tecnologias: "Html, Css, Javascript, React, Typescript, Next.js",
        },
        {
          puesto: "Apoyo Sap Hybris Commerce",
          fecha: "Abril 2024 - Actualidad",
          descripcion:
            "Desarrollo custom y soporte a clientes en Sap Hybris Commerce.",
          tecnologias: "Java, Spring, Sap Hybris Commerce",
        },
        {
          puesto: "Apoyo Sap CPI",
          fecha: "julio 2023 - Diciembre 2023",
          descripcion:
            " Desarrollo y documentación de integraciones en SAP CPI.",
          tecnologias: "Sap CPI",
        },
      ],
    },
  ];
  return (
    <div>
      <h1 className="font-semibold text-center lg:text-left text-3xl mb-5">
        Experiencia
      </h1>
      {experience.map((item, index) => (
        <CardExperience key={index} data={item} />
      ))}
    </div>
  );
};
export default ExperiencePage;
