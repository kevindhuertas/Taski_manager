import { createContext, useState, useEffect } from "react";


export const TaskContext = createContext();

export function TaskContextProvider(props) {

  let localData = [];
  //Items in local Data
  localData = JSON.parse(localStorage.getItem('tasks'))
  if(!localData) localStorage.setItem('tasks','[]')


  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(localData);
  }, []);

  useEffect(()=>{
    localStorage.setItem('tasks',JSON.stringify(tasks))
  },[tasks])




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