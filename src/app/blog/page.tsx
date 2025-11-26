import { client } from "@/sanity/lib/client";
import { postsQuery } from "@/lib/sanity-queries";
import BlogCard from "@/components/BlogCard";

export const revalidate = 60;

export const metadata = {
  title: "Blog - Portfolio",
  description: "Articles and tutorials about software engineering",
};

export default async function BlogPage() {
  const posts = await client.fetch(postsQuery);

  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Blog</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Thoughts, tutorials, and insights on software development.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.length > 0 ? (
          posts.map((post: any) => (
            <BlogCard key={post._id} post={post} />
          ))
        ) : (
          <div className="col-span-full text-center py-20 text-gray-500">
            No posts found.
          </div>
        )}
      </div>
    </div>
  );
}







