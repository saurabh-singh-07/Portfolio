import { CurlyBraces, Home, X } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";
import { NavLink } from "react-router-dom";
import { SideBarData } from "../Data/Sidebar";


interface propsTypes {
  toggleSideBar: boolean;
  setToggleSideBar: Dispatch<SetStateAction<boolean>>;
}


function AdSideBar({ toggleSideBar, setToggleSideBar }: propsTypes) {
  return (
    <div
      className={`${toggleSideBar ? "w-70 px-4" : "w-0"} fixed  z-999 top-0 right-0  overflow-hidden h-screen transition-all duration-300 ease-in-out dark:bg-blue-950 bg-slate-100 drop-shadow-lg`}
    >
      {toggleSideBar && (
        <div>
          <div className="dark:text-white text-slate-800/90 flex items-center gap-x-1 font-bold text-xl py-4 border-b my-5">
            <CurlyBraces className="size-8 p-0.5 mr-2 bg-blue-500 text-slate-50 rounded" />
            <h2>Protfolio </h2>

            <button className="text-slate-800/90 absolute right-5 p-1  dark:text-white" onClick={() => setToggleSideBar(!toggleSideBar)}> <X/> </button>
          </div>

          <NavLink to="/admin/dashboard">
            {" "}
            <div className="bg-linear-120 from-blue-500 to-indigo-600 text-white text-2xl flex items-center font-semibold px-4 gap-x-2 py-2 rounded">
              <Home className="p-1 size-8" /> Dashboard
            </div>
          </NavLink>
          <div className="flex flex-col gap-10 my-10 dark:text-white text-slate-800/90">
            {SideBarData.map((item) => {
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
        </div>
      )}
    </div>
  );
}

export default AdSideBar;
