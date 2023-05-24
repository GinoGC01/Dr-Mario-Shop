import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Destacados from './destacados.jsx'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Card.css";


// import required modules
import { Pagination, Navigation } from "swiper";

export function Card({producto, funcion}){

    return(
        <div className="card__Card" >
            <div className="contenedor__Card" >
                <Swiper pagination={{dynamicBullets: true,}} modules={[Pagination, Navigation]} className="mySwiper mySwiper-card" style={{height: '100%' }}>
                  <Destacados calificacion={producto.calificacion} className={producto.destacado ? "destacados" : "destacados-off" }/>
                  <SwiperSlide id="SwiperSlide01" style={{opacity: 1 }}>
                    <img src={producto.img.image01} alt={producto.nombre} className={producto.destacado ? "destacado-etiqueta-on" : "prodcuto-novedad" } loading="lazy"/>
                  </SwiperSlide>
                  <SwiperSlide id="SwiperSlide02" style={{opacity: 1 }}>
                    <img src={producto.img.image02} alt={producto.nombre} className={producto.destacado ? "destacado-etiqueta-on" : "prodcuto-novedad" } loading="lazy"/>
                  </SwiperSlide>
                  <SwiperSlide id="SwiperSlide03" style={{opacity: 1 }}>
                    <img src={producto.img.image03} alt={producto.nombre}className={producto.destacado ? "destacado-etiqueta-on" : "prodcuto-novedad" } loading="lazy"/>
                  </SwiperSlide>
                </Swiper>
            </div>
              <a href="/Dr-Mario-Shop/Producto" className="datos-card__Card" id={producto.id} onClick={funcion}>
                <h3 className="nombre__Card">{producto.nombre}</h3>
                <p className="talle__Card">Talle: <strong>{producto.talle.talle}</strong></p>
                <p className="marca__Card">Marca:<strong> {producto.marca}</strong></p>
                <p className="precio__Card"> ${producto.precio}</p>
              </a>
        </div>
        )
}