import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import styles from "./AdministrarMedicos.module.css";

function CrearMedicos() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [registerErrors, setRegisterErrors] = useState([]);

  const onSubmit = async (values) => {
    try {
      const response = await fetch("http://localhost:4000/api/savemedicos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const errorData = await response.json();

        // Manejo específico para errores de duplicado
        if (errorData.code === 11000) {
          setRegisterErrors([
            "El usuario ya está registrada. Por favor, elige otra.",
          ]);
        } else {
          setRegisterErrors(
            Array.isArray(errorData)
              ? errorData
              : [errorData.message || "Error desconocido"]
          );
        }
        return;
      }

      navigate("/AdministrarMedicos");
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
      <h3>Registrar Médico</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="rut">RUT</label>
        <input
          id="rut"
          type="text"
          {...register("rut", { required: "Este campo es requerido"})}
          placeholder="Ej: 12345678"
          autoComplete="off" // Cambiado a autoComplete
        />
        {errors.apellido && (
          <p className="text-danger">{errors.apellido.message}</p>
        )}

        <label htmlFor="apellido">Apellido</label>
        <input
          id="apellido"
          type="text"
          {...register("apellido", { required: "Este campo es requerido" })}
          placeholder="Ej: Piedra"
          autoComplete="apellido"
        />
        {errors.apellido && (
          <p className="text-danger">{errors.apellido.message}</p>
        )}

        <label htmlFor="nombre">Nombre</label>
        <input
          id="nombre"
          type="text"
          {...register("nombre", { required: "Este campo es requerido" })}
          placeholder="Ej: 4"
          autoComplete="nombre"
        />
        {errors.nombre && (
          <p className="text-danger">{errors.nombre.message}</p>
        )}

        <label htmlFor="especialidad">Especialidad</label>
        <input
          id="especialidad"
          type="text"
          {...register("especialidad", { required: "Este campo es requerido" })}
          placeholder="Ej: Joaquín Edwards Bello, 10974"
        />
        {errors.especialidad && (
          <p className="text-danger">{errors.especialidad.message}</p>
        )}

        <label htmlFor="email">Correo</label>
        <input
          id="email"
          type="email"
          {...register("email", { required: "Este campo es requerido" })}
          placeholder="Ej:xxx@xxx.com"
        />
        {errors.Correo && (
          <p className="text-danger">{errors.Correo.message}</p>
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

export default CrearMedicos;
