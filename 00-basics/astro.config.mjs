import { defineConfig } from 'astro/config';
// https://astro.build/config
import mdx from "@astrojs/mdx";
import remarkToc from 'remark-toc';
import { exampleRemarkPlugin } from './example-remark-plugin.mjs';
import { remarkReadingTime } from './remark-reading-time.mjs';

// https://astro.build/config
export default defineConfig({
    markdown: {
      drafts: true,
      shikiConfig: {
        // Choose from Shiki's built-in themes (or add your own)
        // https://github.com/shikijs/shiki/blob/main/docs/themes.md
        theme: 'dracula',
        // Add custom languages
        // Note: Shiki has countless langs built-in, including .astro!
        // https://github.com/shikijs/shiki/blob/main/docs/languages.md
        langs: [],
        // Enable word wrap to prevent horizontal scrolling
        wrap: true,
      },
    },
    integrations: [mdx({
      remarkPlugins: [
        remarkToc,
        exampleRemarkPlugin,
        remarkReadingTime
      ],
  })],
});