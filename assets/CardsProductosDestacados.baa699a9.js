import"./index.03be2d59.js";import{C as c}from"./CardIndex.9fba2028.js";import{j as e}from"./jsx-runtime.bc5095fd.js";import"./Card.a606a55c.js";import"./pagination.min.245ddcca.js";function g({productos:o}){let r=[];function a(t){const s=t.currentTarget.id,d=o.find(n=>n.id===s);r.length=0,r.push(d),localStorage.setItem("Producto-detalle",JSON.stringify(r))}return e.jsx("div",{className:"cards-conteiner__productos-Destacados",children:o.map(t=>e.jsx(c,{producto:t,funcion:a},t.id))})}export{g as CardsProductos};