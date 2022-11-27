import React from "react";
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
