import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import productsData from './productsData';
import DropdownSection from './DropdownSection';
import plagasData from './plagasData';

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav className="navbar">
      <ul>
        <li>
          <Link to="/" className="main-link">Inicio</Link>
        </li>
        <li>
          <Link to="/nosotros" className="main-link">Nosotros</Link>
        </li>
        <li className="dropdown">
          <DropdownSection title="Productos" data={productsData} />
        </li>
        <li className="dropdown">
          <DropdownSection title="Plagas" data={plagasData} isSimpleList={true} />
        </li>
        <li>
          <Link to="/contacto" className="main-link">Contacto</Link>
        </li>
      </ul>
      </nav>
      <div className="logo">
        <Link to="/">
          <img src="/logo.png" alt="Logo" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
