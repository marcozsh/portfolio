import { Link } from "next-view-transitions";

type CvButtonDownload = {
  href: string;
  download: boolean;
};

export default function CvButton({ download, href }: CvButtonDownload) {
  return (
    <>
      <Link
        //href="/portfolio/cv/"
        href={href}
        download={download}
        target={!download ? "" : "_blank"}
        className={`w-48 bg-primary bottom-4 rounded-xl text-[15px] 
	      p-3 text-center leading-3`}
      >
        <span className="text-2xl text-white">
          Descargar CV
        </span>
      </Link>
    </>
  );
}
