"use client";

import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { FaQuoteLeft } from "react-icons/fa";

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
    <section className="py-16 md:py-28 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            What People Say About Me
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials?.map((testimonial) => (
            <div 
              key={testimonial._id} 
              className="bg-white dark:bg-gray-800/50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative border border-gray-100 dark:border-gray-700"
            >
              <FaQuoteLeft className="text-blue-500/20 text-5xl mb-6" />
              
              <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed relative z-10">
                "{testimonial.message}"
              </p>
              
              <div className="flex items-center gap-4 border-t border-gray-100 dark:border-gray-700 pt-6">
                <div className="relative w-14 h-14 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 flex-shrink-0">
                  {testimonial.image ? (
                    <Image
                      src={urlFor(testimonial.image).url()}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-xl font-bold text-gray-400 bg-gray-100 dark:bg-gray-800">
                      {testimonial.name.charAt(0)}
                    </div>
                  )}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-base">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                    {testimonial.role}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {testimonial.company}
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
