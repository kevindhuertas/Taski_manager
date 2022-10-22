import TaskList from "./modules/tasks/TaskList";
import TaskForm from "./modules/tasks/TaskForm";
import { TaskContextProvider } from "./context/TaskContext";

export default function TaskApp() {
  return (
    <TaskContextProvider>
      <div className="px-2">
        <TaskForm />
        <TaskList />
      </div>
    </TaskContextProvider>
  );
}
