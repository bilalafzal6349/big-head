import Arrow from "../assets/arrow.svg";
import Discord from "../assets/discord.svg";
export const DiscordSection = () => {
  return (
    <div className="bg-[#246833]  px-6 text-center  text-white">
      <div className="p-8 grid justify-center items-center gap-12 place-items-center">
        <div>
          <h1 className="font-signatra font-normal text-6xl tracking-[-0.01562em] ">
            Join The Community
          </h1>
          <h1 className="font-signatra font-normal text-6xl tracking-[-0.01562em]">
            Discord Now
          </h1>
        </div>
        <img src={Arrow} className="flex items-center justify-center" />
        <img src={Discord} />
      </div>
    </div>
  );
};
