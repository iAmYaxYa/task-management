import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Important from "./components/Important";
import Completed from "./components/Completed";
import DoItNow from "./components/DoItNow";
import Modal from "./components/Modal";
import { useContextApp } from "./context/AppContext";
import { FaBars } from "react-icons/fa";
import { ToastContainer } from 'react-toastify';

function App() {
  const { isSidebar, openClose } = useContextApp();

  return (
    <div className="h-screen w-full p-5 flex gap-2 justify-between">
      {/* Sidebar */}
      <Sidebar />
      <Modal />
      {/* main  */}
      <main
        className={`${
          isSidebar ? "md:w-[80%] w-full" : "md:w-[80%] w-full"
        } max-h-screen relative overflow-hidden bg-slate-800 rounded-lg p-5`}
      >
        <button
          onClick={() => openClose("isSidebar")}
          className="md:hidden fixed top-10 left-0 border border-l-0 rounded-tl-none rounded-bl-none border-slate-700 bg-slate-800 p-2 rounded-md cursor-pointer"
        >
          <FaBars className="text-slate-300 text-xl" />
        </button>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/important" element={<Important />} />
          <Route path="/completed" element={<Completed />} />
          <Route path="/do-it-now" element={<DoItNow />} />
        </Routes>
      </main>
      <ToastContainer position="top-center"/>
    </div>
  );
}

export default App;
