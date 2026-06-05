import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById } from '../services/mockApi';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id: productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { addToCart } = useCart();

  useEffect(() => {
    if (!productId) {
      setError('Invalid coordinates. Item not found.');
      setLoading(false);
      return;
    }

    setLoading(true);
    getProductById(productId)
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [productId]);

  if (loading) {
    return <div className="page-animate container text-mono text-muted" style={{ paddingTop: '150px', textAlign: 'center' }}>ESTABLISHING CONNECTION...</div>;
  }

  if (error || !product) {
    return (
      <div className="page-animate container" style={{ paddingTop: '150px', textAlign: 'center' }}>
        <h2 style={{color: 'var(--accent-blaze)', marginBottom: '1rem'}}>{error}</h2>
        <button className="btn-blaze" onClick={() => navigate('/search')}>RETURN TO CATALOG</button>
      </div>
    );
  }

  return (
    <div className="page-animate container" style={{ paddingTop: '120px', paddingBottom: 'var(--space-xl)' }}>
      
      <div className="link-back text-mono" style={{ marginBottom: '1rem' }} onClick={() => navigate('/search')}>
        <span>←</span> ABORT & RETURN
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: 'var(--space-md)',
        backgroundColor: 'var(--bg-surface)',
        border: '1px solid var(--border-thin)',
        padding: '1rem'
      }}>
        
        {/* IMAGE PANEL */}
        <div style={{ 
          position: 'relative', 
          backgroundColor: 'var(--bg-elevated)',
          aspectRatio: '1/1',
          overflow: 'hidden'
        }}>
          <img 
            src={product.image} 
            alt={product.name} 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          />
          <div className="text-mono" style={{ position: 'absolute', top: '10px', left: '10px', backgroundColor: 'rgba(0,0,0,0.5)', padding: '0.2rem 0.5rem' }}>
            SKU: {product.id}
          </div>
        </div>

        {/* DETAILS PANEL */}
        <div style={{ display: 'flex', flexDirection: 'column', padding: '1rem' }}>
          
          <div style={{ marginBottom: '2rem' }}>
            <div className="text-mono" style={{ color: 'var(--accent-moss)', marginBottom: '0.5rem' }}>
              // {product.category.toUpperCase()}
            </div>
            <h1 style={{ fontSize: 'var(--text-2xl)', marginBottom: '1rem' }}>{product.name}</h1>
            <div className="text-mono text-accent" style={{ fontSize: 'var(--text-lg)' }}>
              IDR {product.price.toLocaleString('id-ID')}
            </div>
          </div>

          <div style={{ marginBottom: '2rem', color: 'var(--text-muted)' }}>
            <p style={{ marginBottom: '1rem' }}>{product.description}</p>
            <ul className="text-mono" style={{ fontSize: '0.85rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {product.specs.map((spec, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: 'var(--accent-blaze)' }}>&gt;</span> {spec}
                </li>
              ))}
            </ul>
          </div>

          <div style={{ marginTop: 'auto' }}>
            <button 
              className="btn-blaze" 
              style={{ width: '100%' }}
              onClick={() => addToCart(product)}
            >
              PACK GEAR (ADD TO BACKPACK)
            </button>
          </div>
          
        </div>

      </div>
    </div>
  );
};

export default ProductDetail;
