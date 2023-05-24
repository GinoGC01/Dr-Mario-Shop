import{r as f}from"./index.03be2d59.js";import{C as m}from"./Card.583e4a26.js";import{C as b,a as g}from"./Cart01.5ff53fd3.js";import{j as t}from"./jsx-runtime.d9ad72f9.js";import"./pagination.min.0d2d5c56.js";function S({productos:o,titulo:s}){let n=[];function i(l){const e=l.currentTarget.id,d=o.find(x=>x.id===e);n.length=0,n.push(d),localStorage.setItem("Producto-detalle",JSON.stringify(n))}return t.jsxs("div",{className:"shop-container",children:[t.jsxs("header",{className:"header-shop",children:[t.jsx("h1",{className:"titulo-shop",children:s}),t.jsx(b,{productosCarrito:g})]}),t.jsx("div",{className:"productos-shop",children:o.length>0?o.map(l=>t.jsx(m,{producto:l,funcion:i},l.id)):t.jsx("p",{children:"No hay productos disponibles"})})]})}function j({id:o,textbutton:s,funcion:n}){return t.jsxs("button",{id:o,onClick:n,className:"boton-categorias__Shop",children:[t.jsx("span",{className:"material-symbols-outlined span spn-active",children:"change_history"}),s]})}var N={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(o){(function(){var s={}.hasOwnProperty;function n(){for(var i=[],l=0;l<arguments.length;l++){var e=arguments[l];if(e){var d=typeof e;if(d==="string"||d==="number")i.push(e);else if(Array.isArray(e)){if(e.length){var x=n.apply(null,e);x&&i.push(x)}}else if(d==="object"){if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]")){i.push(e.toString());continue}for(var a in e)s.call(e,a)&&e[a]&&i.push(a)}}}return i.join(" ")}o.exports?(n.default=n,o.exports=n):window.classNames=n})()})(N);function r({id:o,textbutton:s,funcion:n}){return t.jsxs("button",{id:o,onClick:n,className:"boton-subcategorias__Shop",children:[t.jsx("span",{className:"material-symbols-outlined",children:"expand_less"}),s]})}function T({funcionCategorias:o,funcionSubCategorias:s}){return t.jsxs("aside",{className:"header-container__Shop",children:[t.jsx("a",{href:"/Dr-Mario-Shop/",className:"logo",children:t.jsx("img",{src:"../../../public/images/Logotipo letras blanco.png",alt:"Logo Dr. Mario Shop"})}),t.jsx("nav",{children:t.jsxs("ul",{children:[t.jsx("li",{children:t.jsx(j,{id:"todos",textbutton:"Todos los productos",funcion:o,className:"botones-categorias__shop"})}),t.jsxs("li",{children:[t.jsx(j,{id:"buzos",textbutton:"Buzos",funcion:o,className:"botones-categorias__shop"}),t.jsxs("ul",{children:[t.jsx("li",{children:t.jsx(r,{id:"buzos-s",textbutton:"Talle S",funcion:s})}),t.jsx("li",{children:t.jsx(r,{id:"buzos-m",textbutton:"Talle M",funcion:s})}),t.jsx("li",{children:t.jsx(r,{id:"buzos-l",textbutton:"Talle L",funcion:s})}),t.jsx("li",{children:t.jsx(r,{id:"buzos-xl",textbutton:"Talle XL",funcion:s})}),t.jsx("li",{children:t.jsx(r,{id:"buzos-xxl",textbutton:"Talle XXL",funcion:s})})]})]}),t.jsxs("li",{children:[t.jsx(j,{id:"camperas",textbutton:"Camperas",funcion:o,className:"botones-categorias__shop"}),t.jsxs("ul",{children:[t.jsx("li",{children:t.jsx(r,{id:"camperas-s",textbutton:"Talle S",funcion:s})}),t.jsx("li",{children:t.jsx(r,{id:"camperas-m",textbutton:"Talle M",funcion:s})}),t.jsx("li",{children:t.jsx(r,{id:"camperas-l",textbutton:"Talle L",funcion:s})}),t.jsx("li",{children:t.jsx(r,{id:"camperas-xl",textbutton:"Talle XL",funcion:s})}),t.jsx("li",{children:t.jsx(r,{id:"camperas-xxl",textbutton:"Talle XXL",funcion:s})})]})]})]})}),t.jsx("footer",{className:"footer-shop",children:"Dr. Mario IND - copyright ©"})]})}function z({productos:o}){const s=o.sort(function(a,c){return c.calificacion-a.calificacion}),[n,i]=f.useState(s),[l,e]=f.useState("Todos los productos"),d=a=>{var c=a.currentTarget.id;if(c!="todos"){const h=o.filter(u=>u.tipo===c);h.sort(function(u,p){return p.calificacion-u.calificacion}),e(c),i(h)}else i(s),e("Todos los productos")},x=a=>{let c=a.currentTarget.id;if(c!="todos"){const h=o.filter(u=>u.talle.detalle===c);h.sort(function(u,p){return p.calificacion-u.calificacion}),e(c),i(h)}};return t.jsxs("div",{className:"Contenedor-shop",children:[t.jsx(T,{funcionCategorias:d,funcionSubCategorias:x}),t.jsx(S,{productos:n,titulo:l})]})}export{z as default};