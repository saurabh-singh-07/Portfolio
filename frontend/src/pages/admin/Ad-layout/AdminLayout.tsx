import { useState } from "react";
import AdminNavbar from "./AdminNavbar";
import { Outlet } from "react-router-dom";
import AdSideBar from "./ad-SideBar";

function AdminLayout() {
  const [toggleSideBar, setToggleSideBar] = useState<boolean>(false);
  return (
    <div className="min-h-screen">
      <AdSideBar
        toggleSideBar={toggleSideBar}
        setToggleSideBar={setToggleSideBar}
      />

      <div
        className={`${
          toggleSideBar ? "ml-70" : "ml-0"
        } transition-all duration-300`}
      >
        <AdminNavbar
          toggleSideBar={toggleSideBar}
          setToggleSideBar={setToggleSideBar}
        />
        <main><Outlet/></main>
      </div>
    </div>
  );
}

export default AdminLayout;
