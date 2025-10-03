"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const path = usePathname();
  const isActive = (href: string) => path.startsWith(href);

  return (
    <header className="header-style">
      <div className="relative flex items-center justify-between h-full">
        {/* Left: Logo */}
        <div className="logo-container">
          <Link href="/" className="flex items-center space-x-2 group">
            <Image src="/logo.png" alt="logo" width={40} height={40} />
            <h1 className="text-xl font-bold text-purple-600 group-hover:text-purple-300">
              Foodiverse
            </h1>
          </Link>
        </div>

        {/* Center: Navigation (only on lg and up) */}
        <nav className="hidden lg:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 space-x-6 text-sm font-medium z-0">
          <h2>
            <Link
              href="/about"
              className={`nav-link ${
                isActive("/about") ? "text-purple-600 font-bold underline" : ""
              }`}
            >
              About
            </Link>
          </h2>
          <h2>
            <Link
              href="/recipes"
              className={`nav-link ${
                isActive("/recipes")
                  ? "text-purple-600 font-bold underline"
                  : ""
              }`}
            >
              Recipes
            </Link>
          </h2>
          <h2>
            <Link
              href="/supplies"
              className={`nav-link ${
                isActive("/supplies")
                  ? "text-purple-600 font-bold underline"
                  : ""
              }`}
            >
              Supplies
            </Link>
          </h2>
          <h2>
            <Link
              href="/meals"
              className={`nav-link ${
                isActive("/meals") ? "text-purple-600 font-bold underline" : ""
              }`}
            >
              Meals
            </Link>
          </h2>
          <h2>
            <Link
              href="/stores"
              className={`nav-link ${
                isActive("/stores") ? "text-purple-600 font-bold underline" : ""
              }`}
            >
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
        <div className="mobile-menu">
          <nav className="flex flex-col space-y-4 text-sm font-medium">
            <h2>
              <Link
                href="/about"
                onClick={() => setMenuOpen(false)}
                className={`nav-link ${
                  isActive("/about")
                    ? "text-purple-600 font-bold underline"
                    : ""
                }`}
              >
                About
              </Link>
            </h2>
            <h2>
              <Link
                href="/recipes"
                onClick={() => setMenuOpen(false)}
                className={`nav-link ${
                  isActive("/recipes")
                    ? "text-purple-600 font-bold underline"
                    : ""
                }`}
              >
                Recipes
              </Link>
            </h2>
            <h2>
              <Link
                href="/supplies"
                onClick={() => setMenuOpen(false)}
                className={`nav-link ${
                  isActive("/supplies")
                    ? "text-purple-600 font-bold underline"
                    : ""
                }`}
              >
                Supplies
              </Link>
            </h2>
            <h2>
              <Link
                href="/meals"
                onClick={() => setMenuOpen(false)}
                className={`nav-link ${
                  isActive("/meals")
                    ? "text-purple-600 font-bold underline"
                    : ""
                }`}
              >
                Meals
              </Link>
            </h2>
            <h2>
              <Link
                href="/stores"
                onClick={() => setMenuOpen(false)}
                className={`nav-link ${
                  isActive("/stores")
                    ? "text-purple-600 font-bold underline"
                    : ""
                }`}
              >
                Stores
              </Link>
            </h2>
          </nav>
        </div>
      )}
    </header>
  );
}
