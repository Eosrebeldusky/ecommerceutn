import React, {Component} from 'react';

function CformularioRegistro(){
    const handleSubmit = (event) =>{
        event.preventDefault()
        console.log('Holas')
    }

    return(
        <form onSubmit = {handleSubmit}>
            <div>
                    <label>Usuario</label>  
                    <input type='text'></input>
            </div>
            <div>
                    <label>Nombre</label>                     
                    <input type='text'></input>
            </div>
            <div>
                    <label>Apellido</label>                    
                    <input type='text'></input>
            </div>
                    <label>EMail</label>
                    <input type='Mail'></input>
           
            <div>
                    <label>Password</label>
                    <input type='password'></input>
            </div>  
            <div>      
                    <label> Confirmar Password</label>
                    <input type='password'></input>
            </div>
                    <button type='submit'>Registrarse</button>                
        </form>
    )
}
export default CformularioRegistro