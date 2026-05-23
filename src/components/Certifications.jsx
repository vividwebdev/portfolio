import { motion } from "framer-motion";
import { FaAward, FaCheckCircle } from "react-icons/fa";

const certifications = [
  {
    title:
      "Master Certificate — Cloud Systems, Technical Core & Professional Readiness",
    issuer: "Digital Skills Nigeria",
    date: "April 2026",
    id: "5595",
    modules: "22 Modules",
    color: "#2E75B6"
  },
  {
    title:
      "Software Development Graduate — 3 Million Technical Talent (3MTT) Nigeria",
    issuer: "NITDA",
    date: "December 2024",
    id: "FE/23/4746005",
    modules: null,
    color: "#16a34a"
  },
  {
    title: "Certified Project Management Professional (CPMP)",
    issuer: "ICBMD, Nigeria",
    date: "October 2025",
    id: "ICBMD/CPMP/NG/0010106/2025",
    modules: null,
    color: "#d97706"
  },
  {
    title: "Certified Human Resources Management Professional (CHRM)",
    issuer: "ICBMD, Nigeria",
    date: "October 2025",
    id: "ICBMD/CHRM/NG/0010100/2025",
    modules: null,
    color: "#7c3aed"
  },
  {
    title: "Graduate Member — ISO 9001:2015 Quality Management Framework",
    issuer: "ICBMD, Nigeria",
    date: "2025",
    id: "ICBMD/ISO9001-2015/GM/NC/2025/00050",
    modules: null,
    color: "#0891b2"
  },
  {
    title: "Cyber Security Basics & Fundamentals",
    issuer: "Digital Exchange Academy",
    date: "February 2025",
    id: "0123",
    modules: null,
    color: "#dc2626"
  },
  {
    title: "ICT Training Fellowship",
    issuer: "Centre of Excellence in Software Engineering, OAU",
    date: "May 2018",
    id: null,
    modules: null,
    color: "#64748b"
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

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#2E75B6] text-sm font-semibold uppercase tracking-widest">
            Credentials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mt-2">
            Certifications
          </h2>
          <div className="mt-3 mx-auto w-12 h-1 bg-[#2E75B6] rounded-full" />
        </motion.div>

        {/* Cert grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.id || cert.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="relative flex gap-4 rounded-xl border border-gray-100
                         dark:border-gray-800 bg-white dark:bg-gray-950 p-5
                         hover:shadow-lg hover:-translate-y-0.5
                         transition-all duration-300 overflow-hidden"
            >
              {/* Left colour bar */}
              <div
                className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl"
                style={{ backgroundColor: cert.color }}
              />

              {/* Icon */}
              <div
                className="flex-shrink-0 w-10 h-10 rounded-full flex items-center
                           justify-center mt-0.5"
                style={{ backgroundColor: cert.color + "18" }}
              >
                <FaAward size={18} style={{ color: cert.color }} />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                {/* Title */}
                <h3
                  className="font-bold text-gray-900 dark:text-white text-sm
                               leading-snug mb-1"
                >
                  {cert.title}
                </h3>

                {/* Issuer */}
                <p
                  className="text-xs font-semibold mb-2"
                  style={{ color: cert.color }}
                >
                  {cert.issuer}
                </p>

                {/* Meta row */}
                <div className="flex flex-wrap items-center gap-2">
                  {/* Date */}
                  <span
                    className="flex items-center gap-1 text-xs text-gray-500
                                   dark:text-gray-400"
                  >
                    <FaCheckCircle size={10} style={{ color: cert.color }} />
                    {cert.date}
                  </span>

                  {/* Modules badge */}
                  {cert.modules && (
                    <span
                      className="px-2 py-0.5 rounded-full text-xs font-medium"
                      style={{
                        backgroundColor: cert.color + "18",
                        color: cert.color
                      }}
                    >
                      {cert.modules}
                    </span>
                  )}

                  {/* ID */}
                  {cert.id && (
                    <span
                      className="text-xs text-gray-400 dark:text-gray-600
                                     font-mono truncate"
                    >
                      ID: {cert.id}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center text-sm text-gray-400 dark:text-gray-600 mt-10"
        >
          All certifications verifiable via the IDs listed above.
        </motion.p>
      </div>
    </section>
  );
}
