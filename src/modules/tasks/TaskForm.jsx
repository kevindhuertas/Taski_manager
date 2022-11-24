import React, { useState, useContext, useEffect } from "react";
import { TaskContext } from "../../context/TaskContext";
import { Button, Dialog, Chip } from "@material-tailwind/react";

function TaskForm() {
  const { createTask } = useContext(TaskContext);

  // Modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  // Form
  const [title, setTitle] = useState("");
  const [description, setdescription] = useState("");
  const [priority, setpriority] = useState("LOW");

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(title, description, priority);
    setTitle("");
    setdescription("");
  };

  return (
    <>
      <Button
        ripple={false}
        onClick={handleOpen}
        variant="gradient"
        className="flex"
      >
        {/* <AiOutlinePlus></AiOutlinePlus> */}
        Agregar
      </Button>
      <Dialog open={open} handler={handleOpen} className="rounded-2xl">
        <div className="flex flex-col p-4">
          <div className="flex justify-between">
            <h2 className="title text-primary-900 py-2">Crea una Tarea</h2>
            <Button
              onClick={handleOpen}
              className="text-primary-900"
              variant="text"
            >
              X
            </Button>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex gap-1 flex-col flex-auto "
          >
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

            <div className="flex gap-2 items-center py-2">
              Prioridad:
              <Chip
                onTap={() => {
                  setpriority("HIGH");
                }}
                color={priority == "HIGH" ? "red" : "gray"}
                value="Alto"
              />
              <Chip
                onTap={() => {
                  setpriority("MEDIUM");
                }}
                color={priority == "MEDIUM" ? "blue" : "gray"}
                value="Medio"
              />
              <Chip
                onTap={() => {
                  setpriority("LOW");
                }}
                color={priority == "LOW" ? "amber" : "gray"}
                value="Bajo"
              />
            </div>
            <div className="flex">
              <Button
                type="submit"
                onClick={handleOpen}
                className=" bg-primary"
              >
                Guardar
              </Button>
            </div>
          </form>
        </div>
      </Dialog>
    </>
  );
}

export default TaskForm;
