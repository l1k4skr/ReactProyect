import React from 'react';
import styles from './RegistroInsumo.module.css'; // Importamos el CSS Module

const RegistroInsumos = () => {
  const boxOptions = ["Box 1", "Box 2", "Box 3", "Box 4"];
  const timeOptions = [
    "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30",
    "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00"
  ];
  const insumoOptions = [
    "Insumo 1 - Vendaje", "Insumo 2 - Crema", "Insumo 3 - Electrodo"
  ];

  return (
    <div className={`${styles.container} mt-4`}>
      <h2>Registro de Insumos - EduDown</h2>
      <form action="/Desarrollo Web/index.html" method="get" className={styles.form}>
        <div>
          <label htmlFor="box">Seleccionar Box:</label>
          <select id="box" name="box" required>
            <option value="">Seleccione un Box</option>
            {boxOptions.map((box, index) => (
              <option key={index} value={box.toLowerCase().replace(' ', '')}>
                {box}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="date">Fecha de Atención:</label>
          <input type="date" id="date" name="date" required />
        </div>

        <div>
          <label htmlFor="time">Hora de Atención:</label>
          <select id="time" name="time" required>
            {timeOptions.map((time, index) => (
              <option key={index} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="insumo">Seleccionar Insumo:</label>
          <select id="insumo" name="insumo">
            <option value="">Seleccione un Insumo</option>
            {insumoOptions.map((insumo, index) => (
              <option key={index} value={insumo.toLowerCase().replace(' ', '_')}>
                {insumo}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="cantidad">Cantidad Utilizada:</label>
          <input type="number" id="cantidad" name="cantidad" required min="0" placeholder="Ingrese la cantidad utilizada" />
        </div>

        <div>
          <label htmlFor="insumo_adicional">Insumo Adicional (Opcional):</label>
          <input type="text" id="insumo_adicional" name="insumo_adicional" placeholder="Describa cualquier insumo adicional" />
        </div>

        <div>
          <label htmlFor="cantidad_adicional">Cantidad Adicional:</label>
          <input type="number" id="cantidad_adicional" name="cantidad_adicional" min="1" placeholder="Ingrese la cantidad adicional" />
        </div>

        <input type="submit" value="Registrar Insumo" className={styles.fullWidth} />
      </form>
    </div>
  );
};

export default RegistroInsumos;
