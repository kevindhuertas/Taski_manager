import React from "react";
import { createContext, useState, useEffect } from "react";
import { Task } from "../models/Task";
import { v4 as uuidv4 } from "uuid";

interface ItaskContext {
  tasks: Task[];
  createTask: (taskTitle:string, description: string, priority:"LOW"|"MEDIUM"|"HIGH")=>void;
  deleteTask: any;
  completedTask: any;
}

const taskContextInitialValue= {
  tasks: [],
  createTask: ()=>{},
  deleteTask: ()=>{},
  completedTask: ()=>{},
}

export const TaskContext = createContext<ItaskContext>(taskContextInitialValue);

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState<Task[]>([]);


  //USE EFFECT - DATA
  useEffect(() => {
    let localData = [];
    localData = JSON.parse(localStorage.getItem("tasks") ?? '[]');
    if (!localStorage.getItem("tasks")) localStorage.setItem("tasks", "[]");
    setTasks(localData);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  //PUBLIC FUNCTIONS
  function createTask(taskTitle: string, description: string, priority:"LOW"|"MEDIUM"|"HIGH") {
    const newTask: Task = {
      id: uuidv4(),
      proyectId: "",
      title: taskTitle,
      description: description,
      completed: false,
      priority: priority
    };
    setTasks([...tasks, newTask]);
  }

  function deleteTask(id) {
    setTasks(tasks.filter((e) => e.id != id));
  }

  function completed(id){
    let task = tasks.find(e=>e.id == id)
    if(task){
      task.completed = true;
    }
    setTasks([...tasks])
  }
  //return
  return (
    <TaskContext.Provider
      value={{
        tasks: tasks,
        createTask: createTask,
        deleteTask: deleteTask,
        completedTask: completed
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
