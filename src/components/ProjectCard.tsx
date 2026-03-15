import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface ProjectProps {
  project: {
    title: string;
    slug: { current: string };
    description: string;
    image: any;
    technologies: string[];
    demoUrl?: string;
    githubUrl?: string;
  };
}

export default function ProjectCard({ project }: ProjectProps) {
  return (
    <div className="rounded-lg border border-green-900/30 dark:border-green-900/40 bg-gray-50 dark:bg-[#0a0f0a] overflow-hidden hover:border-green-600/50 dark:hover:border-green-500/50 transition-all group flex flex-col h-full">
      {/* Title bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-100 dark:bg-[#0d1a0d] border-b border-green-900/20">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          </div>
          <span className="text-[10px] text-green-700 dark:text-green-700 font-mono ml-1 truncate max-w-[150px]">
            {project.title.toLowerCase().replace(/\s+/g, "-")}
          </span>
        </div>
        <div className="flex gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-700 dark:text-green-700 hover:text-green-500 dark:hover:text-green-400 transition-colors"
              aria-label="GitHub Code"
            >
              <FaGithub size={14} />
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-700 dark:text-green-700 hover:text-green-500 dark:hover:text-green-400 transition-colors"
              aria-label="Live Demo"
            >
              <FaExternalLinkAlt size={12} />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 font-mono flex flex-col flex-grow">
        <div className="text-green-600 dark:text-green-700 text-xs mb-2">
          <span className="text-green-500 dark:text-green-600">$</span> cat README.md
        </div>
        <h3 className="text-lg font-bold text-green-800 dark:text-green-400 group-hover:text-glow-sm mb-3 transition-all">
          {project.title}
        </h3>
        <p className="text-sm text-green-800/70 dark:text-green-500/70 mb-5 line-clamp-3 leading-relaxed flex-grow">
          {project.description}
        </p>

        <div className="space-y-2 mt-auto">
          <div className="text-green-600 dark:text-green-700 text-xs">
            <span className="text-green-500 dark:text-green-600">$</span> cat stack.txt
          </div>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies?.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-[10px] font-mono font-medium bg-green-500/5 dark:bg-green-500/10 text-green-700 dark:text-green-500 rounded border border-green-900/20 dark:border-green-900/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
