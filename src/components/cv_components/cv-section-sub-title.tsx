import { CvSecSubTitleType } from "@/types/cv-sec-sub-title-type";
export default function CvSecSubTitle({
  title,
  subtitle,
  time,
}: CvSecSubTitleType) {
  return (
    <>
      <div className="flex justify-between">
        <strong>{title}</strong>
        <span>{time}</span>
      </div>
      <p className="opacity-50">{subtitle}</p>
    </>
  );
}
