import React from 'react';

interface ProductListProps {
  products: string[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="dropdown-subcontent">
      {products.map((product, index) => (
        <a href={`#${product.replace(/\s+/g, '-').toLowerCase()}`} key={index}>
          {product}
        </a>
      ))}
    </div>
  );
};

export default ProductList;
