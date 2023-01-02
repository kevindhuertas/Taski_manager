import React from "react";
import HomePageContainer from "../pages/HomePageContainer";
import DashboardContainer from "../pages/DashboardContainer";
import history from "../../context/history";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import SideBar from "./SideBar";
import { NavBar } from "./NavBar";
import ProjectList from "../../modules/projects/ProjectsList";

function Layout({ body }) {
  return (
    <BrowserRouter>
      <div className="absolute w-full  grid grid-cols-3 lg:grid-cols-5 min-h-full max-h-screen ">

        <div className=" hidden lg:inline  flex-auto">
          <SideBar></SideBar>
        </div>

        <div className="relative min-h-screen lg:max-h-screen w-full lg:col-span-4 col-span-4 p-2 lg:p-4 lg:px-4">
          <NavBar></NavBar>
          <Routes history={history}>
            <Route path="/" exact element={<DashboardContainer />} />
            <Route  path="/projects/:id" element={<HomePageContainer />} />
            <Route  path="/projects" element={<ProjectList />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Layout;
