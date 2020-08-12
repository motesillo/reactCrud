import React, { Fragment } from "react";
//instalamos el modulo con el cli y luego importamos su modulo
import { useForm } from "react-hook-form";

// a nuestra funcion principal le agregamos le pasamos un argumento llamado props
const Formulario = (props) => {
  //traemos las funciones que vamos a ocupar de useForm()
  const { register, handleSubmit, errors } = useForm();

  //en onsubmit se ocupa la funcion addUser() que traemos desde app.js
  const onSubmit = (data) => {
    props.addUser(data);
  };

  return (
    <Fragment>
      <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <input
            name="nombre"
            ref={register({
              required: { value: true, message: "campo requerido" },
            })}
            placeholder="Ingresar nombre"
            className="form-control"
            type="text"
          />
          <span className="text-danger text-small d-block mb-2">
            {errors.nombre?.message}
          </span>
        </div>
        <div className="form-group">
          <input
            name="email"
            type="email"
            placeholder="Ingresar correo "
            className="form-control"
            type="text"
            ref={register({
              required: { value: true, message: "Campo requerido" },
            })}
          />
          <span className="text-danger text-small d-block mb-2">
            {errors?.email?.message}
          </span>
        </div>
        <div className="form-group">
          <input
            name="pass"
            placeholder="Ingresar contraseña"
            className="form-control"
            type="text"
            ref={register({
              required: { value: true, message: "Campo requerido" },
            })}
          />
          <span className="text-danger text-small d-block mb-2">
            {errors.pass?.message}
          </span>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-success btn-block">
            Guardar
          </button>
        </div>
      </form>
    </Fragment>
  );
};

export default Formulario;
