import React from 'react'
import ButtonCategorias from '../Buttons/ButtonCategorias'
import ButtonSubCategorias from '../Buttons/ButtonsSubCategorias'
import './HeaderShop.css'
export default function HeaderShop({funcionCategorias, funcionSubCategorias}) {



  return (
    <aside className='header-container__Shop'>
        <a href='/Dr-Mario-Shop/' className="logo">
            <img src="../../../public/images/Logotipo letras blanco.png" alt="Logo Dr. Mario Shop" />
        </a>
        <nav>
            <ul>
                <li>
                    <ButtonCategorias id={"todos"} textbutton={"Todos los productos"} funcion={funcionCategorias}  className="botones-categorias__shop" />
                </li>
                <li  >
                    <ButtonCategorias id={"buzos"} textbutton={"Buzos"} funcion={funcionCategorias} className="botones-categorias__shop"/>
                    <ul>
                        <li><ButtonSubCategorias id={"buzos-s"} textbutton={"Talle S"} funcion={funcionSubCategorias} /></li>
                        <li><ButtonSubCategorias id={"buzos-m"} textbutton={"Talle M"} funcion={funcionSubCategorias} /></li>
                        <li><ButtonSubCategorias id={"buzos-l"} textbutton={"Talle L"} funcion={funcionSubCategorias} /></li>
                        <li><ButtonSubCategorias id={"buzos-xl"} textbutton={"Talle XL"} funcion={funcionSubCategorias} /></li>
                        <li><ButtonSubCategorias id={"buzos-xxl"} textbutton={"Talle XXL"} funcion={funcionSubCategorias}/></li>
                </ul>
                </li>
                <li>
                    <ButtonCategorias id={"camperas"} textbutton={"Camperas"} funcion={funcionCategorias} className="botones-categorias__shop"/>
                    <ul>
                        <li><ButtonSubCategorias id={"camperas-s"} textbutton={"Talle S"} funcion={funcionSubCategorias}/></li>
                        <li><ButtonSubCategorias id={"camperas-m"} textbutton={"Talle M"} funcion={funcionSubCategorias}/></li>
                        <li><ButtonSubCategorias id={"camperas-l"} textbutton={"Talle L"} funcion={funcionSubCategorias}/></li>
                        <li><ButtonSubCategorias id={"camperas-xl"} textbutton={"Talle XL"} funcion={funcionSubCategorias}/></li>
                        <li><ButtonSubCategorias id={"camperas-xxl"} textbutton={"Talle XXL"} funcion={funcionSubCategorias}/></li>

                    </ul>
                </li>
            </ul>
        </nav>
        <footer className='footer-shop'>
            Dr. Mario IND - copyright ©
        </footer>
    </aside>
  )
}
