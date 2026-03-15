"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

const navItems = [
  { name: "~", path: "/" },
  { name: "~/projects", path: "/projects" },
  { name: "~/blog", path: "/blog" },
  { name: "~/about", path: "/about" },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-green-900/30 dark:border-green-900/30 bg-white/95 dark:bg-[#050a05]/95 backdrop-blur-sm">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between font-mono">
        <Link href="/" className="text-lg font-bold text-green-700 dark:text-green-400 text-glow-sm hover:text-green-600 dark:hover:text-green-300 transition-colors">
          <span className="text-green-500/60 dark:text-green-600">visitor@</span>tj<span className="cursor-blink text-green-400">_</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`relative text-sm px-3 py-1.5 rounded transition-all ${
                pathname === item.path
                  ? "text-green-400 bg-green-400/10 text-glow-sm"
                  : "text-green-700 dark:text-green-600 hover:text-green-500 dark:hover:text-green-400 hover:bg-green-400/5"
              }`}
            >
              <span className="text-green-800 dark:text-green-700">$</span> {item.name}
              {pathname === item.path && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-0 left-0 right-0 h-[1px] bg-green-500 dark:bg-green-400"
                />
              )}
            </Link>
          ))}
          <div className="ml-2 pl-2 border-l border-green-900/30">
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-green-600 dark:text-green-500 hover:text-green-400 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <IoClose size={22} /> : <IoMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden absolute top-14 left-0 w-full bg-white dark:bg-[#050a05] border-b border-green-900/30"
        >
          <nav className="flex flex-col p-4 gap-1 font-mono">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className={`text-sm px-3 py-2 rounded ${
                  pathname === item.path
                    ? "text-green-400 bg-green-400/10 text-glow-sm"
                    : "text-green-700 dark:text-green-600 hover:text-green-400 hover:bg-green-400/5"
                }`}
              >
                <span className="text-green-800 dark:text-green-700">$</span> cd {item.name}
              </Link>
            ))}
          </nav>
        </motion.div>
      )}
    </header>
  );
}
