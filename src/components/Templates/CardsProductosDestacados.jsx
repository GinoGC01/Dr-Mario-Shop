import React, { useRef, useState } from "react";
import { Card } from "../Cards/Card";

import './CardsProductosDestacados.css'


export function CardsProductos({productos}) {
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
    <div className="cards-conteiner__productos-Destacados">
      {
        productos.map(producto =>{
            return(
              <Card producto={producto} funcion={agregarProdutoDetalle} key={producto.id}/>
            )
            
            
        })
      }
    </div>
  );
}

