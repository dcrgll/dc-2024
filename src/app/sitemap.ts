import { type MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://cargill.dev',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1
    },
    {
      url: 'https://cargill.dev/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8
    },
    {
      url: 'https://cargill.dev/links',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8
    },
    {
      url: 'https://cargill.dev/now-playing',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5
    }
  ]
}
