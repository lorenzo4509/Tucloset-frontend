import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signup, createCart } from '../services/api';
import '../styles/SignupForm.css';

const SignupForm = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = await signup(name, email, password);
      const { userId } = user.user
      await createCart(userId, [])
      alert('¡Registro exitoso! Por favor, inicia sesión.');
      navigate('/login');
    } catch (error) {
      console.error('Error al crear una cuenta', error);
    }
  };

  return (
    <div className="formContainer">
      <h2 className="formTitle">Crear cuenta</h2>
      <form onSubmit={handleSubmit}>
        <div className="formGroup">
          <label className="formLabel">Nombre de usuario</label>
          <input
            className="formInput"
            type="text"
            placeholder="Nombre de usuario"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="formGroup">
          <label className="formLabel">Contraseña</label>
          <input
            className="formInput"
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="formGroup">
          <label className="formLabel">Correo electrónico</label>
          <input
            className="formInput"
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="formButton" type="submit">
          Crear cuenta
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
