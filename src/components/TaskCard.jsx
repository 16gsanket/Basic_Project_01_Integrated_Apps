function TaskCard({ task, remove_task, mark_status }) {
  return (
    <div className = "h-9 w-fit  bg-purple-600 text-white px-4 flex align-middle justify-center rounded-full items-center gap-2" >

    {/* (task.status === true ? `bg-green-300` : 'bg-indigo-400')> */}

{/* 'h-9 w-fit  bg-purple-600 text-white px-4 flex align-middle justify-center rounded-full items-center gap-2' */}


      <input
        type="checkbox"
        onClick={() => {
          console.log(task.id)
          mark_status(task.id);
        }}
      />

      <h2>{task.task}</h2>

      
      <span
        onClick={() => {
          // console.log(task.status);
          remove_task(task.id);
        }}
        className="hover:cursor-pointer"
      >
        ❌
      </span>
    </div>
  );
}

export default TaskCard;
