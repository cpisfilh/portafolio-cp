import { MoonStar, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const ThemeButton = () => {
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    if (theme == "dark") {
      document.querySelector("html")?.classList.add("dark");
    } else {
      document.querySelector("html")?.classList.remove("dark");
    }
  }, [theme]);
  return (
    <button
      className="p-2 bg-slate-500 rounded-full hover:bg-slate-600"
      onClick={changeTheme}
    >
      {theme === "light" ? <Sun color="white" /> : <MoonStar color="white" />}
    </button>
  );
};
export default ThemeButton;
