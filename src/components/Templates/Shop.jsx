import ProductosShop from "./ProductosShop";
import HeaderShop from "../Headers/Header-Shop";
import React from 'react'
import { useState } from "react";
import './Shop.css';
export default function Shop({productos}) {

    const TodoslosProductos= productos.sort(function(a, b) {
        return b.calificacion - a.calificacion;
      });

    const [productosFiltrados, setproductosFiltradosState] = useState(TodoslosProductos);
    const [titulo, setTitulo] = useState("Todos los productos");

   const filtrarCategorias = (e)=> {
        var idBtn = e.currentTarget.id
        if(idBtn != "todos"){
            const CategoriaSeleccionada = productos.filter((producto)=> producto.tipo === idBtn)
            CategoriaSeleccionada.sort(function(a, b) {
                return b.calificacion - a.calificacion;
              });
            setTitulo(idBtn)
            setproductosFiltradosState(CategoriaSeleccionada)        
          }else{
            setproductosFiltradosState(TodoslosProductos)
            setTitulo("Todos los productos")

          }

    }

    const filtrarSubCategorias = (e)=>{
        let idBtnSubCategorias = e.currentTarget.id
        if(idBtnSubCategorias != "todos"){
            const CategoriaSeleccionada = productos.filter((producto)=> producto.talle.detalle === idBtnSubCategorias)
            CategoriaSeleccionada.sort(function(a, b) {
                return b.calificacion - a.calificacion;
              });
            setTitulo(idBtnSubCategorias)
            setproductosFiltradosState(CategoriaSeleccionada)        
          }

    }

  return (
    <div className="Contenedor-shop">
        <HeaderShop 
        funcionCategorias={filtrarCategorias} 
        funcionSubCategorias={filtrarSubCategorias} />
        <ProductosShop productos={productosFiltrados} titulo={titulo} />
    </div>
  )
}
