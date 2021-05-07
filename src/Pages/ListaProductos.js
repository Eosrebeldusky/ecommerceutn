import React, {useEffect, useState} from 'react'
import MuestraProducto from '../Components/MuestraProducto'
import {getProductos} from '../Service/ItemsServices'

function ListaProductos(){

    //en la constante guardo la info del producto (toda)
    const [producto,setProducto] = useState('')
    const [loading,setloading] = useState(true)

    useEffect(
        ()=>{
            getProductos()
            .then(response=>{
                setProducto(response.data)
                //ver respones, trae mas info que Fetch.
                console.log(response)
                setloading(false)
            })
        }   
    )
    
    if (loading){
        return(
            <div>Loading...</div>
            )
    }else{
            return(
                // de la constante producto corro un map() que itera, y manda los parametros a Muestra producto a traves de la varaiable data
                    <div>
                        {producto.map(producto=><MuestraProducto data={producto}/>)}
                        
                    </div>
        )
    }        
}

export default ListaProductos;
