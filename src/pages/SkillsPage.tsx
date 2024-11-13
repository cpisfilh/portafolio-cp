import SkillsButton from "../components/SkillsButton";

const SkillsPage = () => {
  return (
    <div>
      <h1 className="font-semibold text-center lg:text-left text-3xl">
        Habilidades
      </h1>
      <div className="flex flex-col lg:flex-wrap gap-5 mt-5">
        <SkillsButton clase="from-orange-300 to-orange-600" texto="HTML" />
        <SkillsButton clase="from-blue-400 to-blue-600" texto="CSS" />
        <SkillsButton
          clase="from-yellow-300 to-yellow-400"
          texto="JAVASCRIPT"
        />
        <SkillsButton clase="from-blue-400 to-blue-600" texto="TYPESCRIPT" />
        <SkillsButton clase="from-cyan-400 to-cyan-500" texto="REACT" />
        <SkillsButton
          clase="from-green-400 to-green-500 "
          texto="Node + Express"
        />
        <SkillsButton
          clase="from-violet-400 to-cyan-500"
          texto="Bootstrap & Tailwind"
        />
      </div>
    </div>
  );
};
export default SkillsPage;
