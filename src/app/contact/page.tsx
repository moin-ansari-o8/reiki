'use client';

import { NextSeo } from 'next-seo';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data); // Handle form submission (e.g., API call)
    alert('Message sent successfully!');
  };

  return (
    <>
      <NextSeo
        title="Contact Us - Reiki Healing"
        description="Get in touch with us for inquiries or support."
      />
      <main className="bg-gradient-to-br from-[#F8F3FF] to-[#EAE2F8] min-h-screen py-16">
        <section className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl font-bold text-[#5E3A87] font-serif text-center mb-8"
          >
            Contact Us
          </motion.h1>
          <motion.form
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-md mx-auto space-y-6"
          >
            <div>
              <label className="block text-sm uppercase text-[#9473C0] mb-2" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                {...register('name', { required: 'Name is required' })}
                className="w-full p-3 bg-[#F1F1F1] rounded-xl border border-[#E0D1EA] focus:border-[#5E3A87] focus:outline-none"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>
            <div>
              <label className="block text-sm uppercase text-[#9473C0] mb-2" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' } })}
                className="w-full p-3 bg-[#F1F1F1] rounded-xl border border-[#E0D1EA] focus:border-[#5E3A87] focus:outline-none"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>
            <div>
              <label className="block text-sm uppercase text-[#9473C0] mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                {...register('message', { required: 'Message is required' })}
                className="w-full p-3 bg-[#F1F1F1] rounded-xl border border-[#E0D1EA] focus:border-[#5E3A87] focus:outline-none h-32"
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-[#FF6B6B] text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-[#FF8585] transition-all duration-300"
            >
              Send Message
            </motion.button>
          </motion.form>
        </section>
      </main>
    </>
  );
}