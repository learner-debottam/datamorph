"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

interface HeaderProps {
  isAuthenticated: boolean;
  userRole: "admin" | "user" | "guest";
  userName: string;
}

export default function Header({ isAuthenticated, userRole, userName }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobileMenu = () => setMobileOpen(!mobileOpen);

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          DataMorph
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          <Link href="/templates">Templates</Link>
          <Link href="/marketplace">Marketplace</Link>
          {!isAuthenticated && <Link href="/signup">Sign Up</Link>}
          {isAuthenticated && userRole === "user" && <Link href="/dashboard">Dashboard</Link>}
          {isAuthenticated && userRole === "admin" && <Link href="/admin">Admin</Link>}
        </nav>

        {/* Mobile hamburger */}
        <button className="md:hidden" onClick={toggleMobileMenu}>
          {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-2">
          <Link href="/templates">Templates</Link>
          <Link href="/marketplace">Marketplace</Link>
          {!isAuthenticated && <Link href="/signup">Sign Up</Link>}
          {isAuthenticated && userRole === "user" && <Link href="/dashboard">Dashboard</Link>}
          {isAuthenticated && userRole === "admin" && <Link href="/admin">Admin</Link>}
        </div>
      )}
    </header>
  );
}
