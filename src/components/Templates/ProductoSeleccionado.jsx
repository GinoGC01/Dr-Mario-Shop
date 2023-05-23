import React from "react";

import {productoDetalle, productosCarrito} from '../../sources/LocalStorage'
import ProductoDetalle from './ProductoDetalle'



export default function Producto(){
    return(
        <ProductoDetalle productoDetalle={productoDetalle} productoCarrito={productosCarrito}/>
    )
}