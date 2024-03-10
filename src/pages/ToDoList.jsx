import NavBar from "../components/NavBar";
import MainPage from "../components/MainPage";
import TaskCard from "../components/TaskCard";
import { useState } from "react";

const tasklist = [
  {
    task: "REACTJS",
    status: false,
    id: 0,
  },
  {
    task: "NodeJS",
    status: false,
    id: 1,
  },
  {
    task: "Java SE",
    status: false,
    id: 2,
  },
];

function ToDoList() {
  const [tasks, setTasks] = useState(tasklist);
  const [taskquerry, setTaskQuerry] = useState("");

  function addtolist(newtask) {
    if (newtask == "") {
      return;
    }
    const new_obj_task = {
      task: newtask,
      status: false,
    };
    // console.log(newtask);
    setTasks((tasks) => [...tasks, new_obj_task]);
    setTaskQuerry((querry) => (querry = ""));
  }
  return (
    <div className="h-screen w-screen">
      <NavBar />

      <MainPage>
        <div className="h-1/6 w-full p-2 flex align-middle justify-between bg-indigo-200 items-center gap-1">
          <input
            className=" h-2/4 w-10/12 rounded-full pl-4 outline-none"
            type="text"
            value={taskquerry}
            onChange={(e) => {
              setTaskQuerry(e.target.value);
            }}
          />
          <button
            className="h-2/4 w-2/12 rounded-full bg-indigo-700 text-slate-300 hover:bg-indigo-800"
            type="button"
            onClick={() => {
              addtolist(taskquerry);
            }}
          >
            + Add Task
          </button>
        </div>

        <div className="h-5/6 w-full p-2  bg-slate-200 flex flex-wrap gap-1">
          {tasks.map((task) => {
            return <TaskCard task={task} key={task.id} />;
          })}
        </div>
      </MainPage>
    </div>
  );
}

export default ToDoList;
