import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

interface PostProps {
  post: {
    title: string;
    slug: { current: string };
    excerpt: string;
    mainImage: any;
    publishedAt: string;
    tags?: string[];
    author?: string;
  };
}

export default function BlogCard({ post }: PostProps) {
  const dateStr = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });

  return (
    <Link href={`/blog/${post.slug.current}`} className="group">
      <article className="rounded-lg border border-green-900/30 dark:border-green-900/40 bg-gray-50 dark:bg-[#0a0f0a] overflow-hidden hover:border-green-600/50 dark:hover:border-green-500/50 transition-all h-full flex flex-col">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-[#0d1a0d] border-b border-green-900/20">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          </div>
          <span className="text-[10px] text-green-700 dark:text-green-700 font-mono ml-1 truncate">
            {post.slug.current}.md
          </span>
        </div>

        {/* Image */}
        <div className="relative h-44 w-full overflow-hidden border-b border-green-900/20">
          {post.mainImage ? (
            <>
              <Image
                src={urlFor(post.mainImage).url()}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-green-500/5 mix-blend-overlay pointer-events-none" />
            </>
          ) : (
            <div className="w-full h-full bg-gray-100 dark:bg-[#0a0f0a] flex items-center justify-center font-mono text-green-700 text-xs">
              [ no preview available ]
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5 font-mono flex flex-col flex-grow">
          <div className="flex gap-2 mb-2">
            {post.tags?.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-mono text-amber-600 dark:text-amber-500 uppercase tracking-wider"
              >
                #{tag}
              </span>
            ))}
          </div>

          <h3 className="text-base font-bold text-green-800 dark:text-green-400 mb-2 group-hover:text-glow-sm transition-all leading-snug">
            {post.title}
          </h3>

          <p className="text-xs text-green-800/60 dark:text-green-500/60 mb-4 line-clamp-3 leading-relaxed flex-grow">
            {post.excerpt}
          </p>

          <div className="flex justify-between items-center text-[10px] text-green-700 dark:text-green-700 mt-auto pt-3 border-t border-green-900/20">
            <span>{dateStr}</span>
            <span className="text-cyan-600 dark:text-cyan-500">
              $ cat &rarr;
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
