
let productosCarrito = localStorage.getItem('productos-en-carrito');
productosCarrito = JSON.parse(productosCarrito);

const mensajeCarritoVacio = document.querySelector('#carrito-vacio');
const carritoProductos = document.querySelector('#carrito-productos');
const carritoAcciones = document.querySelector('#carrito-acciones');
const formularioCompra = document.querySelector('#form-compra');
const mensajeCompra = document.querySelector('#mensaje-compra');
const numeroCarrito = document.querySelector('#numero-articulos');
const btnVaciarCarrito = document.querySelector('.carrito-acciones-vaciar');
const precioTotal = document.querySelector('#precio-total');
const btnGenerarOrden = document.querySelector('.generar-orden');
const formCompra = document.querySelector('#form-compra');
const inputFormProdcutos = document.querySelector('#input-productos-form');
const botonComprar = document.querySelector('#generador-orden');
const IDorden = document.querySelector('.id-orden');
const Main = document.querySelector('.main');



let btnEliminar = document.querySelectorAll('.carrito-producto-eliminar');

function cargarProductosCarrito(){

    // actualiza el carrito
    carritoProductos.innerHTML = "";

    if(productosCarrito && productosCarrito.length > 0){

        mensajeCarritoVacio.classList.add('disabled');
        carritoProductos.classList.remove('disabled');
        carritoAcciones.classList.remove('disabled');


        productosCarrito.forEach(producto => {

            const div = document.createElement('div');
            div.classList.add('card__carrito-producto');

            div.innerHTML=`
                        <img src="${producto.img.image01}" alt="${producto.nombre}" class="carrito-producto-imagen">
                        <div class="carrito-producto crr-titulo">
                            <small>Producto:</small>
                            <h3>${producto.nombre}</h3>
                        </div>
                        <div class="carrito-producto crr-talle">
                            <small>Talle:</small>
                            <h3>${producto.talle.talle}</h3>
                        </div>
                        <div class="carrito-producto crr-cantidad">
                            <small>Cantidad:</small>
                            <p>${producto.cantidad}</p>
                        </div>
                        <div class="carrito-producto crr-precio">
                            <small>Precio:</small>
                            <p>$${producto.precio}</p>
                        </div>
                        <div class="carrito-producto crr-total">
                            <small>Subtotal:</small>
                            <p>$${producto.precio * producto.cantidad}</p>
                        </div>
                        <button class="carrito-producto-eliminar" id="${producto.id}">
                            <span class="material-symbols-outlined">delete_forever</span>
                        </button>
            `
            carritoProductos.append(div);
            actualizarNumeroCarrito();
        });
        
        
    }else{
        mensajeCarritoVacio.classList.remove('disabled');
        carritoProductos.classList.remove('disabled');
        carritoAcciones.classList.add('disabled');
    }

    // actualiza los botones
    actualizarBotonesEliminar ();

    // actualiza el precio total
    actualizarTotal();
}

// carga todos los productos que hay en el local storage
cargarProductosCarrito();

function ActualizarEstadoMain () {
    if(productosCarrito.length > 0){
        mensajeCarritoVacio.classList.add('disabled');
        Main.classList.remove('carrito-vacio');
    
    }
    else{
        Main.classList.add('carrito-vacio');
   }
}

ActualizarEstadoMain();



// actualizacion número del carrito
function actualizarNumeroCarrito(){

    if(productosCarrito && productosCarrito.length > 0){
        let carritoNumero = productosCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
        numeroCarrito.innerText = carritoNumero;

    }else if(productosCarrito.length === 0){
        let carritoNumero = productosCarrito.length
        numeroCarrito.innerText = carritoNumero;
    }
    

}

// actualizar botones Eliminar
function actualizarBotonesEliminar (){
    btnEliminar = document.querySelectorAll('.carrito-producto-eliminar');
    btnEliminar.forEach(boton => {
        boton.addEventListener('click', eliminarDelCarrito)
    })
}


function eliminarDelCarrito(e){
    Toastify({
        text: "Producto eliminado :(",
        duration: 2500,
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
          y: '2em' // vertical axis - can be a number or a string indicating unity. eg: '2em'
        },
        onClick: function(){} // Callback after click
      }).showToast();
    // obtiene el id del elemento btnEliminar
    const idBtn = e.currentTarget.id;
    // obtiene el index del elemento en el arreglo productosCarrito
    const index = productosCarrito.findIndex(producto => producto.id === idBtn);
    // disminuye la propiedad cantidad en 1
    productosCarrito[index].cantidad--;
    // elimina el objeto del arreglo si la propiedad cantidad es menor o igual a cero
    if (productosCarrito[index].cantidad <= 0) {
        productosCarrito.splice(index, 1);
    }
    // recarga nuevamente los productos en el arreglo
    cargarProductosCarrito();
    actualizarNumeroCarrito();
    ActualizarEstadoMain();
    agregarCaracterísticasForm();

    agregarCaracterísticasForm();



    // modifica el local sorage
    localStorage.setItem('productos-en-carrito', JSON.stringify(productosCarrito));

    
}

