import React from "react";
import TaskList from "./TaskList.jsx";
import TaskForm from "./TaskForm";
import { IconButton, Button } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { useEffect } from "react";
import { Project } from "../../models/Projects.js";
import { HiDotsHorizontal } from "react-icons/hi";
import { Avatar } from "@material-tailwind/react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { deleteProyect } from "../../features/proyect/proyectSlice.js";

export default function TaskApp() {
  const dispatch = useDispatch();
  const proyectId = useParams().id;
  let proyect: Project;
  let dataLoaded = false;
  let tasks = [];
  if (proyectId) {
    tasks = useSelector((state: any) =>
      state.tasks.filter((task) => task.proyectId == proyectId)
    );
    proyect = useSelector(
      (state: any) =>
        state.proyects.filter((proyect) => proyect.id == proyectId)[0]
    );
    dataLoaded = true;
  }

  useEffect(() => {}, []);

  return (
    <>
      {dataLoaded ? (
        <div className=" flex flex-col h-full">
          <div className="flex flex-col pb-4  px-4  ">
            <span className="font-semibold text-2xl flex justify-between">
              <span>{proyect.title}</span>
              <Menu>
                <MenuHandler>
                  <div>
                    <HiDotsHorizontal />
                  </div>
                </MenuHandler>
                <MenuList>
                  <MenuItem onClick={() => dispatch(deleteProyect(proyectId))}>
                    Borrar
                  </MenuItem>
                </MenuList>
              </Menu>
            </span>
            <span className="text-sm font-light text-gray-600">
              {tasks.length} tareas
            </span>
   
            <div className="flex items-center text-sm">
              {/* <label className="text-gray-700 font-semibold pr-1 ">
                Miembros:
              </label> */}
              <div className="flex -space-x-4">
                <Avatar
                  className="bg-white"
                  src="https://robohash.org/sad"
                  alt="avatar"
                  variant="circular"
                  size="sm"
                />
                <Avatar
                  className="bg-white"
                  src="https://robohash.org/avatar"
                  alt="avatar"
                  variant="circular"
                  size="sm"
                />
                <Avatar
                  className="bg-white"
                  src="https://robohash.org/2e"
                  alt="avatar"
                  variant="circular"
                  size="sm"
                />
              </div>
            </div>
            <div className="text-sm font-light text-gray-600 pt-4">
            {proyect.description}
            </div>

            <div className=" md:hidden text-sm  mt-4 rounded-xl ">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <label className="text-gray-700 font-semibold pr-1">
                    Filtros:
                  </label>
                  <select className="bg-gray-200 px-3 py-1 rounded-full">
                    <option>Todas</option>
                    <option>Pendientes</option>
                    <option>Completadas</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="h-full px-4 py-4 bg-white rounded-3xl box-container-shadow  ">
            <div className="flex justify-between items-center pb-2 ">
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white ">
                Tareas
              </span>
              <TaskForm />
            </div>
            <div className="">
              <TaskList />
            </div>
          </div>
        </div>
      ) : (
        <div>Proyecto no existe</div>
      )}
    </>
  );
}
