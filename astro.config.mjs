// @ts-check
import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { remarkImageKit } from './src/plugins/remark-imagekit.mjs';

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [remarkMath, remarkImageKit],
    rehypePlugins: [rehypeKatex],
  },
});
