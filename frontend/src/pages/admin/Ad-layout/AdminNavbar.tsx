import { Menu } from "lucide-react";
import { motion } from "motion/react";
import DarkModeController from "../../../components/DarkModeController";
import type { propsTypes } from "../../../assets/assets";
import { useAuth } from "../../../context/AuthContex";

function AdminNavbar({ toggleSideBar, setToggleSideBar }: propsTypes) {
  const { isloggedIn, user } = useAuth();

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex items-center justify-between py-3 px-5 h-fit w-full max-w-375 border-b dark:border-white/20 border-black/20"
    >
      <div className="flex items-center">
        <Menu
          onClick={() => setToggleSideBar(!toggleSideBar)}
          className="size-10 dark:text-white text-gray-700/90 p-1 bg-white/10 border rounded mr-6"
        />
        <div className="">
          <h1 className="textStyle sm:text-2xl md:text-[27px] lg:text-3xl font-semibold">
            Welcome back, Admin!
          </h1>
          <span className="text-sm font-normal dark:text-white text-slate-700/80 pt-[-15px] pl-4">
            here's what's happing with your portfilo...
          </span>
        </div>
      </div>
      <div className="flex items-center gap-x-5">
        <DarkModeController />
        {isloggedIn && (
          <div className="dark:text-white hidden md:block text-slate-700/90 mr-3  p-2 px-4 ">
            <h1>Hello {user.name}</h1>
            <p className="text-sm mt-[-5px]">WelCome Back!...</p>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default AdminNavbar;
