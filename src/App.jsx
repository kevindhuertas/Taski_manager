import TaskList from "./modules/tareas/TaskList";
import TaskForm from "./modules/tareas/TaskForm";

import { HiCubeTransparent } from "react-icons/hi";

export default function App() {
  return (
    <div className=" ">
      <div className="flex justify-center py-6"><HiCubeTransparent color="white" size={50} opacity={0.9} /></div>
      <TaskForm />
      <TaskList />
    </div>
  );
}
