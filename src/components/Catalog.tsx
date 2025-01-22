import React from 'react';
import './Catalog.css';
import { Link } from 'react-router-dom';

const catalogItems = [
  { id: 'babosil-cebo', name: 'Babosil Cebo', img: 'babosilcebo.jpg' },
  { id: 'decorativo1', img: 'decorativo1.jpg', decorative: true },
  { id: 'babosil-pellet', name: 'Babosil Pellet', img: 'babosilpellet.jpg' },
  { id: 'babosil-micropellet', name: 'Babosil Micropellet', img: 'babosilmicropellet.jpg' },
  { id: 'babosil-super', name: 'Babosil Super', img: 'babosilsuper.jpg' },
  { id: 'decorativo2', img: 'decorativo2.jpg', decorative: true }
];

const Catalog: React.FC = () => {
    return (
      <div className="catalog-title-container">
        <h1 className="catalog-title">Catálogo de Productos</h1>
        <img src="/Productos.jpeg" alt="Linea de productos" className="catalog-image-banner" />
        <div className="catalog-grid">
          {catalogItems.map((item) => (
            <div
              key={item.id}
              className={`catalog-item ${item.decorative ? 'decorative' : ''}`}
            >
              {item.decorative ? (
                <img src={item.img} alt="Decorativo" className="decorative-image" />
              ) : (
                <Link to={`/productos/${item.id}`}>
                  <img src={item.img} alt={item.name} className="catalog-image" />
                  <h2 className="catalog-item-name">{item.name}</h2>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Catalog;