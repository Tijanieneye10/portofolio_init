import { client } from "@/sanity/lib/client";
import { authorQuery } from "@/lib/sanity-queries";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { FaGithub, FaLinkedin, FaTwitter, FaFileDownload } from "react-icons/fa";

export const revalidate = 60;

export const metadata = {
  title: "About Me - Portfolio",
  description: "Learn more about my background and experience",
};

export default async function AboutPage() {
  const author = await client.fetch(authorQuery);

  return (
    <div className="max-w-4xl mx-auto space-y-12 py-12">
      <div className="flex flex-col md:flex-row gap-12 items-start">
        {/* Profile Image Column */}
        <div className="flex-shrink-0 w-full md:w-1/3 flex flex-col items-center md:items-start gap-6">
          <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-900">
            {author?.image ? (
              <Image
                src={urlFor(author.image).url()}
                alt={author.name}
                width={500}
                height={500}
                className="w-full h-auto object-contain"
                priority
              />
            ) : (
              <div className="aspect-square w-full flex items-center justify-center">
                <span className="text-gray-400">No Image</span>
              </div>
            )}
          </div>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-4 w-full">
            {author?.socialLinks?.map((link: string) => {
              if (link.includes("github")) return <SocialLink key={link} href={link} icon={<FaGithub />} label="GitHub" />;
              if (link.includes("linkedin")) return <SocialLink key={link} href={link} icon={<FaLinkedin />} label="LinkedIn" />;
              if (link.includes("twitter") || link.includes("x.com")) return <SocialLink key={link} href={link} icon={<FaTwitter />} label="Twitter" />;
              return null;
            })}
          </div>
        </div>

        {/* Content Column */}
        <div className="flex-grow space-y-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              About Me
            </h1>
            <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
          </div>

          <div className="prose prose-lg dark:prose-invert text-gray-600 dark:text-gray-300 space-y-6 leading-relaxed">
            <p>
              I'm <span className="font-semibold text-gray-900 dark:text-white">{author?.name || "Tijani"}</span>, a Fullstack Software Engineer with over 6 years of hands-on experience in designing, building, and maintaining robust digital systems. My professional focus is on delivering high-quality software solutions that are not just functional, but reliable, secure, and architected for scale from day one.
            </p>
            <p>
              Throughout my career, I have successfully architected and deployed mission-critical systems across diverse industries, ranging from EdTech platforms to complex financial services. I take pride in building applications that served thousands of concurrent users seamlessly, ensuring high availability and performance under load.
            </p>
            <p>
              I am passionate about transforming abstract business problems into concrete, functional systems. My technical toolkit includes expert proficiency in <span className="text-blue-600 dark:text-blue-400 font-medium">Laravel, Go, Python, and Node.js</span>, backed by strong DevOps capabilities with <span className="text-blue-600 dark:text-blue-400 font-medium">DigitalOcean and AWS</span> to ensure smooth deployment and operation.
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
      className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all"
      aria-label={label}
    >
      <span className="text-2xl">{icon}</span>
    </a>
  );
}
