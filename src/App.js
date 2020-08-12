import React, {useState} from "react";
//importamos los componentes
import Formulario from "./components/Formulario";
import FormTable from "./components/table";
//importamos el modulo v4 pero antes se agrega el cli.
import { v4 as uuidv4 } from 'uuid';

function App() {
 //agregamos un hook usuarios declarandole un arreglo vacio! 
  const [usuarios,setUsuarios]=useState([]);

 //funcion agregar usuario :) 
  const addUser =(user)=>{
    user.id=uuidv4();
  //seteamos usuarios agregando el argumento user al arreglo de objetos
    setUsuarios([...usuarios,user])
    console.log(usuarios)
  }
  return (
  
    <div className="App"> 
      <div className="container">
        <div className="row">
          <div className="col-12">
          <h2>Ingreso de personas</h2>
            <Formulario addUser={addUser}  />          
          </div>
        </div>
      
        <div className="row">
          <div className="col-12">
            <FormTable usuarios={usuarios} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
