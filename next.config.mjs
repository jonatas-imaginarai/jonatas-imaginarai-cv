import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configurações adicionais podem ser adicionadas aqui
};

export default withNextIntl(nextConfig);
