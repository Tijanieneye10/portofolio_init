"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-8 h-8" />;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="px-2 py-1 rounded border border-green-900/30 text-[10px] font-mono text-green-700 dark:text-green-600 hover:text-green-500 dark:hover:text-green-400 hover:border-green-600/50 transition-all"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? "[ light ]" : "[ dark ]"}
    </button>
  );
}
