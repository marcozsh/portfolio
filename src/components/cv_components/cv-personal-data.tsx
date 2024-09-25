import Link from "next/link";
import CvSecTitle from "./cv-section-title";

export default function CvPersonalData() {
  return (
    <section className="flex flex-col mb-6 mt-4">
      <CvSecTitle title="Datos Personales" />
      <span className="opacity-50">Sitio Web</span>
      <Link href="/portfolio" target="_blank">
        marcozsh.dev
      </Link>
      <span className="opacity-50">Linkedin</span>
      <Link href="https://www.linkedin.com/in/marcozsh/" target="_blank">
        linkedin.com/in/marcozsh/
      </Link>
    </section>
  );
}
