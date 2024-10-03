import React from 'react';
import styles from './AdministrarBox.module.css'; // Importamos el CSS Module

const AdministrarBox = () => {
  const boxes = [
    { sucursal: 'San Bernardo', numero: 2, tipo: 'Kinesiología', tamanio: 'Grande' },
    { sucursal: 'San Bernardo', numero: 6, tipo: 'Kinesiología', tamanio: 'Grande' },
    { sucursal: 'Providencia', numero: 2, tipo: 'Fonoaudiología', tamanio: 'Pequeño' },
    { sucursal: 'La Serena', numero: 4, tipo: 'Kinesiología', tamanio: 'Mediano' },
    { sucursal: 'Temuco', numero: 1, tipo: 'Fonoaudiología', tamanio: 'Grande' },
  ];

  return (
    <div className={`${styles.container} mt-4`}>
      <div className="table-responsive">
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
            {boxes.map((box, index) => (
              <tr key={index}>
                <td>{box.sucursal}</td>
                <td>{box.numero}</td>
                <td>{box.tipo}</td>
                <td>{box.tamanio}</td>
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

export default AdministrarBox;
