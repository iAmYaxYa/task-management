import { useContextApp } from "../context/AppContext";
import Tasks from "./Tasks";
import Title from "./Title";

const Home = () => {
  const { tasks } = useContextApp();
  const orderTasks = tasks.slice().sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="h-full overflow-y-auto">
      {/* title  */}
      <Title text="All Tasks" />
      {/* all tasks */}
      <Tasks tasks={orderTasks} />
    </div>
  );
};

export default Home;
