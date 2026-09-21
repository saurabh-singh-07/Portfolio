import {Code2,Database,Globe,Server,Layers,Terminal,GitBranch,ArrowUpRight,} from "lucide-react";
import { motion } from "motion/react";
import api from "../../api/api";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import type { Skill } from "../../assets/assets";


const categoryConfig: Record<
  string,
  {
    title: string;
    description: string;
    icon: React.ReactNode;
  }
> = {
  Languages: {
    title: "Programming Languages",
    description:
      "Core languages I use for problem-solving and software development.",
    icon: <Terminal size={21} />,
  },

  Frontend: {
    title: "Frontend Development",
    description:
      "Technologies I use to build responsive and interactive user interfaces.",
    icon: <Globe size={21} />,
  },

  Backend: {
    title: "Backend Development",
    description:
      "Server-side technologies used to build scalable APIs and applications.",
    icon: <Server size={21} />,
  },

  Database: {
    title: "Databases",
    description:
      "Database technologies I use for storing and managing application data.",
    icon: <Database size={21} />,
  },

  Tools: {
    title: "Development Tools",
    description:
      "Tools that support my development, version control, and workflow.",
    icon: <GitBranch size={21} />,
  },

  Other: {
    title: "Other Technologies",
    description:
      "Additional technologies and concepts used across my projects.",
    icon: <Layers size={21} />,
  },
};

export default function Skills() {
  const [data, setData] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSkills();
  }, []);

  const getSkills = async () => {
    try {
      const response = await api.get("/Skill/getSkills");

      console.log("API RESPONSE:", response.data?.data);
      setData(response?.data?.data || []);

      toast.success("Data fetched successfully...");
    } catch (error: any) {
      console.error(error);
      toast.error("Something went wrong...");
    } finally {
      setLoading(false);
    }
  };

  // Group skills according to category
  const groupedSkills = data.reduce<Record<string, Skill[]>>(
    (groups, skill) => {
      if (!groups[skill.category]) {
        groups[skill.category] = [];
      }

      groups[skill.category].push(skill);

      return groups;
    },
    {}
  );

  // Keep your preferred section order
  const categoryOrder = [
    "Languages",
    "Frontend",
    "Backend",
    "Database",
    "Tools",
    "Other",
  ];

  return (
    <section className="relative min-h-screen overflow-hidden px-4 py-20 sm:px-6 lg:px-10">

      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 z-0 h-87.5 w-87.5 -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px] dark:bg-blue-500/10" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >

          {/* Small label */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400">
            <Code2 size={16} />
            Technical Skills
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Skills &{" "}
            <span className="text-blue-600 dark:text-blue-400">
              Technologies
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-500 dark:text-slate-400 sm:text-base">
            A collection of technologies, tools, and programming languages
            I use to build modern and scalable web applications.
          </p>

          {/* Decorative line */}
          <div className="mx-auto mt-7 h-px w-24 bg-linear-to-r from-transparent via-blue-500 to-transparent" />
        </motion.div>

        {loading && (
          <div className="py-20 text-center">
            <p className="text-slate-500 dark:text-slate-400">
              Loading skills...
            </p>
          </div>
        )}

        {!loading && data.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-slate-500 dark:text-slate-400">
              No skills found.
            </p>
          </div>
        )}
        {!loading && data.length > 0 && (
          <div className="space-y-7">
            {categoryOrder.map((category, sectionIndex) => {
              const skills = groupedSkills[category];
              if (!skills || skills.length === 0) {
                return null;
              }
              const config = categoryConfig[category];
              return (
                <motion.section
                  key={category}
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: sectionIndex * 0.05,
                  }}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5 dark:border-blue-500/15 dark:bg-[#0e223e8d] dark:hover:border-blue-500/35 dark:hover:shadow-blue-500/5 sm:p-7"
                >

                  {/* Top blue line */}
                  <div className="absolute left-0 top-0 h-0.5 w-0 bg-blue-500 transition-all duration-500 group-hover:w-full" />
                  <div className="mb-7 flex items-start gap-4">

                    {/* Icon */}
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-200 bg-blue-50 text-blue-600 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400">
                      {config?.icon}
                    </div>

                    <div>
                      <h2 className="text-lg font-semibold text-slate-900 dark:text-white sm:text-xl">
                        {config?.title || category}
                      </h2>

                      <p className="mt-1.5 max-w-2xl text-sm leading-6 text-slate-500 dark:text-slate-400">
                        {config?.description}
                      </p>
                    </div>
                  </div>


                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">

                    {skills.map((skill) => (
                      <motion.div
                        key={skill._id}
                        whileHover={{ y: -4 }}
                        transition={{ duration: 0.2 }}
                        className="group/skill relative flex min-h-37.5 flex-col items-center justify-center rounded-xl border border-slate-200 bg-slate-50/70 p-5 transition-all duration-300 hover:border-2 hover:border-blue-300 hover:bg-white hover:shadow-md hover:shadow-blue-500/5 dark:border-blue-700/50 dark:bg-[#031b3be2] dark:hover:border-blue-500/70 dark:hover:bg-[#0c1d34] dark:hover:shadow-lg dark:hover:shadow-blue-500/5"
                      >

                        {/* Hover corner icon */}
                        <ArrowUpRight
                          size={15}
                          className="absolute right-3 top-3 text-slate-300 opacity-0 transition-all duration-200 group-hover/skill:text-blue-500 group-hover/skill:opacity-100 dark:text-slate-600"
                        />

                        {/* Skill logo */}
                        <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-slate-100 bg-white p-3 shadow-sm dark:border-slate-700 dark:bg-[#0f223a]">

                          <img
                            src={skill.imgUrl}
                            alt={skill.name}
                            loading="lazy"
                            className="h-full w-full object-contain transition-transform duration-300 group-hover/skill:scale-110"
                          />

                        </div>

                        {/* Skill name */}
                        <h3 className="mt-4 text-center text-sm font-semibold text-slate-700 dark:text-slate-200">
                          {skill.name}
                        </h3>

                        {/* Bottom accent */}
                        <div className="mt-3 h-0.5 w-0 rounded-full bg-blue-500 transition-all duration-300 group-hover/skill:w-8" />

                      </motion.div>
                    ))}

                  </div>
                </motion.section>
              );
            })}

          </div>
        )}
      </div>
    </section>
  );
}