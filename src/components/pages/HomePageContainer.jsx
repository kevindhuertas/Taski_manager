import React from "react";
import Row from "../wrappers/Row";
import Colums from "../wrappers/Colums";
import { app1 } from "../../data";
import AppCard from "../cards/AppCard";
import { CaptionCard } from "../cards/CaptionCard";
import Card from "../cards/Card";
import { IconButton, Button } from "@material-tailwind/react";
import { AiOutlinePlus } from "react-icons/ai";
import TaskApp from "../../modules/tasks/TaskApp";

export default function HomePageContainer() {
  return (
    <div className="mx-auto max-w-screen-xl ">
      <div className="container mx-auto flex flex-col bg-white rounded-2xl py-4 px-3">
        <TaskApp>
        </TaskApp>
        <div id="columas" className="grid grid-cols-5 w-full gap-2 px-2"></div>
      </div>
    </div>
  );
}
