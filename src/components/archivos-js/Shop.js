const articulos = document.querySelector(".articulos");
const botonesCaterogias = document.querySelectorAll(".button");
// talles buzos
const contenedorSubCategoriasBuzos = document.querySelector('.talles-buzos');
const botonesSubCategoriasBuzos = document.querySelectorAll(".button-talles");
// talles camperas
const contenedorSubCategoriasCamperas = document.querySelector('.talles-camperas');
const botonesSubCategoriasCamperas = document.querySelectorAll(".button-talles-camperas");
const spanBotonesCategorias = document.querySelectorAll(".span");
const tituloPrincipal = document.querySelector("#titulo-section");
const numeroCarrito = document.querySelector('#numero-articulos');
let btnAgregarCarrito = document.querySelectorAll(".btn-agregar-carrito");
// slider card imagenes productos
let input = document.querySelectorAll(".input-01");


// arreglo con todos los productos
import Productos from "../../sources/buzos.json";

function revisionDeStock() {
  return (
    // copia del arreglo de productos
    [...Productos]
      // productos en stock
      .filter((producto) => {
        return producto.stock ? true : false;
      })
  );
}

// todos los productos disponibles
let productosDisponible = revisionDeStock();


const cargarProductos = (productosElegidos) => {
  // contenedor vacío para que no se dupliquen los artículos.
    articulos.innerHTML = "";

    productosElegidos.forEach((producto) => {
    const prodCard = document.createElement("div");

    prodCard.classList.add("producto-card");

    prodCard.innerHTML = `
              <div class="container-slider">
                <input type="radio" class="input-01 input-img" name="${producto.id}">
                <input type="radio" class="input-02 input-img" name="${producto.id}">
                <input type="radio" class="input-03 input-img" name="${producto.id}">
                <div class="slider">
                  <div class="slider__section">
                    <img src="${producto.img.image01}" alt="${producto.nombre}">
                  </div>
                  <div class="slider__section">
                    <img src="${producto.img.image02}" alt="${producto.nombre}">
                  </div>
                  <div class="slider__section">
                    <img src="${producto.img.image03}" alt="${producto.nombre}">
                  </div>
                </div>
              </div>
              <div class="datos-card">
                  <h3 class="nombre">${producto.nombre}</h3>
                  <p class="cantidad"> Cantidad:  <strong>${producto.cantidad} </strong></p>
                  <p class="talle">Talle: <strong>${producto.talle.talle}</strong></p>
                  <p class="marca">Marca:<strong> ${producto.marca}</strong></p>
                  <p class="precio"> $ ${producto.precio}</p>
                  <button class="btn-agregar-carrito" id=${producto.id}>
                  <p>agregar al carrito</p>
                  <span class="material-symbols-outlined cart-add">add_shopping_cart</span>
                  </button>
              </div>
            `;
    articulos.append(prodCard);
  })
    // actualiza botones card productos
    actualizarBotonesAgregar();
};

// carga todos los productos disponibles
cargarProductos(productosDisponible);

botonesCaterogias.forEach((boton) => {
  boton.addEventListener("click", (e) => {

    let btnId = e.currentTarget.id;
    let btn = e.currentTarget;

    spanBotonesCategorias.forEach((span) => {
      span.classList.remove("spn-active");
    });

    botonesCaterogias.forEach((boton) => {
      boton.classList.remove("btn-active");
    });

    // botones sub categorias
    if(btnId === "buzos"){
      contenedorSubCategoriasBuzos.classList.toggle('talles-buzos-active');
      contenedorSubCategoriasCamperas.classList.remove('talles-camperas-active');

    }
    else if(btnId === "camperas"){
      contenedorSubCategoriasCamperas.classList.toggle('talles-camperas-active');
      contenedorSubCategoriasBuzos.classList.remove('talles-buzos-active');
      
    }
    else{
      botonesSubCategoriasBuzos.forEach((boton)=>{
        boton.classList.remove('button-talles-on');
      })
      contenedorSubCategoriasCamperas.classList.remove('talles-camperas-active');
      contenedorSubCategoriasBuzos.classList.remove('talles-buzos-active');
    }

    // currentTarget señala el elemento al que se le aplica el evento
    btn.classList.add("btn-active");

    // Agrega la clase "spn-active" al span dentro del botón seleccionado
    const span = e.currentTarget.querySelector("span");
    if (span) {
      span.classList.add("spn-active");
    }

    // CARGAR LOS PRODUCTOS

    if (btnId != "todos") {

      function actualizarTitulo(){
        const productoTitulo = productosDisponible.find(
          (prodcuto) => prodcuto.tipo === btnId
        );
        let tituloCategoria = productoTitulo.tipo;
        return tituloCategoria
      }

      tituloPrincipal.innerText = actualizarTitulo();
      // aviso stock
      AvisoStock(productosDisponible);

      
      const productosSeleccionados = productosDisponible.filter(
        (producto) => producto.tipo === btnId
      );
      cargarProductos(productosSeleccionados);

    } else {
      tituloPrincipal.innerText = "Todos los productos";
      cargarProductos(productosDisponible);
      // aviso stock
      AvisoStock(productosDisponible);
    }
  });
});
const aviso = document.querySelector('.aviso');


