import React, {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import BotonCompra from './BotonCompra'
import  {getProducto} from '../Service/ItemsServices'

function MuestraProducto(props){ 
    
    const verDetalle = (props.verDetalle!==false?true:false);
    const {id,name,price} = props.data    
    const [producto, setProducto] = useState({})
    const [loading , setloading] = useState(true)

    useEffect(
        ()=>{ 
            getProducto(id)                    
            .then(response=>{                
                setProducto(response.data[0]);
                setloading(false);  
            })          
        },
        []
    ) 
    //recorda que para mostrar usas {props.data()porque lo nombraste afuera}
    //&& renderizado condicional
    if(loading){
            return(
                <div>Loading...</div>
                )

        }else{
                return(

                        <div>
                            <p>id:{id}</p>
                            <p>name:{name}</p>
                            <p>price:{price}</p>                
                                {
                                    verDetalle && <button> <Link to={"/Productos/"+id}>  Ver Detalle </Link> </button>                      
                                }
                          <BotonCompra data={producto}/>
                        </div>
        )
    }
}
export default MuestraProducto;