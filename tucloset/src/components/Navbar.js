import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbarList">
        <li className="navbarItem">
          <Link to="/" className="navbarLink home">
            Inicio
          </Link>
        </li>
        <li className="navbarItem">
          <Link to="/cart" className="navbarLink">
            Carrito
          </Link>
        </li>
        <li className="navbarItem">
          <Link to="/user/profile" className="navbarLink">
            Perfil de Usuario
          </Link>
        </li>
        <li className="navbarItem">
          <Link to="/login" className="navbarLink login">
            Iniciar Sesión
          </Link>
        </li>
        <li className="navbarItem">
          <Link to="/signup" className="navbarLink signup">
            Registrarse
          </Link>
        </li>
      </ul>
      <h1 className="navbarTitle">TUCLOSET</h1>
    </nav>
  );
};

export default Navbar;
