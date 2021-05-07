import React, {useState} from 'react';

function CformularioRegistro(){
        const [form, setForm]= useState({usuario:'',nombre:'',apellido:'',email:'',password:'',confirmarPassword:''})
                
        const handleSubmit = (event) =>{
                event.preventDefault()
                console.log(form)
                }       
    

    const handleChange = (event) =>{
        const name = event.target.name
        const value =event.target.value        
        setForm({...form,[name]:value})
        }
                
    return(
        <form onSubmit = {handleSubmit}>
            <div>
                    <label>Usuario</label>  
                    <input type='text' name='usuario' value ={form.usuario} onChange={handleChange}></input>
            </div>
            <div>
                    <label>Nombre</label>                     
                    <input type='text' name='nombre'value ={form.nombre} onChange={handleChange}></input>
            </div>
            <div>
                    <label>Apellido</label>                    
                    <input type='text'name='apellido'value ={form.apellido} onChange={handleChange}></input>
            </div>
                    <label>EMail</label>
                    <input type='Mail'name='email'value ={form.email} onChange={handleChange}></input>
           
            <div>
                    <label>Password</label>
                    <input type='password'name='password'value ={form.password} onChange={handleChange}></input>
            </div>  
            <div>      
                    <label> Confirmar Password</label>
                    <input type='password' name='confirmarPassword'value ={form.confirmarPassword} onChange={handleChange}></input>
            </div>
                    <button type='submit'>Registrarse</button>                
        </form>
    )
}
export default CformularioRegistro