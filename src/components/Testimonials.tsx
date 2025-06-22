"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight } from "react-icons/fa"; // or any icon library
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const testimonials = [
  {
    name: "Jayshreeben",
    text: "My money mindset and financial blocks started healing!",
  },
  {
    name: "Parthbhai",
    text: "My stress and sleep issues have completely gone!",
  },
  {
    name: "Hema Patel",
    text: "Peace, energy, and confidence – all came together.",
  },
  {
    name: "Moin Patel",
    text: "I feel lighter and more positive after every session.",
  },
  {
    name: "Rina Shah",
    text: "The healing sessions brought clarity and calm to my life.",
  },
  {
    name: "Amit Desai",
    text: "I noticed a big improvement in my focus and productivity.",
  },
  {
    name: "Priya Mehta",
    text: "My anxiety reduced and I feel more balanced every day.",
  },
  {
    name: "Suresh Kumar",
    text: "I am grateful for the renewed energy and motivation.",
  },
  {
    name: "Neha Joshi",
    text: "The sessions helped me overcome emotional blocks.",
  },
  {
    name: "Vishal Patel",
    text: "I sleep better and wake up refreshed now.",
  },
];

const Testimonials = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [cards, setCards] = useState(testimonials);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sendToBack = () => {
    if (animating) return;

    setAnimating(true);
    setTimeout(() => {
      setCards((prev) => {
        const newCards = [...prev];
        const [first] = newCards.splice(0, 1);
        newCards.push(first);
        return newCards;
      });
      setAnimating(false);
    }, 400); // matches animation duration
  };

  return (
    <section className="py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-[#5E3A87] font-[var(--font-serif)] text-center mb-8">
          Testimonials
        </h2>

        {!isMobile ? (
          cards.length > 3 ? (
            <Swiper
              modules={[Autoplay]}
              slidesPerView={3}
              spaceBetween={30}
              loop={true}
              speed={1500} // 🌬️ slow transition
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                reverseDirection: false, // 👉 RTL autoplay
              }}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="w-full"
            >
              {cards.map((item, index) => (
                <SwiperSlide key={item.name + index}>
                  <motion.div
                    className="bg-white/90 backdrop-blur-lg border border-[#c9c0a6] shadow-md p-4 md:p-5 rounded-xl cursor-pointer h-full min-h-[120px] flex flex-col justify-between my-8 transition-all"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                  >
                    <p className="text-[#333] italic mb-3 text-sm sm:text-base leading-snug">
                      "{item.text}"
                    </p>
                    <p className="text-[#5E3A87] font-semibold font-[var(--font-poppins)] text-right text-sm">
                      ~ {item.name}
                    </p>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            // Your normal non-scroll desktop layout
            <div className="flex md:grid md:grid-cols-3 space-x-4 md:space-x-0 md:gap-6 overflow-x-scroll md:overflow-x-hidden no-scrollbar scroll-smooth">
              {testimonials.map((item, index) => (
                <motion.div
                  key={index}
                  className="mb-5 min-w-[260px] sm:min-w-[300px] md:min-w-0 bg-white/90 backdrop-blur-lg border border-[#c9c0a6] shadow-md p-4 md:p-5 rounded-xl shrink-0 cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  <p className="text-[#333] italic mb-3 text-sm sm:text-base leading-snug">
                    "{item.text}"
                  </p>
                  <p className="text-[#5E3A87] font-semibold font-[var(--font-poppins)] text-right text-sm">
                    ~ {item.name}
                  </p>
                </motion.div>
              ))}
            </div>
          )
        ) : (
          <div className="relative mx-auto flex flex-col items-center">
            <div
              className="relative mb-4"
              style={{ width: 260, height: 260, perspective: 1000 }}
            >
              <AnimatePresence mode="popLayout">
                {cards.slice(0, 4).map((card, index) => {
                  const isTop = index === 0;
                  const rotate = (3 - index) * 2; // subtle rotation
                  const translateY = index * 4; // slight offset
                  const zIndex = 4 - index;

                  return (
                    <motion.div
                      key={card.name + index + card.text.slice(0, 4)}
                      className={`absolute top-0 left-0 rounded-2xl overflow-hidden border-[1.5px] border-[#c9c0a6] ${
                        isTop
                          ? "bg-white shadow-xl"
                          : "bg-white/90 backdrop-blur-md shadow-md"
                      } p-4 flex flex-col justify-center transition-all`}
                      style={{
                        width: 260,
                        height: 260,
                        zIndex,
                      }}
                      animate={{
                        rotateZ: rotate,
                        scale: 1,
                        opacity: 1,
                        y: translateY,
                      }}
                      initial={{ opacity: 0, y: 30 }}
                      exit={{ opacity: 0, y: 30 }}
                      transition={{
                        duration: 0.4,
                        ease: "easeInOut",
                        delay: index * 0.03,
                      }}
                    >
                      <p className="text-[#333] italic mb-3 text-base leading-snug">
                        "{card.text}"
                      </p>
                      <p className="text-[#5E3A87] font-semibold font-[var(--font-poppins)] text-right text-sm">
                        ~ {card.name}
                      </p>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            <button
              onClick={sendToBack}
              className="mt-6 flex items-center gap-2 px-4 py-2 bg-[#5E3A87] hover:bg-[#472e6d] text-white font-[var(--font-poppins)] rounded-full shadow-lg transition-all duration-300"
              disabled={animating}
            >
              <FaArrowRight size={18} />
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
