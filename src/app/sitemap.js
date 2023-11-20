export default function sitemap() {
    return [
      {
        url: '/',
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1,
      },
      
      {
        url: 'https://acme.com/about',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },

      {
        url: '/impressum',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.,
      },
    ]
}