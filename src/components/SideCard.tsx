import { FileUser, Github, Linkedin, Mail } from "lucide-react";
const SideCard = () => {
  return (
    <div className="flex flex-col items-center gap-5">
      <img
        src="/images/perfilkremin.jpg"
        className="rounded-full border-8 border-black border-double dark:border-white mt-5"
        width={300}
        height={300}
        alt="cpisfilh"
      />
      <div className="mx-5 flex flex-col gap-2 text-center">
      <span className="text-2xl">Bienvenido, soy</span>
      <h1 className="font-bold text-4xl">CRISTHIAN PISFIL</h1>
      </div>
      <div className="flex gap-5">
        <a
          href="https://www.linkedin.com/in/cristhian-pisfil-hernandez-0b9a23247/"
          target="_blank"
          className="hover:scale-110 transition-all"
        >
          <Linkedin />
        </a>
        <a
          href="mailto:cpisfilhernandez@gmail.com"
          target="_blank"
          className="hover:scale-110 transition-all"
        >
          <Mail />
        </a>
        <a
          href="https://github.com/cpisfilh"
          target="_blank"
          className="hover:scale-110 transition-all"
        >
          <Github />
        </a>
        <a
          href="https://github.com/cpisfilh/cv"
          target="_blank"
          className="hover:scale-110 transition-all"
        >
          <FileUser />
        </a>
      </div>
      <span className="opacity-50">© Crishian Pisfil</span>
    </div>
  );
};
export default SideCard;
