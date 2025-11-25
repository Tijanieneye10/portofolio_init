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
    <div className="space-y-12">
      <h2 className="text-3xl font-bold">Work Experience</h2>
      
      <div className="relative border-l border-gray-200 dark:border-gray-700 ml-3 md:ml-6 space-y-12">
        {experiences?.map((experience) => (
          <div key={experience._id} className="relative pl-8 md:pl-12">
            {/* Timeline dot */}
            <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white dark:border-gray-900 bg-blue-600 dark:bg-blue-500" />
            
            <div className="flex flex-col sm:flex-row gap-4 sm:items-start justify-between mb-4">
              <div className="flex items-center gap-4">
                {experience.logo && (
                  <div className="relative w-12 h-12 flex-shrink-0 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800 bg-white">
                    <Image
                      src={urlFor(experience.logo).url()}
                      alt={experience.company}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                )}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {experience.position}
                  </h3>
                  <p className="text-lg font-medium text-blue-600 dark:text-blue-400">
                    {experience.company}
                  </p>
                </div>
              </div>
              
              <div className="text-sm font-medium text-gray-500 dark:text-gray-400 whitespace-nowrap bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full self-start">
                {new Date(experience.startDate).toLocaleDateString("en-US", {
                  month: "short",
                  year: "numeric",
                })}
                {" - "}
                {experience.current
                  ? "Present"
                  : experience.endDate &&
                    new Date(experience.endDate).toLocaleDateString("en-US", {
                      month: "short",
                      year: "numeric",
                    })}
              </div>
            </div>

            <div className="prose prose-sm dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
              <PortableText value={experience.description} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}



