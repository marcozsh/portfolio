import CustomNavBar from "@/components/custom_nav_bar/navbar";
import Footer from "@/components/footer/footer";
import Separator from "@/components/page_separator/separator";
import LandingBackground from "@/components/landing_page/landing-background";
import CvHeader from "@/components/cv_components/cv-header";
import CvAbout from "@/components/cv_components/cv-about";
import { poppins } from "@/app/fonts";
import CvExperience from "@/components/cv_components/cv-experience";
import CvFormation from "@/components/cv_components/cv-formation";
import CvPersonalData from "@/components/cv_components/cv-personal-data";
import CvSkill from "@/components/cv_components/cv-skills";
import CvButton from "@/components/menu_btn/cv-button";
import MenuBtn from "@/components/menu_btn/menu-btn";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marcozsh | CV",
  description: "marcozsh cv page",
};
export default function CvPage() {
  return (
    <>
      <CustomNavBar index={true} />
      <main
        className={`${poppins.className} antialiased flex flex-col items-center 2xl:pl-56 pl-0`}
      >
        <MenuBtn index={true} />
        <LandingBackground />
        <div className="zoom w-full md:max-w-[900px] mx-auto my-5 p-5 rounded-xl bg-white text-black">
          <CvHeader />
          <div className="flex flex-col md:w-full md:flex-row">
            <div className="mt-3 md:p-3 md:w-max flex flex-col">
              <CvAbout />
              <CvExperience />
              <CvFormation
                name="Ingeniería informática"
                time="ene 2019 - dic 2022"
                entity="Duoc UC"
              />
            </div>
            <aside className="md:w-[900px] pl-2 md:ml-10 mt-6 md:p-3 border-l-2 border-l-[rgb(243,243,243)] border-solid xl:flex xl:flex-col">
              <CvPersonalData />
              <CvSkill
	      sectitle="Lenguajes de programación"
	      skill={["PHP", "JavaScript", "TypeScript","Python"]}
              />
              <CvSkill sectitle="Diseño" skill={["HTML", "CSS", "Tailwind CSS"]} />
              <CvSkill
                sectitle="Bases de datos"
                skill={["PostgreSQL", "MySQL"]}
              />
              <CvSkill sectitle="Frameworks" skill={["Django","React","NextJS"]} />
              <CvSkill sectitle="Otros" skill={["Git", "Markdown (.md)", "Vercel - Deploy con NextJS"]} />
              <CvSkill
                sectitle="Idiomas"
                skill={["Inglés Nivel Técnico - Medio"]}
              />
            </aside>
          </div>
            <CvButton download={true} href="../cv-marco.pdf" />
        </div>
        <Separator />
        <Footer />
      </main>
    </>
  );
}
