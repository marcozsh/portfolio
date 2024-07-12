import CustomNavBar from "@/components/custom_nav_bar/navbar";
import Footer from "@/components/footer/footer";
import LandingBackground from "@/components/landing_page/landing-background";
import { Link } from "next-view-transitions";

export default function NotFound() {
  return (
    <>
      <CustomNavBar index={true} />
      <LandingBackground />
      <main className={`flex flex-col items-center 2xl:pl-48 pl-0`}>
        <article className="flex flex-col justify-center">
          <div className="flex flex-col justify-center text-center">
            <h2 className="text-5xl mb-8">404...</h2>
            <iframe
              src="https://giphy.com/embed/QMHoU66sBXqqLqYvGO"
              allowFullScreen
            ></iframe>
            <h3 className="my-20 text-4xl hover:text-red-400 hover:transition-colors hover:duration-300 hover:ease-in-out">
              <Link href="/">Volver al Inicio</Link>
            </h3>
          </div>
          <div className="mt-10">
            <Footer />
          </div>
        </article>
      </main>
    </>
  );
}
