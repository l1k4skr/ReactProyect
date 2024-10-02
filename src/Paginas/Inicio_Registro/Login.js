import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./inicio_registro.css"; 

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Hook para navegar

  const handleSubmit = (event) => {
    event.preventDefault(); 
    navigate("/home");
  };

  return (
    <div className="login-container">
      <img className="logo" src="https://static.wixstatic.com/media/0a8059_2238928883ab4c278a1231c12510b720~mv2.png/v1/fill/w_51,h_75,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0a8059_2238928883ab4c278a1231c12510b720~mv2.png" alt="Logo de la empresa" />
      <h1>Bienvenido</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="username">Nombre de Usuario</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Usuario"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)} // Actualiza el estado
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Contraseña"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Actualiza el estado
          />
        </div>
        <button type="submit">Iniciar Sesión</button>
        <p className="signup-link">
          ¿No tienes cuenta? <a href="Registro1.html">Regístrate aquí</a>
        </p>
      </form>
    </div>
  );
};

export default Login;