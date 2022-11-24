import TaskList from "./TaskList.jsx";
import TaskForm from "./TaskForm";
import { TaskContextProvider } from "../../context/TaskContext";
import { IconButton, Button } from "@material-tailwind/react";

export default function TaskApp() {
  return (
    <TaskContextProvider>
      <div className="flex justify-between p-2">
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          Mis Tareas
        </span>
        <TaskForm />
      </div>
      <div className="px-2">

        <TaskList />
      </div>
    </TaskContextProvider>
  );
}
