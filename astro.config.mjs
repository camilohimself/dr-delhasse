// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://drdelhasse-cardiologue.ch',
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en', 'de'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
