import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaHeart } from "react-icons/fa";

const socials = [
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/akinwumi-oni",
    color: "#0a66c2"
  },
  {
    icon: FaGithub,
    label: "GitHub",
    href: "https://github.com/vividwebdev",
    color: "#a78bfa"
  },
  {
    icon: FaEnvelope,
    label: "Email",
    href: "mailto:oniakinwumipeter@gmail.com",
    color: "#2E75B6"
  }
];

export default function Footer() {
  return (
    <footer className="bg-[#0a1628] text-gray-400">
      {/* Top divider glow */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#2E75B6]/50 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center gap-6">
          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h3 className="text-white font-bold text-xl tracking-tight [text-shadow:_0_0_5px_rgba(0,0,0,0.8)]">
              ONI <span className="text-[#2E75B6]">Akinwumi Peter</span>
            </h3>
            <p className="text-sm text-gray-500 mt-1 tracking-widest uppercase">
              Developer · Analyst · Digital Builder
            </p>
          </motion.div>

          {/* Social icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-3"
          >
            {socials.map(({ icon: Icon, label, href, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-full flex items-center justify-center
                           border border-gray-700 hover:border-[#2E75B6]
                           bg-gray-900 hover:bg-[#2E75B6]/10
                           transition-all duration-300 hover:-translate-y-1 group"
              >
                <Icon
                  size={16}
                  className="text-gray-400 group-hover:text-white transition-colors duration-300"
                  style={{ "--hover-color": color }}
                />
              </a>
            ))}
          </motion.div>

          {/* Divider */}
          <div className="w-16 h-px bg-gray-800" />

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xs text-gray-600 text-center leading-relaxed"
          >
            © 2026 Oni Akinwumi Peter. Built with{" "}
            <span className="text-[#2E75B6] font-medium">React</span> &{" "}
            <span className="text-[#2E75B6] font-medium">Tailwind CSS</span>.
            <br className="sm:hidden" />
            <span className="hidden sm:inline"> · </span>
            Made with{" "}
            <FaHeart className="inline text-red-500 mx-0.5" size={10} /> in
            Lagos, Nigeria.
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
