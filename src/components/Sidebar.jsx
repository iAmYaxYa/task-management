import logo from "/vite.svg";
import { FaArrowLeft, FaSignOutAlt } from "react-icons/fa";
import links from "../data";
import { Link, useLocation } from "react-router-dom";
import { useContextApp } from "../context/AppContext";

const Sidebar = () => {
  const { isSidebar, openClose } = useContextApp();
  const url = useLocation();

  return (
    <div
      className={`md:w-[15rem] absolute left-0 top-0 bg-slate-800 rounded-lg py-3 flex flex-col justify-between duration-300 ease-in-out ${
        isSidebar
          ? "translate-x-0 opacity-100 pointer-events-auto h-screen md:h-auto z-10 w-[20rem]"
          : "-translate-x-full opacity-0 pointer-events-none"
      } md:static md:translate-x-0 md:opacity-100 md:pointer-events-auto`}
    >
      {/* menu toggle  */}
      <button
        onClick={() => openClose("isSidebar")}
        className="md:hidden absolute top-10 right-0 border border-r-0 rounded-tr-none rounded-br-none border-slate-700 bg-slate-800 p-2 rounded-md cursor-pointer"
      >
        <FaArrowLeft className="text-slate-300 text-xl " />
      </button>
      {/* profile  */}
      <div className="flex items-center gap-2 px-6">
        <img
          src={logo}
          className="w-24 h-24 rounded-full cursor-pointer"
          alt=""
        />
        <div className="">
          <h4 className="text-white text-xl font-medium">YahYa.</h4>
          <h6 className="text-slate-300">@iamyaxya</h6>
        </div>
      </div>
      {/* links  */}
      <ul className="">
        {links?.map((link) => {
          return (
            <li key={link.id}>
              <Link
                to={link.url}
                className={`flex items-center gap-3 px-6 py-2 text-xl relative capitalize text-slate-400 hover:bg-slate-900 hover:text-white duration-300 ${
                  url.pathname === link.url &&
                  "bg-slate-700 after:absolute after:h-full after:w-[2px] after:bg-green-400 after:top-0 after:right-0 text-white"
                }`}
              >
                {link.icon}
                {link.text}
              </Link>
            </li>
          );
        })}
      </ul>
      {/* log out */}
      <button
        type="button"
        className="flex cursor-pointer items-center gap-3 px-6 py-2 text-xl capitalize text-slate-400 hover:bg-slate-700 hover:text-white duration-300"
      >
        <FaSignOutAlt className="text-2xl" />
        sign out
      </button>
    </div>
  );
};

export default Sidebar;
