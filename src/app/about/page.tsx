import About from "@/components/about/about";
import CustomNavBar from "@/components/custom_nav_bar/navbar";
import Footer from "@/components/footer/footer";
import LandingBackground from "@/components/landing_page/landing-background";
import Separator from "@/components/page_separator/separator";
import { Metadata } from "next";
import MenuBtn from "@/components/menu_btn/menu-btn";
export const metadata: Metadata = {
  title: "Marcozsh | Sobre mí",
  description: "marcozsh about page",
};

export default function AboutPage() {
  return (
    <>
      <CustomNavBar index={true} />
      <MenuBtn index={true} />
      <main className="w-auto flex flex-col items-center 2xl:pl-56 pl-0">
        <LandingBackground />
        <article id="about" className="flex flex-col justify-center leading-7">
          <About />
        </article>
        <Separator />
        <Footer />
      </main>
    </>
  );
}
