//import Link from "next/link";
//import Link from "next-view-transitions";

import {Link} from "next-view-transitions";

type CvButtonDownload = {
  href: string,
  download: boolean;
};

export default function CvButton({ download, href }: CvButtonDownload) {
  const width = download ? "w-40" : "w-28";
  return (
    <>
    <Link
        //href="/portfolio/cv/"
        href={href}
        download={download}
        target={!download ? "" : "_blank"}
        className={`fixed ${width} h-9 bg-primary left-6 bottom-4 rounded-xl z-10 text-[15px] 
	      p-3 text-center 2xl:left-60 leading-3`}
      >
        {!download ? "Ver CV" : "Descargar CV"}
      </Link>
    </>
  );
}
