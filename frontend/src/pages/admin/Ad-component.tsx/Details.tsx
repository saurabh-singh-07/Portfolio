import { motion } from "motion/react";
import { FaGraduationCap } from "react-icons/fa";
import { FiMessageSquare, FiStar } from "react-icons/fi";
import { GiSuitcase } from "react-icons/gi";
import type { Detailtype } from "../../../assets/assets";

interface propsTypes {
  skillCount : number,
  projectCount : number,
  messageCount : number,
  educationCount : number
}


function Details({skillCount, projectCount, messageCount, educationCount}:propsTypes) {

  const data: Detailtype[] = [
  {
    id: "1",
    name: "Totals Projects",
    total: projectCount,
    description: "No change",
    style: "text-purple-500 bg-purple-500/20",
    Logo: GiSuitcase,
  },
  {
    id: "2",
    name: "Messages",
    total: messageCount,
    description: "No change",
    style: "text-green-500 bg-green-500/20",
    Logo: FiMessageSquare,
  },
  {
    id: "3",
    name: "Educations",
    total: educationCount,
    description: "No Change",
    style: "text-blue-500 bg-blue-500/20",
    Logo: FaGraduationCap,
  },
  {
    id: "4",
    name: "Skills",
    total: skillCount,
    description: "No change",
    style: "text-red-500 bg-red-500/20",
    Logo: FiStar,
  },
];
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className=" grid grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-375 lg:px-5 px-10"
    >
      {data.map((item) => {
        const Logo = item.Logo;
        return (
          <div
            className="w-full h-35 flex items-center justify-center gap-x-4 dark:text-slate-50 text-slate-700/90 dark:bg-blue-400/30 bg-slate-50 border dark:border-blue-500/60 border-slate-500/40 rounded-tl-xl rounded-br-xl "
            key={item.id}
          >
            <div className={`${item.style}  rounded-full`}>
              <Logo className="size-12 p-2" />
            </div>
            <div>
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-3xl font-bold">{item.total}</p>
            </div>
          </div>
        );
      })}
    </motion.div>
  );
}

export default Details;
