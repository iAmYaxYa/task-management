import { nanoid } from "nanoid";
import { FaHome, FaRegStar, FaCheck, FaRegCalendarAlt } from "react-icons/fa";

const links = [
  { id: nanoid(), url: "/", text: "all tasks", icon: <FaHome /> },
  {
    id: nanoid(),
    url: "/important",
    text: "important",
    icon: <FaRegStar className="text-2xl" />,
  },
  {
    id: nanoid(),
    url: "/completed",
    text: "completed",
    icon: <FaCheck className="text-2xl" />,
  },
  {
    id: nanoid(),
    url: "/do-it-now",
    text: "do it now",
    icon: <FaRegCalendarAlt className="text-2xl" />,
  },
];

export const tasks = [
  {
    id: nanoid(),
    title: "testing with passwords",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora consectetur sint molestiae accusantium aliquam, non nam voluptas.",
    completed: false,
    important: true,
    date: new Date().toLocaleDateString(),
  },
  {
    id: nanoid(),
    title: "another task that makes object",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    completed: false,
    important: false,
    date: new Date().toLocaleDateString(),
  },
  {
    id: nanoid(),
    title: "home work tomorow",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora consectetur sint molestiae accusantium aliquam, non nam voluptas. Sit quas molestiae vel incidunt dicta, nisi odit, quam explicabo consectetur in nam!",
    completed: true,
    important: false,
    date: new Date().toLocaleDateString(),
  },
  {
    id: nanoid(),
    title: "create full stack projects",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
    completed: false,
    important: true,
    date: new Date().toLocaleDateString(),
  },
  {
    id: nanoid(),
    title: "learn react basics",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora consectetur sint molestiae accusantium aliquam, non nam voluptas. Sit quas molestiae vel incidunt dicta, nisi odit, quam explicabo consectetur in nam!",
    completed: true,
    important: true,
    date: new Date().toLocaleDateString(),
  },
];

export default links;
