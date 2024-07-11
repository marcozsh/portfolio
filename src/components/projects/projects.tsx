import CustomCard from "../cards/card";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <>
      <span className="text-5xl 992px:text-[1.4rem]">💼 PROYECTOS</span>
      <div className="flex w-full flex-wrap gap-[10px] 1777px:justify-center">
        {projects?.map((p, i) => {
          return (
            <div
              className={`flex flex-col justify-between w-[300px] rounded ml-12 
		      mr-[0rem] my-12 border-[1px] border-[solid] border-[#5d5bf1]
		      992px:ml-0`}
            >
              <CustomCard
                key={i}
                name={p.name}
                description={p.description}
                image={p.image}
                link={p.link}
                links={p.links}
                technology={p.technology}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
