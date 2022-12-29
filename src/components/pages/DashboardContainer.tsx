import React, { useState } from "react";
import { HiDocumentText } from "react-icons/hi";
import { FaTasks } from "react-icons/fa";
import { MdTaskAlt } from "react-icons/md";
import Calendar from "react-calendar";
import { useSelector } from "react-redux";
import { Project } from "../../models/Projects";
import "../../style/calendar.css";
import { UseSelectorTypes } from "../../app/store";
import { Task } from "../../models/Task";
import TaskCard from "../../modules/tasks/TaskCard";

export default function DashboardContainer() {
  const [valueCalendar, valueCalendarChange] = useState(new Date());
  let proyectCount = 0;
  let projects: Project[] = [];
  let lastTasks: Task[] = [];
  let taskCompletedCount = 0;
  let taskIncompletedCount = 0;
  useSelector((state: UseSelectorTypes) => {
    taskCompletedCount = state.tasks.filter((t) => t.completed == true).length;
    taskIncompletedCount = state.tasks.filter(
      (t) => t.completed == false
    ).length;
    proyectCount = state.proyects.length;
    projects = state.proyects;
    for (let i = 0; i < 5; i++) {
      lastTasks.push(state.tasks[i]);
    }
  });

  return (
    <div className="flex-auto flex mx-auto  bg-orange-900 overflow-auto">
      <div className="flex-auto  bg-amber-300 flex-col rounded-2xl px-3 gap-4 h-full max-h-full">
        <div className="flex flex-col flex-nowrap  md:col-span-3">
          <span className="font-semibold text-2xl">Dashboard</span>
          <span className="font-light">Bienvenido</span>
        </div>
        <div className="flex-auto flex  h-full max-h-full gap-4 bg-green-300">
          <div className=" flex flex-col">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex flex-col py-4 px-2 items-center justify-center rounded-3xl bg-purple-400 ">
                <div className="grid grid-cols-3 gap-2">
                  <div className="flex items-center justify-center py-0.5">
                    <div className=" bg-white bg-opacity-90  rounded-full p-3">
                      <HiDocumentText size={35} className="text-purple-400" />
                    </div>
                  </div>
                  <div className="col-span-2 flex flex-col text-white">
                    <div className=" font-medium text-3xl">{proyectCount}</div>
                    <span className=" ">Proyectos</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center py-4 px-2 rounded-3xl bg-orange-400">
                <div className="grid grid-cols-3 gap-2 items-center">
                  <div className="flex items-center justify-center py-0.5">
                    <div className=" bg-white bg-opacity-90  rounded-full p-3">
                      <FaTasks size={35} className="text-orange-400" />
                    </div>
                  </div>
                  <div className="col-span-2 flex flex-col text-white">
                    <div className=" font-medium text-3xl">
                      {taskIncompletedCount}
                    </div>
                    <span className=" ">Tareas</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col py-4 px-2 rounded-3xl items-center justify-center bg-green-400">
                <div className="grid grid-cols-3 gap-2">
                  <div className="flex items-center justify-center py-0.5">
                    <div className=" bg-white bg-opacity-90  rounded-full p-3">
                      <MdTaskAlt size={35} className="text-green-400" />
                    </div>
                  </div>
                  <div className="col-span-2 flex flex-col text-white">
                    <div className=" font-medium text-3xl">
                      {taskCompletedCount}
                    </div>
                    <span className=" ">Tareas Completadas</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 flex flex-col gap-2 bg-white rounded-2xl p-4 h-full overflow-scroll flex-auto">
              <span className="font-semibold text-gray-600 text-lg">
                Ultimas Tareas
              </span>
              <div className=" overflow-auto max-h-full">
                {lastTasks.map((task) => (
                  <TaskCard task={task} key={task.id} />
                ))}
                {lastTasks.map((task) => (
                  <TaskCard task={task} key={task.id} />
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 bg-blue-500 rounded-3xl p-4 h-full border shadow-lg ">
            <Calendar onChange={valueCalendarChange} value={valueCalendar} />
            <span className="font-semibold text-white mt-2"> Proyectos</span>
            {projects.map((p) => (
              <div className="bg-white rounded-2xl flex p-2">
                <div className="flex justify-center items-center">
                  <div className="p-1 mx-2 mr-4 bg-deep-orange-400 rounded-lg"></div>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-gray-600">{p.title}</span>
                  <span className="font-light text-gray-600">
                    {" "}
                    {p.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
