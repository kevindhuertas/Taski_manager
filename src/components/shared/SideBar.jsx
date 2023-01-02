import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo_fondo_blanco.png";
import { RiHomeLine } from "react-icons/ri";
import ProjectForm from "../../modules/projects/proyectForm";
import { appIconSize } from "../../style/constans";
import { HiOutlineClipboardList } from "react-icons/hi";

export default function SideBar() {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  const proyects = useSelector((state) => state.proyects);

  const classNameLinks =
    "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group";
  const activeClassName = "text-white hover:bg-gray-200 bg-gray-100 shadow-lg shadow-gray-200/50";
  const proyectColorClasName = [
    " bg-light-green-400 ",
    " bg-deep-orange-400 ",
    " bg-blue-500 ",
    " bg-light-green-400 ",
    " bg-gray-500 ",
  ];

  return (
    <aside className="p-2 lg:p-4 lg:px-4 lg:pr-0 h-full " aria-label="Sidebar">
      <div className="bg-white rounded-3xl flex-1  h-full overflow-y-auto p-4 pt-5 dark:bg-gray-800">
        <ul className="space-y-2">
          <li className="">
            <Link to="/">
              {/* <img src={logo} alt="logo" className="p-2 pt3 w-3/5 mb-8" /> */}
              <span className="w-3/5 mb-8 font-extrabold text-2xl text-gray-700 pl-2">.TASKI</span>
            </Link>
          </li>
          <li>
            <Link
              to="/"
              href="#"
              className={[
                classNameLinks,
                splitLocation[1] === "" ? activeClassName : "",
              ]}
            >
              <RiHomeLine size={appIconSize.medium}></RiHomeLine>
              <span className="ml-3">Dashboard</span>
            </Link>
            <Link
              to="/projects"
              className={[
                classNameLinks,
                splitLocation[1] === "projects" && !splitLocation[2]  ? activeClassName : "",
              ]}
            >
              <HiOutlineClipboardList size={appIconSize.medium}></HiOutlineClipboardList>
              <span className="ml-3">Proyectos</span>
            </Link>
          </li>
        </ul>
        <ul className="pt-4 mt-4 space-y-2  dark:border-gray-700 border-t ">
          <span className="flex items-center pl-2.5 mb-4 mt-2 w-full">
            <span className="flex justify-between text-xl font-semibold  dark:text-white  w-full">
              <a href="/projects">Proyectos</a>
              <span>
              <ProjectForm/>
              </span>
            </span>
          </span>
          <li>
            {proyects.map((proyect, index) => {
              return (
                <Link
                  to={`/projects/${proyect.id}`}
                  key={proyect.id}
                  className={[
                    classNameLinks,
                    " my-2 ",
                    splitLocation[2] == proyect.id ? activeClassName : "",
                  ]}
                >
                  <span
                    className={[
                      "flex justify-center items-center w-5 h-5 rounded-full ",
                    ]}
                  >
                    <span
                      className={[
                        " w-2 h-2 rounded-full ",
                        proyectColorClasName[index],
                      ]}
                    ></span>
                  </span>
                  <span className="ml-4">{proyect.title}</span>
                </Link>
              );
            })}
          </li>
          {/* <li>
            <Link
              to="/"
              style={{
                background:
                  "linear-gradient(0deg, rgba(15,164,254,1) 0%, rgba(18,169,255,1) 100%)",
              }}
              className="mt-4 flex items-center p-2 text-base font-normal 
                text-white rounded-lg transition duration-75 dark:text-white group hover:bg-blue-gray-50"
            >
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-5 h-5 text-white transition duration-75 group-hover:text-white dark:group-hover:text-white dark:text-gray-400"
                focusable="false"
                data-prefix="fas"
                data-icon="gem"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M378.7 32H133.3L256 182.7L378.7 32zM512 192l-107.4-141.3L289.6 192H512zM107.4 50.67L0 192h222.4L107.4 50.67zM244.3 474.9C247.3 478.2 251.6 480 256 480s8.653-1.828 11.67-5.062L510.6 224H1.365L244.3 474.9z"
                ></path>
              </svg>
              <span className="ml-4">Upgrade to Pro</span>
            </Link>
          </li> */}
        </ul>
      </div>
    </aside>
  );
}
