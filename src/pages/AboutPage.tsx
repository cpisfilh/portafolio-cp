const AboutPage = () => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="font-semibold text-3xl text-center lg:text-left">Sobre mi</h1>
      <p className="text-xl">
        Desarrollador web con más de 1 año de experiencia, mi objetivo es
        brindar a los usuarios una experiencia de navegación fluida y atractiva,
        además de ser un desarrollador de software de calidad.
      </p>
      <p className="text-xl mt-5">
        Voy de la mano con las últimas tecnologías para crear soluciones, código
        limpio y eficiente, así que siempre estoy adquiriendo conocimiento
      </p>
      <div className="flex justify-center">
        <img src="/images/about.png" width={292} alt="about-cp" />
      </div>
    </div>
  );
};
export default AboutPage;
