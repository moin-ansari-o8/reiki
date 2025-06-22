"use client";

import Image from "next/image";
import { FaCertificate } from "react-icons/fa";

const Certificate = () => {
  return (
    <section className=" py-16 px-6 font-[var(--font-poppins)]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Certificate Image */}
        <div className="flex justify-center">
          <div className="w-full max-w-md rounded-xl overflow-hidden shadow-lg border-[5px] border-yellow-400">
            <Image
              src="/reiki_certi.jpeg"
              alt="Yog Trainer Certificate"
              width={600}
              height={424}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Certificate Content */}
        <div className="text-gray-800">
          <h2 className="text-3xl sm:text-4xl font-[var(--font-serif)] text-[#5A348F] mb-6 flex items-center gap-3">
            <FaCertificate className="text-[#5A348F]" />
            Certificate of Training
          </h2>

          <p className="mb-4 text-lg sm:text-xl">
            Receive a beautiful, personalized certificate after completing the
            course. It&apos;s a symbol of your journey and achievement!
          </p>

          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Certified. Experienced. Trusted.
            <br />
            <br />
            At the heart of everything we offer is trust built on proven
            expertise. Our lead practitioner, officially certified by the
            Gujarat State Yog Board, brings not just spiritual depth but also
            state-recognized professional training.
            <br />
            <br />
            With a government-authorized Yoga Trainer certification and over 100
            hours of specialized instruction, we follow a standard that aligns
            with both tradition and modern wellness needs.
            <br />
            <br />
            This recognition ensures every session you attend is rooted in
            verified knowledge, guided by authentic practice, and delivered with
            accountability.
            <br />
            <br />
            When you choose us, you&apos;re not just joining a session,
            you&apos;re stepping into a space shaped by certified healing,
            discipline, and heart-led transformation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certificate;
