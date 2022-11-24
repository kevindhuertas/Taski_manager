import React from "react";
import HomePageContainer from "../pages/HomePageContainer";
import history from "../../context/history";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import SideBar from "./SideBar";

function Layout({ body }) {
  return (
      <div className="mx-auto max-w-screen-xl  grid grid-cols-4 pt-4 gap-4">
        <div className=" bg-white rounded-2xl hidden lg:inline  min-w-full ">
          <SideBar></SideBar>
        </div>

        <div className=" mx-auto w-full lg:col-span-3 col-span-4">
          <BrowserRouter>
            <Routes history={history}>
              {/* <Route path="/app" exact element={<AppPageContainer />} /> */}
              <Route path="/" exact element={<HomePageContainer />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
  );
}

export default Layout;
