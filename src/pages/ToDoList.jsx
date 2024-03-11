import NavBar from "../components/NavBar";
import MainPage from "../components/MainPage";
import TaskCard from "../components/TaskCard";
import { useReducer, useState } from "react";

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
const initalState = [];

function reducer(state, action) {
  switch (action.type) {
    case "add":
      let new_obj = {
        task: action.payload,
        status: false,
        id: state.length,
      };
      return [...state, new_obj];
    case "delete":
      return state.filter((task) => (task.id !== action.payload ? task : null));
    case "status":
      return state.map((task) =>
        task.id === action.payload ? { ...task, status: !task.status } : task
      );
  }
}

function ToDoList() {
  const [state, dispatch] = useReducer(reducer, initalState);
  const [taskquery, setTaskQuery] = useState("");

  return (
    <div className="h-screen w-screen">
      <NavBar />

      <MainPage>
        <div className="h-1/6 w-full p-2 flex align-middle justify-between bg-indigo-200 items-center gap-1">
          <input
            className=" h-2/4 w-10/12 rounded-full pl-4 outline-none"
            type="text"
            onChange={(event) => setTaskQuery(event.target.value)}
            value={taskquery}
          />
          <button
            className="h-2/4 w-2/12 rounded-full bg-indigo-700 text-slate-300 hover:bg-indigo-800"
            type="button"
            onClick={() => {
              dispatch({ type: "add", payload: taskquery });

              setTaskQuery("");
            }}
          >
            Add task
          </button>
        </div>

        <div className="h-5/6 w-full p-2  bg-slate-200 flex flex-wrap gap-1">
          {state.map((task) => {
            return <TaskCard task={task} key={task.id} dispatch={dispatch} />;
          })}
        </div>
      </MainPage>
    </div>
  );
}

export default ToDoList;
