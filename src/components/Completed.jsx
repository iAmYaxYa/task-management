import { useContextApp } from "../context/AppContext";
import Tasks from "./Tasks";
import Title from "./Title";

const Completed = () => {
  const { tasks } = useContextApp();
  const completedTasks = tasks.filter((task) => task.completed === true);
  const orderTasks = completedTasks
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));
  return (
    <div className="h-full overflow-y-auto">
      {/* title  */}
      <Title text="Completed" />
      {/* all tasks */}
      <Tasks tasks={orderTasks} />
    </div>
  );
};

export default Completed;
