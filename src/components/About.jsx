import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaWordpress,
  FaDocker,
  FaPython
} from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  // SiPowerbi,
  // SiTableau,
  SiJavascript,
  SiExpress,
  SiGithub
} from "react-icons/si";
import { IoLogoTableau } from "react-icons/io5";
import profilePhoto from "../assets/profile.jpg";
import { PowerBiIcon } from "../assets/icons/otherIcons";

const TextIcon = ({ text, color }) => (
  <span
    style={{ color, fontSize: 13, fontWeight: 700, letterSpacing: "-0.5px" }}
  >
    {text}
  </span>
);

const stack = [
  { icon: FaReact, label: "React", color: "#61DAFB" },
  { icon: FaNodeJs, label: "Node.js", color: "#68A063" },
  { icon: SiJavascript, label: "JavaScript", color: "#F7DF1E" },
  { icon: SiExpress, label: "Express", color: "#000000" },
  { icon: SiMongodb, label: "MongoDB", color: "#47A248" },
  { icon: FaPython, label: "Python", color: "#3776AB" },
  { icon: PowerBiIcon, label: "Power BI", color: "#F2C811" },
  { icon: IoLogoTableau, label: "Tableau", color: "#E97627" },
  { icon: SiTailwindcss, label: "Tailwind", color: "#38BDF8" },
  { icon: FaWordpress, label: "WordPress", color: "#21759B" },
  { icon: FaDocker, label: "Docker", color: "#2496ED" },
  { icon: SiGithub, label: "GitHub", color: "#000000" }
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 }
  })
};

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#2E75B6] text-sm font-semibold uppercase tracking-widest">
            Who I Am
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mt-2">
            About Me
          </h2>
          <div className="mt-3 mx-auto w-12 h-1 bg-[#2E75B6] rounded-full" />
        </motion.div>

        {/* Main content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72">
              {/* Decorative border offset */}
              <div
                className="absolute -top-3 -left-3 w-full h-full rounded-full
                              border-2 border-[#2E75B6]/40"
              />
              <div
                className="absolute -bottom-3 -right-3 w-full h-full rounded-full
                              border-2 border-[#2E75B6]/20"
              />
              {/* Photo or placeholder */}
              <img
                src={profilePhoto}
                alt="Oni Akinwumi Peter"
                className="w-full h-full rounded-full object-cover "
              />
              {/* Replaced this placeholder div with the <img> once you have your photo:
                  <div
                className="relative w-full h-full rounded-full overflow-hidden
                              bg-gradient-to-br from-[#1B3A5C] to-[#2E75B6]
                              flex items-center justify-center"
              >
                <span className="text-white text-6xl font-bold select-none">
                  OA
                </span>
                </div> 
                */}
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="space-y-4"
          >
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm a{" "}
              <span className="text-[#2E75B6] font-semibold">
                Full-Stack Developer
              </span>{" "}
              and Engineering Physics graduate from Obafemi Awolowo University
              with hands-on experience building web platforms, CRM systems, data
              dashboards, and high-converting marketing funnels.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I've delivered remote freelance projects across healthcare, media,
              and digital marketing sectors — from enterprise GoHighLevel
              dashboards to immersive 3D web interfaces.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Beyond code, I hold certified qualifications in{" "}
              <span className="text-[#2E75B6] font-semibold">
                Project Management, Human Resources, Customer Service,
              </span>{" "}
              and ISO 9001:2015 Quality Management — bringing structured
              thinking and delivery discipline to every build.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {[
                "Lagos, Nigeria",
                "Open to Remote",
                "Full-Time & Freelance"
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium rounded-full
                             bg-[#2E75B6]/10 text-[#2E75B6] border border-[#2E75B6]/30"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stack icons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
          className="mt-16"
        >
          <p
            className="text-center text-sm text-gray-500 dark:text-gray-400 uppercase
                        tracking-widest mb-6 font-medium"
          >
            Tech I Work With
          </p>
          <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-4">
            {stack.map(({ icon: Icon, label, color }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-1.5 group cursor-default"
              >
                <div
                  className="p-2.5 rounded-xl bg-white dark:bg-gray-800
                                shadow-sm group-hover:shadow-md
                                transition-all duration-200 group-hover:-translate-y-1"
                >
                  <Icon size={24} style={{ color }} />
                </div>
                <span
                  className="text-xs text-gray-500 dark:text-gray-400 text-center
                                 group-hover:text-[#2E75B6] transition-colors duration-200"
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
