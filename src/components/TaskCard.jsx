function TaskCard({ task ,dispatch}) {
  return (
    <div className="h-9 w-fit  bg-purple-600 text-white px-4 flex align-middle justify-center rounded-full items-center gap-2">
      {/* (task.status === true ? `bg-green-300` : 'bg-indigo-400')> */}

      {/* 'h-9 w-fit  bg-purple-600 text-white px-4 flex align-middle justify-center rounded-full items-center gap-2' */}

      <input type="checkbox" onClick={()=>dispatch({type:'status' , payload:task.id})}/>

      <h2>{task.task}</h2>

      <span className="hover:cursor-pointer" onClick={()=>dispatch({type:'delete',payload:task.id})}>❌</span>

      <span className="hover:cursor-pointer">🖋️</span>
    </div>
  );
}

export default TaskCard;