function AvisoStock(talle){
  
  aviso.innerText = "";

  if(talle.length === 0){

    aviso.innerText = 'No hay stock por el momento :(';
  }

}

function botonesSubCategorias (tipo){
  tipo.forEach(boton => {
    boton.addEventListener('click', (e)=>{

      let idBtn = e.currentTarget.id
      let btn = e.currentTarget

    tipo.forEach(boton => {
      boton.classList.remove('button-talles-on')
    })

    btn.classList.add("button-talles-on");

    if(idBtn != "todos"){
        const talleSeleccionado = productosDisponible.filter((producto)=> producto.talle.detalle === idBtn);
        cargarProductos(talleSeleccionado);
        AvisoStock(talleSeleccionado);
    }else{
      cargarProductos(productosDisponible);
      AvisoStock(talleSeleccionado);

    }
    })
  })
}

botonesSubCategorias(botonesSubCategoriasBuzos);
botonesSubCategorias(botonesSubCategoriasCamperas);


function actualizarBotonesAgregar (){
    btnAgregarCarrito = document.querySelectorAll('.btn-agregar-carrito');
    btnAgregarCarrito.forEach(boton => {
        boton.addEventListener('click', agregarCarrito)
    });

    // input style
    input = document.querySelectorAll(".input-01");

    input.forEach(input => {
      input.checked = true;
    })
}


// traemos los productos en el carrito del Local storage
let productosCarritoLs = localStorage.getItem("productos-en-carrito")
// productos que se van agregando al carrito
let productosCarrito;

// condición local-storage

if(productosCarritoLs){
  // realizamos el parse aquí porque si el elemento que trae es null da error
   productosCarrito = JSON.parse(productosCarritoLs);
   actualizarNumeroCarrito();
}else{
  productosCarrito = [];
}



function agregarCarrito(e){

    Toastify({
      text: "¡Producto agregado!",
      duration: 2500,
      destination: "https://ginogc01.github.io/Dr.-Mario-Shop/Shop/",
      newWindow: true,
      close: false,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #0c0c0c, #0c0c0c)",
        textTransform: 'uppercase',
        fontSize: '.75em'
      },
      offset: {
        x: '2em', // horizontal axis - can be a number or a string indicating unity. eg: '2em'
        y: '7em' // vertical axis - can be a number or a string indicating unity. eg: '2em'
      },
      onClick: function(){} // Callback after click
    }).showToast();

    // id btn
    const btnId = e.currentTarget.id;
    
    // identifica el producto con el id del boton (id boton = id producto) 
    const productoAgregado = productosDisponible.find(producto => producto.id === btnId);

    // si el producto elegido, tiene el mismo id del botón, ejecuta el bloque de código
    if(productosCarrito.some(producto => producto.id === btnId)){

        // index (indice) producto agregado
        const productoIndex = productosCarrito.findIndex(producto => producto.id === btnId);

        // suma cantidad 
        productosCarrito[productoIndex].cantidad++;

    }else{
        // creacion propiedad cantidad 
        productoAgregado.cantidad = 1;
        // push producto
        productosCarrito.push(productoAgregado);
    }

    actualizarNumeroCarrito();

    // array en local storage
    localStorage.setItem('productos-en-carrito', JSON.stringify(productosCarrito))
}


function actualizarNumeroCarrito(){
    let carritoNumero = productosCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);

    numeroCarrito.innerText = carritoNumero;
}

actualizarNumeroCarrito();
