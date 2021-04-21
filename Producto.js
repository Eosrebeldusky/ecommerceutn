import React, {useState} from 'react'

    function Producto(props){
    const [mensaje, setMensaje]= useState('') 

        const comprar = ()=> {
            if(props.data.stock-1===0){
                setMensaje('No hay Stock')
            }else{
                setMensaje('Gracias por su compra')
                console.log(props.data.stock)
            }
        }
        const cancelarCompra = ()=> {
            setMensaje('Compra Cancelada')                
        }

        return(
            <div>
                <div>
                    <div>id: {props.data.id}</div>
                    <div>Precio: {props.data.price}</div>    
                    <div>Descripcion: {props.data.description}</div>    
                    <div>Cantidad: {props.data.stock}</div>
                    <button onClick={comprar}>Comprar</button>                    
                    <button onClick={cancelarCompra}>Cancelar Compra</button>
                    <div><p Id ='mensaje'>{mensaje}</p></div>
                    
                </div>   
            </div>
        )
    }

export default Producto;


