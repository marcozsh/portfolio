import { nextjs, tailwind, ts } from "@/data/links";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="text-center flex flex-col text-[#fff]">
        <p>Este sitio fue construido con</p>
        <div className="text-center p-[15px] flex flex-wrap justify-center gap-3 h-1 550px:h-16">
          <img className="rounded" src={nextjs} alt="nextjs img" />
          <img className="rounded" src={ts} alt="ts img" />
          <img className="rounded" src={tailwind} alt="tailwind img" />
          <br />
        </div>
        <div id="contact" className="flex flex-row pt-5 justify-center">
          <Image src="/mail.png" alt="mail image" width={30} height={30} />
          <Link
            className="pt-[4px] underline"
            href="mailto:marc.penar@outlook.cl"
            target="_blank"
          >
            marc.penar@outlook.cl
          </Link>
        </div>
        <Link
          className="underline pt-[20px]"
          href="https://github.com/marcozsh/portfolio"
          target="_blank"
        >
          Marco Peña 2024
        </Link>
      </footer>
    </>
  );
}
