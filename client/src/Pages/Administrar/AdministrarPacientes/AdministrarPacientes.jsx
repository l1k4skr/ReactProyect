import React from 'react';
import styles from './AdministrarPacientes.module.css'; // Importamos el CSS Module

const AdministrarPacientes = () => {
  const pacientes = [
    {
      run: 'xx.xxx.xxx-x',
      nombre: 'Abed Piedra Castillo',
      tratamiento: 'Kinesiología',
      observaciones: 'Persona muy inteligente, buen carácter y amable',
      sesiones: 3,
      finalizadas: 1,
    },
  ];

  return (
    <>
      <div className={`${styles.container} mt-4`}>
        <div className={styles.headerButton}>
          <button className="btn btn-primary">Agregar</button>
        </div>

        <div className="table-responsive mt-4">
          <table className="table table-bordered">
            <thead className="table-light">
              <tr>
                <th scope="col">Run</th>
                <th scope="col">Nombre</th>
                <th scope="col">Nombre de Tratamiento</th>
                <th scope="col">Observaciones</th>
                <th scope="col">Cantidad de Sesiones</th>
                <th scope="col">Sesiones Finalizadas</th>
                <th scope="col">Modificar</th>
              </tr>
            </thead>
            <tbody>
              {pacientes.map((paciente, index) => (
                <tr key={index}>
                  <td>{paciente.run}</td>
                  <td>{paciente.nombre}</td>
                  <td>{paciente.tratamiento}</td>
                  <td>{paciente.observaciones}</td>
                  <td>{paciente.sesiones}</td>
                  <td>{paciente.finalizadas}</td>
                  <td>
                    <button className="btn btn-danger btn-sm">Editar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AdministrarPacientes;
