import { client } from "@/sanity/lib/client";
import { projectsQuery } from "@/lib/sanity-queries";
import ProjectCard from "@/components/ProjectCard";

export const revalidate = 60;

export const metadata = {
  title: "Projects - TJ",
  description: "Showcase of my software engineering projects",
};

export default async function ProjectsPage() {
  const projects = await client.fetch(projectsQuery);

  return (
    <div className="space-y-8">
      <div className="font-mono">
        <div className="text-green-600 dark:text-green-700 text-sm mb-2">
          <span className="text-green-500 dark:text-green-600">$</span> ls ~/projects/ -la
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-green-800 dark:text-green-400 text-glow">
          Projects
        </h1>
        <p className="text-sm text-green-800/60 dark:text-green-500/60 mt-2 max-w-xl">
          A collection of my work across different technologies and domains.
        </p>
        <div className="h-px w-full bg-green-900/30 mt-4" />
        <div className="text-[10px] text-green-700 dark:text-green-700 mt-2">
          total {projects.length} entries
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.length > 0 ? (
          projects.map((project: any) => (
            <ProjectCard key={project._id} project={project} />
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
