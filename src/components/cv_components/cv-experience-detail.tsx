import CvSecSubTitle from "./cv-section-sub-title";
import { ExperienceProps } from "@/types/experience-type";

export default function CvExperienceDetail({
  position,
  description,
  time,
  description_detail,
}: ExperienceProps) {
  const parseText = (text: string, boldWords: string[]) => {
    const parts = text.split(" ");
    return parts.map((part, index) =>
      boldWords.includes(part.trim().replace(",", "")) ? (
        <strong key={index}> {part} </strong>
      ) : (
        part + " "
      ),
    );
  };
  return (
    <>
      <CvSecSubTitle title={position} time={time} subtitle={description} />
      <ul className="pl-5 mx-0 mb-10px mt-0 list-disc">
        {description_detail.map((item, i) => (
          <li key={i} className="mb-1">{parseText(item.normal, item.bold)}</li>
        ))}
      </ul>
    </>
  );
}
