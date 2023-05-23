import React, { useState } from "react";
import BotonAgregarCarrito from "../Buttons/ButtonAddCart";
import Carrito01 from "../Cart/Cart01";
import './ProductosCarritoTemplate.css'

export default function CarritoTemplate({productosCarritoLocalStorage, ArregloProductoDetalle}) {
  const [productosCarrito, setProductosCarrito] = useState(productosCarritoLocalStorage || []);

  function actualizarProductosCarrito(nuevosProductosCarrito) {
    setProductosCarrito(nuevosProductosCarrito);
  }

  return (
    <div className="carrito-container__producto-detalle">
      <BotonAgregarCarrito ArregloProductos={ArregloProductoDetalle} productosCarrito={productosCarrito} actualizarProductosCarrito={actualizarProductosCarrito} />
      <Carrito01 productosCarrito={productosCarrito} />
    </div>
  );
}