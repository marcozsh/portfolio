"use client";
import { ProjectModel } from "@/types/card-type";
import Link from "next/link";
import { GitHubSVG, LinkSVG } from "../projects/custom-svg";

type CustomCardProps = {} & ProjectModel;

export default function CustomCard({
  name,
  description,
  image,
  link,
  links,
  technology,
}: CustomCardProps) {
  return (
    <>
      <div className="flex flex-col justify-between">
        <Link href={link} target="_blank">
          <img
            className="object-cover rounded w-full h-[200px]"
            src={image}
            alt={name}
          />
        </Link>
        <div className="text-center p-[15px]">
          <h2 className="text-[2rem] mt-1">{name}</h2>
          <p className="text-[1.1rem] leading-7 text-pretty mb-10 mt-4">
            {description}
          </p>
        </div>
      </div>
      <div className="text-center p-[13px] flex flex-wrap justify-center gap-3">
        <br />
        {technology?.map((tech, i) => {
          return (
            <img key={i} className="rounded" src={tech.link} alt={tech.alt} />
          );
        })}
        <br />
      </div>
      <div className="flex flex-row m-1 mb-4 justify-center 992px:m-4">
        {links?.map((l, i) => {
          return l.visible ? (
            <Link key={i} href={l.link} target="_blank">
              {l.type == 1 ? <GitHubSVG /> : <LinkSVG />}
            </Link>
          ) : (
            ""
          );
        })}
      </div>
    </>
  );
}
