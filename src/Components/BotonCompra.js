import React, {useState} from 'react'


function BotonCompra(props){
    const [counter, setCounter] = useState(1)  
       
        const {name} = props.data

        const handleClick =() =>{
        setCounter(counter+1)
        
        console.log('Usted compro '+ counter + 'item')
        alert('Usted compro '+ name)
    }
    return(
    <button onClick = {handleClick}  >Comprar</button>
    )
}
export default BotonCompra 