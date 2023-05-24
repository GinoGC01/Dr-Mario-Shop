import React, { useState, useEffect } from "react";

import './Cart01.css'

export default function Carrito01({ productosCarrito }) {
  // declaramos la cantidad de productos en un estado
  const [cantidadProductos, setCantidadProductos] = useState(0);
  
  // cada vez que se modifique el "productoCarrito" se renderiza el componente
  useEffect(() => {
    // acción de la actualización del hook
    let sumatoriaCantidadesProductos = productosCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    setCantidadProductos(sumatoriaCantidadesProductos);
  }, [productosCarrito]);

  return (
    <a href="/Dr-Mario-Shop/Carrito/" className="carrito__producto-Detalle">
      <span className="material-symbols-outlined double-arrow__producto-detalle">double_arrow</span>
      <div className="cart__producto-detalle">
        <span className="material-symbols-outlined carrito-span__producto-Detalle">shopping_cart</span>
        <span id="numero-articulo__producto-Detalle">{cantidadProductos}</span>
      </div>
      
    </a>
  );
}


