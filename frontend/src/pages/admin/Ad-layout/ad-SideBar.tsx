import { CurlyBraces, Home } from "lucide-react";
import { BiLogOut } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { data } from "../../../Data/ad-sideBar";
import { useAuth } from "../../../context/AuthContex";

interface propsTypes {
  toggleSideBar: boolean;
}

function AdSideBar({ toggleSideBar }: propsTypes) {
  const { isloggedIn, logout } = useAuth();

  return (
    <div
      className={`${toggleSideBar ? "w-70 px-4" : "w-0"} fixed top-0 left-0  overflow-hidden h-screen transition-all duration-300 ease-in-out dark:bg-blue-950/80 bg-slate-100 drop-shadow-lg`}
    >
      {toggleSideBar && (
        <div>
          <div className="dark:text-white text-slate-800/90 flex items-center gap-x-1 font-bold text-xl py-4 border-b my-5">
            <CurlyBraces className="size-8 p-0.5 mr-2 bg-blue-500 text-slate-50 rounded" />
            <h2>Protfolio Admin</h2>
          </div>

          <NavLink to="/admin/dashboard">
            {" "}
            <div className="bg-linear-120 from-blue-500 to-indigo-600 text-white text-2xl flex items-center font-semibold px-4 gap-x-2 py-2 rounded">
              <Home className="p-1 size-8" /> Dashboard
            </div>
          </NavLink>
          <div className="flex flex-col gap-10 my-10 dark:text-white text-slate-800/90">
            {data.map((item) => {
              const Logo = item.Logo;
              return (
                <NavLink
                  id={item.id}
                  to={item.link}
                  className="flex items-center gap-x-4 "
                >
                  <Logo className="size-7 p-1" />
                  <p className="font-medium text-lg">{item.name}</p>
                </NavLink>
              );
            })}
          </div>
          {isloggedIn && (
            <div className="absolute bottom-0 left-0 border-t text-end w-full dark:border-white/60 border-slate-700/60">
              <button onClick={logout} className="flex items-center px-3 py-3 gap-3 text-red-500 text-2xl font-semibold ">
                <BiLogOut /> Logout
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default AdSideBar;
