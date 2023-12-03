import { useContextApp } from "../context/AppContext";
import Tasks from "./Tasks";
import Title from "./Title";

const Important = () => {
  const { tasks } = useContextApp();
  const importantTasks = tasks.filter((task) => task.important === true);
  const orderTasks = importantTasks
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));
  return (
    <div className="h-full overflow-y-auto">
      {/* title  */}
      <Title text="Important" />
      {/* all tasks */}
      <Tasks tasks={orderTasks} />
    </div>
  );
};

export default Important;
