//zustand para tema oscuro
import { create } from "zustand";

interface ThemeState {
  theme: string;
  toggleTheme: () => void;
}
const getTheme = () => localStorage.getItem("portcp-theme");

export const useThemeStore = create<ThemeState>((set) => ({
  theme: getTheme() || "light",
  toggleTheme: () =>{
    set((state) => ({ theme: state.theme === "light" ? "dark" : "light" }));
    localStorage.setItem("portcp-theme", getTheme() === "light" ? "dark" : "light");
  }
    
}));
