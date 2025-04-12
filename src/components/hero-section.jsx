import { SwiperSection } from "./swiper";
import GolfBAll from "../assets/golf-ball.svg";
export const HeroSection = () => {
  return (
    <div className="" id="/">
      <div className="relative overflow-hidden">
        <div className="py-6 mx-auto w-full grid text-center justify-center items-center pt-12">
          <h1 className="text-[#246833] text-8xl font-signatra">Big Head</h1>
          <br />
          <h3 className="text-[#246833] text-5xl font-signatra">Golf Club</h3>
        </div>
        <div className=" absolute hidden xl:flex  w-[600px] h-[600px] bg-[rgba(36,104,51,0.65)] top-[-80%] rounded-[50%] right-[-50px]">
          <img
            src={GolfBAll}
            alt="img"
            className="   absolute bottom-[30px] left-[40%]"
          />
        </div>
        <div className="text-center text-wrap p-8   grid justify-center items-center mx-auto relative ">
          <img
            src={GolfBAll}
            className="hidden  top-0 left-[40px] absolute xl:flex"
          />

          <p className=" text center mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            tincidunt condimentum dolor, quis sagittis enim facilisis a.
          </p>
          <div className="grid sm:grid-cols-[auto,auto]  p-4 gap-2 justify-center pt-12 mx-auto ">
            <button
              className="bg-white py-2 px-4  mx-auto rounded border-[rgba(24, 22, 22, 0.5)] 
        hover:bg-[rgba(0,0,0,0.1)]   capitalize border-2"
            >
              MINT NOW
            </button>
            <button
              className="bg-white py-2 px-4 max-w-[198px] h-[40px] mx-auto rounded border-[rgba(24, 22, 22, 0.5)]  capitalize border-2 
        hover:bg-[rgba(0,0,0,0.1)] "
            >
              BUY ON OPEN SEA
            </button>
          </div>
        </div>
      </div>
      <SwiperSection />
    </div>
  );
};
