export type ProjectModel = {
  name: string;
  description: string;
  image: string;
  link: string;
  links: { visible: boolean; link: string , type: number;}[];
  technology: { link: string; alt: string }[];
};

