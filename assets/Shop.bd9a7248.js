import{r as f}from"./index.03be2d59.js";import{j as s,S as g,N as b,a as j}from"./jsx-runtime.d9ad72f9.js";import{d as N}from"./Card.781fbdd0.js";import{P as S}from"./pagination.min.0d2d5c56.js";import{C as _,a as v}from"./Cart01.5ff53fd3.js";function y({producto:e,funcion:a}){return s.jsxs("div",{className:"card__Card",children:[s.jsx("div",{className:"contenedor__Card",children:s.jsxs(g,{pagination:{dynamicBullets:!0},modules:[S,b],className:"mySwiper mySwiper-card",style:{height:"100%"},children:[s.jsx(N,{calificacion:e.calificacion,className:e.destacado?"destacados":"destacados-off"}),s.jsx(j,{id:"SwiperSlide01",style:{opacity:1},children:s.jsx("img",{src:e.img.image01,alt:e.nombre,className:e.destacado?"destacado-etiqueta-on":"prodcuto-novedad",loading:"lazy"})}),s.jsx(j,{id:"SwiperSlide02",style:{opacity:1},children:s.jsx("img",{src:e.img.image02,alt:e.nombre,className:e.destacado?"destacado-etiqueta-on":"prodcuto-novedad",loading:"lazy"})}),s.jsx(j,{id:"SwiperSlide03",style:{opacity:1},children:s.jsx("img",{src:e.img.image03,alt:e.nombre,className:e.destacado?"destacado-etiqueta-on":"prodcuto-novedad",loading:"lazy"})})]})}),s.jsxs("a",{href:"/Dr-Mario-Shop/Producto",className:"datos-card__Card",id:e.id,onClick:a,children:[s.jsx("h3",{className:"nombre__Card",children:e.nombre}),s.jsxs("p",{className:"talle__Card",children:["Talle: ",s.jsx("strong",{children:e.talle.talle})]}),s.jsxs("p",{className:"marca__Card",children:["Marca:",s.jsxs("strong",{children:[" ",e.marca]})]}),s.jsxs("p",{className:"precio__Card",children:[" $",e.precio]})]})]})}function T({productos:e,titulo:a}){let i=[];function o(n){const t=n.currentTarget.id,d=e.find(h=>h.id===t);i.length=0,i.push(d),localStorage.setItem("Producto-detalle",JSON.stringify(i))}return s.jsxs("div",{className:"shop-container",children:[s.jsxs("header",{className:"header-shop",children:[s.jsx("h1",{className:"titulo-shop",children:a}),s.jsx(_,{productosCarrito:v})]}),s.jsx("div",{className:"productos-shop",children:e.length>0?e.map(n=>s.jsx(y,{producto:n,funcion:o},n.id)):s.jsx("p",{children:"No hay productos disponibles"})})]})}function p({id:e,textbutton:a,funcion:i}){return s.jsxs("button",{id:e,onClick:i,className:"boton-categorias__Shop",children:[s.jsx("span",{className:"material-symbols-outlined span spn-active",children:"change_history"}),a]})}var C={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var a={}.hasOwnProperty;function i(){for(var o=[],n=0;n<arguments.length;n++){var t=arguments[n];if(t){var d=typeof t;if(d==="string"||d==="number")o.push(t);else if(Array.isArray(t)){if(t.length){var h=i.apply(null,t);h&&o.push(h)}}else if(d==="object"){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){o.push(t.toString());continue}for(var r in t)a.call(t,r)&&t[r]&&o.push(r)}}}return o.join(" ")}e.exports?(i.default=i,e.exports=i):window.classNames=i})()})(C);function l({id:e,textbutton:a,funcion:i}){return s.jsxs("button",{id:e,onClick:i,className:"boton-subcategorias__Shop",children:[s.jsx("span",{className:"material-symbols-outlined",children:"expand_less"}),a]})}function w({funcionCategorias:e,funcionSubCategorias:a}){return s.jsxs("aside",{className:"header-container__Shop",children:[s.jsx("a",{href:"/Dr-Mario-Shop/",className:"logo",children:s.jsx("img",{src:"../images/Logotipo letras blanco.png",alt:"Logo Dr. Mario Shop"})}),s.jsx("nav",{children:s.jsxs("ul",{children:[s.jsx("li",{children:s.jsx(p,{id:"todos",textbutton:"Todos los productos",funcion:e,className:"botones-categorias__shop"})}),s.jsxs("li",{children:[s.jsx(p,{id:"buzos",textbutton:"Buzos",funcion:e,className:"botones-categorias__shop"}),s.jsxs("ul",{children:[s.jsx("li",{children:s.jsx(l,{id:"buzos-s",textbutton:"Talle S",funcion:a})}),s.jsx("li",{children:s.jsx(l,{id:"buzos-m",textbutton:"Talle M",funcion:a})}),s.jsx("li",{children:s.jsx(l,{id:"buzos-l",textbutton:"Talle L",funcion:a})}),s.jsx("li",{children:s.jsx(l,{id:"buzos-xl",textbutton:"Talle XL",funcion:a})}),s.jsx("li",{children:s.jsx(l,{id:"buzos-xxl",textbutton:"Talle XXL",funcion:a})})]})]}),s.jsxs("li",{children:[s.jsx(p,{id:"camperas",textbutton:"Camperas",funcion:e,className:"botones-categorias__shop"}),s.jsxs("ul",{children:[s.jsx("li",{children:s.jsx(l,{id:"camperas-s",textbutton:"Talle S",funcion:a})}),s.jsx("li",{children:s.jsx(l,{id:"camperas-m",textbutton:"Talle M",funcion:a})}),s.jsx("li",{children:s.jsx(l,{id:"camperas-l",textbutton:"Talle L",funcion:a})}),s.jsx("li",{children:s.jsx(l,{id:"camperas-xl",textbutton:"Talle XL",funcion:a})}),s.jsx("li",{children:s.jsx(l,{id:"camperas-xxl",textbutton:"Talle XXL",funcion:a})})]})]})]})}),s.jsx("footer",{className:"footer-shop",children:"Dr. Mario IND - copyright ©"})]})}function M({productos:e}){const a=e.sort(function(r,c){return c.calificacion-r.calificacion}),[i,o]=f.useState(a),[n,t]=f.useState("Todos los productos"),d=r=>{var c=r.currentTarget.id;if(c!="todos"){const u=e.filter(x=>x.tipo===c);u.sort(function(x,m){return m.calificacion-x.calificacion}),t(c),o(u)}else o(a),t("Todos los productos")},h=r=>{let c=r.currentTarget.id;if(c!="todos"){const u=e.filter(x=>x.talle.detalle===c);u.sort(function(x,m){return m.calificacion-x.calificacion}),t(c),o(u)}};return s.jsxs("div",{className:"Contenedor-shop",children:[s.jsx(w,{funcionCategorias:d,funcionSubCategorias:h}),s.jsx(T,{productos:i,titulo:n})]})}export{M as default};