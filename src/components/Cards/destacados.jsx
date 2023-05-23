import React from "react";
import './destacados.css'

export default function destacados ({calificacion, className}){
    return(

        <div className={`${className} destacados`}> 
            <p> Prodcuto
                <span className="destacado__span"> DESTACADO </span>
            </p>
            <div className="calificacion">
                <span className="calificaion-numero">{calificacion}/10</span>
                <span className="material-symbols-outlined star">star</span>
            </div>
        </div>

    )
}