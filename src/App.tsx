import "./App.css";
import 'react-tooltip/dist/react-tooltip.css'
import AppLayout from "./components/AppLayout";

function App() {
  return (
    <div className="text-black relative dark:text-white font-serif w-[90vw] my-2 bg-slate-200 border-slate-200 dark:border-black border-8 dark:bg-black rounded-2xl">
      <AppLayout />
    </div>
  );
}

export default App;
