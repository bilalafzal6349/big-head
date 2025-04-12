import { Container } from "./Container";
import Image from "../assets/image5.png";
export const AboutSection = () => {
  return (
    <div className="bg-black  pt-24 p-8 " id="about">
      <Container>
        <h2 className="text-white text-center pb-16 text-5xl font-signatra max-w-7xl  mx-auto px-4 pt-12">
          About
        </h2>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <img src={Image} className="max-w-[350px] w-full mx-auto   " />
          <p className="text-white p-4 text-[20px]">
            Big Head Golf Club is an NFT project consisting of 500 unique
            characters from in real world golf brand (Golf Made Me Do It -
            hyperlink). Each high-quality artwork is unique, with its own luxury
            characteristic. Owning a Big Head gives you access to an exclusive
            club of holders with added value that grows over time, with full
            transparency on the Ethereum blockchain.
          </p>
          <img
            src={Image}
            className="mx-auto max-w-[350px] w-full lg:order-1 "
          />
          <p className="text-white p-4 text-[20px]">
            Big Head Golf Club is an NFT project consisting of 500 unique
            characters from in real world golf brand (Golf Made Me Do It -
            hyperlink). Each high-quality artwork is unique, with its own luxury
            characteristic. Owning a Big Head gives you access to an exclusive
            club of holders with added value that grows over time, with full
            transparency on the Ethereum blockchain.
          </p>
        </div>
      </Container>
    </div>
  );
};
