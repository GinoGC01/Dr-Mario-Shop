import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./SliderPrincipal.css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

export default function App({image01, image02, image03}) {
  return (
    <div className="slider-main-container">
      <Swiper
        autoplay={{
            delay: 3500,
            disableOnInteraction: false,
        }}
        pagination={{
          type: "",
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><div className="swiper-a" ><img className="img-slider-main" src={image01} alt="slider-main" loading="lazy" /></div></SwiperSlide>
        <SwiperSlide><div className="swiper-a" ><img className="img-slider-main" src={image02} alt="slider-main" loading="lazy"/></div></SwiperSlide>
        <SwiperSlide><div className="swiper-a" ><img className="img-slider-main" src={image03} alt="slider-main" loading="lazy"/></div></SwiperSlide>
      </Swiper>
    </div>
  );
}