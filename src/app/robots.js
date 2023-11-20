export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: '/admin/',
        disallow: '/auth/',
      },
      sitemap: '/sitemap.xml',
    }
}