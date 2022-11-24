import React, { useContext } from "react";
import Card from "../../components/cards/Card";
import { TaskContext } from "../../context/TaskContext";
import { Task } from "../../models/Task";


function TaskCard({task}:{task:Task}) {
  const { deleteTask } = useContext(TaskContext);
  return (
    <Card className=" transition-all hover:scale-105 ease-out duration-200  text-white p-4 cursor-pointer ">
      <div className="flex justify-between">
        
      <div>
      
      <h1 className="font-bold text-blue-gray-600"> {task.title}</h1>
      </div>
      <span
        className="text-sm text-gray mb-5 cursor-pointer"
        onClick={() => deleteTask(task.id)}
      >
        X
      </span>
      </div>
      <p className="font-light text-gray-500 mb-4">{task.description}</p>

    
    </Card>
  );
}

export default TaskCard;
