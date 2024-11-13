import "./App.css";
import AppLayout from "./components/AppLayout";

function App() {
  return (
    <div className="text-black dark:text-white font-serif w-[90vw] h-[90vh] bg-slate-200 border-slate-200 border-8 dark:border-8 dark:bg-black rounded-2xl p-2">
      <AppLayout />
    </div>
  );
}

export default App;
