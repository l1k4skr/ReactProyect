import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AdministrarCentrosMedicos.module.css"; // Importamos el CSS Module
import { centrosRequest } from "../../../api/centros.js"; // Ajusta la ruta según la ubicación del archivo

const AdministrarCentrosMedicos = () => {
  const [centros, setCentros] = useState([]); // Estado para almacenar los centros
  const [error, setError] = useState(""); // Estado para manejar errores
  const navigate = useNavigate();

  const handleAgregarClick = () => {
    navigate("/CrearCentros");
  };

  useEffect(() => {
    const fetchCentros = async () => {
      try {
        const response = await centrosRequest(); // Llama a la función que hace la solicitud a la API
        setCentros(response.data); // Actualiza el estado con los datos recibidos
      } catch (error) {
        setError(error.message); // Maneja cualquier error que ocurra durante la solicitud
      }
    };

    fetchCentros();
  }, []); // El arreglo vacío asegura que solo se ejecute una vez al montar el componente

  return (
    <>
      <div className={`${styles.container} mt-4`}>
        <div className={styles.headerButton}>
          <button className="btn btn-primary" onClick={handleAgregarClick}>
            Agregar
          </button>
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}{" "}
        {/* Muestra un mensaje de error si ocurre */}
        <div className="table-responsive mt-3">
          <table className="table table-bordered">
            <thead className="table-light">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Sucursal</th>
                <th scope="col">N de Box</th>
                <th scope="col">Dirección</th>
                <th scope="col">Editar</th>
              </tr>
            </thead>
            <tbody>
              {centros.map((centro, index) => (
                <tr key={centro.id || index}>
                  <td>{index + 1}</td>
                  <td>{centro.sucursal}</td>
                  <td>{centro.nbox}</td>
                  <td>{centro.direccion}</td>
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
