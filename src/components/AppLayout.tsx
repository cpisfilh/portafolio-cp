import { FileUser, Github, Linkedin, Mail } from "lucide-react";
import ThemeButton from "./ThemeButton";

const AppLayout = () => {
  return (
    <div>
      <div className="text-right">
        <ThemeButton />
      </div>
      <div className="flex flex-col items-center gap-5">
        <img
          src="/images/perfilkremin.jpg"
          className="rounded-full border-8 mt-5"
          width={250}
          height={250}
          alt="cpisfilh"
        />
        <div className="mx-5 flex flex-col gap-4">
          <span className="text-2xl">Bienvenido, soy</span>
          <h1 className="font-bold text-4xl">CRISTHIAN PISFIL</h1>
          <p className="text-xl">
            Desarrollador web con más de 1 año de experiencia, mi objetivo es
            brindar a los usuarios una experiencia de navegación fluida y
            atractiva.
          </p>
        </div>
        <div className="flex gap-5">
          <a
            href="https://www.linkedin.com/in/cristhian-pisfil-hernandez-0b9a23247/"
            target="_blank"
          >
            <Linkedin />
          </a>
          <Mail />
          <a href="https://github.com/cpisfilh" target="_blank">
          <Github />
          </a>
          <FileUser />
        </div>
        <span>© Crishian Pisfil</span>
      </div>
    </div>
  );
};
export default AppLayout;
