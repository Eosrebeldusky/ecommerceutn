import React, {Component} from 'react'
import Producto from './Producto'


class ListaProductos extends Component{
    constructor(props){
        super(props)
        this.state ={productos:[], loading: true}
    }

    componentDidMount(){
        fetch("https://jsonfy.com/items")
        .then(res=>res.json())
        .then(data=>{this.setState({productos:data, loading: false})})
    }
render(){
    if(this.state.loading){
        return(<div> Loading...</div>) 
    }else{
        return(
            <div>
                {this.state.productos.map(producto=><Producto data ={producto}/>)}
            </div>
        )
    }
}




}

export default ListaProductos;