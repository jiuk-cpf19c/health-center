import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/products/${product.id}`)}
      style={{
        border: '1px solid #ddd',
        borderRadius: '10px',
        padding: '1rem',
        width: '200px',
        boxShadow: '0 0 8px rgba(0,0,0,0.1)',
        cursor: 'pointer',
      }}
    >
      {product.image && (
        <img
          src={product.image}
          alt={product.name}
          style={{ width: '100%', borderRadius: '6px' }}
        />
      )}
      <h3>{product.name}</h3>
      <p>{product.price.toLocaleString()}원</p>
    </div>
  );
};

export default ProductCard;
