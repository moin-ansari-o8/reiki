"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative py-6 md:py-12 bg-transparent overflow-hidden font-funnel">
      <div className="absolute inset-0 z-0" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between gap-6 md:gap-12">
        {/* Left Content (Text) */}
        <motion.div
          className="md:w-1/2 w-full flex flex-col items-center md:items-start text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-[#3C1C5F] leading-tight drop-shadow-sm">
            The Secret Key
            <br className="hidden md:block" /> to a Blissful Life
          </h1>

          <p className="mt-6 text-lg md:text-xl text-[#2A203F] leading-relaxed font-light">
            Dive into the ancient art of Reiki healing.{" "}
            <br className="hidden md:block" />
            Cleanse your aura, open your heart, and reclaim your inner calm.
          </p>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Link
              href="/#register"
              className="inline-block bg-[#FF6B6B] hover:bg-[#FF8787] text-white font-semibold text-lg px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Join the Free Webinar
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Image (shown first on mobile) */}
        <motion.div
          className="md:w-[48%] w-full flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="relative mb-8 w-[300px] h-[260px] md:w-[440px] md:h-[470px] rounded-4xl overflow-hidden shadow-2xl transition-all duration-500 hover:scale-105 border-[5px] border-yellow-400">
            <Image
              src="/reiki_logo_with_motto.jpeg"
              alt="Reiki Healing Logo With Motto"
              width={800}
              height={800}
              className="mx-auto w-full h-full object-cover drop-shadow-xl"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
