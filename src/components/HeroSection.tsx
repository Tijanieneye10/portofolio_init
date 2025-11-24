"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { urlFor } from "@/sanity/lib/image";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

interface HeroSectionProps {
  author?: {
    name: string;
    title?: string;
    image?: any;
    socialLinks?: string[];
  };
}

export default function HeroSection({ author }: HeroSectionProps) {
  return (
    <section className="min-h-[80vh] flex items-center justify-between py-12 md:py-24">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6 text-left"
        >
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
            Hi, I'm <span className="text-blue-600 dark:text-blue-400">{author?.name?.split(' ')[0] || "Developer"}</span>.
            <br />
            I build software solutions.
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed">
            {author?.title || "Software Engineer & DevOps Specialist"} passionate about writing clean, maintainable code and building software that’s both reliable and performant.
          </p>
          
          <div className="flex items-center gap-4 pt-4">
            <Link
              href="/projects"
              className="px-8 py-3.5 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/25"
            >
              View Work
            </Link>
            <Link
              href="/about"
              className="px-8 py-3.5 rounded-lg border border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600 transition-all"
            >
              About Me
            </Link>
          </div>
        </motion.div>

        {/* Right Column: Image */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="relative w-[400px] h-[500px] mx-auto">
            {/* Decorative background element */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-2xl transform rotate-6 opacity-20 blur-lg"></div>
            <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 rounded-2xl transform -rotate-3"></div>
            
            {/* Main Image Container */}
            <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl bg-white dark:bg-gray-900 mt-8">
              {author?.image ? (
                <Image
                  src={urlFor(author.image).url()}
                  alt={author.name}
                  fill
                  className="object-cover object-top"
                  priority
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                  <span className="text-gray-400">Add profile image in Sanity</span>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
