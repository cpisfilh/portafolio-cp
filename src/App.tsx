import "./App.css";
import "react-tooltip/dist/react-tooltip.css";
import AppLayout from "./components/AppLayout";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    if (localStorage.getItem("portcp-theme") === null)
      localStorage.setItem("portcp-theme", "dark");
  }, []);
  return (
    <div className=" text-black relative dark:text-white font-serif w-[90vw] lg:h-[80vh] my-2 bg-slate-200 border-slate-200 dark:border-black border-8 dark:bg-black rounded-2xl">
      <AppLayout />
    </div>
  );
}

export default App;