btnVaciarCarrito.addEventListener('click', vaciarCarrito);


function procesoVaciarCarrito(){
    // elimina los objetos del arreglo
    productosCarrito.length = 0;
    // lo guarda en el local storage
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosCarrito));
    // carga nuevamente los productos y ejecuta función de clases (disabled)
    cargarProductosCarrito();
    actualizarNumeroCarrito();
    // actualiza el estado del formulario
    actualizarEstadoFormulario();
    // actualiza el estado del  main (styles)
    ActualizarEstadoMain();
 }


function vaciarCarrito(){
    Swal.fire({
        title: 'Vaciar Carrito',
        text: "Se eliminarán todos los productos del carrito",
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#0c0c0c',
        cancelButtonColor: '#0c0c0c',
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Ok'
      }).then((result) => {
        if (result.isConfirmed) {
                procesoVaciarCarrito();
            }
        })
 }

function actualizarTotal(){
    const precioTotalCalculado = productosCarrito.reduce((acc, producto) => acc + (producto.cantidad * producto.precio), 0);
    precioTotal.innerText = `$${precioTotalCalculado}`;
}


const idOrdenCompra = document.querySelector('#input-productos-form-ID');
const ordenAviso1 = document.querySelector('.span-aviso-1');

btnGenerarOrden.addEventListener('click', EstadoOrdenDeCompra);

function generarCaracteres(numero){
    const caracteres = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    const caracteresLength = caracteres.length;
    let result = "";

    for (let i = 0; i < numero; i++) {
        result += caracteres.charAt(Math.floor(Math.random() * caracteresLength))
    }

    return result;
}

function OrdenId (){
    let numeros = Math.floor( Math.random()* 1000);
    let letras = generarCaracteres(4);

    let Id = numeros + "-" + letras
    let idString = Id.toString()

    IDorden.innerText = idString;
    ordenAviso1.innerText = idString;
    idOrdenCompra.value = Id;

    console.log(idOrdenCompra.value);
}

function actualizarEstadoFormulario(){
    let productosCantidad = productosCarrito.length
    if(productosCantidad > 0){
        formCompra.classList.remove('form-disabled');
    }
    else{
        formCompra.classList.add('form-disabled');
    }

    btnGenerarOrden.setAttribute('disabled', 'true');

}

function EstadoOrdenDeCompra(){
    actualizarEstadoFormulario()
    OrdenId();

}


function agregarCaracterísticasForm(){
    const precioTotalCalculado = productosCarrito.reduce((acc, producto) => acc + (producto.cantidad * producto.precio), 0);


    const propiedadesProductos = productosCarrito.map(({nombre, cantidad, talle, id, precio}) => {let tallBuzo = talle.talle
        return `Producto N° ${id} = (Nombre: ${nombre}, Cantidad: ${cantidad}, Talle: ${tallBuzo}, Precio: $${precio}, Precio Total: $${precio * cantidad})`;
    });

    const datoFinal = `(${propiedadesProductos}) Precio total de la orden ==> $${precioTotalCalculado}`
    // const propiedadesProductosString = propiedadesProductos.join(", ");

    inputFormProdcutos.value = datoFinal;
}

// agrega la orden
agregarCaracterísticasForm();

function validarFormulario(event) {
    event.preventDefault() //cancelamos el envío automático
    Swal.fire({
        title: 'Orden de compra',
        text: "Al generar la orden de compra acepto los términos y condiciones de compra",
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#0c0c0c',
        cancelButtonColor: '#0c0c0c',
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Ok'
      }).then((result) => {
        if (result.isConfirmed) {
            // validación de formulario
            const name = formCompra.nombre.value;
            const email = formCompra.email.value;
            const phone = formCompra.numberPhone.value;
            const mensajeAlerta = "Completa el formulario de Orden de compra.";
        
            const validarCampo = (campo) => {
            return !campo || campo.trim() === "";
            };
        
            if (validarCampo(name) || validarCampo(email) || validarCampo(phone)) {
            alert(mensajeAlerta);
            } else if (!/\S+@\S+\.\S+/.test(email)) {
            alert("Dirección de correo electrónico inválida.");
            } else {
                // envío de formulario
                formularioCompra.submit();
                procesoVaciarCarrito();
            }
        }
      })
    
  }


botonComprar.addEventListener('click', validarFormulario);



const menuHamb = document.querySelector('.menu');
const aside = document.querySelector('.aside');
const closeHamb = document.querySelector('.close');



menuHamb.addEventListener('click', ()=>{
    aside.classList.add('aside-on');
    menuHamb.classList.add('hamb-off');
    closeHamb.classList.add('close-on');
})

closeHamb.addEventListener('click', ()=>{
    aside.classList.remove('aside-on');
    menuHamb.classList.remove('hamb-off');
    closeHamb.classList.remove('close-on');
})
