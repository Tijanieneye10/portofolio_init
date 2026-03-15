import { PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

export const RichTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative w-full h-96 my-8 rounded-lg overflow-hidden border border-green-900/30">
          <Image
            src={urlFor(value).url()}
            alt={value.alt || "Blog Image"}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-green-500/5 mix-blend-overlay pointer-events-none" />
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="ml-6 py-4 space-y-2 list-none [&>li]:before:content-['→_'] [&>li]:before:text-green-600">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="mt-4 ml-6 list-decimal marker:text-green-600">{children}</ol>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-3xl py-6 font-bold text-green-800 dark:text-green-400 font-mono">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-2xl py-6 font-bold text-green-800 dark:text-green-400 font-mono">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl py-4 font-bold text-green-800 dark:text-green-400 font-mono">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-lg py-4 font-bold text-green-800 dark:text-green-400 font-mono">{children}</h4>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-2 border-green-600 pl-5 py-4 my-5 bg-green-500/5 dark:bg-green-500/10 rounded-r-lg font-mono text-sm text-green-800/80 dark:text-green-500/80">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <a
          href={value.href}
          rel={rel}
          className="underline decoration-green-600 hover:decoration-green-400 text-green-700 dark:text-green-400 font-medium"
        >
          {children}
        </a>
      );
    },
    code: ({ children }: any) => (
      <code className="px-1.5 py-0.5 rounded bg-green-500/10 text-green-700 dark:text-green-400 font-mono text-sm border border-green-900/20">
        {children}
      </code>
    ),
  },
};
