import React, { useState } from "react";
import { Button, Dialog, Chip } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { addTask } from "../../features/tasks/taskSlice";
import { v4 as uuid } from "uuid";
import { Task } from "../../models/Task";
import { useParams } from "react-router";
import { MdOutlineClose } from "react-icons/md";
import { HiPlusCircle } from "react-icons/hi";


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
  const [priority, setPriority] = useState<"LOW" | "MEDIUM" | "HIGH"| undefined>(undefined);
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
          priority: priority,
          proyectId: proyectId,
        })
      );
      setPriority(undefined);
      setTaskForm({
        ...initialFormState,
        id: uuid(),
        priority: undefined,
        proyectId: proyectId,
      });
    }
  };

  return (
    <>
      <HiPlusCircle onClick={handleOpen} className="inline text-blue-400 hover:text-gray-700" size={25}/>
      <Dialog size={"xl"} open={open} handler={handleOpen} className="rounded-2xl">
        <div className="flex flex-col p-4">
          <div className="flex justify-between items-center text-primary-900">
            <span className="sub-title py-2">Crea una Tarea</span>
   
            <MdOutlineClose   onClick={handleOpen} className=""/>
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

            <div className="flex flex-wrap gap-1  py-2 ">
              Prioridad:
              <div className="flex gap-0.5">
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
                color={priority == "MEDIUM" ? "amber" : "gray"}
                value="Medio"
              />
              <Chip
                onTap={() => {
                  setPriority("LOW");
                }}
                color={priority == "LOW" ? "blue" : "gray"}
                value="Bajo"
              />
              </div>
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
