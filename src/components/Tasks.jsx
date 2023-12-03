import { FaPlus } from "react-icons/fa";
import Task from "./Task";
import { useContextApp } from "../context/AppContext";

const Tasks = ({ tasks }) => {
  const { openClose } = useContextApp();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-4 my-4">
      {tasks?.map((task) => {
        return <Task key={task.id} task={task} />;
      })}
      <div
        onClick={() => openClose("isModal")}
        className="cursor-pointer min-h-[200px] rounded-lg border relative flex items-center justify-center border-dashed border-slate-500 text-white bg-slate-800 hover:bg-slate-700 duration-300 p-4"
      >
        {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium repudiandae cum voluptates tenetur expedita sequi mollitia suscipit officiis commodi qui animi, ut veniam voluptatum tempora assumenda! Fuga quod facere vel. */}
        <button
          type="button"
          className="border-0 outline-none flex items-center gap-2 text-lg"
        >
          <FaPlus className="text-2xl" />
          Add New Task
        </button>
      </div>
    </div>
  );
};

export default Tasks;
