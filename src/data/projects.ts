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
    name: "Computecnicos",
    description:
      "Proyecto realizado practicar NextJS, NextUI, TypeScript y Form Actions",
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
  {
    name: "Drive local",
    description: "Proyecto para compartir archivos en una misma red",
    image: "/drive.gif",
    link: "",
    links: [
      {
        visible: true,
        link: "https://github.com/marcozsh/my_drive",
        type: 1,
      },
    ],
    technology: [
      {
        link: php,
        alt: "php",
      },
      {
        link: html,
        alt: "html",
      },
      {
        link: css,
        alt: "css",
      },
      {
        link: js,
        alt: "js",
      },
      {
        link: mysql,
        alt: "mysql",
      },
    ],
  },
];
