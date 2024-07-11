"use client";
import { useEffect, useState } from "react";
import NavLinks from "../custom_nav_bar/nav-links";
import { MenuBtnSVG } from "../projects/custom-svg";
import {usePathname} from "next/navigation";
import {CustomNavType} from "@/types/custom-nav-bar";

export default function MenuBtn({index}:CustomNavType) {
  const pathname = usePathname()
  const [isVisible, setVisible] = useState<boolean>(false);
  const toggle = () => setVisible(!isVisible);
  useEffect(() => {
    setVisible(false);
  }, [pathname]);
  return (
    <section className="flex absolute right-1">
      <button
        onClick={toggle}
        className={`2xl:hidden flex m-7 p-[8px] 
		border-2 border-secondary transition-colors duration-500 z-10 
		text-[17px] rounded-[6px] font-medium text-black bg-custom-bg 
		cursor-pointer relative overflow-hidden hover:bg-[#560bad]`}
      >
        <MenuBtnSVG />
      </button>
      {isVisible && (
        <div className="flex flex-col absolute backdrop-blur-[200px] bg-black-40 rounded top-24 w-full z-10">
          <NavLinks index={index} />
        </div>
      )}
    </section>
  );
}
