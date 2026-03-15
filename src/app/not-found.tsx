import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="max-w-lg w-full rounded-lg border border-green-800/25 dark:border-green-900/40 bg-gray-50 dark:bg-[#0a0f0a] overflow-hidden">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-[#0d1a0d] border-b border-green-900/20">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          </div>
          <span className="text-[10px] text-green-700 dark:text-green-700 font-mono ml-2">
            error — bash
          </span>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 font-mono space-y-4">
          <div className="text-green-600 dark:text-green-700 text-sm">
            <span className="text-green-500 dark:text-green-600">$</span> cd /requested-page
          </div>

          <div className="text-red-500 dark:text-red-400 text-sm">
            bash: cd: /requested-page: No such file or directory
          </div>

          <div className="text-amber-600 dark:text-amber-400 text-6xl md:text-8xl font-bold text-glow-amber py-4">
            404
          </div>

          <div className="text-green-800/60 dark:text-green-500/60 text-sm leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </div>

          <div className="h-px bg-green-900/20" />

          <div className="text-green-600 dark:text-green-700 text-sm">
            <span className="text-green-500 dark:text-green-600">$</span> ls ~/
          </div>

          <div className="flex flex-wrap gap-3 text-sm">
            <Link
              href="/"
              className="text-cyan-700 dark:text-cyan-500 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors underline underline-offset-4 decoration-cyan-900/30 hover:decoration-cyan-500/50"
            >
              home/
            </Link>
            <Link
              href="/projects"
              className="text-cyan-700 dark:text-cyan-500 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors underline underline-offset-4 decoration-cyan-900/30 hover:decoration-cyan-500/50"
            >
              projects/
            </Link>
            <Link
              href="/blog"
              className="text-cyan-700 dark:text-cyan-500 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors underline underline-offset-4 decoration-cyan-900/30 hover:decoration-cyan-500/50"
            >
              blog/
            </Link>
            <Link
              href="/about"
              className="text-cyan-700 dark:text-cyan-500 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors underline underline-offset-4 decoration-cyan-900/30 hover:decoration-cyan-500/50"
            >
              about/
            </Link>
          </div>

          <div className="pt-2">
            <Link
              href="/"
              className="inline-block px-5 py-2.5 rounded border border-green-600 dark:border-green-500 text-green-700 dark:text-green-400 text-sm hover:bg-green-500/10 transition-all text-glow-sm"
            >
              $ cd ~/
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
