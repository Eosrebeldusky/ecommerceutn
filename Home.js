import React, {useState} from 'react'
import {Link} from "react-router-dom"
function Home(){

    const [titulo,setTitulo] = useState(' Bienvenidos a la Home')


    return(
        <div>
           <h1>{titulo}</h1>
           <button onClick ={()=>setTitulo('Bienvenido a la Home, que pase un gran dia')}> Saludo afectuoso </button>
           <button onClick ={()=>setTitulo('Bienvenidos a la Home')}> Saludo Original </button>
           
                <ul>
                    <li><Link to="/"> Home </Link></li>
                    <li><Link to="/registro"> Registro </Link></li>
                    <li><Link to="/productos">Lista de Productos</Link></li>
                    
                </ul>
                    
        </div>
    )
}

export default Home;