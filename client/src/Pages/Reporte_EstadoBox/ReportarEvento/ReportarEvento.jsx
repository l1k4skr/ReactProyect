import React from 'react';
import styles from './ReportarEvento.module.css'; // Importamos el CSS Module

const ReportarEvento = () => {
  const boxOptions = ["Box 1", "Box 2", "Box 3", "Box 4"];
  const timeOptions = [
    "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30",
    "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00"
  ];
  const conditionOptions = ["No modificar", "Fuera de Servicio", "En Mantenimiento"];

  return (
    <div className={`${styles.container} mt-4`}>
      <h2 className="text-center mb-4">Reportar Evento - EduDown</h2>
      <form action="EstadoDeBox.html" method="get">
        <div className="row row-cols-2 g-3">
          <div className="col">
            <div className={styles.formGroup}>
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
          </div>
          <div className="col">
            <div className={styles.formGroup}>
              <label htmlFor="date">Fecha de Atención:</label>
              <input type="date" id="date" name="date" required />
            </div>
          </div>
          <div className="col">
            <div className={styles.formGroup}>
              <label htmlFor="time">Hora de Atención:</label>
              <select id="time" name="time" required>
                {timeOptions.map((time, index) => (
                  <option key={index} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="col">
            <div className={styles.formGroup}>
              <label htmlFor="condiciones">Modificar Condiciones de Uso:</label>
              <select id="condiciones" name="condiciones">
                {conditionOptions.map((condition, index) => (
                  <option key={index} value={condition.toLowerCase().replace(' ', '_')}>
                    {condition}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="col-12">
            <div className={styles.formGroup}>
              <label htmlFor="descripcion">Descripción del Evento:</label>
              <textarea
                id="descripcion"
                name="descripcion"
                placeholder="Describa el evento que afecta el uso del Box..."
                required
              ></textarea>
            </div>
          </div>
        </div>
        <input type="submit" value="Reportar Evento" className={styles.submitButton} />
      </form>
    </div>
  );
};

export default ReportarEvento;
