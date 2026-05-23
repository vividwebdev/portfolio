import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaWordpress,
  FaDocker,
  FaPython,
  FaGitAlt,
  FaWix,
  FaGithub
} from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiJavascript,
  SiExpress,
  SiBootstrap,
  SiMysql,
  SiJupyter,
  SiGooglecolab,
  SiAsana,
  SiSlack,
  SiMailchimp,
  SiElementor,
  SiHtml5,
  SiFramer,
  SiCss,
  SiShadcnui
} from "react-icons/si";
import { IoLogoTableau } from "react-icons/io5";
import {
  PowerBiIcon,
  GoHighLevelIcon,
  ClickFunnelsIcon,
  KlaviyoIcon
} from "../assets/icons/otherIcons";

const TextBadge = ({ text, color }) => (
  <span
    style={{ color, fontSize: 11, fontWeight: 800, letterSpacing: "-0.5px" }}
  >
    {text}
  </span>
);

const categories = [
  {
    title: "Frontend",
    color: "#2E75B6",
    skills: [
      { label: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { label: "CSS3", icon: SiCss, color: "#1572B6" },
      { label: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { label: "React.js", icon: FaReact, color: "#61DAFB" },
      { label: "Tailwind", icon: SiTailwindcss, color: "#38BDF8" },
      { label: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
      { label: "Shadcn UI", icon: SiShadcnui, color: "#000000" }
    ]
  },
  {
    title: "Backend",
    color: "#16a34a",
    skills: [
      { label: "Node.js", icon: FaNodeJs, color: "#68A063" },
      { label: "Express.js", icon: SiExpress, color: "#000000" },
      { label: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { label: "MySQL", icon: SiMysql, color: "#4479A1" }
    ]
  },
  {
    title: "DevOps",
    color: "#dc2626",
    skills: [
      { label: "Git", icon: FaGitAlt, color: "#F05032" },
      { label: "GitHub", icon: FaGithub, color: "#000000" },
      { label: "Docker", icon: FaDocker, color: "#2496ED" }
    ]
  },
  {
    title: "Data & Analytics",
    color: "#d97706",
    skills: [
      { label: "Python", icon: FaPython, color: "#3776AB" },
      { label: "Power BI", icon: PowerBiIcon, color: "#F2C811" },
      { label: "Tableau", icon: IoLogoTableau, color: "#E97627" },
      { label: "Jupyter", icon: SiJupyter, color: "#F37626" },
      { label: "Google Colab", icon: SiGooglecolab, color: "#F9AB00" }
    ]
  },
  {
    title: "CMS & Builders",
    color: "#7c3aed",
    skills: [
      { label: "WordPress", icon: FaWordpress, color: "#21759B" },
      { label: "Elementor", icon: SiElementor, color: "#92003B" },
      { label: "Framer", icon: SiFramer, color: "#000000" },
      { label: "Wix Studio", icon: FaWix, color: "#000000" }
    ]
  },
  {
    title: "Marketing & CRM",
    color: "#0891b2",
    skills: [
      { label: "GoHighLevel", icon: GoHighLevelIcon, color: "#000000" },
      { label: "ClickFunnels", icon: ClickFunnelsIcon, color: "#e8590c" },
      { label: "Mailchimp", icon: SiMailchimp, color: "#FFE01B" },
      { label: "Klaviyo", icon: KlaviyoIcon, color: "#000000" }
    ]
  },
  {
    title: "Collaboration",
    color: "#db2777",
    skills: [
      { label: "Asana", icon: SiAsana, color: "#F06A6A" },
      { label: "Slack", icon: SiSlack, color: "#4A154B" }
    ]
  },
  {
    title: "Management",
    color: "#64748b",
    skills: [
      {
        label: "Project Mgmt",
        icon: () => <TextBadge text="PM" color="#2E75B6" />,
        color: ""
      },
      {
        label: "ISO 9001:2015",
        icon: () => <TextBadge text="ISO" color="#16a34a" />,
        color: ""
      },
      {
        label: "HR Management",
        icon: () => <TextBadge text="HR" color="#dc2626" />,
        color: ""
      },
      {
        label: "Customer Service",
        icon: () => <TextBadge text="CS" color="#d97706" />,
        color: ""
      }
    ]
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08 }
  })
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white dark:bg-gray-950">
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
            What I Work With
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mt-2">
            Skills & Tools
          </h2>
          <div className="mt-3 mx-auto w-12 h-1 bg-[#2E75B6] rounded-full" />
        </motion.div>

        {/* Category grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="rounded-xl border border-gray-100 dark:border-gray-800
                         bg-gray-50 dark:bg-gray-900 overflow-hidden
                         hover:shadow-lg transition-shadow duration-300"
            >
              {/* Card header */}
              <div
                className="px-5 py-3"
                style={{
                  backgroundColor: cat.color + "18",
                  borderBottom: `2px solid ${cat.color}`
                }}
              >
                <h3
                  className="font-semibold text-sm"
                  style={{ color: cat.color }}
                >
                  {cat.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="p-5 flex flex-wrap gap-2">
                {cat.skills.map(({ label, icon: Icon, color }) => (
                  <span
                    key={label}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs
                               font-medium bg-white dark:bg-gray-800
                               text-gray-700 dark:text-gray-300
                               border border-gray-200 dark:border-gray-700
                               hover:border-[#2E75B6]/50 hover:-translate-y-0.5
                               transition-all duration-200 cursor-default shadow-sm"
                  >
                    <span className="flex items-center justify-center w-4 h-4">
                      <Icon size={13} style={{ color }} />
                    </span>
                    {label}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
