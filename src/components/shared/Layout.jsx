import React from "react";
import HomePageContainer from "../pages/HomePageContainer";
import DashboardContainer from "../pages/DashboardContainer";
import history from "../../context/history";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import SideBar from "./SideBar";
import { NavBar } from "./NavBar";

function Layout({ body }) {
  return (
    <BrowserRouter>
      <div className=" w-full min-h-screen max-h-screen bg-deep-orange-900 flex grid-cols-3 p-2 lg:p-3 lg:grid-cols-5 gap-4   overflow-hidden">

        <div className=" bg-white rounded-3xl hidden lg:inline  box-container-shadow flex-auto">
          <SideBar></SideBar>
        </div>

        <div className="flex mx-auto flex-auto bg-blue-gray-600 w-full lg:col-span-4 col-span-4">
          {/* <NavBar></NavBar> */}
          <Routes history={history}>
            <Route path="/" exact element={<DashboardContainer />} />
            <Route  path="/proyect/:id" element={<HomePageContainer />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Layout;
