import { motion } from "motion/react";
import type { IconType } from "react-icons";
import { Link } from "react-router-dom";
import {data} from '../../../Data/QuckiAction.ts'



function QuickActions() {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-slate-50 my-20 dark:bg-blue-300/10 py-5 border dark:border-slate-50/20 border-slate-500/30 rounded w-full lg:my-10"
    >
      <div>
        <h1 className="dark:text-purple-50 text-slate-700/80 text-3xl font-bold px-4 py-8">
          Quick Actions
        </h1>
        <div className="grid grid-cols-2 gap-5 m-4">
          {data.map((data) => {
            const Icon: IconType = data.Logo;
            return (
              <Link key={data.id} to={data.link}
                className={`${data.style} min-h-25 flex flex-col items-center justify-center border-2 hover:scale-105 transition-all duration-300 rounded`}
              >
                <Icon className="size-8" />
                <p>{data.name}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

export default QuickActions;
