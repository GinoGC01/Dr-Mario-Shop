import React from "react";
import { Card } from "../Cards/Card";
import './CardsProductosNovedades.css'

import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination, Navigation } from "swiper";

export function CardsProductosNovedades({productos}) {
    // variable del producto a ver en detalle
    let productoDetalle = []
    // vacía el arreglo
    function agregarProdutoDetalle(e){
     const btnId = e.currentTarget.id;
     
     // id producto = id boton => seleccionar elemento
     const productoDetalleAgregado = productos.find(producto => producto.id === btnId);

     // vaciamos el arreglo => solo un elemento
     productoDetalle.length = 0
     // push producto
     productoDetalle.push(productoDetalleAgregado);

    localStorage.setItem('Producto-detalle', JSON.stringify(productoDetalle))
    }
  return (
    <div className="cards-conteiner__Novedades">
      <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper swiper-novedades"
      >
      {
        productos.map((producto) =>{
            return(
            <div className="Slide__Novedades" key={producto.id} >
              <SwiperSlide key={producto.id} className="SwiperSlideCard__Novedades" style={{ outline: 'none', opacity: 1 }}> 
                <Card producto={producto} funcion={agregarProdutoDetalle} key={producto.id} />
              </SwiperSlide>
            </div>

            )
        })
      }
       </Swiper>
    </div>
  );
}