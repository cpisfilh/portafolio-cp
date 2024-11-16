interface SkillsButtonProps {
    clase: string;
    texto: string;
  }

const SkillsButton = ({ clase, texto }: SkillsButtonProps) => {
  return (
    <button
      type="button"
      className={`bg-gradient-to-r ${clase} cursor-default hover:bg-gradient-to-l hover:scale-105 transition-all text-white font-semibold px-6 py-3 rounded-md`}
    >
      {texto}
    </button>
  );
};
export default SkillsButton;
