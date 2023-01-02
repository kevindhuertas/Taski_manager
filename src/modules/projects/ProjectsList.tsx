import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Project } from "../../models/Projects";
import "../../style/calendar.css";
import { UseSelectorTypes } from "../../app/store";
import { Link } from "react-router-dom";
import ProjectForm from "./proyectForm";

export default function ProjectList() {
  let proyectCount = 0;
  let projects: Project[] = useSelector((state: UseSelectorTypes) => state.proyects);


  return (
    <div className="relative flex flex-auto  max-h-full h-full">
      <div className="relative  p-4 pt-5 bg-white flex flex-col rounded-2xl w-full ">
        {/* <span className="font-semibold text-2xl">Dashboard</span>
          <span className="font-light">Bienvenido</span> */}
        <div className="flex flex-col max-h-full min-h-full ">
          <div className="flex flex-col flex-1 gap-2 max-h-full min-h-full">
            <span className="flex justify-between items-center col-span-3 pb-4 ">
              <span className="font-semibold text-2xl">Proyectos</span>
              <ProjectForm/>
            </span>
            {projects.map((p) => (
              <Link to={`/projects/${p.id}`} key={p.id} className="cursor-pointer bg-white rounded-2xl flex p-2 border">
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
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
