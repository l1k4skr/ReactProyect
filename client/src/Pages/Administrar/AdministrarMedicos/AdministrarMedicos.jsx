import React from "react";
import styles from "./AdministrarMedicos.module.css"; // Importamos el CSS Module

const AdministrarMedicos = () => {
  const medicos = [
    
  ];

  return (
    <div className={`${styles.container} mt-4`}>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead className="table-light">
            <tr>
              <th scope="col">N</th>
              <th scope="col">Apellido</th>
              <th scope="col">Nombre</th>
              <th scope="col">Especialidad</th>
              <th scope="col">Usuario</th>
              <th scope="col">Editar</th>
            </tr>
          </thead>
          <tbody>
            {medicos.map((medico) => (
              <tr key={medico.id}>
                <td>{medico.id}</td>
                <td>{medico.apellido}</td>
                <td>{medico.nombre}</td>
                <td>{medico.especialidad}</td>
                <td>{medico.correo}</td>
                <td>
                  <button className="btn btn-danger btn-sm">Editar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdministrarMedicos;
