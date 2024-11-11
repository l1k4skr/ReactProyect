import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import styles from "./AdministrarCentrosMedicos.module.css";

function CrearCentros() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const [registerErrors, setRegisterErrors] = useState([]);

  const onSubmit = async (values) => {
    try {
      const response = await fetch("http://localhost:4000/api/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const errorData = await response.json();

        // Manejo específico para errores de duplicado
        if (errorData.code === 11000) {
          setRegisterErrors(["La dirección ya está registrada. Por favor, elige otra."]);
        } else {
          setRegisterErrors(Array.isArray(errorData) ? errorData : [errorData.message || "Error desconocido"]);
        }
        return;
      }

      navigate("/AdministrarCentros");
    } catch (error) {
      console.error("Error al enviar datos:", error);
      setRegisterErrors(["Error de conexión con el servidor"]);
    }
  };

  return (
    <div className={styles.container}>
      {registerErrors.map((error, i) => (
        <div key={i} className="alert alert-danger">
          {error}
        </div>
      ))}
      <h3>Registrar Centro Médico</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="sucursal">Sucursal</label>
        <input
          id="sucursal"
          type="text"
          {...register("sucursal", { required: "Este campo es requerido" })}
          placeholder="Ej: San Sebastián"
          autoComplete="name"
        />
        {errors.sucursal && (
          <p className="text-danger">{errors.sucursal.message}</p>
        )}

        <label htmlFor="nbox">Número de Boxs</label>
        <input
          id="nbox"
          type="number"
          {...register("nbox", { required: "Este campo es requerido" })}
          placeholder="Ej: 4"
        />
        {errors.nbox && <p className="text-danger">{errors.nbox.message}</p>}

        <label htmlFor="direccion">Dirección</label>
        <input
          id="direccion"
          type="text"
          {...register("direccion", { required: "Este campo es requerido" })}
          placeholder="Ej: Joaquín Edwards Bello, 10974"
        />
        {errors.direccion && (
          <p className="text-danger">{errors.direccion.message}</p>
        )}

        <button type="submit" className="btn btn-primary mt-3">
          Agregar
        </button>
      </form>
      <p className="mt-3">
        <Link to="/AdministrarCentros">Volver a Administrar Centros</Link>
      </p>
    </div>
  );
}

export default CrearCentros;
