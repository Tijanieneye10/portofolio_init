import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { postsQuery, projectsQuery, authorQuery, testimonialsQuery } from "@/lib/sanity-queries";
import ProjectCard from "@/components/ProjectCard";
import BlogCard from "@/components/BlogCard";
import HeroSection from "@/components/HeroSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import { SiLaravel, SiGo, SiNodedotjs, SiDocker, SiOpenai } from "react-icons/si";

export const revalidate = 60;

export default async function Home() {
  const posts = await client.fetch(postsQuery);
  const projects = await client.fetch(projectsQuery);
  const author = await client.fetch(authorQuery);
  const testimonials = await client.fetch(testimonialsQuery);

  const featuredProjects = projects.slice(0, 3);
  const recentPosts = posts.slice(0, 3);

  return (
    <div className="space-y-20">
      <HeroSection author={author} />

      {/* Tech Stack */}
      <section className="space-y-6">
        <div className="font-mono">
          <div className="text-green-600 dark:text-green-700 text-sm mb-2">
            <span className="text-green-500 dark:text-green-600">$</span> cat ~/.tech-stack
          </div>
          <h2 className="text-2xl font-bold text-green-800 dark:text-green-400 text-glow">
            Tech Stack
          </h2>
          <div className="h-px w-full bg-green-900/30 mt-4" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 max-w-5xl mx-auto font-mono">
          {[
            { name: "PHP (Laravel)", icon: <SiLaravel size={28} />, color: "text-red-500 dark:text-red-400", border: "hover:border-red-500/50" },
            { name: "Golang", icon: <SiGo size={28} />, color: "text-cyan-500 dark:text-cyan-400", border: "hover:border-cyan-500/50" },
            { name: "Node.js", icon: <SiNodedotjs size={28} />, color: "text-green-500 dark:text-green-400", border: "hover:border-green-500/50" },
            { name: "DevOps", icon: <SiDocker size={28} />, color: "text-blue-500 dark:text-blue-400", border: "hover:border-blue-500/50" },
            { name: "Agentic AI", icon: <SiOpenai size={28} />, color: "text-purple-500 dark:text-purple-400", border: "hover:border-purple-500/50" },
          ].map((tech) => (
            <div
              key={tech.name}
              className={`flex flex-col items-center gap-2 p-4 rounded-lg border border-green-900/30 dark:border-green-900/40 bg-gray-50 dark:bg-[#0a0f0a] ${tech.border} transition-all group`}
            >
              <span className={`${tech.color} transition-all`}>
                {tech.icon}
              </span>
              <span className="text-xs text-green-800 dark:text-green-500 text-center">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="space-y-6">
        <div className="flex justify-between items-end font-mono">
          <div>
            <div className="text-green-600 dark:text-green-700 text-sm mb-2">
              <span className="text-green-500 dark:text-green-600">$</span> ls ~/projects/ --featured
            </div>
            <h2 className="text-2xl font-bold text-green-800 dark:text-green-400 text-glow">
              Featured Projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="text-xs text-cyan-700 dark:text-cyan-600 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors border-b border-cyan-900/30 hover:border-cyan-500/50 pb-0.5"
          >
            $ ls -la &rarr;
          </Link>
        </div>
        <div className="h-px w-full bg-green-900/30" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.length > 0 ? (
            featuredProjects.map((project: any) => (
              <ProjectCard key={project._id} project={project} />
            ))
          ) : (
            <div className="col-span-full text-center py-12 text-green-700 dark:text-green-700 font-mono text-sm">
              [ scanning for projects... ]
            </div>
          )}
        </div>
      </section>

      {/* Recent Blog Posts */}
      <section className="space-y-6">
        <div className="flex justify-between items-end font-mono">
          <div>
            <div className="text-green-600 dark:text-green-700 text-sm mb-2">
              <span className="text-green-500 dark:text-green-600">$</span> ls ~/blog/ --recent
            </div>
            <h2 className="text-2xl font-bold text-green-800 dark:text-green-400 text-glow">
              Recent Articles
            </h2>
          </div>
          <Link
            href="/blog"
            className="text-xs text-cyan-700 dark:text-cyan-600 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors border-b border-cyan-900/30 hover:border-cyan-500/50 pb-0.5"
          >
            $ cat --all &rarr;
          </Link>
        </div>
        <div className="h-px w-full bg-green-900/30" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentPosts.length > 0 ? (
            recentPosts.map((post: any) => (
              <BlogCard key={post._id} post={post} />
            ))
          ) : (
            <div className="col-span-full text-center py-12 text-green-700 dark:text-green-700 font-mono text-sm">
              [ no entries found ]
            </div>
          )}
        </div>
      </section>

      {/* Testimonials */}
      {testimonials?.length > 0 && (
        <TestimonialsSection testimonials={testimonials} />
      )}

      {/* Contact */}
      <ContactSection email={author?.email} socialLinks={author?.socialLinks} />
    </div>
  );
}
