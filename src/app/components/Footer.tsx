"use client";

import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

interface FooterProps {
  scrollToSection: (id: string) => void;
}

const Footer = ({ scrollToSection }: FooterProps) => {
  return (
    <footer className="bg-[#5A348F]/90 backdrop-blur-xl text-white pt-10 pb-6 font-[var(--font-poppins)]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo &amp; Message - Centered */}
        <div className="flex flex-col items-center text-center">
          <Image
            src="/reiki_logo.jpeg"
            alt="Reiki Healing Logo"
            width={200}
            height={200}
            className="h-36 w-36 object-contain rounded-full shadow-md border-2 border-[#E0D1EA] bg-white"
          />
          <p className="mt-4 text-sm text-white/90 max-w-xs">
            <span className="italic font-[var(--font-serif)]">
              Modern science heals the body, but Reiki heals the complete being.
            </span>
          </p>
          <ul className="mt-4 space-y-1 text-sm text-white/80 list-disc pl-5 text-left">
            <li>Reduce stress &amp; anxiety</li>
            <li>Improve sleep</li>
            <li>Minimize body pain</li>
            <li>Increase happiness &amp; peace</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-[var(--font-serif)] mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {[
              "home",
              "about",
              "webinar",
              "learning",
              "certificate",
              "testimonials",
              // "register",
              // "contact",
            ].map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item)}
                  className="text-white/80 hover:text-white transition-all duration-300 capitalize"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold font-[var(--font-serif)] mb-4">
            Contact
          </h3>
          <div className="space-y-2 text-white/80 text-sm">
            <p className="flex items-center gap-2">
              <FaEnvelope /> pragnapatel121973@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <FaPhoneAlt /> 93755109088
            </p>
          </div>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold font-[var(--font-serif)] mb-4">
            Connect With Us
          </h3>
          <div className="flex gap-4 items-center">
            <Link
              href="https://www.instagram.com/pragna6242?igsh=MWszOGo0bjBtZTJmbA=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white text-xl transition-all"
            >
              <FaInstagram />
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Reiki Healing. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
