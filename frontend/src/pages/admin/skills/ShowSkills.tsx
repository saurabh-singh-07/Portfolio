import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import toast from "react-hot-toast";
import api from "../../../api/api";
import { Trash } from "lucide-react";
import { RxUpdate } from "react-icons/rx";
import { useNavigate  } from "react-router-dom";
import Details from "../Ad-component.tsx/Details";

interface Skill {
  _id: string;
  name: string;
  category:
    | "Frontend"
    | "Backend"
    | "Database"
    | "Languages"
    | "Tools"
    | "Other";
  imgUrl: string;
}

const categories = [
  "Frontend",
  "Backend",
  "Database",
  "Languages",
  "Tools",
  "Other",
];
interface ShowSkillsProps {
  setSkillCount: React.Dispatch<React.SetStateAction<number>>;
}

const skillColors: Record<string, string> = {
  React:
    "text-cyan-500 bg-cyan-500/10 border-cyan-500/50",
  HTML5 : "text-orange-600 bg-orange-500/10 border-orange-500/50",
  JavaScript:
    "text-yellow-500 bg-yellow-500/10 border-yellow-500/50",
  TypeScript:
    "text-blue-500 bg-blue-500/10 border-blue-500/50",
  "Tailwind CSS":
    "text-sky-500 bg-sky-500/10 border-sky-500/50",
  Node:
    "text-green-500 bg-green-500/10 border-green-500/50",
  Express:
    "text-gray-600 bg-gray-500/10 border-gray-500/50",
  MongoDB:
    "text-green-600 bg-green-500/10 border-green-500/50",
  MySQL:
    "text-orange-500 bg-orange-500/10 border-orange-500/50",
  Cpp:
    "text-blue-600 bg-blue-500/10 border-blue-500/50",
  CSS3 : "text-blue-600 bg-blue-500/10 border-blue-500/50",
  GIT : "text-gray-600 bg-gray-500/10 border-gray-500/50",
  GitHub : "text-gray-600 bg-gray-500/10 border-gray-500/50",
  Docker : "text-blue-600 bg-blue-500/10 border-blue-500/50",
  SQL : "text-blue-600 bg-blue-500/10 border-blue-500/50",
};

function ShowSkills({setSkillCount} : ShowSkillsProps) {
  const navigate = useNavigate();
  const [data, setData] = useState<Skill[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    try {
      const response = await api.get("/api/Skill/getSkills");

      console.log("Skills:", response.data);

      setData(response.data.data);
      setSkillCount(response?.data?.count)
    } catch (error: any) {
      console.error(error);

      toast.error(
        error.response?.data?.message ||
          "Failed to load skills"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id : string) => {
    try {
      const confirm = window.confirm(
        "Are you sure you want to delete this skill ?",
      );
      if (!confirm) return;
      const response = await api.delete(`/api/Skill/deleteSkill/${id}`)
      toast.success(response?.data?.message || "Skill deleted successfully")
      setData((prev) =>
      prev.filter((skill) => skill._id !== id)
    );
    } catch (error :any) {
      toast.error("someThing wrong...")
      console.error(error)
    }
  }

  const handleUpdate = (id: string) => {
  navigate(`/admin/updateSkill/${id}`);
};
  // Group skills according to category
  const groupedSkills = categories.map((category) => ({
    category,
    skills: data.filter(
      (skill) => skill.category === category
    ),
  }));

  if (loading) {
    return (
      <div className="w-full flex justify-center py-10">
        <p className="text-slate-500 dark:text-slate-300">
          Loading skills...
        </p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="px-5 py-5 w-full text-slate-700/90 
      dark:text-slate-100 dark:bg-blue-500/10 
      bg-slate-50 border border-slate-700/30 
      dark:border-blue-400/60 rounded"
    >
      {/* Heading */}
      <div>
        <h1 className="font-bold text-3xl">
          Skills
        </h1>

        <p className="mt-2 text-sm md:text-base text-slate-500 dark:text-slate-400">
          Technologies and tools I use to build modern
          web applications.
        </p>
      </div>

      {/* Categories */}
      <div className="py-4">
        {groupedSkills.map(
          ({ category, skills }) => {
            // Don't show empty categories
            if (skills.length === 0) return null;

            return (
              <div
                key={category}
                className="bg-blue-500/10 my-5 px-3 md:px-5
                rounded-br-xl rounded-tl-xl
                border-2 border-blue-400/40"
              >
                {/* Category */}
                <h2 className="text-2xl font-semibold py-5">
                  {category}
                </h2>

                {/* Skills */}
                <div
                  className="grid grid-cols-2 sm:grid-cols-3
                  md:grid-cols-4 lg:grid-cols-5 gap-4"
                >
                  {skills.map((skill) => (
                    <div
                      key={skill._id}
                      className={`
                        flex items-center flex-col
                        justify-center gap-2
                        my-2 w-full h-28
                        rounded-lg border
                        hover:scale-105
                        transition-all duration-300
                        cursor-pointer relative group
                        ${
                          skillColors[skill.name] ||
                          "text-green-500 bg-green-500/20 border-green-500/60"
                        }
                      `}
                    >
                      {/* Image */}
                      <div className="absolute top-1 right-2 items-center text-black hidden group-hover:flex">
                        <div onClick={()=> handleUpdate(skill._id)}><RxUpdate className="size-5"/></div>
                        <div onClick={()=> handleDelete(skill._id)}><Trash className="size-5"/></div>
                      </div>
                      <div className="w-9 h-9 md:w-11 md:h-11">
                        <img
                          src={skill.imgUrl}
                          alt={skill.name}
                          className="w-full h-full object-contain"
                        />
                      </div>

                      {/* Name */}
                      <h3 className="text-sm md:text-base font-medium text-center">
                        {skill.name}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
            );
          }
        )}
      </div>
    </motion.div>
  );
}

export default ShowSkills;