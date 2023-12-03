import { FaPlus } from "react-icons/fa";
import { useContextApp } from "../context/AppContext";

const Title = ({ text }) => {
  const { openClose } = useContextApp();

  return (
    <div className="flex items-center justify-between">
      <div>
        <h4 className="text-2xl font-medium text-white">
          {text ?? "Default Title"}
        </h4>
        <div className="h-[3px] mt-2 w-8 rounded-md bg-green-400"></div>
      </div>
      <button
        onClick={() => openClose("isModal")}
        className="w-10 h-10 rounded-full border flex items-center justify-center border-slate-500 text-white bg-slate-700"
      >
        <FaPlus />
      </button>
    </div>
  );
};

export default Title;
