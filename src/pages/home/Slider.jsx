import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import carousel1 from '/images/carousel1.png'
import carousel2 from '/images/carousel2.png'
import carousel3 from '/images/carousel3.png'

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import {
  Navigation,
  Pagination,
  Autoplay,
} from "swiper/modules";
// import Slide from "./Slide";

const Slider = () => {
    return (
        <div className=" ">
        <Swiper
           spaceBetween={30}
           navigation={true}
           pagination={{
             clickable: true,
           }}
           autoplay={{
             delay: 2500,
             disableOnInteraction: false,
           }}
           loop={true}
           modules={[Navigation, Pagination, Autoplay]}
           className="mySwiper"
         >
           <SwiperSlide>
         <img className="w-full xl:h-[500px] lg:h-96 sm:h-80 h-56 " src={carousel1} alt="" />
           </SwiperSlide>
           <SwiperSlide>
           <img className="w-full xl:h-[500px] lg:h-96 sm:h-80 h-56 " src={carousel2} alt="" />
           </SwiperSlide>
           <SwiperSlide>
           <img className="w-full xl:h-[500px] lg:h-96 sm:h-80 h-56 " src={carousel3} alt="" />
           </SwiperSlide>
         </Swiper>
        </div>
    );
};

export default Slider;