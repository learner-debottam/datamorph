"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

interface HeaderProps {
  isAuthenticated: boolean;
  userRole: "admin" | "user" | "guest";
  userName: string;
}

export default function Header({ isAuthenticated, userName }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          DataMorph
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6">
          <Link href="/templates">Templates</Link>
          <Link href="/marketplace">Marketplace</Link>
          {isAuthenticated ? (
            <span>Welcome, {userName}</span>
          ) : (
            <Link href="/auth/login">Login</Link>
          )}
        </nav>

        {/* Mobile hamburger */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden flex flex-col gap-4 px-6 pb-4 bg-white">
          <Link href="/templates">Templates</Link>
          <Link href="/marketplace">Marketplace</Link>
          {isAuthenticated ? (
            <span>Welcome, {userName}</span>
          ) : (
            <Link href="/auth/login">Login</Link>
          )}
        </nav>
      )}
    </header>
  );
}
