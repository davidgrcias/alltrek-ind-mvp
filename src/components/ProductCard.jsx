import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div 
      className="tech-card"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <div className="img-wrapper">
        <img src={product.image} alt={product.name} loading="lazy" />
        
        {/* Crosshair Elements untuk efek hover teknis */}
        <div className="crosshair ch-tl"></div>
        <div className="crosshair ch-tr"></div>
        <div className="crosshair ch-bl"></div>
        <div className="crosshair ch-br"></div>
      </div>
      
      <div className="content">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
          <h3 style={{ flex: 1, paddingRight: '1rem' }}>{product.name}</h3>
          <span className="text-mono" style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
            {product.id}
          </span>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span className="price text-accent">
            IDR {product.price.toLocaleString('id-ID')}
          </span>
          <span className="text-mono" style={{ fontSize: '0.7rem', padding: '0.2rem 0.5rem', backgroundColor: 'rgba(255,255,255,0.05)' }}>
            DETAILS ↗
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
