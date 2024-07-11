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
} from "@/data/links";

export const projects = [
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
  {
    name: "Google Clone",
    description: "Proyecto realizado para práticar HTML Y CSS",
    image: "/Google_clone.png",
    link: "https://marcozsh.github.io/google_clone/",
    links: [
      {
        visible: true,
        link: "https://github.com/marcozsh/google_clone",
        type: 1,
      },
      {
        visible: true,
        link: "https://marcozsh.github.io/google_clone/",
        type: 2,
      },
    ],
    technology: [
      {
        link: html,
        alt: "html",
      },
      {
        link: css,
        alt: "css",
      },
    ],
  },
];
