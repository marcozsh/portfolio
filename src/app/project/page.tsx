import CustomNavBar from "@/components/custom_nav_bar/navbar";
import Footer from "@/components/footer/footer";
import LandingBackground from "@/components/landing_page/landing-background";
import Separator from "@/components/page_separator/separator";
import Projects from "@/components/projects/projects";
import {Metadata} from "next";
import MenuBtn from "@/components/menu_btn/menu-btn";
export const metadata: Metadata = {
  title: 'Marcozsh | Proyectos',
  description: 'marcozsh projects page',
}

export default function IndexPage() {
  return (
    <>
      <CustomNavBar index={true}/>
      <MenuBtn index={true}/>
      <main className="w-auto flex flex-col items-center 2xl:pl-56 pl-0">
        <LandingBackground />
        <article id="project" className="flex flex-col justify-center">
          <Projects />
        </article>
        <Separator />
        <Footer />
      </main>
    </>
  );
}

