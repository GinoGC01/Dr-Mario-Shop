import React from "react";
import './ButtonAddCart.css'

export default function BotonAgregarCarrito({ ArregloProductos, productosCarrito, actualizarProductosCarrito}) {
  function agregarCarrito(e) {
    e.preventDefault();
    Toastify({
      text: "¡Producto agregado!",
      duration: 2500,
      destination: "https://ginogc01.github.io/Dr.-Mario-Shop/Shop/",
      newWindow: true,
      close: false,
      gravity: "top",
      position: "right",
      stopOnFocus: true,
      style: {
        background: "linear-gradient(to right, #0c0c0c, #0c0c0c)",
        textTransform: "uppercase",
        fontSize: ".75em",
      },
      onClick: function () {},
    }).showToast();

    const btnId = e.currentTarget.id;
    const productoAgregado = ArregloProductos.find((producto) => producto.id === btnId);

    let nuevosProductosCarrito = [...productosCarrito]; // Crear nueva instancia de productosCarrito

    if (nuevosProductosCarrito.some(({ id }) => id === btnId)) {
      const productoIndex = nuevosProductosCarrito.findIndex(({ id }) => id === btnId);
      nuevosProductosCarrito[productoIndex].cantidad++;
    } else {
      productoAgregado.cantidad = 1;
      nuevosProductosCarrito.push(productoAgregado);
    }

    actualizarProductosCarrito(nuevosProductosCarrito);
    localStorage.setItem("productos-en-carrito", JSON.stringify(nuevosProductosCarrito));
  }
  

  return (
    <>
      {ArregloProductos.map((producto) => (
        <div className="button-content__productoDetalle" key={producto.id}>
          <button className="button-addCart__productoDetalle" onClick={(e) => agregarCarrito(e)} id={producto.id}>
            <p>agregar al carrito</p>
            <span className="material-symbols-outlined span-addCart__productoDetalle">add_shopping_cart</span>
          </button>
        </div>
      ))}
    </>
  );
}