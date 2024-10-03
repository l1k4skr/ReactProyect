import React from "react";
import styles from "./AdministrarCentrosMedicos.module.css"; // Importamos el CSS Module

const AdministrarCentrosMedicos = () => {
  const centros = [
    {
      sucursal: "San Bernardo",
      box: 2,
      tipo: "Kinesiología",
      tamaño: "Grande",
    },
    {
      sucursal: "San Bernardo",
      box: 6,
      tipo: "Kinesiología",
      tamaño: "Grande",
    },
    {
      sucursal: "Providencia",
      box: 2,
      tipo: "Fonoaudiología",
      tamaño: "Pequeño",
    },
    { sucursal: "La Serena", box: 4, tipo: "Kinesiología", tamaño: "Mediano" },
    { sucursal: "Temuco", box: 1, tipo: "Fonoaudiología", tamaño: "Grande" },
  ];

  return (
    <>
      <div className={`${styles.container} mt-4`}>
        <div className={styles.headerButton}>
          <button className="btn btn-primary">Agregar</button>
        </div>

        <div className="table-responsive mt-3">
          <table className="table table-bordered">
            <thead className="table-light">
              <tr>
                <th scope="col">Sucursal</th>
                <th scope="col">N de Box</th>
                <th scope="col">Tipo de Box</th>
                <th scope="col">Tamaño</th>
                <th scope="col">Editar</th>
              </tr>
            </thead>
            <tbody>
              {centros.map((centro, index) => (
                <tr key={index}>
                  <td>{centro.sucursal}</td>
                  <td>{centro.box}</td>
                  <td>{centro.tipo}</td>
                  <td>{centro.tamaño}</td>
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

export default AdministrarCentrosMedicos;
