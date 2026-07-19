import type { MetadataRoute } from 'next';
import { courses } from '@/data/courses';
import { bundles } from '@/data/bundles';
import { blogPosts } from '@/data/blog';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.healthfitnessacademy.co.uk';
  const lastModified = new Date().toISOString().split('T')[0];

  const staticRoutes = [
    '',
    '/about',
    '/courses',
    '/pricing',
    '/become-a-personal-trainer',
    '/testimonials',
    '/our-commitment',
    '/blog',
    '/faq',
    '/contact',
    '/privacy-policy',
    '/terms',
  ];

  const courseRoutes = courses.map((c) => `/courses/${c.slug}`);
  const bundleRoutes = bundles.map((b) => `/bundles/${b.slug}`);
  const blogRoutes = blogPosts.map((p) => `/blog/${p.slug}`);

  const allRoutes = [...staticRoutes, ...courseRoutes, ...bundleRoutes, ...blogRoutes];

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}
