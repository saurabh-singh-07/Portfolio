'use client';

import {
  Code2,
  ExternalLink,
  GraduationCap,
  MapPin,
  Rocket,
  Sparkles,
} from "lucide-react";
import { motion } from "motion/react";
import { FaGithub } from "react-icons/fa";

export default function About() {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React.js",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "C++",
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen overflow-hidden px-4 py-24 sm:px-6 md:px-16 lg:px-24 xl:px-32"
    >
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0 -z-20">
        <div className="absolute left-1/2 top-20 size-[450px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[140px] dark:bg-blue-500/15" />

        <div className="absolute bottom-0 left-0 size-[300px] rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="absolute right-0 top-[40%] size-[300px] rounded-full bg-indigo-500/10 blur-[120px]" />
      </div>

      {/* Grid */}
      <div
        className="
          pointer-events-none absolute inset-0 -z-10 opacity-40
          [background-image:linear-gradient(to_right,#64748b12_1px,transparent_1px),linear-gradient(to_bottom,#64748b12_1px,transparent_1px)]
          [background-size:60px_60px]
          [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]
        "
      />

      {/* ================= HEADER ================= */}

      <motion.div
        className="mx-auto max-w-3xl text-center"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div
          className="
            mb-6 inline-flex items-center gap-2 rounded-full
            border border-blue-500/20
            bg-blue-500/5
            px-4 py-2
            text-sm font-medium
            text-blue-600
            dark:text-blue-400
          "
        >
          <Sparkles className="size-4" />
          About Me
        </div>

        <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl md:text-6xl dark:text-white">
          Turning ideas into
          <br />
          <span
            className="
              bg-gradient-to-r
              from-cyan-400
              via-blue-500
              to-indigo-600
              bg-clip-text
              text-transparent
            "
          >
            digital experiences.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg dark:text-slate-400">
          I'm a passionate Frontend & MERN Stack Developer who enjoys
          building modern, responsive, and user-friendly web applications.
        </p>
      </motion.div>

      {/* ================= MAIN CONTENT ================= */}

      <div className="mx-auto mt-20 grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-5">

        {/* ================= PROFILE CARD ================= */}

        <motion.div
          className="
            relative overflow-hidden rounded-3xl
            border border-slate-200/80
            bg-white/70
            p-8
            shadow-xl shadow-blue-500/5
            backdrop-blur-xl
            lg:col-span-2
            dark:border-white/[0.08]
            dark:bg-slate-950/60
          "
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Glow */}
          <div className="absolute -right-20 -top-20 size-60 rounded-full bg-blue-500/15 blur-[100px]" />

          <div className="relative z-10">

            {/* Avatar */}
            <div
              className="
                mx-auto flex size-32 items-center justify-center
                rounded-full
                bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600
                p-[2px]
                shadow-xl shadow-blue-500/20
              "
            >
              <div
                className="
                  flex size-full items-center justify-center
                  rounded-full
                  bg-slate-100
                  text-3xl font-bold
                  text-blue-600
                  dark:bg-slate-950
                  dark:text-blue-400
                "
              >
                SS
              </div>
            </div>

            <h2 className="mt-6 text-center text-2xl font-semibold text-slate-900 dark:text-white">
              Saurabh Singh
            </h2>

            <p className="mt-2 text-center text-blue-600 dark:text-blue-400">
              Frontend & MERN Stack Developer
            </p>

            {/* Details */}
            <div className="mt-8 space-y-4">

              <div className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
                <MapPin className="size-5 text-blue-500" />
                India
              </div>

              <div className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
                <GraduationCap className="size-5 text-blue-500" />
                BCA Student
              </div>

              <div className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
                <Code2 className="size-5 text-blue-500" />
                MERN Stack
              </div>

            </div>
          </div>
        </motion.div>

        {/* ================= ABOUT CONTENT ================= */}

        <motion.div
          className="
            rounded-3xl
            border border-slate-200/80
            bg-white/70
            p-8 sm:p-10
            shadow-xl shadow-blue-500/5
            backdrop-blur-xl
            lg:col-span-3
            dark:border-white/[0.08]
            dark:bg-slate-950/60
          "
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold tracking-wider text-blue-600 dark:text-blue-400">
            WHO I AM
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">
            I love building things for the web.
          </h2>

          <div className="mt-6 space-y-5 leading-8 text-slate-500 dark:text-slate-400">
            <p>
              I'm a BCA student and a passionate developer interested in
              creating clean, modern, and meaningful digital experiences.
              I enjoy taking an idea and turning it into a functional,
              responsive web application.
            </p>

            <p>
              My primary focus is frontend development with React and
              TypeScript, while I'm also comfortable working with the
              complete MERN stack to build full-stack applications.
            </p>

            <p>
              I'm continuously learning new technologies, improving my
              problem-solving skills, and working on projects that help me
              become a better developer.
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://github.com/saurabh-singh-07"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group flex items-center gap-2 rounded-full
                bg-gradient-to-r from-blue-600 to-indigo-600
                px-6 py-3 text-sm font-medium text-white
                shadow-lg shadow-blue-500/20
                transition hover:-translate-y-0.5
              "
            >
              <FaGithub className="size-4" />
              GitHub
              <ExternalLink className="size-3.5 transition group-hover:translate-x-0.5" />
            </a>

            <a
              href="#contact"
              className="
                flex items-center gap-2 rounded-full
                border border-slate-300
                bg-white/50
                px-6 py-3 text-sm font-medium
                text-slate-700
                transition hover:border-blue-500 hover:text-blue-600
                dark:border-white/10
                dark:bg-white/5
                dark:text-slate-200
                dark:hover:border-blue-500
                dark:hover:text-blue-400
              "
            >
              Let's Connect
            </a>
          </div>
        </motion.div>
      </div>

      {/* ================= SKILLS ================= */}

      <motion.div
        className="mx-auto mt-10 max-w-6xl"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div
          className="
            rounded-3xl
            border border-slate-200/80
            bg-white/70
            p-8
            backdrop-blur-xl
            dark:border-white/[0.08]
            dark:bg-slate-950/60
          "
        >
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
              <Rocket className="size-5" />
            </div>

            <div>
              <h2 className="font-semibold text-slate-900 dark:text-white">
                Technologies I Work With
              </h2>

              <p className="text-sm text-slate-500 dark:text-slate-400">
                Tools and technologies I use to build projects.
              </p>
            </div>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                className="
                  rounded-full
                  border border-blue-500/10
                  bg-blue-500/5
                  px-4 py-2
                  text-sm font-medium
                  text-blue-700
                  transition
                  hover:border-blue-500/30
                  hover:bg-blue-500/10
                  dark:text-blue-300
                "
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ================= BOTTOM ================= */}

      <motion.div
        className="mx-auto mt-10 max-w-6xl rounded-3xl border border-blue-500/10 bg-gradient-to-r from-blue-500/5 via-indigo-500/5 to-cyan-500/5 p-8 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
          Always learning. Always building.
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-slate-500 dark:text-slate-400">
          My goal is to keep improving my skills and build products that
          solve real problems and create great user experiences.
        </p>
      </motion.div>
    </section>
  );
}