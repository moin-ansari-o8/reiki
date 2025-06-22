"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import HeroSection from "@/app/components/HeroSection";
import AboutSection from "@/app/components/AboutSection";
import WebinarSection from "@/app/components/WebinarSection";
import WhatYoullLearn from "@/app/components/WhatYoullLearn";
import Certificate from "@/app/components/Certificate";
import Testimonials from "@/app/components/Testimonials";
import ContactSection from "@/app/components/ContactSection";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "webinar", label: "Webinar" },
  { id: "learning", label: "Learning" },
  { id: "certificate", label: "Certificate" },
  { id: "testimonials", label: "Testimonials" },
  { id: "register", label: "Register" },
  { id: "contact", label: "Contact" },
];

export default function AppShell() {
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();
  // Add a ref to track programmatic scrolls
  const isProgrammaticScroll = useRef(false);

  // Scroll to section on initial load or when pathname changes
  useEffect(() => {
    // Remove leading slash and get section id
    const section = pathname.replace("/", "");
    if (section && sectionRefs.current[section]) {
      setTimeout(() => scrollToSection(section), 100);
    } else if (!section || section === "") {
      // Default to home
      setTimeout(() => scrollToSection("home"), 100);
    }
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (isProgrammaticScroll.current) return; // Prevent loop
      let closestSection = "home";
      let minDistance = Infinity;
      for (const link of navLinks) {
        const ref = sectionRefs.current[link.id];
        if (ref) {
          const distance = Math.abs(ref.getBoundingClientRect().top - 150);
          if (distance < minDistance) {
            minDistance = distance;
            closestSection = link.id;
          }
        }
      }
      setActiveSection(closestSection);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id); // Instantly highlight the clicked nav item
    const ref = sectionRefs.current[id];
    if (ref) {
      const navbar = document.querySelector("nav");
      const navbarHeight = navbar ? navbar.getBoundingClientRect().height : 0;
      const top =
        ref.getBoundingClientRect().top + window.scrollY - navbarHeight;
      isProgrammaticScroll.current = true;
      window.scrollTo({ top, behavior: "smooth" });
      setTimeout(() => {
        isProgrammaticScroll.current = false;
      }, 700); // 700ms should be enough for smooth scroll
    }
  };

  return (
    <>
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
      <div className="bg-gradient-to-br from-[#E8DAF8] to-[#F3EAFD]  z-0">
        <main className="flex-1 w-full">
          <motion.section
            ref={(el) => {
              sectionRefs.current["home"] = el as HTMLDivElement | null;
            }}
            id="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <HeroSection />
          </motion.section>

          <motion.section
            ref={(el) => {
              sectionRefs.current["about"] = el as HTMLDivElement | null;
            }}
            id="about"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <AboutSection />
          </motion.section>

          <motion.section
            ref={(el) => {
              sectionRefs.current["webinar"] = el as HTMLDivElement | null;
            }}
            id="webinar"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <WebinarSection />
          </motion.section>

          <motion.section
            ref={(el) => {
              sectionRefs.current["learning"] = el as HTMLDivElement | null;
            }}
            id="learning"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <WhatYoullLearn />
          </motion.section>

          <motion.section
            ref={(el) => {
              sectionRefs.current["certificate"] = el as HTMLDivElement | null;
            }}
            id="certificate"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Certificate />
          </motion.section>

          <motion.section
            ref={(el) => {
              sectionRefs.current["testimonials"] = el as HTMLDivElement | null;
            }}
            id="testimonials"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Testimonials />
          </motion.section>

          <motion.section
            ref={(el) => {
              sectionRefs.current["contact"] = el as HTMLDivElement | null;
            }}
            id="contact"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <ContactSection />
          </motion.section>
        </main>
      </div>
      <Footer scrollToSection={scrollToSection} />
    </>
  );
}
