"use client";

import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

interface Testimonial {
  _id: string;
  name: string;
  role: string;
  company: string;
  image: any;
  message: string;
}

export default function TestimonialsSection({ testimonials }: { testimonials: Testimonial[] }) {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 font-mono">
          <div className="text-green-600 dark:text-green-700 text-sm mb-2">
            <span className="text-green-500 dark:text-green-600">$</span> cat /var/log/testimonials.log
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-green-800 dark:text-green-400 text-glow">
            Testimonials
          </h2>
          <div className="h-px w-full bg-green-900/30 mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials?.map((testimonial, index) => (
            <div
              key={testimonial._id}
              className="rounded-lg border border-green-900/30 dark:border-green-900/40 bg-gray-50 dark:bg-[#0a0f0a] p-6 hover:border-green-600/50 dark:hover:border-green-500/50 transition-all font-mono"
            >
              <div className="text-[10px] mb-4">
                <span className="text-amber-600 dark:text-amber-500">[{String(index).padStart(3, "0")}]</span> <span className="text-green-600 dark:text-green-700">{new Date().toISOString().split("T")[0]}</span> <span className="text-cyan-600 dark:text-cyan-500">INFO</span>
              </div>

              <p className="text-sm text-green-800/80 dark:text-green-500/80 mb-6 leading-relaxed">
                &quot;{testimonial.message}&quot;
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-green-900/20">
                <div className="relative w-10 h-10 rounded-full overflow-hidden bg-green-500/10 flex-shrink-0 border border-green-900/30">
                  {testimonial.image ? (
                    <Image
                      src={urlFor(testimonial.image).url()}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-sm font-bold text-green-600">
                      {testimonial.name.charAt(0)}
                    </div>
                  )}
                </div>
                <div>
                  <h4 className="font-bold text-green-800 dark:text-green-400 text-sm">
                    {testimonial.name}
                  </h4>
                  <p className="text-[10px] text-amber-600 dark:text-amber-400">
                    {testimonial.role} @ {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
