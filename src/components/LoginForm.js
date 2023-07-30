import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login, createSession, isAuthenticated } from "../services/api";
import "../styles/LoginForm.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated()) {
      navigate("/");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === "") {
      alert("El campo 'email' es obligatorio.");
      return;
    }

    try {
      const user = await login(email, password);
      const { userId, token } = user;

      const session = await createSession(userId, token);

      localStorage.setItem('id', userId)
      localStorage.setItem('token', token)

      navigate("/");
    } catch (error) {
      console.error("Error al iniciar sesión", error);
    }
  };

  return (
    <div className="loginContainer">
      <h2 className="loginTitle">Iniciar sesión</h2>
      <form className="loginForm" onSubmit={handleSubmit}>
        <div className="loginFormGroup">
          <label className="loginLabel">Email:</label>
          <input
            className="loginInput"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="loginFormGroup">
          <label className="loginLabel">Contraseña:</label>
          <input
            className="loginInput"
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className="loginButton" type="submit">
          Iniciar sesión
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
