import { client } from "@/sanity/lib/client";
import { postsQuery } from "@/lib/sanity-queries";
import BlogCard from "@/components/BlogCard";

export const revalidate = 60;

export const metadata = {
  title: "Blog - TJ",
  description: "Articles and tutorials about software engineering",
};

export default async function BlogPage() {
  const posts = await client.fetch(postsQuery);

  return (
    <div className="space-y-8">
      <div className="font-mono">
        <div className="text-green-600 dark:text-green-700 text-sm mb-2">
          <span className="text-green-500 dark:text-green-600">$</span> ls ~/blog/ -la
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-green-800 dark:text-green-400 text-glow">
          Blog
        </h1>
        <p className="text-sm text-green-800/60 dark:text-green-500/60 mt-2 max-w-xl">
          Thoughts, tutorials, and insights on software development.
        </p>
        <div className="h-px w-full bg-green-900/30 mt-4" />
        <div className="text-[10px] text-green-700 dark:text-green-700 mt-2">
          total {posts.length} entries
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.length > 0 ? (
          posts.map((post: any) => (
            <BlogCard key={post._id} post={post} />
          ))
        ) : (
          <div className="col-span-full text-center py-20 text-green-700 dark:text-green-700 font-mono text-sm">
            [ directory empty ]
          </div>
        )}
      </div>
    </div>
  );
}
