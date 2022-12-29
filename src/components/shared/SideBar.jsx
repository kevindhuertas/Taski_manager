import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo_fondo_blanco.png";
import { HiPlusCircle } from "react-icons/hi";
import ProjectForm from "../../modules/projects/proyectForm";

export default function SideBar() {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  const proyects = useSelector((state) => state.proyects);
  console.log(splitLocation);

  const classNameLinks =
    "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group";
  const activeClassName = "text-white hover:bg-gray-200 bg-gray-100";
  const proyectColorClasName = [
    " bg-light-green-400 ",
    " bg-deep-orange-400 ",
    " bg-blue-500 ",
    " bg-light-green-400 ",
    " bg-gray-500 ",
  ];

  return (
    <aside className=" h-full min-h-full max-h-full" aria-label="Sidebar">
      <div className="overflow-y-auto py-4 px-3  rounded dark:bg-gray-800">
        <ul className="space-y-2">
          <li className="">
            <Link>
              {/* <img src={logo} alt="logo" className="p-2 pt3 w-3/5 mb-8" /> */}
              <h1 className="p-2 w-3/5 mb-8 font-extrabold text-2xl text-gray-700">.TASKI</h1>
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
              <svg
                aria-hidden="true"
                className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
              </svg>
              <span className="ml-3">Dashboard</span>
            </Link>
          </li>
        </ul>
        <ul className="pt-4 mt-4 space-y-2  dark:border-gray-700 border-t ">
          <span className="flex items-center pl-2.5 mb-4 mt-2 w-full">
            <span className="flex justify-between text-xl font-semibold  dark:text-white">
              <span>Proyectos</span>
              <span>
              <ProjectForm/>
              </span>
            </span>
          </span>
          <li>
            {proyects.map((proyect, index) => {
              return (
                <Link
                  to={`/proyect/${proyect.id}`}
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
