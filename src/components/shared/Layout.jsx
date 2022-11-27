import React from "react";
import HomePageContainer from "../pages/HomePageContainer";
import DashboardContainer from "../pages/DashboardContainer";
import history from "../../context/history";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import SideBar from "./SideBar";

function Layout({ body }) {
  return (
    <BrowserRouter>
      <div className="mx-auto max-w-screen-xl  grid grid-cols-4 pt-4 gap-4">
        <div className=" bg-white rounded-2xl hidden lg:inline  min-w-full ">
          <SideBar></SideBar>
        </div>


        <div className=" mx-auto w-full lg:col-span-3 col-span-4">
          <Routes history={history}>
            <Route path="/" exact element={<DashboardContainer/>} />
            <Route path="/proyect/:id" element={<HomePageContainer />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Layout;
