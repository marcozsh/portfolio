import { mailurl, telurl, ubiurl } from "@/data/cv-header-icons";
import Image from "next/image";
import Link from "next/link";

export default function CvHeader() {
  return (
    <header className="bg-primary text-white p-8 text-left h-xl rounded-tl-md rounded-tr-md -m-5">
      <h1 className="text-4xl m-0">
        <Link className="dev" href="/portfolio">Marco Peña</Link>
      </h1>
      <span className="text-2xl opacity-50">Desarrollador Full Stack</span>
      <div className="mt-3 flex flex-row justify-start text-lg opacity-50">
        <div className="m-0 flex flex-row items-center gap-2">
          <Image src={mailurl} alt="mail image" width={15} height={15} />
          <Link href={"mailto:marc.penar@outlook.cl"}>
            marc.penar@outlook.cl
          </Link>
        </div>
        <div className="ml-4 flex flex-row items-center gap-2">
          <Image src={telurl} alt="phone image" width={15} height={15} />
          <Link href={"tel:+56965753352"}>+56965753352</Link>
        </div>
        <div className="ml-4 sm:flex flex-row items-center gap-2 hidden">
          <Image src={ubiurl} alt="location image" width={15} height={15} />
          <span>Santiago, Región Metropolitana</span>
        </div>
      </div>
    </header>
  );
}
