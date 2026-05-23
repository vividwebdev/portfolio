import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { HiSun, HiMoon, HiMenu, HiX } from "react-icons/hi";

const navLinks = [
  { label: "About", to: "about" },
  { label: "Skills", to: "skills" },
  { label: "Experience", to: "experience" },
  { label: "Projects", to: "projects" },
  { label: "Contact", to: "contact" }
];

export default function Navbar({ dark, setDark }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "shadow-lg bg-[#1B3A5C]/95 backdrop-blur-sm" : "bg-[#1B3A5C]"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <span className="text-white font-bold text-lg tracking-tight select-none">
            Oni <span className="text-[#2E75B6]">Akinwumi</span>
          </span>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-64}
                className="text-gray-200 hover:text-[#2E75B6] cursor-pointer text-sm font-medium transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}

            {/* Dark mode toggle */}
            <button
              onClick={() => setDark(!dark)}
              className="ml-2 p-2 rounded-full text-gray-200 hover:text-[#2E75B6] hover:bg-white/10 transition-all duration-200"
              aria-label="Toggle dark mode"
            >
              {dark ? <HiSun size={20} /> : <HiMoon size={20} />}
            </button>
          </div>

          {/* Mobile: dark toggle + hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setDark(!dark)}
              className="p-2 rounded-full text-gray-200 hover:text-[#2E75B6] hover:bg-white/10 transition-all duration-200"
              aria-label="Toggle dark mode"
            >
              {dark ? <HiSun size={20} /> : <HiMoon size={20} />}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-full text-gray-200 hover:text-[#2E75B6] hover:bg-white/10 transition-all duration-200"
              aria-label="Toggle menu"
            >
              {menuOpen ? <HiX size={22} /> : <HiMenu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#1B3A5C] border-t border-white/10 px-4 pb-4 pt-2">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-64}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-gray-200 hover:text-[#2E75B6] cursor-pointer text-sm font-medium transition-colors duration-200 border-b border-white/5 last:border-0"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
