"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaLeaf,
  FaBookOpen,
  FaRainbow,
  FaSpa,
  FaMapMarkedAlt,
  FaExclamationTriangle,
  FaUserFriends,
  FaPrayingHands,
  FaCoins,
} from "react-icons/fa";

const learnItems = [
  {
    icon: <FaLeaf className="text-[#5E3A87] text-3xl mb-4" />,
    title: "What is Reiki?",
    desc: "Understand the ancient Japanese technique of energy healing that restores balance, reduces stress, and empowers the body’s natural ability to heal.",
  },
  {
    icon: <FaBookOpen className="text-[#5E3A87] text-3xl mb-4" />,
    title: "The 5 Sacred Principles of Reiki",
    desc: "Discover the foundation of Reiki through five life-changing affirmations that guide emotional mastery, gratitude, compassion, and mindfulness.",
  },
  {
    icon: <FaRainbow className="text-[#5E3A87] text-3xl mb-4" />,
    title: "How Reiki Works",
    desc: "Learn how Reiki flows through chakras, clears blockages, and activates inner healing in a relatable way  no jargon.",
  },
  {
    icon: <FaSpa className="text-[#5E3A87] text-3xl mb-4" />,
    title: "Benefits of Reiki Practice",
    desc: "Explore holistic benefits like better sleep, less anxiety, and more emotional clarity for your health and success.",
  },
  {
    icon: <FaMapMarkedAlt className="text-[#5E3A87] text-3xl mb-4" />,
    title: "Best Places & Times to Practice Reiki",
    desc: "Discover how to align your space, time, and vibe for more powerful healing sessions.",
  },
  {
    icon: <FaExclamationTriangle className="text-[#5E3A87] text-3xl mb-4" />,
    title: "Are There Any Risks?",
    desc: "Understand Reiki’s gentle nature, safety guidelines, and how it complements modern therapies.",
  },
  {
    icon: <FaUserFriends className="text-[#5E3A87] text-3xl mb-4" />,
    title: "Who Can Learn Reiki?",
    desc: "Whether you’re a student, parent, entrepreneur, or elder  Reiki is for everyone, no matter your background.",
  },
  {
    icon: <FaPrayingHands className="text-[#5E3A87] text-3xl mb-4" />,
    title: "Medical or Religious Prerequisites",
    desc: "You don’t need to be spiritual or religious. Reiki transcends beliefs and enhances wellness.",
  },
  {
    icon: <FaCoins className="text-[#5E3A87] text-3xl mb-4" />,
    title: "Healing Blocks: Money, Stress, & Energy",
    desc: "Get guided techniques for emotional healing, financial clarity, and personal empowerment.",
  },
];

const WhatYoullLearn = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="py-0 pb-0 bg-transparent font-[var(--font-poppins)]"
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#5E3A87] font-[var(--font-serif)] text-center mb-12">
          What You’ll Learn
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {learnItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white/90 backdrop-blur-lg p-6 rounded-2xl shadow-md border border-[#E0D1EA]/50"
            >
              <div className="flex flex-col items-start">
                {item.icon}
                <h3 className="text-xl font-bold text-[#5E3A87] mb-2 font-[var(--font-poppins)]">
                  {item.title}
                </h3>
                <p className="text-[#333333] text-sm leading-relaxed font-[var(--font-poppins)]">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYoullLearn;
