import { FaEdit, FaRegStar, FaStar, FaTrash } from "react-icons/fa";
import { useContextApp } from "../context/AppContext";
import { toast } from "react-toastify";

const Task = ({ task }) => {
  const { id, title, desc, date, completed, important } = task;
  const { deleteTask, edit } = useContextApp();

  const toggle = (element) => {
    toast.success("Successfully Updated.");
    edit({ id, element: element });
  };

  const remove = () => {
    toast.success("Successfully Deleted.");
    deleteTask(id);
  };
  return (
    <div className=" bg-slate-700 rounded-lg flex flex-col justify-between border relative border-slate-500 p-4">
      <div
        className="cursor-pointer absolute right-2 top-2"
        onClick={() => toggle("important")}
      >
        {important ? (
          <FaStar className="text-2xl text-yellow-500" title="important" />
        ) : (
          <FaRegStar
            className="text-2xl pointer-events-none text-slate-300"
            title="important"
          />
        )}
      </div>
      <h4 className="capitalize text-xl text-white">
        {title.substring(0, 25)}
      </h4>
      <p className="text-slate-300 text-lg mt-2">{desc.substring(0, 100)}</p>
      {/* buttons  */}
      <div className="mt-4">
        <p className="text-md mb-2 text-white">{date}</p>
        <div className="flex items-center justify-between">
          <button
            onClick={() => toggle("completed")}
            className={`rounded-3xl py-1 px-4 text-white cursor-pointer ${
              completed ? "bg-green-600" : "bg-red-500"
            }`}
          >
            {completed ? "Completed" : "InComplete"}
          </button>
          <div className="flex items-center gap-3">
            <FaEdit className="text-2xl text-gray-400 cursor-pointer" />
            <FaTrash
              className="text-2xl text-gray-400 cursor-pointer"
              onClick={remove}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
