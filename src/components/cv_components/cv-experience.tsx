import CvExperienceDetail from "./cv-experience-detail";
import CvSecTitle from "./cv-section-title";

const experience = {
  position: "Programador full stack",
  description: "Desis Limitada – Facturación.cl, Gran Santiago, Región Metropolitana de Santiago, Chile.",
  time: "Enero 2020 - Presente",
  description_detail: [
    {
      normal:
        "Desarrollo y documentación de requerimientos en tecnologías PHP, JavaScript, PostgreSQL y en diseño con HTML5 y CSS.",

      bold: ["PHP", "JavaScript", "PostgreSQL", "HTML5", "CSS"],
    },
    {
      normal:
        "Encargado de detectar fallas/mejoras en el sistema de Facturacion.cl para documentar y realizar requerimientos relacionados con estas mismas.",
      bold: ["Facturacion.cl"],
    },
    {
      normal:
        "Generación de reportes realizando consultas en PostgreSQL, utilizando métodos para realizar consultas masivas en diferentes bases de datos.",
      bold: ["PostgreSQL"],
    },
  ],
};

export default function CvExperience() {
  return (
    <section className="mb-6">
      <CvSecTitle title="Experiencia" />
      <CvExperienceDetail
        position={experience.position}
        description={experience.description}
        time={experience.time}
        description_detail={experience.description_detail}
      />
    </section>
  );
}
