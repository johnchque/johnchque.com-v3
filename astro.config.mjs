// @ts-check
import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { remarkImageKit } from './src/plugins/remark-imagekit.mjs';
import { remarkVideoEmbed } from './src/plugins/remark-link-preview.mjs';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [remarkMath, remarkImageKit, remarkVideoEmbed],
    rehypePlugins: [rehypeKatex],
  },

  integrations: [icon()],
});