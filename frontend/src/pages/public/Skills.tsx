import { Icon } from "lucide-react";
import type { IconType } from "react-icons";
import { FaHtml5, FaReact } from "react-icons/fa";
interface skillsTypes {
  name:string,
  Logo :IconType,
  color: string,
}
const data:skillsTypes[] = [
  {
    name: "React.js",
    Logo: FaReact,
    color: "text-blue-400"
  },
  {
    name: "HTML",
    Logo: FaHtml5,
    color: "text-orange-400"

  },
  {
    name: "React.js",
    Logo: FaReact,
    color: "text-blue-400"

  },
  {
    name: "React.js",
    Logo: FaReact ,
    color: "text-blue-400"

  }
];
function Skills() {
  return (
    <section className="my-25" id="#skills">
      <div>
        <h2 className="text-center text-3xl md:text-4xl font-bold text-slate-700/85 dark:text-slate-50">
          My tech{" "}
          <span className="bg-linear-to-r from-cyan-400 via-blue-500 to-violet-600 bg-clip-text text-transparent">
            Stack
          </span>
        </h2>
        <p className="text-center text-slate-700/70 dark:text-slate-300">
          Mastering the tools that build modern web
        </p>
      </div>
      <div>
        <h3 className="text-slate-700/90 dark:text-slate-200 text-2xl font-semibold px-8 mt-20">Frontend Development</h3>
        <div className="grid gap-10 mb-10 mt-5 sm:grid-cols-2 grid-cols-2 md:grid-cols-4 p-8 md:p-15">
          {/* frontend section */}
          {data.map((data, i) => {
            const Icon = data.Logo;
            return(
            <div className="bg-blue-300/20 text-2xl text-slate-700/90 dark:text-slate-200 font-semibold border border-blue-500 rounded-xl hover:-translate-y-1.5 hover:scale-105 transition-all duration-300">
              <div className="flex flex-col items-center h-35 min-w-35 justify-center">
                <div className={data.color}>
                  <Icon className={`text-3xl ${data.color}`}/>
                </div>
                <p>{data.name}</p>
              </div>
            </div>
          )})}
        </div>
      </div>
    </section>
  );
}

export default Skills;
