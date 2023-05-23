import React, {useState , useEffect} from "react";
import './ProductoDetalle.css'
import SliderProductoDetalle from "./ProductoDetalleSlider";
import EspecificacionesProductoDetalle from "./EspecificacionesProductoDetalle";


export default function Producto({productoDetalle, productoCarrito}){

    const[productoSeleccionado, setProductoSeleccionado] = useState([])
    const[productosCarrito, setProductosCarrito] = useState([])


    useEffect(() => {
        if (productoDetalle && productoCarrito) {
            setProductoSeleccionado(productoDetalle);
            setProductosCarrito(productoCarrito)
        }
    }, [productoDetalle, productoCarrito]);

    if (!productoSeleccionado) {
        return (<p>...Cargando</p>)
    }
    else{

        return(
            <div>
                {
                    productoSeleccionado.map(producto=>{
                        return(              
                            <div className="detalle-producto__container" key={`producto-detalle-${producto.id}`}>
                                <SliderProductoDetalle producto={producto}/>
                                 <EspecificacionesProductoDetalle producto={producto} productosCarrito={productosCarrito}/>
                            </div>

                        )
                    })
                }
            </div>
        )
    }

    
}