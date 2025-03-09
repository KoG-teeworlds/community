// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightBlog from "starlight-blog";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

// https://astro.build/config
export default defineConfig({
  vite: {
    build: {
      modulePreload: true,
      cssMinify: "lightningcss",
      minify: "terser",
      rollupOptions: {},
    },
  },
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
  integrations: [
    starlight({
      title: "KoG Community",
      customCss: ["./src/styles/custom.css", "./src/styles/mathjax.css"],
      components: {},
      favicon: "/tee_light.svg",
      logo: {
        dark: "./src/assets/brand/tee_light.svg",
        light: "./src/assets/brand/tee_dark.svg",
      },
      social: {
        discord: "https://discord.kog.tw",
        github: "https://github.com/KoG-teeworlds/community",
      },
      plugins: [
        starlightBlog({
          authors: {},
        }),
      ],
      defaultLocale: "root",
      locales: {
        root: {
          label: "English",
          lang: "en",
        },
        ru: {
          label: "Русский",
        },
        tr: {
          label: "Türkçe",
        },
      },
      sidebar: [
        {
          label: "Community",
          translations: {
            tr: "Topluluk",
            ru: "Сообщество",
          },
          autogenerate: { directory: "community" },
        },
        {
          label: "Projects",
          translations: {
            tr: "Projeler",
            ru: "Проекты",
          },
          autogenerate: { directory: "projects" },
        },
        {
          label: "Information",
          translations: {
            tr: "Bilgi",
            ru: "Информация",
          },
          autogenerate: { directory: "information" },
        },
        {
          label: "Guides",
          translations: {
            tr: "Rehberler",
            ru: "Руководства",
          },
          autogenerate: { directory: "guides" },
        },
        {
          label: "Agreements",
          translations: {
            tr: "Anlaşmalar",
            ru: "Соглашения",
          },
          autogenerate: { directory: "agreements" },
        },
      ],
    }),
  ],
});
