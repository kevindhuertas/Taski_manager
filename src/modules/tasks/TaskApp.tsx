import React from "react";
import TaskList from "./TaskList.jsx";
import TaskForm from "./TaskForm";
import { IconButton, Button } from "@material-tailwind/react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { useEffect } from "react";

export default function TaskApp() {
  const proyectId= useParams().id;
  let tasks = [];
  if(proyectId){
    tasks = useSelector((state:any) => state.tasks.filter(task => task.proyectId == proyectId))
  }

  useEffect(() => {
  },[])
  

  return (
    <>
      <div className="flex justify-between p-2">
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          Mis Tareas
          <span className="text-secondary-500 text-sm font-light ml-2">
            {" "}
            {tasks.length} tareas{" "}
          </span>
        </span>
        <TaskForm />
      </div>
      <div className="px-2">
        <TaskList />
      </div>
    </>
  );
}
