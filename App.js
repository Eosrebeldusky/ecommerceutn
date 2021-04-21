
import './App.css';
import Home from './Home'
import {BrowserRouter,Route} from "react-router-dom"

import Registro from './Registro';
import ListaProductos from './ListaProductos';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Home/>
        <Route path ="/registro" component ={Registro} exact/>
        <Route path ="/productos" component ={ListaProductos} exact/>        
      </BrowserRouter>

    
    
      
    </div>
  );
}

export default App;
