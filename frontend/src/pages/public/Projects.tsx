import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveLink: string;
  githubLink: string;
}

const projects: Project[] = [
  {
    title: "Thumbnest – AI Thumbnail Generator",
    description:
      "A full-stack AI-powered web application that generates attractive thumbnails from user prompts with authentication and image management.",
    image: "/projects/thumbnest.png",
    technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDB"],
    liveLink: "https://thumbnest.vercel.app/",
    githubLink: "https://github.com/saurabh-singh-07/Thumbnest",
  },
  {
    title: "ICTCricinfo",
    description:
      "A modern cricket information platform providing live matches, player details, latest cricket news and upcoming international series.",
    image: "/projects/ictcricinfo.png",
    technologies: ["React", "JavaScript", "Tailwind CSS", "API"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "RestroBooks",
    description:
      "A restaurant management and booking web application designed to provide a smooth experience for customers and restaurant owners.",
    image: "/projects/restrobooks.png",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Node.js"],
    liveLink: "#",
    githubLink: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            My Work
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-700/90 dark:text-white md:text-5xl">
            Featured{" "}
            <span className="bg-linear-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-zinc-400">
            A collection of projects I've built using modern technologies,
            focusing on clean design, performance and real-world solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="
                group overflow-hidden rounded-2xlborder border-slate-800 dark:bg-slate-900/70 bg-slate-300/80 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-2  hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10">
              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden bg-slate-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    h-full w-full object-cover transition duration-500 group-hover:scale-105 "
                />

                {/* Image Overlay */}
                <div
                  className=" absolute inset-0 bg-linear-to-t from-slate-950/60 via-transparent to-transparent opacity-0 transition group-hover:opacity-100 "
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h2 className="text-xl font-semibold transition-colors text-slate-800/80 dark:text-white group-hover:text-blue-400">
                  {project.title}
                </h2>

                <p className="mt-3 line-clamp-3 text-sm leading-6 dark:text-slate-400 text-slate-500">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className=" rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium dark:text-blue-300 text-slate-600">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-6 flex items-center gap-3">
                  {/* Live Demo */}
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-linear-120 from-blue-500/90 to-indigo-600 px-4 py-2.5 text-sm font-medium text-white transition-all hover:from-blue-500 hover:to-indigo-500 hover:shadow-lg hover:shadow-blue-500/20"
                  >
                    Live Demo
                    <ArrowUpRight size={17} />
                  </a>

                  {/* GitHub */}
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-centerjustify-center rounded-lg border border-slate-700 dark:bg-slate-900 bg-slate-900/70 px-4 py-2.5 text-slate-300 transition-all hover:border-blue-500 hover:bg-blue-500/10 hover:text-slate-700"
                    aria-label={`View ${project.title} source code`}
                  >
                    <FaGithub size={19} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
