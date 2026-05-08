import {getRequestConfig} from 'next-intl/server';

// Can be imported from a shared config
const locales = ['en', 'pt', 'es'];

export default getRequestConfig(async ({locale}) => {
  // Validate that the incoming `locale` parameter is valid
  // If not valid, we default to 'pt' instead of throwing 404 immediately
  // to avoid issues with static assets or internal Next.js calls
  const activeLocale = locales.includes(locale as any) ? locale : 'pt';

  return {
    locale: activeLocale,
    messages: (await import(`./messages/${activeLocale}.json`)).default
  };
});
