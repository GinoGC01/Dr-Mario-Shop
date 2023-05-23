import React from 'react'
import { Card } from "../Cards/Card";
import './ProductosShop.css'
import Carrito01 from '../Cart/Cart01'
import {productosCarrito} from '../../sources/LocalStorage'


export default function ProductosShop({productos, titulo}) {
     
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
    <div className='shop-container'>
      <header className='header-shop'>
        <h1 className='titulo-shop'>{titulo}</h1> 
        <Carrito01 productosCarrito={productosCarrito} />
      </header>
      <div className='productos-shop'> 
        {
          productos.length > 0 ? (  productos.map(producto =>{
            return(<Card producto={producto} funcion={agregarProdutoDetalle} key={producto.id}/>)
          }))
          :(<p>No hay productos disponibles</p>)
        }
      </div>
    </div>

  );
}
