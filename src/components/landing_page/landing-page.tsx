import Socials from "./socials";
import CustomTypeWritter from "../typewritter/typewritter";

export default function LandingPage() {
  return (
    <div className="flex flex-col justify-center max-w-[75rem] 550px:text-center">
      <div className="">
      	<CustomTypeWritter/>
      </div>
      <h1 className="dev 2xl:text-[4rem] text-[3rem]">¡Soy Marco Peña! 👋</h1>
      <span className="2xl:text-[2rem] ml-[0] mr-[0] mt-0 mb-10 text-[1.4rem]">
        Desarrollador Full Stack
      </span>
      <div className="flex flex-row gap-2 550px:justify-center">
        <Socials />
      </div>
    </div>
  );
}
