/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,

  experimental: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
  },
  react: { useSuspense: false },
}
