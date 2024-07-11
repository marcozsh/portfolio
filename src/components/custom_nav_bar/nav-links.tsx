import { CustomNavType } from "@/types/custom-nav-bar";
//import Link from "next/link";
import { Link } from "next-view-transitions";

import { links } from "@/data/nav-links";

export default function NavLinks({ index }: CustomNavType) {
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={
              index && link.href != "#contact"
                ? link.href.replace("#", "")
                : link.href
            }
            className={`text-center w-full block text-[1.2rem] leading-[5rem] text-white hover:text-primary hover:transition-colors hover:duration-300 hover:ease-in-out`}
          >
            <span>{link.name}</span>
          </Link>
        );
      })}
    </>
  );
}
