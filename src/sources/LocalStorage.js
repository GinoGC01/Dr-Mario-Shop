export default function ProductoDetalle(){
    let productoDetalles = JSON.parse(localStorage.getItem('Producto-detalle'));
    return(productoDetalles)
}
export let productoDetalle = ProductoDetalle();


 function ProductosCarrito(){
    let productosCarrito = JSON.parse(localStorage.getItem('productos-en-carrito'));
    return(productosCarrito)
}
export let productosCarrito = ProductosCarrito();
