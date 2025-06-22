import Link from 'next/link';
import { motion } from 'framer-motion';

const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-[#F8F3FF] to-[#EAE2F8] text-center">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-[#5E3A87] font-serif mb-6"
        >
          Ready to Begin Your Journey?
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link
            href="/register"
            className="bg-[#FF6B6B] text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-[#FF8585] transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Register Now
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;