import React, {useState}  from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import './ProductoDetalle.css'
// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

export default function SliderProductoDetalle({producto}) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
            <div className="imagen-detalle">
                <Swiper
                    style={{
                    "--swiper-navigation-color": "#000",
                    "--swiper-pagination-color": "#000",
                    }}
                    spaceBetween={10}
                    navigation={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2"
                >
                        <SwiperSlide>
                        <img src={producto.img.image01} loading="lazy"/>
                        </SwiperSlide>
                        <SwiperSlide>
                        <img src={producto.img.image02} loading="lazy"/>
                        </SwiperSlide>
                        <SwiperSlide>
                        <img src={producto.img.image03} loading="lazy"/>
                        </SwiperSlide>
                </Swiper>
                <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={3}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper"
                >
                    <SwiperSlide className="swiperSlide-bottom">
                    <img src={producto.img.image01} loading="lazy"/>
                    </SwiperSlide>
                    <SwiperSlide className="swiperSlide-bottom">
                    <img src={producto.img.image02} loading="lazy"/>
                    </SwiperSlide>
                    <SwiperSlide className="swiperSlide-bottom">
                    <img src={producto.img.image03} loading="lazy"/>
                    </SwiperSlide>
                </Swiper>
            </div>                         
  )
}
