"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full px-6 py-4 flex items-center justify-between bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 z-50 sticky top-0">
      <Link href="/" className="flex items-center space-x-2">
        <Image src="/logo.png" alt="logo" width={40} height={40} />
        <span className="text-xl font-bold text-purple-600">Foodiverse</span>
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-6 text-sm font-medium">
        <Link href="/about" className="hover:text-purple-500">
          About
        </Link>
        <Link href="/recipes" className="hover:text-purple-500">
          Recipes
        </Link>
        <Link href="/contact" className="hover:text-purple-500">
          Contact
        </Link>
      </nav>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white dark:bg-black shadow-md py-4 px-6 md:hidden">
          <nav className="flex flex-col space-y-4">
            <Link href="/about" onClick={() => setMenuOpen(false)}>
              About
            </Link>
            <Link href="/recipes" onClick={() => setMenuOpen(false)}>
              Recipes
            </Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
