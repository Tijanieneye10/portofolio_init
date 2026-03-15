"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { urlFor } from "@/sanity/lib/image";
import TypingEffect from "./TypingEffect";

interface HeroSectionProps {
  author?: {
    name: string;
    title?: string;
    image?: any;
    socialLinks?: string[];
  };
}

export default function HeroSection({ author }: HeroSectionProps) {
  const firstName = author?.name?.split(" ")[0] || "Developer";

  return (
    <section className="min-h-[80vh] flex items-center py-12 md:py-24">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column: Terminal Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6 order-2 md:order-1"
        >
          {/* Terminal window */}
          <div className="rounded-lg border border-green-900/40 dark:border-green-900/40 bg-gray-50 dark:bg-[#0a0f0a] overflow-hidden">
            {/* Title bar */}
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-[#0d1a0d] border-b border-green-900/20">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              </div>
              <span className="text-[10px] text-green-700 dark:text-green-700 font-mono ml-2">
                {firstName.toLowerCase()}@portfolio ~ %
              </span>
            </div>

            {/* Terminal content */}
            <div className="p-5 md:p-6 font-mono space-y-3">
              <div className="text-green-700 dark:text-green-600 text-sm">
                <span className="text-green-600 dark:text-green-700">$</span> whoami
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-green-800 dark:text-green-400 text-glow leading-tight">
                {author?.name || "Developer"}
              </h1>

              <div className="text-green-700 dark:text-green-600 text-sm mt-4">
                <span className="text-green-600 dark:text-green-700">$</span> cat role.txt
              </div>
              <p className="text-lg text-green-700 dark:text-green-500 text-glow-sm">
                <TypingEffect
                  texts={[
                    author?.title || "Software Engineer",
                    "Solution Architect",
                    "DevOps Specialist",
                    "Problem Solver",
                  ]}
                  speed={60}
                  pauseDuration={2500}
                />
              </p>

              <div className="text-green-700 dark:text-green-600 text-sm mt-4">
                <span className="text-green-600 dark:text-green-700">$</span> cat mission.txt
              </div>
              <p className="text-sm md:text-base text-green-800/80 dark:text-green-500/80 leading-relaxed max-w-lg">
                Passionate about building scalable systems, architecting robust
                solutions, and shipping software that&apos;s reliable, performant,
                and built to last.
              </p>

              <div className="flex items-center gap-3 pt-4">
                <Link
                  href="/projects"
                  className="px-5 py-2.5 rounded border border-green-600 dark:border-green-500 text-green-700 dark:text-green-400 font-mono text-sm hover:bg-green-500/10 transition-all text-glow-sm"
                >
                  $ ls projects/
                </Link>
                <Link
                  href="/about"
                  className="px-5 py-2.5 rounded border border-green-900/30 dark:border-green-900/40 text-green-800 dark:text-green-600 font-mono text-sm hover:border-green-600 hover:text-green-700 dark:hover:text-green-400 transition-all"
                >
                  $ cat about.md
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Profile Image styled as terminal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative block order-1 md:order-2"
        >
          <div className="relative w-full max-w-[280px] md:max-w-[350px] mx-auto">
            <div className="rounded-lg border border-green-900/40 dark:border-green-900/40 overflow-hidden bg-gray-50 dark:bg-[#0a0f0a]">
              {/* Image title bar */}
              <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 dark:bg-[#0d1a0d] border-b border-green-900/20">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-red-500/80" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
                  <div className="w-2 h-2 rounded-full bg-green-500/80" />
                </div>
                <span className="text-[10px] text-green-700 dark:text-green-700 font-mono ml-1">
                  profile.jpg
                </span>
              </div>
              <div className="relative aspect-[4/5]">
                {author?.image ? (
                  <Image
                    src={urlFor(author.image).url()}
                    alt={author.name}
                    fill
                    className="object-cover object-top"
                    priority
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-[#0a0f0a] font-mono text-green-600 text-sm">
                    <span>[ no image loaded ]</span>
                  </div>
                )}
                {/* Green overlay tint */}
                <div className="absolute inset-0 bg-green-500/5 mix-blend-overlay pointer-events-none" />
              </div>
            </div>
            {/* Decorative glow */}
            <div className="absolute -inset-1 bg-green-500/10 rounded-lg blur-xl -z-10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
