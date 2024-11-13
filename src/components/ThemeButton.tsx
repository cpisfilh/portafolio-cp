import { MoonStar, Sun } from "lucide-react";
import { useEffect } from "react";
import { useThemeStore } from "../stores/ThemeStore";

const ThemeButton = () => {
  const { theme } = useThemeStore((state) => state);
  const { toggleTheme } = useThemeStore((state) => state);

  const changeTheme = () => {
    toggleTheme();
  };

  useEffect(() => {
    if (theme == "dark") {
      document.querySelector("html")?.classList.add("dark");
    } else {
      document.querySelector("html")?.classList.remove("dark");
    }
  }, [theme]);
  return (
    <button className="p-2 rounded-full" onClick={changeTheme}>
      {theme === "light" ? (
        <Sun color="black" className="hover:w-8 h-8 transition-all" />
      ) : (
        <MoonStar color="white" className="hover:w-8 h-8 transition-all" />
      )}
    </button>
  );
};
export default ThemeButton;
