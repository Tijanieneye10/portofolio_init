import { groq } from "next-sanity";

export const postsQuery = groq`*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  _id,
  title,
  slug,
  mainImage,
  publishedAt,
  excerpt,
  "author": author->name,
  "tags": tags
}`;

export const postQuery = groq`*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  mainImage,
  publishedAt,
  excerpt,
  "author": author->{name, image, bio},
  "tags": tags,
  body
}`;

export const projectsQuery = groq`*[_type == "project" && defined(slug.current)] | order(publishedAt desc) {
  _id,
  title,
  slug,
  description,
  image,
  technologies,
  demoUrl,
  githubUrl,
  featured
}`;

export const authorQuery = groq`*[_type == "author"][0] {
  name,
  title,
  bio,
  image,
  socialLinks
}`;

export const experiencesQuery = groq`*[_type == "experience"] | order(startDate desc) {
  _id,
  position,
  company,
  startDate,
  endDate,
  current,
  description,
  logo
}`;

export const testimonialsQuery = groq`*[_type == "testimonial"] {
  _id,
  name,
  role,
  company,
  image,
  message
}`;
