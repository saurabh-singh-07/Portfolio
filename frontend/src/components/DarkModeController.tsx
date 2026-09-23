import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

function DarkModeController() {
    const [darkMode, setDarkMode] = useState( () => {
         return localStorage.getItem('theme') === 'dark'});
    
    useEffect(()=>{
        if(darkMode){
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme','dark')

        }else{
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }

    },[darkMode]);
  return (
    <div onClick={()=> setDarkMode(!darkMode)} className='p-1 rounded dark:text-slate-50'>
          {
            darkMode ? <Sun className='size-8'/>:
            <Moon className='size-8'/>
          }
    </div>
  )
}

export default DarkModeController
