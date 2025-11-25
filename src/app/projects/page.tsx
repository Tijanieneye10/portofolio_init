import { client } from "@/sanity/lib/client";
import { projectsQuery } from "@/lib/sanity-queries";
import ProjectCard from "@/components/ProjectCard";

export const revalidate = 60;

export const metadata = {
  title: "Projects - Portfolio",
  description: "Showcase of my software engineering projects",
};

export default async function ProjectsPage() {
  const projects = await client.fetch(projectsQuery);

  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Projects</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          A collection of my work across different technologies and domains.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.length > 0 ? (
          projects.map((project: any) => (
            <ProjectCard key={project._id} project={project} />
          ))
        ) : (
          <div className="col-span-full text-center py-20 text-gray-500">
            No projects found.
          </div>
        )}
      </div>
    </div>
  );
}




