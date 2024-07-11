import { CvTitleType } from "@/types/cv-title-type";

export default function CvSecTitle({ title }: CvTitleType) {
  return (
    <h2 className="text-2xl text-primary mb-4 pb-4 border-b-2 border-b-[rgb(243,243,243)] border-solid">
      {title}
    </h2>
  );
}
