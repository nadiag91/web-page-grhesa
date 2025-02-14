import React from 'react';
import './ProductSection.css';

const ProductSection: React.FC = () => {
  const products = [
    {
      name: 'Babosil Cebo',
      image: '/Productos/babosilcebo.jpg',
      description: 'Babosil Cebo es el mejor',
    },
    {
      name: 'Babosil Micropellet',
      image: '/Productos/babosilmicropellet.jpg',
      description: 'Descripción del producto 2.',
    },
  ];

  return (
    <section className="product-section">
      <h2>Nuestros Productos</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.name} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <button>Ver más</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;