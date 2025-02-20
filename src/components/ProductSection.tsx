import React, { useRef, useLayoutEffect, useState } from 'react';
import './ProductSection.css';
import ProductsCarrusel from './ProductsCarrusel';

const ProductSection: React.FC = () => {
    const products = ProductsCarrusel;
    const sectionRef = useRef<HTMLElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);
    const [gridWidth, setGridWidth] = useState(0);

    useLayoutEffect(() => {
        const currentRef = sectionRef.current;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                }
            });
        });
        if (currentRef) {
            observer.observe(currentRef);
        }
        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    useLayoutEffect(() => {
        if (gridRef.current) {
            setGridWidth(gridRef.current.scrollWidth);
        }
    }, []);

    const scrollLeft = () => {
        if (gridRef.current) {
            const newScrollLeft = Math.max(0, gridRef.current.scrollLeft - gridRef.current.offsetWidth);
            gridRef.current.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (gridRef.current) {
            const newScrollLeft = Math.min(gridWidth - gridRef.current.offsetWidth, gridRef.current.scrollLeft + gridRef.current.offsetWidth);
            gridRef.current.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
        }
    };

    return (
        <section ref={sectionRef} className="product-section">
            <h2>CONOCÉ NUESTROS PRODUCTOS</h2>
            <div className="product-grid" ref={gridRef}>
                {products.map((product) => (
                    <div key={product.name} className="product-card">
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <button>Ver más</button>
                    </div>
                ))}
            </div>
            <div className="carousel-controls">
                <button onClick={scrollLeft} className="carousel-arrow left-arrow">&lt;</button>
                <button onClick={scrollRight} className="carousel-arrow right-arrow">&gt;</button>
            </div>
        </section>
    );
};

export default ProductSection;
