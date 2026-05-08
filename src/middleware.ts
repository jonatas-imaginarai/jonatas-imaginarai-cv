import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'pt', 'es'],

  // Used when no locale matches
  defaultLocale: 'pt',
  
  // Optional: doesn't prefix the default locale
  localePrefix: 'as-needed'
});

export const config = {
  // Matcher ignoring /api, /_next and all static files
  matcher: [
    // Match all pathnames except for
    // - /api (API routes)
    // - /_next (Next.js internals)
    // - /_static (inside /public)
    // - all root files inside /public (e.g. /favicon.ico)
    '/((?!api|_next|_static|_vercel|[\\w-]+\\.\\w+).*)',
    // However, match all pathnames within the localized folders
    '/(pt|en|es)/:path*'
  ]
};
