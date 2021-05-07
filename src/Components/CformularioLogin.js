import { useState } from "react";
import {Container, Row, Col} from'react-bootstrap';
function CformularioLogin(){
    
    const [form,setForm] = useState({usuario:'',password:''})    
    /* 
    En el handle subimte que envia datos por submit, necesito frenar que recarge la paginas. 
    La e es de event y el prevent default viende de la e (smilid document.get elemnt by id)
    */
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(form)
    }

    const handleChange = (e) =>{
        const name = e.target.name
        const value = e.target.value
        setForm({...form,[name]:value})        
    }

    return(
        <form onSubmit={handleSubmit}>
            <Container>
            <Row className="usuario">
            <Col xs={12} md={15}>
                <code>{<label>Usuario</label>}</code>
            </Col>
            <Col xs={12} md={15}>
                <input type='text' name="usuario" value={form.usuario} onChange = {handleChange}></input>            
            </Col>
            </Row>
            <Row className ="Password">
                <Col xs={12} md={15}>
                    <code>{<label>Password</label>}</code>
                </Col>
                <Col xs={12} md={15}>                
                    <input type='password' name="password" value={form.password} onChange = {handleChange}></input>
                </Col>
            </Row>
            <button type='submit'>Login</button>
            
            </Container>
        </form>
    )
}
export default CformularioLogin;