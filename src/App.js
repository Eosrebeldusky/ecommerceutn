
import './App.css';
import Home from './Pages/Home'
import {Route} from'react-router';
import {BrowserRouter} from 'react-router-dom';
import Registro from './Pages/Registro';
import Login from './Pages/Login';
import ListaProductos from './Pages/ListaProductos'; 
import detalleProducto from './Pages/DetalleProducto';
import Contacto from './Pages/Contacto';


function App() { 
  
  return (
    <div className="App">     
      <BrowserRouter>
            <Home/>           
            <Route path ="/registro" component = {Registro} exact/>  
            <Route path ="/login" component = {Login} exact/>
            <Route path ="/productos" component ={ListaProductos} exact/>
            <Route path="/Productos/:id" component={detalleProducto} exact/>
            <Route path="/Contactos" component={Contacto} exact/>            
      </BrowserRouter>


    </div>
  );
}

export default App;
