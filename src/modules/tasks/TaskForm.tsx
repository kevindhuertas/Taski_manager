import React, { useState } from "react";
import { Button, Dialog, Chip } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { addTask } from "../../features/tasks/taskSlice";
import { v4 as uuid } from "uuid";
import { Task } from "../../models/Task";
import { useParams } from "react-router";

const initialFormState: Task = {
  id: uuid(),
  proyectId: "",
  title: "",
  description: "",
  priority: "LOW",
  completed: false,
};

function TaskForm() {
  const proyectId = useParams().id;
  const dispatch = useDispatch();
  // Modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  // Form
  const [priority, setPriority] = useState<"LOW" | "MEDIUM" | "HIGH">("LOW");
  const [taskForm, setTaskForm] = useState<Task>({
    ...initialFormState,
    priority: priority,
  });

  const handleChange = (e) => {
    setTaskForm({
      ...taskForm,
      [e.target.name]: e.target.value, //[title]: "value"
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (proyectId) {
      dispatch(
        addTask({
          ...taskForm,
          proyectId: proyectId,
        })
      );
      setPriority("LOW");
      setTaskForm({
        ...initialFormState,
        priority: priority,
        proyectId: proyectId,
      });
    }
  };

  return (
    <>
      <Button
        ripple={false}
        onClick={handleOpen}
        variant="gradient"
        className="flex"
      >
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
              name="title"
              className=" rounded-md p-1"
              onChange={handleChange}
              type="text"
              placeholder="Tarea"
            />
            <textarea
              name="description"
              className=" rounded-md p-1"
              placeholder="descripcion"
              onChange={handleChange}
            ></textarea>

            <div className="flex gap-2 items-center py-2">
              Prioridad:
              <Chip
                onTap={() => {
                  setPriority("HIGH");
                }}
                color={priority == "HIGH" ? "red" : "gray"}
                value="Alto"
              />
              <Chip
                onTap={() => {
                  setPriority("MEDIUM");
                }}
                color={priority == "MEDIUM" ? "blue" : "gray"}
                value="Medio"
              />
              <Chip
                onTap={() => {
                  setPriority("LOW");
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
