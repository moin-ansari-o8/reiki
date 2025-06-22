"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "webinar", label: "Webinar" },
  { id: "learning", label: "Learning" },
  { id: "certificate", label: "Certificate" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];

interface NavbarProps {
  activeSection: string;
  scrollToSection: (id: string) => void;
}

const Navbar = ({ activeSection, scrollToSection }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#5A348F]/90 backdrop-blur-xl shadow-xl shadow-purple-200/20 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo & Title */}
        <div className="flex items-center gap-3">
          <Image
            src="/reiki_logo.jpeg"
            alt="Reiki Healing Logo"
            width={48}
            height={48}
            className="h-12 w-12 object-contain rounded-full shadow-md border-2 border-[#E0D1EA] bg-white"
          />
          <Link
            href="/"
            className="text-2xl font-bold text-white font-funnel tracking-wide hover:text-purple-100 transition-all duration-200"
          >
            Reiki Healing
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`relative px-3 py-2 font-funnel text-lg font-semibold transition-all group tracking-wide ${
                activeSection === link.id
                  ? "text-pink-300"
                  : "text-purple-100 hover:text-pink-200"
              }`}
            >
              {link.label}
              <span
                className={`absolute left-0 -bottom-1 h-0.5 w-full bg-pink-300 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
                  activeSection === link.id ? "scale-x-100" : ""
                }`}
              />
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg
            className="w-7 h-7 text-purple-100"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-[#6B3FA0] shadow-xl"
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                scrollToSection(link.id);
                setIsOpen(false);
              }}
              className={`block w-full text-left px-4 py-3 font-funnel text-white font-semibold tracking-wide transition-all duration-200 ${
                activeSection === link.id
                  ? "bg-purple-600/50 text-pink-200"
                  : "hover:bg-purple-700/50"
              }`}
            >
              {link.label}
            </button>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
