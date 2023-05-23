import React, {useState, useEffect} from 'react';
import CarritoTemplate from '../Templates/ProductosCarritoTemplate';
import './ProductoDetalle.css';



export default function EspecificacionesProductoDetalle({producto, productosCarrito}) {

    // producto = objeto. Lo convertimos a arreglo para utilizarlo como prop para <CarritoTemplate/>
    let productoDetallesLocalStorage = [producto]

     
  return (
    <div className="especificaciones-detalle">
        <span className={producto.destacado ? "destacados__producto-detalle" : "destacados-off__producto-detalle" }>
          <p>PRODUCTO DESTACADO - </p>

          <div className="calificacion__producto-detalle">
            <span className="material-symbols-outlined star__producto-detalle">star</span>
            <p>{producto.calificacion}</p>
          </div> 
        </span>
        
        <p className="unisex">- Unisex -</p>
        <h1 className="titulo-producto__detalle">{producto.nombre}</h1>
        <p className="precio__detalle">- $ <strong>{producto.precio} <span id="offerta__detalle">15% OFF</span></strong></p>
        <p className="precio__detalle-ofertaAplicable">• Esta oferta es aplicable para todos los productos de la tienda •</p>
        <p className="talle__detalle">- TALLE: <strong>{producto.talle.talle}</strong></p>
        <p className="cantidad__detalle">- CANTIDAD: <strong>{producto.cantidad}</strong></p>
        <p className="description__detalle">- <strong>{producto.description}</strong></p>

        <div className="carrito">
            <CarritoTemplate productosCarritoLocalStorage={productosCarrito} ArregloProductoDetalle={productoDetallesLocalStorage}/>
        </div>
    </div>                             
  )
}
