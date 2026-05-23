import { motion } from "framer-motion";
import { FaBriefcase, FaChalkboardTeacher, FaFlask } from "react-icons/fa";

const experiences = [
  {
    icon: FaBriefcase,
    iconColor: "#2E75B6",
    title: "Lead Freelance Web Developer & Funnel Optimisation Specialist",
    organisation: "Remote Contract Portfolio",
    period: "2024 – Present",
    current: true,
    points: [
      "Built enterprise CRM dashboards and custom funnels in GoHighLevel",
      "Migrated ClickFunnels Classic to 2.0 with zero data loss",
      "Deployed healthcare websites using WordPress and Elementor",
      "Designed immersive 3D web interfaces using Dora 3D",
      "Integrated APIs using webhooks to automate marketing workflows"
    ]
  },
  {
    icon: FaChalkboardTeacher,
    iconColor: "#16a34a",
    title: "Educator — National Youth Service Corps (NYSC)",
    organisation:
      "Christian Evangelical Fellowship of Nations Model Academy, Lokoja",
    period: "2026",
    current: false,
    points: [
      "Primary 4 class teacher using interactive, inquiry-based sessions",
      "Founded Mathematics Club and Readers Club (Primary 3 – JSS3)",
      "Built digital student progress trackers using Microsoft Excel"
    ]
  },
  {
    icon: FaFlask,
    iconColor: "#d97706",
    title: "Undergraduate Researcher — B.Sc. Thesis Project",
    organisation: "Obafemi Awolowo University, Ile-Ife",
    period: "2024",
    current: false,
    points: [
      "Investigated photoconductivity of PANI-PVK polymer composites",
      "Performed UV-Vis spectroscopy and analysed optical absorbance spectra",
      "Visualised experimental datasets and defended findings before examination panel"
    ]
  }
];

const fadeLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: i * 0.15 }
  })
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#2E75B6] text-sm font-semibold uppercase tracking-widest">
            What I've Done
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mt-2">
            Experience
          </h2>
          <div className="mt-3 mx-auto w-12 h-1 bg-[#2E75B6] rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 sm:left-8 top-0 bottom-0 w-px
                          bg-gradient-to-b from-[#2E75B6] via-gray-300 to-transparent
                          dark:via-gray-700"
          />

          <div className="space-y-10">
            {experiences.map((exp, i) => {
              const Icon = exp.icon;
              return (
                <motion.div
                  key={exp.title}
                  variants={fadeLeft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  className="relative flex gap-6 sm:gap-8"
                >
                  {/* Icon node */}
                  <div className="relative z-10 flex-shrink-0">
                    <div
                      className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center
                                 justify-center shadow-md ring-4 ring-gray-50 dark:ring-gray-900"
                      style={{
                        backgroundColor: exp.iconColor + "18",
                        border: `2px solid ${exp.iconColor}`
                      }}
                    >
                      <Icon size={18} style={{ color: exp.iconColor }} />
                    </div>
                  </div>

                  {/* Card */}
                  <div className="flex-1 pb-2">
                    <div
                      className="rounded-xl border border-gray-100 dark:border-gray-800
                                 bg-white dark:bg-gray-950 p-5 sm:p-6
                                 hover:shadow-lg transition-shadow duration-300"
                    >
                      {/* Header */}
                      <div
                        className="flex flex-col sm:flex-row sm:items-start
                                      sm:justify-between gap-1 mb-3"
                      >
                        <div>
                          <h3
                            className="font-bold text-gray-900 dark:text-white
                                         text-base sm:text-lg leading-snug"
                          >
                            {exp.title}
                          </h3>
                          <p className="text-sm text-[#2E75B6] font-medium mt-0.5">
                            {exp.organisation}
                          </p>
                        </div>

                        {/* Period badge */}
                        <div className="flex items-center gap-2 flex-shrink-0 mt-1 sm:mt-0">
                          {exp.current && (
                            <span
                              className="flex items-center gap-1 text-xs font-semibold
                                             text-green-600 dark:text-green-400"
                            >
                              <span
                                className="w-1.5 h-1.5 rounded-full bg-green-500
                                               animate-pulse inline-block"
                              />
                              Active
                            </span>
                          )}
                          <span
                            className="px-3 py-1 rounded-full text-xs font-medium
                                       bg-gray-100 dark:bg-gray-800
                                       text-gray-600 dark:text-gray-400"
                          >
                            {exp.period}
                          </span>
                        </div>
                      </div>

                      {/* Bullet points */}
                      <ul className="space-y-2 mt-3">
                        {exp.points.map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-2 text-sm
                                       text-gray-600 dark:text-gray-400 leading-relaxed"
                          >
                            <span
                              className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                              style={{ backgroundColor: exp.iconColor }}
                            />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
