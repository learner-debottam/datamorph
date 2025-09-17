"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useAuth } from "../app/context/AuthContext";

interface FeaturesCardProps {
  title: string;
  description: string;
}

export default function FeaturesCard({ title, description }: FeaturesCardProps) {
  const { user, isAuthenticated } = useAuth();

  const getCTA = () => {
    if (!isAuthenticated) return { text: "Sign Up", href: "/signup" };
    if (user?.role === "admin") return { text: "Admin Dashboard", href: "/admin" };
    return { text: "Go to Dashboard", href: "/dashboard" };
  };

  const cta = getCTA();

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.03 }}
      className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition flex flex-col justify-between"
    >
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
      <Link href={cta.href} className="mt-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-500 transition"
        >
          {cta.text}
        </motion.button>
      </Link>
    </motion.div>
  );
}
