"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { NextSeo } from "next-seo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import WhatYoullLearn from "@/components/WhatYoullLearn";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import AboutPage from "@/app/about/page";
import WebinarPage from "@/app/webinar/page";
import LearningPage from "@/app/learning/page";
import TestimonialsPage from "@/app/testimonials/page";
import RegisterPage from "@/app/register/page";
import ContactPage from "@/app/contact/page";
import Certificate from "@/components/Certificate";

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

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      let closestSection = "home";
      let minDistance = Infinity;

      for (const link of navLinks) {
        const ref = sectionRefs.current[link.id];
        if (ref) {
          const distance = Math.abs(ref.getBoundingClientRect().top - 150); // 100 = navbar height offset
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
    const ref = sectionRefs.current[id];
    if (ref) {
      // Get the navbar height dynamically
      const navbar = document.querySelector("nav");
      const navbarHeight = navbar ? navbar.getBoundingClientRect().height : 0;
      // Calculate the scroll position relative to the document
      const top =
        ref.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      <NextSeo
        title="Reiki Healing - Transform Your Life"
        description="Join our Reiki Healing webinar and start your journey towards transformation."
        openGraph={{
          url: "https://www.reikihealing.com",
          title: "Reiki Healing - Transform Your Life",
          description:
            "Join our Reiki Healing webinar and start your journey towards transformation.",
          images: [
            {
              url: "public\\reiki_logo.jpeg",
              width: 800,
              height: 600,
              alt: "Reiki Healing Logo",
            },
          ],
        }}
      />
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
            <AboutPage />
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
            <WebinarPage />
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
            <LearningPage />
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
            <TestimonialsPage />
          </motion.section>

          {/* <motion.section
            ref={(el) => {
              sectionRefs.current["register"] = el as HTMLDivElement | null;
            }}
            id="register"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <RegisterPage />
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
            <ContactPage />
          </motion.section> */}
        </main>
      </div>
      <Footer scrollToSection={scrollToSection} />
    </>
  );
}
