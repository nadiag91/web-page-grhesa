import React from 'react';
import './Productos.css';

const BabosilCebo: React.FC = () => {
  return (
    <div className="babosil-cebo-page page-content">
      {/*<Header />*/}
      <div className="product-container">
        <img src="/Productos/babosilcebo.jpg" alt="Babosil Cebo" className="product-image" />

        {/* Información del producto */}
        <div className="product-info">
          <h1 className="product-title">BABOSIL CEBO</h1>
          <h2 className="product-subtitle">Mata babosas y caracoles</h2>
          <h3 className="product-tagline">Máximo poder de atracción</h3>

          <div className="product-description">
            <h4>GENERALIDADES:</h4>
            <p>
              Cebo tóxico LPU (listo para usar) a base de metaldehído, que actúa por ingestión tanto en babosas y caracoles. 
              Su eficacia radica en la exclusiva fórmula de BABOSIL CEBO a base de metaldehído, que genera una máxima atracción 
              de la babosa hacia el producto por su alta receptividad. BABOSIL CEBO interrumpe la producción del mucus que 
              generan estos moluscos, lo cual inactiva la digestión e interrumpe su movilidad causándole una severa deshidratación 
              y la muerte al poco tiempo.
            </p>

            <h4>FORMA DE USO:</h4>
            <p>
              Debe aplicarse en pequeños montículos (preferentemente al anochecer) que estén cubiertos por alguna piedra o madera, 
              formando una especie de carpa que proteja al cebo y donde la babosa se encuentre a resguardo para comer el mismo. 
              Estos montículos deben tener una separación entre los mismos de 1 a 2 metros.
            </p>

            <h4>DOSIS:</h4>
            <p>
              Aplicar 10 a 15 gramos por metro cuadrado (2 o 3 cucharadas soperas).
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

export default BabosilCebo;
