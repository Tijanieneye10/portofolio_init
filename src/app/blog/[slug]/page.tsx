import { client } from "@/sanity/lib/client";
import { postQuery, postsQuery } from "@/lib/sanity-queries";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { ComponentPropsWithoutRef } from "react";

export const revalidate = 60;

interface PageProps {
  params: Promise<{ slug: string }>;
}

const components: PortableTextComponents = {
  block: {
    h1: ({ children }) => (
      <h1 className="text-3xl md:text-4xl font-bold my-6 text-green-800 dark:text-green-400 font-mono">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl md:text-3xl font-bold my-5 text-green-800 dark:text-green-400 font-mono">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl md:text-2xl font-bold my-4 text-green-800 dark:text-green-400 font-mono">{children}</h3>
    ),
    normal: ({ children }) => (
      <p className="mb-4 leading-relaxed text-green-800/80 dark:text-green-500/80">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-green-600 pl-4 italic my-6 bg-green-500/5 dark:bg-green-500/10 py-2 rounded-r font-mono text-sm">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="ml-6 mb-4 space-y-2 list-none [&>li]:before:content-['→_'] [&>li]:before:text-green-600">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal ml-6 mb-4 space-y-2 marker:text-green-600">{children}</ol>
    ),
  },
  types: {
    image: ({ value }) => {
      return (
        <div className="relative w-full h-96 my-8 rounded-lg overflow-hidden border border-green-900/30">
          <Image
            src={urlFor(value).url()}
            alt={value.alt || "Image"}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-green-500/5 mix-blend-overlay pointer-events-none" />
        </div>
      );
    },
  },
  marks: {
    link: ({ children, value }) => {
      return (
        <a
          href={value.href}
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-green-600 hover:decoration-green-400 text-green-700 dark:text-green-400"
        >
          {children}
        </a>
      );
    },
    code: ({ children }) => (
      <code className="px-1.5 py-0.5 rounded bg-green-500/10 text-green-700 dark:text-green-400 font-mono text-sm border border-green-900/20">
        {children}
      </code>
    ),
  },
};

export async function generateStaticParams() {
  const posts = await client.fetch(postsQuery);
  return posts.map((post: { slug: { current: string } }) => ({
    slug: post.slug.current,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = await client.fetch(postQuery, { slug });

  if (!post) {
    return { title: "Post Not Found" };
  }

  const ogImage = post.mainImage
    ? urlFor(post.mainImage).width(1200).height(630).format("jpg").url()
    : null;

  return {
    title: `${post.title} - TJ Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author?.name || "Unknown Author"],
      images: ogImage ? [{ url: ogImage, width: 1200, height: 630, alt: post.title }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: ogImage ? [ogImage] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await client.fetch(postQuery, { slug });

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto py-8 px-4 font-mono">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-green-700 dark:text-green-600 hover:text-green-500 dark:hover:text-green-400 mb-8 transition-colors text-sm"
      >
        <span>$</span> cd ../blog
      </Link>

      <header className="mb-10 space-y-5">
        <div className="flex gap-2">
          {post.tags?.map((tag: string) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-[10px] font-mono bg-green-500/10 text-green-700 dark:text-green-500 rounded border border-green-900/20"
            >
              #{tag}
            </span>
          ))}
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-green-800 dark:text-green-400 text-glow leading-tight">
          {post.title}
        </h1>

        <div className="flex items-center gap-4 text-green-700 dark:text-green-700 text-xs border-b border-green-900/20 pb-4">
          {post.author?.image && (
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-green-900/30">
              <Image
                src={urlFor(post.author.image).url()}
                alt={post.author.name}
                fill
                className="object-cover"
              />
            </div>
          )}
          <div>
            <p className="text-green-800 dark:text-green-500 text-sm">
              {post.author?.name || "Unknown Author"}
            </p>
            <p>
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          </div>
        </div>
      </header>

      {post.mainImage && (
        <div className="relative w-full h-[400px] mb-10 rounded-lg overflow-hidden border border-green-900/30">
          <Image
            src={urlFor(post.mainImage).url()}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-green-500/5 mix-blend-overlay pointer-events-none" />
        </div>
      )}

      <div className="mt-8">
        {post.content ? (
          <div className="prose dark:prose-invert max-w-none prose-headings:text-green-800 dark:prose-headings:text-green-400 prose-headings:font-mono prose-p:text-green-800/80 dark:prose-p:text-green-500/80 prose-a:text-green-700 dark:prose-a:text-green-400 prose-strong:text-green-800 dark:prose-strong:text-green-400 prose-code:text-green-700 dark:prose-code:text-green-400 prose-code:bg-green-500/10 prose-code:border prose-code:border-green-900/20 prose-code:rounded prose-code:px-1">
            <ReactMarkdown
              components={{
                code({
                  inline,
                  className,
                  children,
                  ...props
                }: ComponentPropsWithoutRef<"code"> & { inline?: boolean }) {
                  const match = /language-(\w+)/.exec(className || "");
                  return !inline && match ? (
                    <SyntaxHighlighter
                      // @ts-expect-error - react-syntax-highlighter types are slightly incompatible with react types
                      style={dracula}
                      language={match[1]}
                      PreTag="div"
                      {...props}
                    >
                      {String(children).replace(/\n$/, "")}
                    </SyntaxHighlighter>
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                },
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        ) : (
          <PortableText value={post.body} components={components} />
        )}
      </div>
    </article>
  );
}
