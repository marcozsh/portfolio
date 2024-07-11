import CvSecSubTitle from "./cv-section-sub-title";
import CvSecTitle from "./cv-section-title";
import { CvFormationType } from "@/types/cv-formation-type";

export default function CvFormation({ name, entity, time }: CvFormationType) {
  return (
    <section className="mb-6">
      <CvSecTitle title="Formación" />
      <CvSecSubTitle title={name} subtitle={entity} time={time} />
    </section>
  );
}
