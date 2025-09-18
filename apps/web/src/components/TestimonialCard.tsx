"use client";

import { motion } from "framer-motion";

interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

export default function TestimonialCard({ name, role, quote }: Testimonial) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition"
    >
      <p className="italic text-gray-700 mb-4">&quot;{quote}&quot;</p>
      <p className="font-semibold">{name}</p>
      <p className="text-sm text-gray-500">{role}</p>
    </motion.div>
  );
}
