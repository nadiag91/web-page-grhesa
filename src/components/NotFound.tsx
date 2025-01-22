import React from 'react';
import './NotFound.css';


const NotFound: React.FC = () => {
  return (
    <div className="notfound-container">
      <h1>¡Oops! Página No Encontrada</h1>
      <img src="/NotFound.jpg" alt="404 Not Found" className="notfound-image" />
      <p>Lo sentimos, la página que estás buscando no existe. Puedes regresar a la página de inicio o explorar nuestras otras secciones.</p>
      <a href="/" className="notfound-button">Ir al Inicio</a>
    </div>
  );
};

export default NotFound;
