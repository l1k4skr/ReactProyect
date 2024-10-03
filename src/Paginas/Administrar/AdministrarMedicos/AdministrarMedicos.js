import React from "react";
import styles from "./AdministrarMedicos.module.css"; // Importamos el CSS Module

const AdministrarMedicos = () => {
  const medicos = [
    {
      id: 1,
      apellido: "Lopez",
      nombre: "Alvaro",
      especialidad: "Fonoaudiología",
      usuario: "a.lopez@fonoaudiologia.cl",
    },
    {
      id: 2,
      apellido: "Rodriguez",
      nombre: "Daniel",
      especialidad: "Kinesiología",
      usuario: "d.rodriguez@kinesiologia.cl",
    },
    {
      id: 3,
      apellido: "Perez",
      nombre: "Isabella",
      especialidad: "Fonoaudiología",
      usuario: "i.perez@fonoaudiologia.cl",
    },
    {
      id: 4,
      apellido: "Lara",
      nombre: "Orlando",
      especialidad: "Fonoaudiología",
      usuario: "a.lopez@fonoaudiologia.cl",
    },
    {
      id: 5,
      apellido: "Pachano",
      nombre: "Cristian",
      especialidad: "Kinesiología",
      usuario: "c.pachano@kinesiologia.cl",
    },
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
                <td>{medico.usuario}</td>
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
