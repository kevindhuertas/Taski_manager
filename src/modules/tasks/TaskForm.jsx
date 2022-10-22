import React, { useState, useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

function TaskForm() {
  const { createTask } = useContext(TaskContext);

  const [title, setTitle] = useState("");
  const [description, setdescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(title, description);
    setTitle("");
    setdescription("");
  };

  return (
    <div className="flex flex-col pb-4">
      <h2 className=" text-white font-medium">Crea una Tarea</h2>
      <form onSubmit={handleSubmit} className="flex gap-1 flex-col flex-auto ">
        <input 
          className=" rounded-md p-1"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          type="text"
          placeholder="Tarea"
        />
        <textarea
          className=" rounded-md p-1"
          placeholder="descripcion"
          value={description}
          onChange={(e) => {
            setdescription(e.target.value);
          }}
        ></textarea>
        <button className=" bg-blue-400 rounded-md px-2">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
