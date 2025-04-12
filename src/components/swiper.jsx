import { Fragment } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Image from "../assets/image5.png";
// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import { Container } from "./Container";

export const SwiperSection = () => {
  const slideClassName = "!w-auto";

  return (
    <Container>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={10}
        scrollbar={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, FreeMode]}
        breakpoints={
          {
            // 480: { slidesPerView: 2, spaceBetween: 10 },
            // 768: { slidesPerView: 3, spaceBetween: 15 },
          }
        }
        className="mySwiper p-8  mx-auto"
      >
        <SwiperSlide className={slideClassName}>
          <img src={Image} alt="Image 1" className="max-w-[300px]" />
        </SwiperSlide>
        <SwiperSlide className={slideClassName}>
          <img src={Image} alt="Image 2" className="max-w-[300px]" />
        </SwiperSlide>
        <SwiperSlide className={slideClassName}>
          <img src={Image} alt="Image 3" className="max-w-[300px]" />
        </SwiperSlide>
        <SwiperSlide className={slideClassName}>
          <img src={Image} alt="Image 4" className="max-w-[300px]" />
        </SwiperSlide>
        <SwiperSlide className={slideClassName}>
          <img src={Image} alt="Image 5" className="max-w-[300px]" />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};
