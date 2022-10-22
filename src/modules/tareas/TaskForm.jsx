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
    <div className="flex flex-col ">
      <form onSubmit={handleSubmit} className="flex">
        <input
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          type="text"
          placeholder="Escribe la tarea"
        />
        <textarea
          placeholder="descripcion"
          value={description}
          onChange={(e) => {
            setdescription(e.target.value);
          }}
        ></textarea>
        <button>Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
