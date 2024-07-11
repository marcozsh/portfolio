import Image from "next/image";
import Link from "next/link";
import { socials } from "@/data/socials";

export default function Socials() {
  return (
    <>
      {socials.map((social) => {
        const LinkIcon = social.icon;
        return (
          <Link key={social.name} href={social.href} target="_blank" >
            <Image src={LinkIcon} alt={social.description} width={50} height={50}/>
          </Link>
        );
      })}
    </>
  );
}
