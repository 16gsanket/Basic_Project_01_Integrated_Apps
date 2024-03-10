import NavBar from "../components/NavBar";
import MainPage from "../components/MainPage";
import TaskCard from "../components/TaskCard";
import { useState, useReducer } from "react";

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

const initalState = [
  {
    tasks: [],
    taskquerry: "",
    isediting: false,
    sel_id: null,
  },
];

function reducer(action, state) {
  switch (action.type) {
    case "add":
      if (action.payload == undefined) return;
      return { ...task, task: action.payload };
    case "remove":
      return state.tasks.filter((task) => task.id !== selected_id);
    case "mark_status":
      return state.tasks.map((task) =>
        task.id === selected_id ? { ...task, status: !task.status } : task
      );
    case "edititem":
      return state.tasks.map((task) => {
        if (action.payload === task.id) {
          state.taskquerry = task.task;
          // setRevisedTask(task.task);
          state.isediting = !edititem;
          state.sel_id = task.id;
        }
      });
    case "addele":
      state.tasks = state.tasks.map(
        (task) => task.id === state.sel_id && { ...task, task: task.taskquerry }
      );
      state.taskquerry = "";

      state.edititem = !edititem;
      state.sel_id = null;
      return {
        ...state,
        taskquerry: "",
        edititem: !state.edititem,
        sel_id: null,
      };

    case "setquey":
      return { ...state, taskquerry: action.payload };
  }
}

function ToDoList() {
  //can use dumy to do list ---> (tasklist)

  const [state, dispatch] = useReducer(reducer, initalState);

  function addtolist(newtask) {
    dispatch({ type: "add", payload: newtask });
  }
  function remove_task(selected_id) {
    dispatch({ type: "remove", payload: selected_id });
  }
  function mark_status(selected_id) {
    dispatch({ type: "mark_status", payload: selected_id });
  }
  function edititem(selected_id) {
    dispatch({ type: "edititem", payload: selected_id });
  }

  function addele() {
    dispatch({ type: "addele" });
  }

  return (
    <div className="h-screen w-screen">
      <NavBar />

      <MainPage>
        <div className="h-1/6 w-full p-2 flex align-middle justify-between bg-indigo-200 items-center gap-1">
          <input
            className=" h-2/4 w-10/12 rounded-full pl-4 outline-none"
            type="text"
            value={state?.taskquerry}
            onChange={(e) => {
              dispatch({ type: "setquey", payload: e.target.value });
            }}
          />
          <button
            className="h-2/4 w-2/12 rounded-full bg-indigo-700 text-slate-300 hover:bg-indigo-800"
            type="button"
          >
            {!state.isediting ? (
              <span
                onClick={() => {
                  addtolist(taskquerry);
                }}
              >
                + Add Task
              </span>
            ) : (
              <span onClick={addele}>Edit</span>
            )}
          </button>
        </div>

        <div className="h-5/6 w-full p-2  bg-slate-200 flex flex-wrap gap-1">
          {state.tasks?.map((task) => {
            return (
              <TaskCard
                task={task}
                key={task.id}
                remove_task={remove_task}
                mark_status={mark_status}
                edititem={edititem}
              />
            );
          })}
        </div>
      </MainPage>
    </div>
  );
}

export default ToDoList;
