import { Container } from "./Container";
import TeamPic from "../assets/teamPic.webp";

export const TeamSection = () => {
  return (
    <div className="py-24 px-8 pt-36" id="team">
      <h1 className="text-center font-signatra shadow-cus font-normal text-5xl leading-tight text-[#181616] ">
        Teams
      </h1>
      <Container>
        <div className="flex flex-col gap-6 justify-center items-center text-center lg:flex-row lg:justify-between">
          <div>
            <img src={TeamPic} className="mt-8  mx-auto" />
            <p className="px-8 py-4 mt-4 bg-[#246833] text-white font-Montserrat rounded-[0,0,20px,20px] text-2xl font-bold rounded-bl-[20px] rounded-br-[20px]">
              Golf Made Me Do It
            </p>
            <p className="mt-6 text-2xl text-[#246833] font-Montserrat font-semibold">
              Founder
            </p>
          </div>
          <div>
            <img src={TeamPic} className="  mx-auto lg:mt-8" />
            <p className="px-8 py-4 mt-4 bg-[#246833] text-white font-Montserrat rounded-[0,0,20px,20px] text-2xl font-bold rounded-bl-[20px] rounded-br-[20px]">
              Coach
            </p>
            <p className="mt-6 text-2xl text-[#246833] font-Montserrat font-semibold">
              Advisor
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};
