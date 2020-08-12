import React,{Fragment} from 'react';
//instalamos el modulo con el cli y luego importamos su modulo
import { useForm } from "react-hook-form";

// a nuestra funcion principal le agregamos le pasamos un argumento llamado props
const Formulario = (props) => {

  //traemos las funciones que vamos a ocupar de useForm()  
    const {register,handleSubmit } = useForm();

    //en onsubmit se ocupa la funcion addUser() que traemos desde app.js 
    const onSubmit=(data)=>{
        props.addUser(data)
        
    }
    
    return ( 
        <Fragment>
            <form className="mt-5"  onSubmit={handleSubmit(onSubmit)} >
                <div className="form-group">
                <input name="nombre"  ref={register} placeholder="Ingresar nombre" className="form-control" type="text"/>
                </div>        
                <div className="form-group">
                <input name="email" ref={register} type="email" placeholder="Ingresar correo " className="form-control" type="text"/>
                </div>    
                <div className="form-group">
                <input name="pass"  ref={register} placeholder="Ingresar contraseña" className="form-control" type="text"/>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-success btn-block">Guardar</button>
                </div>

            </form>  

        </Fragment> 
       
     );
}
 
export default Formulario;