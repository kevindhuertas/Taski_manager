import React from "react";
import { useDispatch } from "react-redux";
import { Chip, IconButton } from "@material-tailwind/react";
import Card from "../../components/cards/Card";
import { completeTask, deleteTask } from "../../features/tasks/taskSlice";
import { Task } from "../../models/Task";
import { BiCheckCircle } from "react-icons/bi";
import { HiDotsHorizontal } from "react-icons/hi";
import { FiMoreHorizontal } from "react-icons/fi";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";

function TaskCard({ task }: { task: Task }) {
  const dispatch = useDispatch();

  return (
    <Card className=" transition-all ease-out duration-200   p-4 cursor-pointer ">
      <div className="flex justify-between items-center p-0 mb-1 text-gray-700">
        <span className="font-bold flex gap-2 items-center">
          <BiCheckCircle
            className={task.completed ? "text-green-400" : "text-gray-500"}
            size={20}
            onClick={() => dispatch(completeTask(task.id))}
          />
          <span className={task.completed ? "line-through text-gray-500" : ""}>
            {task.title}
          </span>
        </span>

        <Menu>
          <MenuHandler>
            <div>
              <HiDotsHorizontal />
            </div>
          </MenuHandler>
          <MenuList>
            <MenuItem onClick={() => dispatch(completeTask(task.id))}>
              {task.completed ? "Incompleta" : "Completada"}
            </MenuItem>
            <MenuItem onClick={() => dispatch(deleteTask(task.id))}>
              Borrar
            </MenuItem>
          </MenuList>
        </Menu>
      </div>

      {task.priority === "HIGH" && (
        <Chip className="" color="red" value="Alto"></Chip>
      )}
      {task.priority === "MEDIUM" && (
        <Chip className="text-sm" color="amber" value="Medio"></Chip>
      )}
      {task.priority === "LOW" && <Chip color="blue" value="Bajo"></Chip>}

      <p className="font-light text-gray-500 mt-4">{task.description}</p>
    </Card>
  );
}

export default TaskCard;
