import React from "react";
import { useNavigate } from "react-router-dom"; 
import "./estilo_agenda.css";

const horarios = [
    "08:30","09:00","09:30","10:00",
    "10:30","11:00","11:30","12:00",
    "12:30","13:00","13:30","14:00",
    "14:30","15:00","15:30","16:00",
    "16:30","17:00","17:30","18:00",
];

const AgendaDeBox = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); 
    navigate("/mapa-box");
  };
  return (
    <>
      <div className="container1 mt-4">
        <form onSubmit={handleSubmit}> {/* Usar handleSubmit */}
          <div className="row">
            <div className="col-md-6 mb-3">
              <div className="form-group">
                <div className="form-inline">
                  <label htmlFor="sucursal" style={{ marginRight: "10px" }}>
                    Sucursal:
                  </label>
                  <input
                    type="text"
                    id="sucursal"
                    name="sucursal"
                    placeholder="Nombre de la sucursal"
                    required
                  />
                  <button type="button">Buscar</button>
                </div>
              </div>
            </div>

            <div className="col-md-6 mb-3">
              <div className="form-group">
                <div className="form-inline">
                  <label htmlFor="patient" style={{ marginRight: "10px" }}>
                    Paciente:
                  </label>
                  <input
                    type="text"
                    id="patient"
                    name="patient"
                    placeholder="Nombre del paciente"
                    required
                  />
                  <button type="button">Buscar</button>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <div className="form-group">
                <label htmlFor="date">Fecha de Atención:</label>
                <input type="date" id="date" name="date" required />
              </div>
            </div>

            <div className="col-md-6 mb-3">
              <div className="form-group">
                <label htmlFor="time">Hora de Atención:</label>
                <select id="time" name="time" required>
                  {horarios.map((hora) => (
                    <option key={hora} value={hora}>
                      {hora}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="col-md-6 mb-3">
              <div className="form-group">
                <label htmlFor="session-type">Tipo de Sesión:</label>
                <select id="session-type" name="session-type" required>
                  <option value="kinesiologia">Kinesiología</option>
                  <option value="fonoaudiologia">Fonoaudiología</option>
                </select>
              </div>
            </div>
          </div>

          <button type="submit">Seleccionar Box</button>
        </form>
      </div>
    </>
  );
};

export default AgendaDeBox;
