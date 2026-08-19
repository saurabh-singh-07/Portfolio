import { Link } from 'react-router-dom'

function AdminNavbar() {
  return (
    <div 
    className='flex items-center justify-between py-3 px-5 h-fit w-full'>
      <div 
      className='textStyle sm:text-2xl md:text-[27px] lg:text-3xl font-semibold'>
        Sauabh Singh
      </div>
      <ul className='hidden text-slate-700/90 font-medium text-lg sm:flex items-center gap-x-7'>
        <Link to='/' className='underline underline-offset-4 dark:text-slate-100 textStyle '>Home</Link>
        <Link to='/projects' className='textHoverStyle'>Projects</Link>
        <Link to="/about" className='textHoverStyle'>About</Link>
        <Link to="/skills" className='textHoverStyle'>Skills</Link>
        <Link to="/contact" className='textHoverStyle'>Contact</Link>
      </ul>
    </div>
  )
}

export default AdminNavbar
