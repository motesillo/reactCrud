import React, { Fragment } from "react";

const tableForm = (props) => {
  return (
    <Fragment>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">nombre</th>
            <th scope="col">email</th>
            <th scope="col">contraseña</th>
          </tr>
        </thead>
        <tbody>
        
          {props.usuarios.map((item) => (
            <tr key={item.id}>
              <td>{item.nombre}</td>
              <td>{item.email}</td>
              <td>{item.pass}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default tableForm;
