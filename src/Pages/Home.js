
import React,{useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import firebase from 'firebase';



function Home(){
   
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional    
     useEffect(()=>{
      var firebaseConfig = {
        apiKey: "AIzaSyCC5OpBLPRurZXbZefOn_kyo6AUjCrAnUU",
        authDomain: "utn-react-2021-pando.firebaseapp.com",
        projectId: "utn-react-2021-pando",
        storageBucket: "utn-react-2021-pando.appspot.com",
        messagingSenderId: "391094446701",
        appId: "1:391094446701:web:8fd470f4e1141e9a376d64",
        measurementId: "G-FNL80W6F4S"
      };
      // Initialize Firebase
      //firebase.initializeApp(firebaseConfig);           

     })
     console.log('Santi',firebase.database)
    const [titulo] = useState('Home') 
    

    return(
        <div className='reflection'>
            <h1>{titulo}</h1>                 
                <ul>                
                    <li><Link to ='/'className='nav' > Home </Link></li>
                    <li><Link to='/Registro' className='nav'>Registro</Link></li>
                    <li><Link to='/Login' className='nav'>Login</Link></li>                      
                    <li><Link to='/Productos' className='nav'>Nuestros Productos</Link></li>                    
                    <li><Link to='/Contactos'className='nav'>Contactenos</Link></li>                    
                </ul>   
                
        </div>
        )
}

export default Home;
/*
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/8.4.3/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/8.4.3/firebase-analytics.js"></script>

<script>
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCC5OpBLPRurZXbZefOn_kyo6AUjCrAnUU",
    authDomain: "utn-react-2021-pando.firebaseapp.com",
    projectId: "utn-react-2021-pando",
    storageBucket: "utn-react-2021-pando.appspot.com",
    messagingSenderId: "391094446701",
    appId: "1:391094446701:web:8fd470f4e1141e9a376d64",
    measurementId: "G-FNL80W6F4S"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script>
*/