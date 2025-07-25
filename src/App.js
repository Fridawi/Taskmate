import { useEffect, useState } from "react";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import ShowTasks from "./components/ShowTask";
import "./App.css";

function App() {
  const [taskList, setTaskList] = useState(
    localStorage.getItem("taskList")
      ? JSON.parse(localStorage.getItem("taskList"))
      : []
  );

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }, [taskList]);

  const [task, setTask] = useState({});
  return (
    <div className="App">
      <div className="container">
        <Header />
        <AddTask
          task={task}
          setTask={setTask}
          taskList={taskList}
          setTaskList={setTaskList}
        />
        <ShowTasks
          task={task}
          setTask={setTask}
          taskList={taskList}
          setTaskList={setTaskList}
        />
      </div>
    </div>
  );
}

export default App;
