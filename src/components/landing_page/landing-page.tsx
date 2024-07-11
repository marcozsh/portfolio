import Image from "next/image";
import Link from "next/link";
import Socials from "./socials";

export default function LandingPage() {
  return (
    <div className="flex flex-col justify-center max-w-[75rem] 550px:text-center">
      <div className="flex justify-center ml-20 sm:ml-0 sm:justify-normal">
        <Link href="https://git.io/typing-svg" className="w-[11rem]">
          <Image
            src="https://readme-typing-svg.demolab.com?font=Comfortaa&size=28&duration=1000&pause=5000&color=F7F7F7&width=200&height=85&lines=%C2%A1HOLA!"
            alt="hi message"
            width={200}
            height={85}
          />
        </Link>
      </div>
      <h1 className="dev 2xl:text-[4rem] text-[3rem]">¡Soy Marco Peña! 👋</h1>
      <span className="2xl:text-[2rem] ml-[0] mr-[0] mt-0 mb-10 text-[1.4rem]">
        Desarrollador Full Stack
      </span>
      <div className="flex flex-row gap-2 550px:justify-center">
        <Socials />
      </div>
    </div>
  );
}
