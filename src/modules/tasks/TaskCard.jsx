import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);
  return (
    <div>
      <div className=" transition-all hover:scale-105 ease-out duration-200 bg-gray-400 text-white p-4 rounded-md shadow-white  cursor-pointer ">
        <h2 className=" font-medium flex justify-between">
          {task.title} 
        <button
          className=" text-sm bg-red-400 rounded-sm p-1"
          onClick={() => deleteTask(task.id)}>
          X
        </button>
        </h2>
        <span className=" text-sm">{task.description}</span>
       
      </div>
    </div>
  );
}

export default TaskCard;
