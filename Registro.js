import React from 'react'
import Ingreso from './Ingreso'
import {Link} from "react-router-dom"

function Registro(){  
/*
    const ingresar = () => {
        <Link to="/registro"></Link>
 }
*/
    return(
        <div>
            <h1>Registro</h1>
            <Ingreso/>           
            <button> Ingresar </button>

        </div>
    )
}

export default Registro;