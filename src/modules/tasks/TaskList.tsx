import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import TaskCard from "./TaskCard";
import { Task } from "../../models/Task";

function TaskList() {
  // Get data from task store
  const params = useParams();
  let tasksInclompletedState: Task[] = [];
  let tasksCompletedState: Task[] = [];
  if (params) {
    useSelector((state: any) => {
      const taskResponse: Task[] = state.tasks.filter(
        (task) => task.proyectId == params.id
      );
      tasksInclompletedState = taskResponse.filter((t) => t.completed == false);
      tasksCompletedState = taskResponse.filter((t) => t.completed == true);
    });
  }



  // const {tasks} = useContext(TaskContext)
  if (tasksInclompletedState.length + tasksCompletedState.length === 0) {
    return <div className="flex flex-auto py-6 justify-center">
      <span className="self-center font-medium text-gray-600">Todavia no hay tareas</span>
    </div>;
  }

  const TaskCardList = (
    <div className="grid grid-cols-1 gap-2 ">
      {tasksInclompletedState.map((task) => (
        <TaskCard task={task} key={task.id} />
      ))}
      {tasksCompletedState.map((task) => (
        <TaskCard task={task} key={task.id} />
      ))}
    </div>
  );
  const taskCardGrid = (
    <div className="grid grid-cols-2 gap-4">
      <div className="flex flex-col gap-2">
        <div className="font-semibold  text-gray-600 pt-2">
          Pendientes
        </div>
        {tasksInclompletedState.map((task) => (
          <TaskCard task={task} key={task.id} />
        ))}
      </div>
      <div className="flex flex-col gap-2">
      <div className="font-semibold text-gray-600 pt-2">
          Terminadas
        </div>
        {tasksCompletedState.map((task) => (
          <TaskCard task={task} key={task.id} />
        ))}
      </div>
    </div>
  );

  return <>
  <div className="md:hidden">
  {TaskCardList}
  </div>
  <div className="hidden md:block">
  {taskCardGrid}
  </div>
  </>;
}

export default TaskList;
