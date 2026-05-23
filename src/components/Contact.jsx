import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaWhatsapp
} from "react-icons/fa";

const contacts = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "oniakinwumipeter@gmail.com",
    href: "mailto:oniakinwumipeter@gmail.com",
    color: "#2E75B6",
    description: "Best for project inquiries"
  },
  {
    icon: FaPhone,
    label: "Phone",
    value: "+234 814 638 9730",
    href: "tel:+2348146389730",
    color: "#16a34a",
    description: "Available 9am – 6pm WAT"
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/akinwumi-oni",
    href: "https://linkedin.com/in/akinwumi-oni",
    color: "#0a66c2",
    description: "Connect professionally"
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "github.com/vividwebdev",
    href: "https://github.com/vividwebdev",
    color: "#6e40c9",
    description: "View my code repositories"
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    value: "+234 814 638 9730",
    href: "https://wa.me/2348146389730",
    color: "#25d366",
    description: "Quick messages welcome"
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 }
  })
};

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <span className="text-[#2E75B6] text-sm font-semibold uppercase tracking-widest">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mt-2">
            Let's Work Together
          </h2>
          <div className="mt-3 mx-auto w-12 h-1 bg-[#2E75B6] rounded-full" />
        </motion.div>

        {/* Subtext */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center text-gray-500 dark:text-gray-400 text-sm sm:text-base
                     max-w-xl mx-auto mb-14 leading-relaxed"
        >
          Open to remote roles, freelance projects, and full-time opportunities.
          <br className="hidden sm:block" />
          Response time: within 24 hours.
        </motion.p>

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {contacts.map((contact, i) => {
            const Icon = contact.icon;
            return (
              <motion.a
                key={contact.label}
                href={contact.href}
                target={
                  ["LinkedIn", "GitHub", "WhatsApp"].includes(contact.label)
                    ? "_blank"
                    : undefined
                }
                rel="noreferrer"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="group flex items-center gap-4 p-5 rounded-xl border
                           border-gray-100 dark:border-gray-800
                           bg-gray-50 dark:bg-gray-900
                           hover:shadow-lg hover:-translate-y-0.5
                           transition-all duration-300 overflow-hidden relative"
              >
                {/* Left colour bar */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl"
                  style={{ backgroundColor: contact.color }}
                />

                {/* Icon */}
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-full flex items-center
                             justify-center transition-transform duration-300
                             group-hover:scale-110"
                  style={{ backgroundColor: contact.color + "18" }}
                >
                  <Icon size={20} style={{ color: contact.color }} />
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-0.5">
                    <span
                      className="text-xs font-semibold uppercase tracking-widest
                                     text-gray-400 dark:text-gray-500"
                    >
                      {contact.label}
                    </span>
                  </div>
                  <p
                    className="text-sm font-semibold text-gray-900 dark:text-white
                                truncate group-hover:text-[#2E75B6]
                                transition-colors duration-200"
                  >
                    {contact.value}
                  </p>
                  <p className="text-xs text-gray-400 dark:text-gray-600 mt-0.5">
                    {contact.description}
                  </p>
                </div>

                {/* Arrow */}
                <div
                  className="flex-shrink-0 opacity-0 group-hover:opacity-100
                             -translate-x-2 group-hover:translate-x-0
                             transition-all duration-300"
                  style={{ color: contact.color }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Availability badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <div
            className="flex items-center gap-2 px-5 py-2.5 rounded-full
                          border border-green-200 dark:border-green-900/50
                          bg-green-50 dark:bg-green-900/20"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-medium text-green-700 dark:text-green-400">
              Currently available for new projects
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
