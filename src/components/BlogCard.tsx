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
  return (
    <Link href={`/blog/${post.slug.current}`} className="group">
      <article className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-[1.02] h-full flex flex-col">
        <div className="relative h-48 w-full overflow-hidden">
          {post.mainImage ? (
            <Image
              src={urlFor(post.mainImage).url()}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
              <span className="text-gray-400">No Image</span>
            </div>
          )}
        </div>
        
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex gap-2 mb-3">
            {post.tags?.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {post.title}
          </h3>
          
          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 flex-grow">
            {post.excerpt}
          </p>
          
          <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400 mt-auto">
            <span>
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            {post.author && <span>{post.author}</span>}
          </div>
        </div>
      </article>
    </Link>
  );
}


