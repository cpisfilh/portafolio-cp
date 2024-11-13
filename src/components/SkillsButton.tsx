interface SkillsButtonProps {
    clase: string;
    texto: string;
  }

const SkillsButton = ({ clase, texto }: SkillsButtonProps) => {
  return (
    <button
      type="button"
      className={`bg-gradient-to-r ${clase} text-white font-semibold px-6 py-3 rounded-md`}
    >
      {texto}
    </button>
  );
};
export default SkillsButton;
