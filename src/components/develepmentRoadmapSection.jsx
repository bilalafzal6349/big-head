import { Container } from "./Container";

export const DevelopmentRoadMapSection = () => {
  return (
    <div className="text-center  bg-black text-white">
      <Container>
        <h2 className="text-center text-5xl font-signatra p-4 py-8 md:py-16 lg:py-24 tracking-tighter">
          Road Map
        </h2>
        <div className="px-8 md:pb-12 lg:pb-16">
          <div className="custom-shadow order-white border-[3px] border-solid rounded-[50%] max-w-[350px] mx-auto h-[190px] grid justify-center items-center text- bg-transparent font-normal tracking-tighter sm:max-w-[450px]         ">
            <h1 className="text-center text-5xl font-signatra">
              Development Road Map
            </h1>
          </div>
          <div className="   lg:grid lg:grid-cols-2 py-24">
            <div className=" pb-16 ">
              <p className="text-sm border-[2px] border-solid border-[#FBFAF5] p-8 md:p-12 lg:p-16 text-center mx-auto rounded-xl font-Montserrat font-semibold ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum tincidunt condimentum dolor, quis sagittis enim
                facilisis a.
              </p>
              <h2 className="p-8 text-2xl font-bold">Marketing & Compaigns</h2>
            </div>
            {/*here the cards
             */}
            <div className="w-full    hidden lg:flex  items-center place-items-center relative  ">
              <div className="flex absolute -mt-40 w-full ">
                <span
                  className="w-[50%] h-[1px] bg-white   
            "
                ></span>
              </div>
              <div className="absolute left-[39%] -mt-40 ">
                <img
                  className=""
                  alt="imgalb"
                  src="https://big-head-dev.vercel.app/_next/image?url=%2Fhome%2Fsquare.svg&w=256&q=75"
                />
              </div>
              <div className="flex ">
                <span
                  className="w-[1px] absolute h-[75%]  bg-white   bottom-[0px]  left-[48%] 
              "
                ></span>
              </div>
            </div>
            {/* second card */}
            <div className="w-full hidden    lg:flex  items-center place-items-center relative  ">
              <div className="flex absolute -mt-40 right-[-48%] w-full">
                <span
                  className="w-[52%] h-[1px] bg-white   
            "
                ></span>
              </div>
              <div className="absolute left-[40%] -mt-40 ">
                <img
                  className=""
                  alt="big"
                  src="https://big-head-dev.vercel.app/_next/image?url=%2Fhome%2Fsquare.svg&w=256&q=75"
                />
              </div>
              <div className="flex ">
                <span
                  className="w-[1px] absolute h-[70%]  bg-white   bottom-0  left-[49%] 
              "
                ></span>
              </div>
            </div>
            <div className=" ">
              <p className="text-sm border-[2px] border-solid border-[#FBFAF5] p-8 md:p-12 lg:p-16 text-center mx-auto rounded-xl font-Montserrat font-semibold">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum tincidunt condimentum dolor, quis sagittis enim
                facilisis a.
              </p>
              <h2 className="pt-8 pb-24 text-2xl font-bold">
                Season Points Race & Rewards
              </h2>
            </div>
            <div className="">
              <p className="text-sm border-[2px] border-solid border-[#FBFAF5] p-8 md:p-12 lg:p-16 text-center mx-auto rounded-xl  font-Montserrat font-semibold">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum tincidunt condimentum dolor, quis sagittis enim
                facilisis a.
              </p>
              <h2 className="p-8 pb-24 text-2xl font-bold">
                Worldwide Golf Events
              </h2>
            </div>
            {/* second card */}

            <div className="w-full    hidden  lg:flex  items-center place-items-center relative ">
              <div className="flex absolute -mt-40 w-full">
                <span
                  className="w-[50%] h-[1px] bg-white   
            "
                ></span>
              </div>
              <img
                className="   absolute left-[39.8%] -mt-40"
                alt="ibb"
                src="https://big-head-dev.vercel.app/_next/image?url=%2Fhome%2Fsquare.svg&w=256&q=75"
              />
              <div className="flex ">
                <span
                  className="w-[1px] absolute h-[73%]  bg-white   bottom-0  left-[50%]      
              "
                ></span>
              </div>
            </div>
            <div className="w-full    text-white"></div>
            <div className="">
              <p className="border-[2px] border-solid border-[#FBFAF5] p-8 md:p-12 lg:p-16 text-center mx-auto rounded-xl text-sm font-Montserrat font-semibold">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum tincidunt condimentum dolor, quis sagittis enim
                facilisis a.
              </p>
              <h2 className="p-8 pb-24 text-2xl font-bold">Phase 2 Roadmap</h2>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
