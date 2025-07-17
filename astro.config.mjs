// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightBlog from "starlight-blog";

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
<<<<<<< HEAD
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
=======
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
>>>>>>> ea7efc2 (fix: astro)
        {
          label: "Projects",
          translations: {
            tr: "Projeler",
            ru: "Проекты",
          },
          autogenerate: { directory: "projects" },
        },
        {
<<<<<<< HEAD
          label: "Information",
          translations: {
            tr: "Bilgi",
            ru: "Информация",
          },
          autogenerate: { directory: "information" },
        },
        {
=======
>>>>>>> ea7efc2 (fix: astro)
          label: "Guides",
          translations: {
            tr: "Rehberler",
            ru: "Руководства",
          },
          autogenerate: { directory: "guides" },
        },
        {
<<<<<<< HEAD
          label: "Agreements",
          translations: {
            tr: "Anlaşmalar",
            ru: "Соглашения",
          },
          autogenerate: { directory: "agreements" },
=======
          label: "Info",
          translations: {
            tr: "Bilgi",
            ru: "Информация",
          },
          autogenerate: { directory: "info" },
>>>>>>> ea7efc2 (fix: astro)
        },
      ],
    }),
  ],
});
