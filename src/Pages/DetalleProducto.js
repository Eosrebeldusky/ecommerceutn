import React, {useEffect, useState} from 'react'
import MuestraProducto from '../Components/MuestraProducto';
import {getProducto} from '../Service/ItemsServices'

function DetalleProducto(props){

//en la constante guardo la info del producto (toda)
// uso props.match.params porque ahi es donde va el ruteo de react de /producto:id en el app.js
    const id = props.match.params.id;    
    const [producto, setProducto] = useState({})    
    const [loading,setloading] = useState(true)
    
    useEffect(
        ()=>{             
            getProducto(id)                   
            .then(response=>{                
                setProducto(response.data[0]);
                setloading(false);
            })
        },        
        [],       
    ) 

    if (loading){

        return(
            <div>Loading...</div>
            )
    }else{
            return(                
                <div>
                    <MuestraProducto data={producto} verDetalle ={false}/>
                </div>
        )
    }        
}

export default DetalleProducto;
