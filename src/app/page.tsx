import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { postsQuery, projectsQuery, authorQuery, testimonialsQuery } from "@/lib/sanity-queries";
import ProjectCard from "@/components/ProjectCard";
import BlogCard from "@/components/BlogCard";
import HeroSection from "@/components/HeroSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import { FaCode, FaServer, FaDatabase, FaCloud, FaBrain, FaLinux } from "react-icons/fa";

// Revalidate data every 60 seconds
export const revalidate = 60;

export default async function Home() {
  const posts = await client.fetch(postsQuery);
  const projects = await client.fetch(projectsQuery);
  const author = await client.fetch(authorQuery);
  const testimonials = await client.fetch(testimonialsQuery);

  // Filter for featured or take first 3
  const featuredProjects = projects.slice(0, 3);
  const recentPosts = posts.slice(0, 3);

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <HeroSection author={author} />

      {/* Tech Stack */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Tech Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-5xl mx-auto text-center">
          <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-gray-50 dark:bg-gray-800/50">
            <FaCode className="text-4xl text-blue-500" />
            <span className="font-medium">PHP & Laravel</span>
          </div>
          <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-gray-50 dark:bg-gray-800/50">
            <FaServer className="text-4xl text-cyan-500" />
            <span className="font-medium">Go (Golang)</span>
          </div>
          <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-gray-50 dark:bg-gray-800/50">
            <FaDatabase className="text-4xl text-green-500" />
            <span className="font-medium">Python</span>
          </div>
          <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-gray-50 dark:bg-gray-800/50">
            <FaCloud className="text-4xl text-yellow-500" />
            <span className="font-medium">DevOps & Cloud</span>
          </div>
          <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-gray-50 dark:bg-gray-800/50">
            <FaBrain className="text-4xl text-purple-500" />
            <span className="font-medium">Agentic AI</span>
          </div>
          <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-gray-50 dark:bg-gray-800/50 md:hidden">
            <FaLinux className="text-4xl text-black dark:text-white" />
            <span className="font-medium">Linux</span>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="space-y-8">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold">Featured Projects</h2>
          <Link
            href="/projects"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            View all &rarr;
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.length > 0 ? (
            featuredProjects.map((project: any) => (
              <ProjectCard key={project._id} project={project} />
            ))
          ) : (
            <div className="col-span-full text-center py-12 text-gray-500">
              Projects coming soon...
            </div>
          )}
        </div>
      </section>

      {/* Recent Blog Posts */}
      <section className="space-y-8">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold">Recent Articles</h2>
          <Link
            href="/blog"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Read all &rarr;
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.length > 0 ? (
            recentPosts.map((post: any) => (
              <BlogCard key={post._id} post={post} />
            ))
          ) : (
            <div className="col-span-full text-center py-12 text-gray-500">
              Blog posts coming soon...
            </div>
          )}
        </div>
      </section>

      {/* Testimonials */}
      {testimonials?.length > 0 && (
        <TestimonialsSection testimonials={testimonials} />
      )}
    </div>
  );
}
