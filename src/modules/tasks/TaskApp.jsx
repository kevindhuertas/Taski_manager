import TaskList from "./TaskList.jsx";
import TaskForm from "./TaskForm";
import { TaskContextProvider } from "../../context/TaskContext";
import { IconButton, Button } from "@material-tailwind/react";
import {useSelector} from 'react-redux';

export default function TaskApp() {
  const tasks = useSelector(state => state.tasks)



  return (
    <TaskContextProvider>
      <div className="flex justify-between p-2">
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          Mis Tareas 
          <span className="text-secondary-500 text-sm font-light ml-2"> {tasks.length} tareas </span>
        </span>
        <TaskForm />
      </div>
      <div className="px-2">

        <TaskList />
      </div>
    </TaskContextProvider>
  );
}
