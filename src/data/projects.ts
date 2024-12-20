import {
  css,
  djangorest,
  html,
  js,
  mysql,
  nextjs,
  php,
  react,
  tailwind,
  ts,
  postgres,
} from "@/data/links";

export const projects = [
  {
    name: "Imagen a Texto",
    description: "App para convertir imágenes a texto",
    image: "/imgtotext.png",
    link: "https://img-to-text-eta.vercel.app/home",
    links: [
      {
        visible: true,
        link: "https://github.com/marcozsh/img-to-text",
        type: 1,
      },
      {
        visible: true,
        link: "https://img-to-text-eta.vercel.app/home",
        type: 2,
      },
    ],
    technology: [
      {
        link: ts,
        alt: "typescript",
      },
      {
        link: react,
        alt: "react",
      },
      {
        link: nextjs,
        alt: "nextjs",
      },
      {
        link: tailwind,
        alt: "tailwindcss",
      },
      { link: postgres, alt: "postgres" },
    ],
  },

  {
    name: "Computecnicos",
    description:
      "Landing page para servicio técnico de computadoras",
    image: "/computecnicos.png",
    link: "https://computecnicos.vercel.app/",
    links: [
      {
        visible: true,
        link: "https://github.com/marcozsh/computecnicos",
        type: 1,
      },
      {
        visible: true,
        link: "https://computecnicos.vercel.app/",
        type: 2,
      },
    ],
    technology: [
      {
        link: ts,
        alt: "typescript",
      },
      {
        link: react,
        alt: "react",
      },
      {
        link: nextjs,
        alt: "nextjs",
      },
      {
        link: tailwind,
        alt: "tailwindcss",
      },
      { link: postgres, alt: "postgres" },
    ],
  },
  {
    name: "Marcozsh's Blog",
    description:
      "Proyecto realizado para prácticar React, NextJS y Django como backend",
    image: "/blog.png",
    link: "https://marcozsh-blog.vercel.app/",
    links: [
      {
        visible: true,
        link: "https://github.com/marcozsh/MarcozshBlog",
        type: 1,
      },
      { visible: true, link: "https://marcozsh-blog.vercel.app/", type: 2 },
    ],
    technology: [
      {
        link: ts,
        alt: "typescript",
      },
      {
        link: react,
        alt: "react",
      },
      {
        link: nextjs,
        alt: "nextjs",
      },
      {
        link: tailwind,
        alt: "tailwindcss",
      },
      {
        link: djangorest,
        alt: "django-rest",
      },
      {
        link: mysql,
        alt: "mysql",
      },
    ],
  },
];
