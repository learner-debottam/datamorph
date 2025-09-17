"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useAuth } from "../app/context/AuthContext";

export default function CTASection() {
  const { user, isAuthenticated } = useAuth();

  const getCTA = () => {
    if (!isAuthenticated) return { text: "Sign Up Now", href: "/signup" };
    if (user?.role === "admin") return { text: "Admin Dashboard", href: "/admin" };
    return { text: "Go to Dashboard", href: "/dashboard" };
  };

  const cta = getCTA();

  return (
    <section className="py-24 bg-blue-600 text-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Data?</h2>
        <p className="mb-8">
          Start using DataMorph today and reduce integration costs while accelerating delivery timelines.
        </p>
        <Link href={cta.href}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-8 py-4 bg-white text-blue-600 font-semibold rounded shadow hover:bg-gray-100 transition"
          >
            {cta.text}
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
}
