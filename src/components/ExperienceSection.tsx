"use client";

import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";

interface Experience {
  _id: string;
  position: string;
  company: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: any;
  logo?: any;
}

export default function ExperienceSection({ experiences }: { experiences: Experience[] }) {
  return (
    <div className="space-y-8">
      <div className="font-mono">
        <div className="text-green-600 dark:text-green-700 text-sm mb-2">
          <span className="text-green-500 dark:text-green-600">$</span> git log --oneline --career
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-green-800 dark:text-green-400 text-glow">
          Work Experience
        </h2>
        <div className="h-px w-full bg-green-900/30 mt-4" />
      </div>

      <div className="relative ml-3 md:ml-6 space-y-8">
        {/* Timeline line */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-green-900/30" />

        {experiences?.map((experience, index) => (
          <div key={experience._id} className="relative pl-8 md:pl-12 font-mono">
            {/* Timeline dot */}
            <div className="absolute -left-[5px] mt-2 h-[10px] w-[10px] rounded-full bg-green-500 dark:bg-green-400 border-2 border-gray-50 dark:border-[#050a05] shadow-[0_0_8px_rgba(0,255,65,0.4)]" />

            <div className="rounded-lg border border-green-900/30 dark:border-green-900/40 bg-gray-50 dark:bg-[#0a0f0a] p-5 hover:border-green-600/40 dark:hover:border-green-500/40 transition-all">
              {/* Commit hash header */}
              <div className="text-[10px] text-green-600 dark:text-green-700 mb-3">
                commit {Math.random().toString(16).slice(2, 9)}
                {experience.current && (
                  <span className="ml-2 text-cyan-500 dark:text-cyan-400">(HEAD)</span>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  {experience.logo && (
                    <div className="relative w-10 h-10 flex-shrink-0 rounded border border-green-900/30 overflow-hidden bg-white dark:bg-[#0d1a0d]">
                      <Image
                        src={urlFor(experience.logo).url()}
                        alt={experience.company}
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                  )}
                  <div>
                    <h3 className="text-base font-bold text-green-800 dark:text-green-400">
                      {experience.position}
                    </h3>
                    <p className="text-sm text-green-700 dark:text-green-600">
                      {experience.company}
                    </p>
                  </div>
                </div>

                <div className="text-[10px] text-amber-700 dark:text-amber-500 whitespace-nowrap bg-amber-500/5 dark:bg-amber-500/10 px-2 py-1 rounded border border-amber-900/20 dark:border-amber-900/30 self-start">
                  {new Date(experience.startDate).toLocaleDateString("en-US", {
                    month: "short",
                    year: "numeric",
                  })}
                  {" → "}
                  {experience.current
                    ? "present"
                    : experience.endDate &&
                      new Date(experience.endDate).toLocaleDateString("en-US", {
                        month: "short",
                        year: "numeric",
                      })}
                </div>
              </div>

              <div className="prose prose-sm dark:prose-invert max-w-none text-green-800/70 dark:text-green-500/70 text-sm leading-relaxed [&_ul]:list-none [&_li]:before:content-['→_'] [&_li]:before:text-green-600">
                <PortableText value={experience.description} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
