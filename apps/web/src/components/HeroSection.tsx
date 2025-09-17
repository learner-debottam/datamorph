"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-32 px-6">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Transform Any Data. Anywhere. Effortlessly.
        </h1>
        <p className="text-lg md:text-xl mb-8">
          AI-powered low-code/no-code data transformation platform to automate
          schema mapping, reuse templates, and reduce integration time.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          {/* Get Started Button */}
          <Link href="/signup" passHref>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer px-6 py-3 bg-white text-blue-600 font-semibold rounded shadow hover:bg-gray-100 transition"
            >
              Get Started
            </motion.div>
          </Link>

          {/* Browse Templates Button */}
          <Link href="/templates" passHref>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer px-6 py-3 border border-white rounded hover:bg-white hover:text-blue-600 transition"
            >
              Browse Templates
            </motion.div>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
