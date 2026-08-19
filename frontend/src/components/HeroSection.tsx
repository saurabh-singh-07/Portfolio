import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGeeksforgeeks, SiLeetcode } from "react-icons/si";
import { ReactTyped } from "react-typed";

function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">

      {/* ================= SPOTLIGHT ================= */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute left-1/2 top-[45%] size-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/35 blur-[130px] dark:bg-blue-500/20"
        />
      </div>

      <div className="flex min-h-screen w-full flex-col justify-around lg:flex-row">
        {/* ================= LEFT ================= */}
        <div className="flex min-h-screen flex-col items-center justify-center px-6 pt-10 text-center lg:w-3/5 lg:items-start lg:px-20 lg:text-left">
          <h1 className="mt-10 text-3xl font-bold text-slate-800 dark:text-blue-500 md:text-4xl">
            Hello, I'm
            <br />
            <span className="mt-4 inline-block text-5xl text-slate-900 dark:text-slate-100 sm:text-6xl md:text-7xl">
              SAURABH SINGH
            </span>
          </h1>

          {/* Typing Effect */}
          <h2
            className="my-4min-h-[100px] text-4xl font-bold md:min-h-0 md:text-5xl bg-linear-to-r from-indigo-600 via-violet-600 to-purple-700 bg-clip-text text-transparent"
          >
            <ReactTyped
              strings={[
                "Frontend Developer",
                "MERN Stack Developer",
                "React.js Developer",
                "JavaScript Developer",
              ]}
              typeSpeed={70}
              backSpeed={40}
              backDelay={1500}
              loop
            />
          </h2>

          {/* Description */}
          <div className="my-8 max-w-2xl px-2 lg:px-0">
            <p className="text-lg leading-8 text-slate-500 dark:text-slate-400 md:text-xl">
              I'm a passionate Frontend & MERN Stack Developer focused on
              building modern, responsive, and user-friendly web applications
              with clean, scalable code.
            </p>
          </div>

          <div className="flex flex-col items-center gap-7 lg:items-start">
            {/* Email */}
            <a
              href="mailto:ajinkyabisht75@gmail.com"
              className="group flex items-center gap-3 rounded-full border border-slate-300/60 bg-white/50 px-5 py-2 text-sm text-slate-700 shadow-sm backdrop-blur-md transition hover:border-blue-400 hover:shadow-blue-500/10 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 "
            >
              <Mail className="size-9 rounded-full bg-blue-500 p-2 text-white transition group-hover:scale-105" />
              ajinkyabisht75@gmail.com
            </a>

            {/* Social Icons */}
            <div className="flex items-center gap-5">
              <a
                href="https://github.com/saurabh-singh-07"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub className="iconStyle transition duration-300 hover:-translate-y-1" />
              </a>

              <a
                href="https://www.linkedin.com/in/saurabh-singh-577a83341/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="iconStyle transition duration-300 hover:-translate-y-1 hover:text-blue-500" />
              </a>

              <a
                href="https://leetcode.com/u/EchWQwNHUS/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode"
              >
                <SiLeetcode className="iconStyle transition duration-300 hover:-translate-y-1 hover:text-orange-400" />
              </a>

              <a
                href="https://www.geeksforgeeks.org/profile/ajinkya07"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GeeksforGeeks"
              >
                <SiGeeksforgeeks className="iconStyle transition duration-300 hover:-translate-y-1 hover:text-green-500" />
              </a>

            </div>
          </div>

          {/* Buttons */}
          <div className="my-10 flex flex-col gap-4 sm:flex-row sm:gap-6">

            <button
              className="rounded-full bg-linear-to-r from-blue-500 to-indigo-600 px-7 py-3 font-medium text-white shadow-lg shadow-orange-500/20 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/30 "
            >
              Get in Touch
            </button>

            <button
              className="rounded-full border border-slate-300 bg-white/50 px-7 py-3 font-medium text-slate-700 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-blue-400 hover:text-blue-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:border-blue-500 dark:hover:text-blue-400"
            >
              View Resume
            </button>

          </div>
        </div>

        {/* ================= RIGHT ================= */}
        <div className="flex min-h-[400px] w-full items-center justify-center lg:min-h-screen lg:w-2/5">

          {/* Replace this with your image/component */}
          <div className="relative flex size-72 items-center justify-center rounded-full border border-orange-500/20 bg-orange-500/5 backdrop-blur-xl md:size-96">

            <div className="absolute inset-5 rounded-full border border-orange-500/20" />

            <div className="absolute inset-10 rounded-full border border-orange-500/10" />

            <span className="text-xl font-medium text-orange-500">
              Your Image
            </span>

          </div>

        </div>

      </div>
    </section>
  );
}

export default HeroSection;