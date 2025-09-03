"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full px-6 py-4 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 z-50 sticky top-0 h-[60px]">
      <div className="relative flex items-center justify-between h-full">
        {/* Left: Logo */}
        <div className="flex items-center space-x-2 z-10">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" alt="logo" width={40} height={40} />
            <h1 className="text-xl font-bold text-purple-600">Foodiverse</h1>
          </Link>
        </div>

        {/* Center: Navigation (only on lg and up) */}
        <nav className="hidden lg:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 space-x-6 text-sm font-medium z-0">
          <h2>
            <Link href="/about" className="hover:text-purple-500">
              About
            </Link>
          </h2>
          <h2>
            <Link href="/recipes" className="hover:text-purple-500">
              Recipes
            </Link>
          </h2>
          <h2>
            <Link href="/supplies" className="hover:text-purple-500">
              Supplies
            </Link>
          </h2>
          <h2>
            <Link href="/meals" className="hover:text-purple-500">
              Meals
            </Link>
          </h2>
          <h2>
            <Link href="/stores" onClick={() => setMenuOpen(false)}>
              Stores
            </Link>
          </h2>
        </nav>

        {/* Right: Hamburger button (only on < lg screens) */}
        <div className="lg:hidden z-10">
          <button
            className="focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown (visible only on mobile when menu is open) */}
      {menuOpen && (
        <div className="lg:hidden mt-2 bg-white dark:bg-black shadow-md py-4 px-6">
          <nav className="flex flex-col space-y-4 text-sm font-medium">
            <h2>
              <Link href="/about" onClick={() => setMenuOpen(false)}>
                About
              </Link>
            </h2>
            <h2>
              <Link href="/recipes" onClick={() => setMenuOpen(false)}>
                Recipes
              </Link>
            </h2>
            <h2>
              <Link href="/contact" onClick={() => setMenuOpen(false)}>
                Supplies
              </Link>
            </h2>
            <h2>
              <Link href="/contact" onClick={() => setMenuOpen(false)}>
                Meals
              </Link>
            </h2>
            <h2>
              <Link href="/contact" onClick={() => setMenuOpen(false)}>
                Stores
              </Link>
            </h2>
          </nav>
        </div>
      )}
    </header>
  );
}
