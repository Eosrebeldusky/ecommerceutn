import React, {useState} from 'react'
import {Container, Row, Col} from'react-bootstrap';


function CformularioContacto(){    
        const [form,setForm] = useState({nombre:'',mail:'',observaciones:''})
            
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

        <div>            
            <form onSubmit = {handleSubmit}>
                    <Container>
                            <Row className="Nombre">
                            <Col xs={12} md={15}>
                                <code>{<label>Nombre</label>}</code>
                            </Col>
                            <Col xs={12} md={15}>
                                <input type='text' name="nombre" value={form.nombre} onChange = {handleChange}></input>            
                            </Col>
                            </Row>
                            <Row className ="mail">
                                <Col xs={12} md={15}>
                                    <code>{<label>Mail</label>}</code>
                            </Col>
                            <Col xs={12} md={15}>                
                                    <input type='email' name="mail" value={form.mail} onChange = {handleChange}></input>
                            </Col>
                            </Row>
                            <Row className ="observaciones">
                            <Col xs={12} md={15}>
                                    <code>{<label>Observaciones</label>}</code>
                            </Col>
                            <Col xs={15} md={20}>                
                                    <textarea type='text' name="observaciones"value ={form.observaciones} onChange ={handleChange}></textarea>
                            </Col>
                            </Row>
                    </Container>
                <button type='submit'>Enviar</button>
            </form>
        </div>
    )
}

export default CformularioContacto;