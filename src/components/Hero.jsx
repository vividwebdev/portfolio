import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { HiArrowDown } from "react-icons/hi";
import cvFile from "../assets/Oni_Akinwumi_Peter_CV.pdf";

const roles = [
  "Full-Stack Developer",
  "Data Analyst",
  "Digital Marketing Specialist",
  "Funnel Optimisation Specialist"
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];

    if (typing) {
      if (displayed.length < current.length) {
        const timeout = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length + 1));
        }, 70);
        return () => clearTimeout(timeout);
      } else {
        const pause = setTimeout(() => setTyping(false), 1800);
        return () => clearTimeout(pause);
      }
    } else {
      if (displayed.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1));
        }, 40);
        return () => clearTimeout(timeout);
      } else {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIndex]);

  return (
    <section
      id="hero"
      className="min-h-screen bg-gradient-to-br from-[#0f2035] via-[#1B3A5C] to-[#0f2035]
                 dark:from-gray-950 dark:via-[#1B3A5C]/40 dark:to-gray-950
                 flex items-center justify-center relative overflow-hidden"
    >
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(#2E75B6 1px, transparent 1px), linear-gradient(90deg, #2E75B6 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }}
      />

      {/* Glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#2E75B6]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#1B3A5C]/30 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Greeting badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-6"
        >
          <span
            className="px-3 py-1.5 rounded-full border border-[#2E75B6]/50 bg-[#2E75B6]/10
           text-[#2E75B6] text-xs sm:text-sm font-medium tracking-wide
           block text-center leading-relaxed"
          >
            👋 Available for Remote Opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight"
        >
          Oni <span className="text-[#2E75B6]">Akinwumi Peter</span>
        </motion.h1>

        {/* Typewriter role */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-10 flex items-center justify-center mb-6"
        >
          <span className="text-xl sm:text-2xl font-semibold text-gray-300">
            {displayed}
            <span className="inline-block w-0.5 h-6 bg-[#2E75B6] ml-1 animate-pulse" />
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Engineering Physics graduate turned digital builder. I design,
          develop, and deploy web solutions that work.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="projects"
            smooth={true}
            duration={600}
            offset={-64}
            className="w-full sm:w-auto px-8 py-3 bg-[#2E75B6] hover:bg-[#2563a8] text-white
                       font-semibold rounded-lg cursor-pointer transition-all duration-200
                       shadow-lg shadow-[#2E75B6]/25 hover:shadow-[#2E75B6]/40 hover:-translate-y-0.5
                       text-center"
          >
            View My Projects
          </Link>

          <a
            href={cvFile}
            download="Oni_Akinwumi_Peter_CV.pdf"
            className="w-full sm:w-auto px-8 py-3 border border-[#2E75B6] text-[#2E75B6]
                       hover:bg-[#2E75B6] hover:text-white font-semibold rounded-lg
                       transition-all duration-200 hover:-translate-y-0.5 text-center"
          >
            Download CV
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-16 grid grid-cols-3 gap-6 max-w-sm mx-auto"
        >
          {[
            { value: "2+", label: "Years Experience" },
            { value: "10+", label: "Projects Delivered" },
            { value: "7+", label: "Certifications" }
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-[#2E75B6]">
                {stat.value}
              </div>
              <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <Link to="about" smooth={true} duration={600} offset={-64}>
          <div
            className="flex flex-col items-center gap-2 text-gray-500 cursor-pointer
                          hover:text-[#2E75B6] transition-colors duration-200"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <HiArrowDown size={18} />
            </motion.div>
          </div>
        </Link>
      </motion.div>
    </section>
  );
}
