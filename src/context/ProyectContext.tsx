import React from "react";
import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Project } from "../models/Projects";

interface IProjectContext {
  projects: Project[];
  proyectSelected: Project;
}

const projectContextInitialValue = {
  projects: [],
  proyectSelected: {
    id: uuidv4(),
    title: "",
    description: "",
    favorite: false,
    members: [],
  },
};

export const ProyectContext = createContext<IProjectContext>(
  projectContextInitialValue
);

export function TaskContextProvider(props) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [proyectSelected, setProyectSelected] = useState<Project>(
    projectContextInitialValue.proyectSelected
  );

  //DATA
  useEffect(() => {
    let localData: Project[] = JSON.parse(
      localStorage.getItem("projects") ?? "[]"
    );
    if (!localStorage.getItem("projects")) {
      localStorage.setItem("projects", "[]");
      localData = JSON.parse(localStorage.getItem("projects") ?? "[]");
    }
    setProjects(localData);
    if (localData[0]) setProyectSelected(localData[0]);
  }, []);

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  function createProject(title: string, description: string) {
    const newProject: Project = {
      id: uuidv4(),
      creatorUser: "ce3f2298-3e50-4acc-9f40-0579be383116",
      title: title,
      description: description,
      favorite: false,
      members: [],
    };

    setProjects([...projects, newProject]);
  }

  function deleteProyect(id) {
    setProjects(projects.filter((e) => e.id != id));
  }

  return (
    <ProyectContext.Provider
      value={{
        proyectSelected: proyectSelected,
        projects: projects,
      }}
    >
      {props.children}
    </ProyectContext.Provider>
  );
}
