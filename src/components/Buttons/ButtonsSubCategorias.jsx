import React, {useState} from 'react'
import classNames from 'classnames';
import './ButtonSubCategorias.css'


export default function ButtonSubCategorias({id, textbutton, funcion}) {

  return (
    <button id={id} onClick={funcion} className='boton-subcategorias__Shop'>
      <span className="material-symbols-outlined">expand_less</span>
        {textbutton}
    </button>
  )
}
