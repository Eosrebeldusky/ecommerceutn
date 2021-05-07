import axios from "axios";
import {endpoint} from './Config'
//creo instancia de axios,y le paso la url base

const instance = axios.create({baseURL: endpoint}) 

export default instance;