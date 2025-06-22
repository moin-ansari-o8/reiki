import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="py-12 md:py-20 px-4 font-[var(--font-poppins)]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Image Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center"
        >
          <div className="overflow-hidden rounded-[999px] border-[6px] border-yellow-400 shadow-2xl w-[22rem] h-[34rem] hover:scale-105 transition-transform duration-500">
            <Image
              src="/reiki_woman.jpeg"
              alt="Reiki Host"
              width={352} // 22rem * 16px
              height={544} // 34rem * 16px
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <h3 className="mt-4 text-xl md:text-2xl text-[#5E3A87] font-[var(--font-poppins)]">
            Pragna Patel
          </h3>
        </motion.div>
        {/* Text Column */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <h2 className="text-4xl md:text-6xl text-[#5E3A87] font-[var(--font-serif)] mb-4 leading-tight">
            Meet Your Guide to Inner Peace
          </h2>
          <p className="text-[#333] text-lg leading-relaxed mb-6 font-[var(--font-sans)]">
            I am Pragna Patel, a Certified Reiki Healer with 21+ years of
            experience guiding over 3000 souls toward inner harmony. Through
            personal sessions, group healing, and transformative workshops, I
            channel the power of Reiki to unlock your mind, heal your body, and
            energize your spirit.
          </p>
          <p className="text-[#333] text-lg leading-relaxed mb-8 font-[var(--font-sans)]">
            My mission is simple — to help you reconnect with your true self,
            remove emotional &amp; energetic blocks, and awaken a life filled
            with joy and light.
          </p>
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 text-center gap-6 mb-8">
            {["21+ Years", "3000+ Lives Touched", "500+ Events Hosted"].map(
              (text, index) => (
                <div key={index} className="stat-glow">
                  {text}
                </div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
