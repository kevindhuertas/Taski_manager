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
import { Link } from "react-router-dom";

export default function DashboardContainer() {
  const [valueCalendar, valueCalendarChange] = useState(new Date());
  let proyectCount = useSelector((state: UseSelectorTypes) => state.proyects.length);
  let projects: Project[] = useSelector((state:UseSelectorTypes)=> state.proyects);
  let lastTasks: Task[] = useSelector((state: UseSelectorTypes) => state.tasks).slice(0,5);
  let taskCompletedCount = useSelector((state: UseSelectorTypes) => state.tasks.filter((t) => t.completed == true).length);
  let taskIncompletedCount = useSelector((state: UseSelectorTypes) => state.tasks.filter(
    (t) => t.completed == false
  ).length);


  const resumeCrads = (
    <>
      <div className="flex flex-col py-4 px-2 items-center justify-center rounded-3xl bg-blue-400 ">
        <div className="grid grid-cols-3 gap-4 px-2 ">
          <div className="flex items-center justify-center py-0.5 ">
            <div className=" bg-white bg-opacity-25  rounded-full p-3">
              <HiDocumentText size={35} className="text-white" />
            </div>
          </div>
          <div className="col-span-2 flex flex-col text-white">
            <div className=" font-medium text-3xl">{proyectCount}</div>
            <span className=" ">Proyectos</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center py-4 px-2 rounded-3xl bg-gray-400">
        <div className="grid grid-cols-3 gap-4 px-2 items-center">
          <div className="flex items-center justify-center py-0.5">
            <div className=" bg-white bg-opacity-25  rounded-full p-3">
              <FaTasks size={35} className="text-white" />
            </div>
          </div>
          <div className="col-span-2 flex flex-col text-white">
            <div className=" font-medium text-3xl">{taskIncompletedCount}</div>
            <span className=" ">Tareas</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col py-4 px-2 rounded-3xl items-center justify-center bg-light-green-500">
        <div className="grid grid-cols-3 gap-4 px-2">
          <div className="flex items-center justify-center py-0.5">
            <div className=" bg-white bg-opacity-25  rounded-full p-3">
              <MdTaskAlt size={35} className="text-white" />
            </div>
          </div>
          <div className="col-span-2 flex flex-col text-white">
            <div className=" font-medium text-3xl">{taskCompletedCount}</div>
            <span className=" ">Tareas Completadas</span>
          </div>
        </div>
      </div>
    </>
  );

  const lastTasksList = (
    <div className="w-full  ">
      <div className="flex flex-col gap-2 ">
        {lastTasks.map((task) => (
          <TaskCard task={task} key={task.id} />
        ))}
      </div>
    </div>
  );

  const calendarSideBar = (
    <>
      <Calendar onChange={valueCalendarChange} value={valueCalendar} clas />
      <span className="font-semibold text-white mt-2 overflow-auto">
        {" "}
        Proyectos
      </span>
      <div className=" flex flex-1 gap-2 flex-col lg:overflow-auto ">
        {projects.map((p) => (
          <Link to={`/projects/${p.id}`} key={p.id} className="bg-white rounded-2xl flex p-2">
            <div className="flex justify-center items-center">
              <div className="p-1 mx-2 mr-4 bg-deep-orange-400 rounded-lg"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-gray-600">{p.title}</span>
              <span className="font-light text-gray-600"> {p.description}</span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );

  return (
    <div className="relative flex flex-auto  lg:max-h-full h-full">
      <div className="relative p-4 pt-5 bg-white flex flex-col rounded-2xl w-full ">
        {/* <span className="font-semibold text-2xl">Dashboard</span>
          <span className="font-light">Bienvenido</span> */}
        <div className="flex flex-col lg:max-h-full min-h-full ">
          <div className="flex flex-col flex-1 max-h-full min-h-full">
            <span className="flex flex-col col-span-3 pb-4 ">
              <span className="font-semibold text-2xl">Dashboard</span>
              <span className="font-light">Bienvenido</span>
            </span>

            <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 w-full lg:overflow-auto gap-2">
              <div className=" col-span-2 flex flex-1 flex-col overflow-auto">
                <div className=" grid grid-cols-1 md:grid-cols-3 gap-2">{resumeCrads}</div>
                <span className="font-semibold text-gray-600 text-lg pt-4">
                  Últimas Tareas
                </span>
                <div className="flex flex-1 lg:overflow-auto">{lastTasksList}</div>
              </div>
              <div className="flex flex-1 flex-col lg:overflow-auto bg-blue-500 rounded-3xl border border-blue-700 gap-2 p-4">
                {calendarSideBar}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
