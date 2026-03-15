import { client } from "@/sanity/lib/client";
import { authorQuery } from "@/lib/sanity-queries";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const revalidate = 60;

export const metadata = {
  title: "About - TJ",
  description: "Learn more about my background and experience",
};

export default async function AboutPage() {
  const author = await client.fetch(authorQuery);

  return (
    <div className="max-w-4xl mx-auto space-y-12 py-12">
      <div className="font-mono">
        <div className="text-green-600 dark:text-green-700 text-sm mb-2">
          <span className="text-green-500 dark:text-green-600">$</span> cat ~/about.md
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-green-800 dark:text-green-400 text-glow">
          About Me
        </h1>
        <div className="h-px w-full bg-green-900/30 mt-4" />
      </div>

      <div className="flex flex-col md:flex-row gap-10 items-start">
        {/* Profile Image */}
        <div className="flex-shrink-0 w-full md:w-1/3 flex flex-col items-center md:items-start gap-4">
          <div className="w-full rounded-lg border border-green-900/40 dark:border-green-900/40 overflow-hidden bg-gray-50 dark:bg-[#0a0f0a]">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 dark:bg-[#0d1a0d] border-b border-green-900/20">
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-red-500/80" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
                <div className="w-2 h-2 rounded-full bg-green-500/80" />
              </div>
              <span className="text-[10px] text-green-700 dark:text-green-700 font-mono ml-1">profile.jpg</span>
            </div>
            {author?.image ? (
              <div className="relative">
                <Image
                  src={urlFor(author.image).url()}
                  alt={author.name}
                  width={500}
                  height={500}
                  className="w-full h-auto object-contain"
                  priority
                />
                <div className="absolute inset-0 bg-green-500/5 mix-blend-overlay pointer-events-none" />
              </div>
            ) : (
              <div className="aspect-square w-full flex items-center justify-center font-mono text-green-700 text-sm">
                [ no image ]
              </div>
            )}
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-2 w-full font-mono">
            {author?.socialLinks?.map((link: string) => {
              if (link.includes("github")) return <SocialLink key={link} href={link} icon={<FaGithub />} label="github" />;
              if (link.includes("linkedin")) return <SocialLink key={link} href={link} icon={<FaLinkedin />} label="linkedin" />;
              if (link.includes("twitter") || link.includes("x.com")) return <SocialLink key={link} href={link} icon={<FaXTwitter />} label="x" />;
              return null;
            })}
          </div>
        </div>

        {/* Content */}
        <div className="flex-grow space-y-6 font-mono">
          <div className="rounded-lg border border-green-900/30 dark:border-green-900/40 bg-gray-50 dark:bg-[#0a0f0a] p-5 md:p-6 space-y-5">
            <div className="text-green-600 dark:text-green-700 text-xs">
              <span className="text-green-500 dark:text-green-600">$</span> whoami --verbose
            </div>

            <p className="text-sm text-green-800/80 dark:text-green-500/80 leading-relaxed">
              I&apos;m <span className="font-bold text-green-700 dark:text-green-400">{author?.name || "Tijani"}</span>, a Fullstack Software Engineer with over 6 years of hands-on experience in designing, building, and maintaining robust digital systems. My professional focus is on delivering high-quality software solutions that are not just functional, but reliable, secure, and architected for scale from day one.
            </p>

            <div className="h-px bg-green-900/20" />

            <div className="text-green-600 dark:text-green-700 text-xs">
              <span className="text-green-500 dark:text-green-600">$</span> cat achievements.log
            </div>

            <p className="text-sm text-green-800/80 dark:text-green-500/80 leading-relaxed">
              Throughout my career, I have successfully architected and deployed mission-critical systems across diverse industries, ranging from EdTech platforms to complex financial services. I take pride in building applications that served thousands of concurrent users seamlessly, ensuring high availability and performance under load.
            </p>

            <div className="h-px bg-green-900/20" />

            <div className="text-green-600 dark:text-green-700 text-xs">
              <span className="text-green-500 dark:text-green-600">$</span> cat stack.txt
            </div>

            <p className="text-sm text-green-800/80 dark:text-green-500/80 leading-relaxed">
              I am passionate about transforming abstract business problems into concrete, functional systems. My technical toolkit includes expert proficiency in{" "}
              <span className="text-green-700 dark:text-green-400 font-medium">Laravel, Go, Python, and Node.js</span>, backed by strong DevOps capabilities with{" "}
              <span className="text-green-700 dark:text-green-400 font-medium">DigitalOcean and AWS</span> to ensure smooth deployment and operation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-3 py-2 rounded border border-green-900/30 dark:border-green-900/40 bg-gray-50 dark:bg-[#0a0f0a] text-green-700 dark:text-green-600 hover:text-green-500 dark:hover:text-green-400 hover:border-green-600/50 dark:hover:border-green-500/50 transition-all text-xs"
      aria-label={label}
    >
      <span className="text-base">{icon}</span>
      <span>/{label}</span>
    </a>
  );
}
