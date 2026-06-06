import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Personal Developer Portfolio",
    description:
      "A responsive single-page portfolio built with React, Tailwind CSS, and Framer Motion. Features dark/light mode, smooth scroll navigation, and Vercel deployment.",
    tags: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    live: "/",
    github: "https://github.com/vividwebdev/portfolio",
    status: "live"
  },
  {
    title: "Full-Stack Task Manager",
    description:
      "A full MERN stack task management app with JWT authentication, role-based access control, and Docker containerisation for consistent deployment.",
    tags: ["MongoDB", "Express.js", "React", "Node.js", "Docker", "JWT"],
    live: "https://taskmastr-ao.vercel.app/",
    github: "https://github.com/vividwebdev/taskmastr",
    status: "live"
  },
  {
    title: "COVID-19 Data Analysis Dashboard",
    description:
      "Exploratory data analysis of global COVID-19 trends using Python. Includes time-series visualisations, mortality rate analysis, and country-level comparisons.",
    tags: ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter"],
    live: "https://gist.github.com/vividwebdev/04b286d5d4c75f936546d99d3136b0af",
    github: "https://github.com/vividwebdev/covid19-data-analysis",
    status: "live"
  },
  {
    title: "Sales & Revenue Power BI Dashboard",
    description:
      "Interactive business intelligence dashboard visualising sales performance, revenue trends, and KPI tracking — built for executive-level reporting.",
    tags: ["Power BI", "Excel", "DAX", "Data Modelling"],
    live: null,
    github: null,
    status: "coming-soon"
  },
  {
    title: "Healthcare Business Website",
    description:
      "A professional multi-page healthcare website built with WordPress and Elementor. Includes appointment booking, service pages, and mobile-optimised layout.",
    tags: ["WordPress", "Elementor", "CSS", "SEO"],
    live: null,
    github: null,
    status: "coming-soon"
  },
  {
    title: "Marketing Funnel Landing Page",
    description:
      "A high-converting sales funnel landing page with email capture, MailChimp integration, and A/B tested copy — built for a digital product launch.",
    tags: ["HTML", "CSS", "JavaScript", "MailChimp"],
    live: null,
    github: null,
    status: "coming-soon"
  }
];

const tagColors = {
  React: { bg: "#61DAFB18", text: "#0ea5e9" },
  "Tailwind CSS": { bg: "#38BDF818", text: "#38bdf8" },
  "Framer Motion": { bg: "#a78bfa18", text: "#a78bfa" },
  Vite: { bg: "#F7DF1E18", text: "#ca8a04" },
  MongoDB: { bg: "#47A24818", text: "#16a34a" },
  "Express.js": { bg: "#ffffff18", text: "#9ca3af" },
  "Node.js": { bg: "#68A06318", text: "#65a30d" },
  Docker: { bg: "#2496ED18", text: "#2496ED" },
  JWT: { bg: "#ec489918", text: "#ec4899" },
  Python: { bg: "#3776AB18", text: "#3776AB" },
  Pandas: { bg: "#2E75B618", text: "#2E75B6" },
  Matplotlib: { bg: "#F7931E18", text: "#f97316" },
  Seaborn: { bg: "#4C72B018", text: "#6366f1" },
  Jupyter: { bg: "#F3762618", text: "#F37626" },
  "Power BI": { bg: "#F2C81118", text: "#ca8a04" },
  Excel: { bg: "#21734118", text: "#16a34a" },
  DAX: { bg: "#2E75B618", text: "#2E75B6" },
  "Data Modelling": { bg: "#64748b18", text: "#94a3b8" },
  WordPress: { bg: "#21759B18", text: "#21759B" },
  Elementor: { bg: "#92003B18", text: "#e11d48" },
  CSS: { bg: "#1572B618", text: "#1572B6" },
  SEO: { bg: "#16a34a18", text: "#16a34a" },
  HTML: { bg: "#E34F2618", text: "#E34F26" },
  JavaScript: { bg: "#F7DF1E18", text: "#ca8a04" },
  MailChimp: { bg: "#FFE01B18", text: "#ca8a04" }
};

const getTagStyle = (tag) =>
  tagColors[tag] || { bg: "#2E75B618", text: "#2E75B6" };

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 }
  })
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#2E75B6] text-sm font-semibold uppercase tracking-widest">
            What I've Built
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mt-2">
            Projects
          </h2>
          <div className="mt-3 mx-auto w-12 h-1 bg-[#2E75B6] rounded-full" />
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="group relative flex flex-col rounded-xl border border-gray-100
                         dark:border-gray-800 bg-gray-50 dark:bg-gray-900
                         hover:shadow-xl hover:-translate-y-1
                         transition-all duration-300 overflow-hidden"
            >
              {/* Top accent bar */}
              <div className="h-1 w-full bg-gradient-to-r from-[#1B3A5C] to-[#2E75B6]" />

              {/* Coming soon overlay badge */}
              {project.status === "coming-soon" && (
                <div className="absolute top-4 right-4 z-10">
                  <span
                    className="px-2.5 py-1 rounded-full text-xs font-semibold
                                   bg-gray-200 dark:bg-gray-700
                                   text-gray-500 dark:text-gray-400"
                  >
                    Coming Soon
                  </span>
                </div>
              )}

              {project.status === "live" && (
                <div className="absolute top-4 right-4 z-10">
                  <span
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-full
                                   text-xs font-semibold bg-green-100 dark:bg-green-900/30
                                   text-green-700 dark:text-green-400"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    Live
                  </span>
                </div>
              )}

              <div className="flex flex-col flex-1 p-6">
                {/* Title */}
                <h3
                  className="font-bold text-gray-900 dark:text-white text-base
                               leading-snug mb-2 pr-16"
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => {
                    const { bg, text } = getTagStyle(tag);
                    return (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-full text-xs font-medium"
                        style={{ backgroundColor: bg, color: text }}
                      >
                        {tag}
                      </span>
                    );
                  })}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-auto">
                  <a
                    href={project.live || "#"}
                    target={project.live ? "_blank" : undefined}
                    rel="noreferrer"
                    aria-disabled={!project.live}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold
                                transition-all duration-200 flex-1 justify-center
                                ${
                                  project.live
                                    ? "bg-[#2E75B6] hover:bg-[#2563a8] text-white shadow-sm hover:shadow-md"
                                    : "bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed"
                                }`}
                  >
                    <FaExternalLinkAlt size={11} />
                    Live Demo
                  </a>
                  <a
                    href={project.github || "#"}
                    target={project.github ? "_blank" : undefined}
                    rel="noreferrer"
                    aria-disabled={!project.github}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold
                                transition-all duration-200 flex-1 justify-center
                                ${
                                  project.github
                                    ? "border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-[#2E75B6] hover:text-[#2E75B6]"
                                    : "border border-gray-200 dark:border-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed"
                                }`}
                  >
                    <FaGithub size={13} />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center text-sm text-gray-400 dark:text-gray-600 mt-10"
        >
          More projects added as they are completed. Live links and GitHub repos
          updated on deployment.
        </motion.p>
      </div>
    </section>
  );
}
