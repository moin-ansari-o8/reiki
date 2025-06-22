import { motion, useInView, useAnimation, Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { BsCalendar } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";

const webinarDetails = [
  { label: "Dates", value: "June 20, 21 & 22, 2025" },
  { label: "Time", value: "8:30 PM – 10:30 PM (IST)" },
  { label: "Platform", value: "Zoom / Google Meet" },
  { label: "Duration", value: "2 hours per day" },
  { label: "Fee", value: "₹199 (Pre-registration required)" },
];

const whoThisIsFor = [
  "People feeling mentally, emotionally, or spiritually blocked",
  "Anyone struggling with finances, stress, or poor sleep",
  "Seekers of peace, purpose, and powerful life transformation",
  "Complete beginners or curious souls ready to explore Reiki",
];

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-06-25T20:30:00+05:30").getTime();
    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    };
    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-xs sm:max-w-md mx-auto">
      {["days", "hours", "minutes", "seconds"].map((unit) => (
        <motion.div
          key={unit}
          className="bg-white/80 backdrop-blur-sm p-3 sm:p-4 rounded-xl shadow-md text-center border border-[#E0D1EA]/50"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 8px 20px rgba(218, 112, 214, 0.2)",
          }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-xl sm:text-2xl font-bold text-[#5E3A87]">
            {timeLeft[unit as keyof typeof timeLeft]
              .toString()
              .padStart(2, "0")}
          </p>
          <p className="text-xs sm:text-sm text-[#333333] capitalize">{unit}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default function WebinarSection() {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.3,
        ease: "easeOut",
      },
    }),
  };

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background Particle Effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[
          {
            top: "10%",
            left: "20%",
            color: "#DA70D6",
            size: "w-2 h-2",
            duration: 5,
          },
          {
            top: "70%",
            right: "15%",
            color: "#F4978E",
            size: "w-3 h-3",
            duration: 4,
          },
          {
            top: "30%",
            left: "50%",
            color: "#DA70D6",
            size: "w-2.5 h-2.5",
            duration: 6,
          },
          {
            top: "50%",
            right: "30%",
            color: "#F4978E",
            size: "w-2 h-2",
            duration: 5.5,
          },
          {
            top: "20%",
            left: "80%",
            color: "#DA70D6",
            size: "w-3 h-3",
            duration: 4.5,
          },
        ].map((particle, index) => (
          <motion.div
            key={index}
            className={`absolute ${particle.size} bg-[${particle.color}] rounded-full opacity-20 hidden sm:block`}
            animate={{
              x: [0, Math.random() * 50 - 25, 0],
              y: [0, Math.random() * 50 - 25, 0],
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              top: particle.top,
              left: particle.left,
              right: particle.right,
            }}
          />
        ))}
      </div>
      <section
        ref={ref}
        className="py-12 sm:py-20 px-4 sm:px-6 md:px-12 font-[var(--font-poppins)]"
      >
        <div className="max-w-5xl mx-auto">
          {/* Hero Section */}
          <div className="relative text-center mb-12 sm:mb-16">
            <motion.h1
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-3xl sm:text-5xl md:text-6xl font-[var(--font-serif)] text-[#5E3A87] mb-4"
            >
              Experience the Power of Reiki
              <br className="hidden sm:block" />
              <span className="text-[#FF6B6B]">
                3-Day Live Healing Webinar
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-base sm:text-lg md:text-xl text-[#333333] max-w-2xl mx-auto mb-6"
            >
              Break free from stress, release financial blocks, and awaken
              your inner peace from home.
            </motion.p>
          </div>
          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-12 text-center"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-[#5E3A87] font-serif mb-4">
              Hurry! Webinar Starts In:
            </h3>
            <CountdownTimer />
          </motion.div>
          {/* Webinar Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-sm sm:text-base md:text-lg text-[#333333] leading-relaxed max-w-3xl mx-auto mb-12 text-left"
          >
            Join our transformative 3-day Reiki Healing Webinar an immersive
            energy experience designed for anyone seeking balance, clarity,
            and healing. Whether you&apos;re feeling drained, stuck, or
            curious about spiritual wellness, this live event is your gateway
            to self-empowerment. Led by a certified Reiki Master with over 21
            years of experience, you will be guided through healing practices,
            energetic insights, and calming meditations that activate your
            inner power and restore harmony.
          </motion.p>
          {/* Webinar Details and Who This Is For Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <motion.div
              custom={0}
              variants={cardVariants}
              initial="hidden"
              animate={controls}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 8px 20px rgba(218, 112, 214, 0.2)",
              }}
              className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-md border border-[#E0D1EA]/50"
            >
              <h3 className="text-lg sm:text-xl font-[var(--font-poppins)] text-[#5E3A87] mb-4 flex items-center justify-center">
                <BsCalendar className="mr-2 text-xl" /> Webinar Details
              </h3>
              <ul className="text-[#333333] space-y-2 text-left text-sm sm:text-base">
                {webinarDetails.map((detail, index) => (
                  <li key={index}>
                    <strong>{detail.label}:</strong> {detail.value}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              custom={1}
              variants={cardVariants}
              initial="hidden"
              animate={controls}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 8px 20px rgba(218, 112, 214, 0.2)",
              }}
              className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-md border border-[#E0D1EA]/50"
            >
              <h3 className="text-lg sm:text-xl font-[var(--font-poppins)] text-[#5E3A87] mb-4 flex items-center justify-center">
                <FaHeart className="mr-2 text-xl" /> Who This Is For
              </h3>
              <ul className="text-[#333333] list-disc pl-5 space-y-2 text-left text-sm sm:text-base">
                {whoThisIsFor.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
