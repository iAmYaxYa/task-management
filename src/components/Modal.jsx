import { FaPlus, FaTimes } from "react-icons/fa";
import { useContextApp } from "../context/AppContext";
import { useState } from "react";
import { toast } from "react-toastify";

const initialInputs = {
  title: "",
  desc: "",
  date: "",
  completed: false,
  important: false,
};

const Modal = () => {
  const { isModal, openClose, create } = useContextApp();
  const [inputs, setInputs] = useState(initialInputs);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputs?.title) {
      toast.error("title is required");
      return;
    }
    create(inputs);
    toast.success("Successfully Created");
    openClose("isModal");
    setInputs(initialInputs);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    var value = e.target.value;
    if (e.target.type == "checkbox") {
      value = e.target.checked;
    }
    setInputs({ ...inputs, [name]: value });
  };

  return (
    <div
      className={`bg-[rgba(0,0,0,0.5)] min-h-screen w-full flex items-center justify-center fixed top-0 left-0 ${
        isModal
          ? "block opacity-100 z-10 show-modal"
          : "-z-10 opacity-0 hidden hide-modal"
      }`}
    >
      <div className={`bg-slate-800 p-8 rounded-lg w-[400px] content`}>
        {/* modal header  */}
        <div className="flex items-center justify-between">
          <h4 className="text-white text-xl">Create a Task</h4>
          <FaTimes
            className="text-2xl text-white cursor-pointer"
            onClick={() => openClose("isModal")}
          />
        </div>
        {/* modal body  */}
        <div className="my-5">
          <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
            <div>
              <label className="text-lg text-white">Title</label>
              <input
                type="text"
                name="title"
                value={inputs.title}
                onChange={handleChange}
                className="bg-black p-3 mt-2 border-0 w-full h-10 rounded-md text-white placeholder:text-slate-400 outline-none"
                placeholder="Title"
              />
            </div>
            <div>
              <label className="text-lg text-white">Description</label>
              <textarea
                type="text"
                name="desc"
                value={inputs.desc}
                onChange={handleChange}
                className="bg-black border-0 p-3 mt-2 w-full h-20 rounded-md text-white placeholder:text-slate-400 outline-none"
                placeholder="Description"
              ></textarea>
            </div>
            <div>
              <label className="text-lg text-white">Date</label>
              <input
                type="date"
                value={inputs.date}
                name="date"
                onChange={handleChange}
                className="bg-black border-0 p-3 mt-2 w-full h-10 rounded-md text-white placeholder:text-slate-400 outline-none"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <label
                  className="text-lg text-white cursor-pointer"
                  htmlFor="completed"
                >
                  Completed
                </label>
                <input
                  type="checkbox"
                  name="completed"
                  onChange={handleChange}
                  value={inputs.completed}
                  className="bg-black border-0 h-10 cursor-pointer outline-none"
                  id="completed"
                />
              </div>
              <div className="flex items-center gap-2">
                <label
                  className="text-lg text-white cursor-pointer"
                  htmlFor="important"
                >
                  Important
                </label>
                <input
                  type="checkbox"
                  name="important"
                  onChange={handleChange}
                  value={inputs.important}
                  className="bg-black border-0 h-10 cursor-pointer outline-none"
                  id="important"
                />
              </div>
            </div>
            {/* modal footer  */}
            <div className="flex items-center justify-end">
              <button
                type="submit"
                className="h-10 px-8 text-white text-lg gap-2 flex items-center outline-none  rounded-md bg-indigo-500 cursor-pointer border-0 hover:bg-indigo-400 duration-300"
              >
                <FaPlus /> Create Task
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
