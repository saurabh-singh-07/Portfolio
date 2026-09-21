import { NavLink, Outlet } from 'react-router-dom'
import DarkModeController from '../components/DarkModeController'
import SideBar from './Sidebar'
import { useState } from 'react'
import { Menu } from 'lucide-react';

function Navbar() {
  const [toggleSideBar, setToggleSideBar] = useState(false);
  return (
    <>
    <div 
    className='flex items-center justify-between py-3 px-5 h-fit w-full'>
      <div 
      className='textStyle sm:text-2xl md:text-[27px] lg:text-3xl font-semibold'>
        Sauabh Singh
      </div>
      <ul className='hidden text-slate-700/90 font-medium text-lg sm:flex items-center gap-x-7'>
        <NavLink to='/' className='underline underline-offset-4 dark:text-slate-100 textStyle '>Home</NavLink>
        <NavLink to='/projects' className='textHoverStyle'>Projects</NavLink>
        <NavLink to="/about" className='textHoverStyle'>About</NavLink>
        <NavLink to="/skills" className='textHoverStyle'>Skills</NavLink>
        <NavLink to="/contact" className='textHoverStyle'>Contact</NavLink>
        <DarkModeController/>
      </ul>

      
      <button className={`text-slate-800/90 md:hidden dark:text-white ${toggleSideBar ? 'hidden' : 'block'} `} onClick={() => setToggleSideBar(!toggleSideBar)}>
      <Menu />
      </button>
      <SideBar toggleSideBar={toggleSideBar} setToggleSideBar={setToggleSideBar}/>
    </div>
    <Outlet/>
    </>
  )
}

export default Navbar
