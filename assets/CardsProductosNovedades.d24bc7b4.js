import"./index.03be2d59.js";import{C as o}from"./CardIndex.9fba2028.js";import"./CardsProductosNovedades.4ed993c7.js";import{j as i,S as l,N as c,a as p}from"./jsx-runtime.bc5095fd.js";import{P as m}from"./pagination.min.245ddcca.js";import"./Card.a606a55c.js";function v({productos:a}){let s=[];function r(e){const t=e.currentTarget.id,d=a.find(n=>n.id===t);s.length=0,s.push(d),localStorage.setItem("Producto-detalle",JSON.stringify(s))}return i.jsx("div",{className:"cards-conteiner__Novedades",children:i.jsx(l,{slidesPerView:1,spaceBetween:10,pagination:{clickable:!0},navigation:!0,breakpoints:{"@0.00":{slidesPerView:1,spaceBetween:10},"@0.75":{slidesPerView:2,spaceBetween:20},"@1.00":{slidesPerView:3,spaceBetween:40},"@1.50":{slidesPerView:4,spaceBetween:50}},modules:[m,c],className:"mySwiper swiper-novedades",children:a.map(e=>i.jsx("div",{className:"Slide__Novedades",children:i.jsx(p,{className:"SwiperSlideCard__Novedades",style:{outline:"none",opacity:1},children:i.jsx(o,{producto:e,funcion:r},e.id)},e.id)},e.id))})})}export{v as CardsProductosNovedades};
