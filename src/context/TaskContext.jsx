import { createContext, useState, useEffect } from "react";
import { tasks as data } from '../data/tasks'

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  
  
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);



  function createTask  (taskTitle, description) {
    const newTask = {
      title: taskTitle,
      id: tasks.length,
      description: description,
    };
    setTasks([...tasks, newTask]);
  };

  function deleteTask (id){
    setTasks(tasks.filter((e) => e.id != id))
  };

  return (
    <TaskContext.Provider
      value={{
        tasks: tasks,
        createTask: createTask,
        deleteTask: deleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}