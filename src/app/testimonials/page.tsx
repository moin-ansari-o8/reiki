"use client";
import { NextSeo } from "next-seo";
import Testimonials from "@/components/Testimonials";

export default function TestimonialsPage() {
  return (
    <>
      <NextSeo
        title="Testimonials - Reiki Healing"
        description="Hear from those who've experienced the power of Reiki Healing."
      />
      <main>
        <Testimonials />
      </main>
    </>
  );
}
