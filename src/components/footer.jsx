import React from "react";
import { Container } from "./Container";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa6";
export const Footer = () => {
  return (
    <div className="bg-black py-12">
      <Container>
        <div className="grid grid-cols-[auto] place-items-center text-center justify-between sm:grid-cols-[auto,auto] w-full  gap-4">
          <p className="text-white font-semibold font-Montserrat   text-[15px] break-words">
            COPYRIGHT @ 2022 BIG HEAD GOLF CLUB.ALL RIGHTS RESERVED
          </p>
          <div className="fill-white flex gap-4">
            <FaInstagram className="fill-white w-[25px] h-[25px]" />
            <FaTwitter className="fill-white w-[25px] h-[25px]" />
            <FaDiscord className="fill-white w-[25px] h-[25px]" />
            <FaTiktok className="fill-white w-[25px] h-[25px]" />
          </div>
        </div>
      </Container>
    </div>
  );
};
