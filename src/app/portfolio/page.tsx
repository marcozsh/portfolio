import About from "@/components/about/about";
import CustomNavBar from "@/components/custom_nav_bar/navbar";
import Footer from "@/components/footer/footer";
import LandingBackground from "@/components/landing_page/landing-background";
import LandingPage from "@/components/landing_page/landing-page";
import Separator from "@/components/page_separator/separator";
import Projects from "@/components/projects/projects";
import Link from "next/link";
import CvButton from "@/components/menu_btn/cv-button";
import MenuBtn from "@/components/menu_btn/menu-btn";

export default function IndexPage() {
  return (
    <>
      <CustomNavBar index={false}/>
      <MenuBtn index={false}/>
      <CvButton download={false} href="portfolio/cv"/>
      <main className="w-auto flex flex-col items-center 2xl:pl-56 pl-0">
        <LandingBackground />
        <Link
          className="absolute right-10 bottom-[15px] cursor-pointer text-[2rem] animate-shakeY"
          href="#about"
        >
          👇
        </Link>
        <article className="flex flex-col justify-center max-[75rem] pl-2.5">
          <LandingPage />
        </article>
        <Separator />
        <article id="about" className="flex flex-col justify-center leading-7">
          <About />
        </article>
        <Separator />
        <article id="project" className="flex flex-col justify-center">
          <Projects />
        </article>
        <Separator />
        <Footer />
      </main>
    </>
  );
}
