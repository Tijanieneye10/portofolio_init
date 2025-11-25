import { MetadataRoute } from 'next';
import { client } from "@/sanity/lib/client";
import { postsQuery, projectsQuery } from "@/lib/sanity-queries";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://your-portfolio-url.com'; // Replace with actual URL

  const posts = await client.fetch(postsQuery);
  const projects = await client.fetch(projectsQuery);

  const postUrls = posts.map((post: any) => ({
    url: `${baseUrl}/blog/${post.slug.current}`,
    lastModified: new Date(post.publishedAt),
  }));

  const projectUrls = projects.map((project: any) => ({
    url: `${baseUrl}/projects/${project.slug.current}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
    },
    ...postUrls,
    ...projectUrls,
  ];
}





