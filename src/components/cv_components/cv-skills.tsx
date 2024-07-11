import CvSecTitle from "./cv-section-title";
import { CvSkillType } from "@/types/cv-skill-type";

export default function CvSkill({ sectitle, skill }: CvSkillType) {
  return (
    <section>
      <CvSecTitle title={sectitle} />
      {skill.map((sec, i) => (
        <div key={i}>
          <p className="mb-2">{sec}</p>
        </div>
      ))}
    </section>
  );
}
