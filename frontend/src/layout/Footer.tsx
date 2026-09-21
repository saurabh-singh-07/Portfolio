import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div className="flex flex-row justify-around mt-15 mb-5 py-5 text-slate-800 dark:text-zinc-200">
        <div className="mb-10 md:my-2">
          <p className="textStyle text-center text-[27px] lg:text-3xl font-semibold mb-5">
            Sauabh Singh
          </p>
          <div className="flex items-center flex-col gap-5">
            <a className="flex gap-x-2" href="#">
              <FaGithub className="size-6" /> Github
            </a>
            <a className="flex gap-x-2 hover:text-blue-500" href="#">
              <FaLinkedin className="size-6" /> Linkedin
            </a>
            <a className="flex gap-x-2 hover:text-pink-400!" href="#">
              <FaInstagram className="size-6"/> Instagram
            </a>
          </div>
        </div>
        <div className="mb-10  md:my-2 text-center">
          <h3 className="text-xl font-bold text-slate-700/90 dark:text-slate-200">Quick Links</h3>
          <ul className="flex flex-col items-center gap-5 mt-4 text-lg">
            <Link className="textHoverStyle " to="#">Home</Link>
            <Link className="textHoverStyle" to="#">Projects</Link>
            <Link className="textHoverStyle" to="#">About</Link>
            <Link className="textHoverStyle" to="#">Contact</Link>
          </ul>
        </div>
      </div>

      <hr />
      <div className="text-center my-6 font-medium text-slate-600 dark:text-slate-200">
        <p>
          @2026 <a className="hover:text-blue-500 transition-colors duration-300" href="#">Sauabh Singh</a>. All rights reserved...
        </p>
        <p>Made with @ using MERN Stack..</p>
      </div>
    </div>
  );
}

export default Footer;
