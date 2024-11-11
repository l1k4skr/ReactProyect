import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ModificarAgenda = () => {
  useEffect(() => {
    var calendarEl = document.getElementById('calendar');
    var calendar = new Calendar(calendarEl, {
      plugins: [dayGridPlugin],
      initialView: 'dayGridMonth',
    });
    calendar.render();
  }, []);

  return (
    <div className="container">
      <h1 className="text-center mb-4">Modificación de Agendas Programadas</h1>
      <div id="calendar" className={styles.calendar}></div>

      <div className="card mt-4">
        <div className="card-body">
          <form>
            <div className="mb-3">
              <label htmlFor="nombrePaciente" className="form-label">
                Nombre del Paciente
              </label>
              <input
                type="text"
                className="form-control"
                id="nombrePaciente"
                placeholder="Ingrese el nombre del paciente"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="etapaPaciente" className="form-label">
                Etapa del Paciente
              </label>
              <select id="etapaPaciente" className="form-select">
                <option value="primera">Primera Etapa</option>
                <option value="segunda">Segunda Etapa</option>
                <option value="tercera">Tercera Etapa</option>
                <option value="cuarta">Cuarta Etapa</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="fechaAtencion" className="form-label">
                Fecha de Atención
              </label>
              <input type="date" className="form-control" id="fechaAtencion" />
            </div>

            <div className="mb-3">
              <label htmlFor="situacionFinal" className="form-label">
                Situación Final de la Kinesiología
              </label>
              <select id="situacionFinal" className="form-select">
                <option value="terminada">Terminada</option>
                <option value="suspendida">Suspendida</option>
                <option value="extendida">Extendida</option>
              </select>
            </div>

            <button type="submit" className="btn btn-primary">
              Guardar Cambios
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModificarAgenda;
