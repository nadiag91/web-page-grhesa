import React from 'react';
import './Productos.css';

const BabosilPellet: React.FC = () => {
  return (
    <div className="babosil-pellet-page page-content">
      <div className="product-container">
        <img src="/babosilpellet.jpg" alt="Babosil Pellet" className="product-image" />

        <div className="product-info">
          <h1 className="product-title">BABOSIL PELLET</h1>
          <h2 className="product-subtitle">Mata babosas y caracoles</h2>
          <h3 className="product-tagline">Resistente al viento y a la humedad</h3>

          <div className="product-description">
            <h4>GENERALIDADES:</h4>
            <p>
              Cebo tóxico LPU (listo para usar) a base de metaldehído, que actúa por ingestión tanto en babosas y caracoles.
              Exclusiva fórmula en presentación pellet, para lograr resistencia al viento y a la humedad, logrando su mayor 
              persistencia en el suelo. BABOSIL PELLET interrumpe la producción del mucus que generan estos moluscos, 
              lo cual inactiva la digestión e interrumpe su movilidad causándole una severa deshidratación y la muerte al poco tiempo.
            </p>

            <h4>FORMA DE USO:</h4>
            <p>
              Debe aplicarse en pequeños montículos (preferentemente al anochecer), dejando una separación entre los mismos de 1 a 2 metros.
            </p>

            <h4>DOSIS:</h4>
            <p>
              Aplicar 10 gramos por metro cuadrado (una cucharada sopera).
            </p>

            <h4>ESPECIES QUE COMBATE:</h4>
            <p>
              Derocera Reticulatum (babosa gris del jardín), Derosera Leave (babosa gris chica), Limax Maximus (babosa leopardo).
            </p>

            <h4>PRESENTACIONES:</h4>
            <p>250 gramos y 500 gramos.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BabosilPellet;
