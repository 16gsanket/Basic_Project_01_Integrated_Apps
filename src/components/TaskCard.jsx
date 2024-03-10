function TaskCard({ task }) {
  console.log("taskcard rendering");
  return (
    <div className="h-9 w-fit bg-purple-600 text-white px-4 flex align-middle justify-center rounded-full items-center gap-2">
      <input type="checkbox" />

      <h2>{task.task}</h2>

      <span>❌</span>
    </div>
  );
}

export default TaskCard;
