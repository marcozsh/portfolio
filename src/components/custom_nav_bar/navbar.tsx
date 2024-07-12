"use client";

import Image from "next/image";
import NavLinks from "./nav-links";
import {Link} from "next-view-transitions";
import { CustomNavType } from "@/types/custom-nav-bar";


export default function CustomNavBar({index}:CustomNavType) {
  return (
    <header className="hidden backdrop-blur-[200px] bg-black-40 2xl:flex w-56 2xl:h-screen flex-col justify-center fixed bottom-0 left-0 top-0 right-0">
      <div className="flex flex-col justify-center items-center">
        <Link href={!index ? "#" : "/portfolio"}>
          <Image src="/some_logo.png" alt="logo" width={200} height={200} />
        </Link>
      </div>
      <nav className="w-full flex flex-col justify-center items-center mx-0 my-[8em]">
        <NavLinks index={index}/>
      </nav>
    </header>
  );
}
