import"./index.03be2d59.js";import{C as c}from"./Card.583e4a26.js";import{j as e}from"./jsx-runtime.d9ad72f9.js";import"./pagination.min.0d2d5c56.js";function p({productos:o}){let r=[];function a(t){const s=t.currentTarget.id,d=o.find(n=>n.id===s);r.length=0,r.push(d),localStorage.setItem("Producto-detalle",JSON.stringify(r))}return e.jsx("div",{className:"cards-conteiner__productos-Destacados",children:o.map(t=>e.jsx(c,{producto:t,funcion:a},t.id))})}export{p as CardsProductos};
