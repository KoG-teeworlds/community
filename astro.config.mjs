// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightBlog from 'starlight-blog';

// https://astro.build/config
export default defineConfig({
  vite: {
    build: {
      modulePreload: true,
      cssMinify: "lightningcss",
      minify: "terser",
      rollupOptions: {}
    }
  },
  integrations: [starlight({
    title: "KoG Community",
    customCss: ["./src/styles/custom.css"],
    components: {},
    favicon: "/tee_light.svg",
    logo: {
      dark: "./src/assets/tee_light.svg",
      light: "./src/assets/tee_dark.svg",
    },
    social: {
      discord: "https://discord.kog.tw",
      github: "https://github.com/KoG-teeworlds/community",
    },
    plugins: [
      starlightBlog({
        authors: {},
      })
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
        label: "Guides",
        translations: {
          tr: "Rehberler",
          ru: "Руководства",
        },
        autogenerate: { directory: "guides" },
      },
      {
          label: "Info",
          translations: {
            tr: "Bilgi",
            ru: "Информация",
          },
          autogenerate: { directory: "info" },
        },
        autogenerate: { directory: "other" },
      },
    ],
  })],
});
