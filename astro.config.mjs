// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightBlog from "starlight-blog";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

// https://astro.build/config
export default defineConfig({
  site: "https://community.kog.tw",
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
      customCss: ["./src/styles/custom.css"],
      components: {},
      favicon: "/tee_light.svg",
      logo: {
        dark: "./src/assets/brand/tee_light.svg",
        light: "./src/assets/brand/tee_dark.svg",
      },
      social: [
        { icon: "discord", label: "Discord", href: "https://discord.kog.tw" },
        {
          icon: "github",
          label: "Github",
          href: "https://github.com/KoG-teeworlds/community",
        },
      ],
      plugins: [
        starlightBlog({
          authors: {
            avolicious: {
              name: "Avolicious",
              title: "Project Maintainer",
              picture: "authors/avolicious.webp",
              url: "https://kog.tw",
            },
          },
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
