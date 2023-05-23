import React from 'react'
import './ButtonCategorias.css'
export default function ButtonCategorias({id, textbutton, funcion}) {
  return (
    <button id={id} onClick={funcion} className='boton-categorias__Shop'>
      <span className="material-symbols-outlined span spn-active">change_history</span>
        {textbutton}
    </button>
  )
}
