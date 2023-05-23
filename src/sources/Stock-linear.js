
import Productos from './buzos.json';

function revisionDeStockDisponible(){
  return(
    // copiamos el arreglo de productos
    [...Productos]
    // productos en stock
    .filter(producto => {return(producto.stock ? true : false)})
    .reverse()
)}

export const productosDisponibleStock = revisionDeStockDisponible();


 function revisionDeStock(){
    return(
      // copiamos el arreglo de productos
      [...Productos]
      // productos en stock
      .filter(producto => {return(producto.stock ? true : false)})
      .reverse()
    // .sort(()=>Math.random()>0.5 ? 1 : -1)
      .slice(0, 12)
  )}

  export const productosDisponible = revisionDeStock();

  function revisionDeStockAleatorios(){
    return(
      // copiamos el arreglo de productos
      [...Productos]
      // productos en stock
      .filter(producto => {return(producto.stock ? true : false)})
      .reverse()
      .sort(()=>Math.random()>0.5 ? 1 : -1)
      .slice(0, 12)
  )}

  export const productosDisponibleAleatorios = revisionDeStockAleatorios();

  function revisionDeStockAleatorio(){
    return(
      // copiamos el arreglo de productos
      [...Productos]
      // productos en stock
      .filter(producto => {return(producto.stock ? true : false)})
      // .reverse()
      .sort(()=>Math.random()>0.5 ? 1 : -1)
      .slice(0,6)
  )}

  export const productosDisponibleAl = revisionDeStockAleatorio();

