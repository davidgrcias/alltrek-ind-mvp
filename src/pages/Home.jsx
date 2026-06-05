import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProducts } from '../services/mockApi';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts().then(data => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="page-animate">
      
      {/* HERO SECTION */}
      <section style={{
        position: 'relative',
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '80px',
        borderBottom: '1px solid var(--border-thin)',
        overflow: 'hidden'
      }}>
        {/* Background Image Setup */}
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '60%',
          height: '100%',
          backgroundImage: 'url(https://images.unsplash.com/photo-1533240332313-0cb49e38581c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.6) grayscale(0.5)',
          zIndex: -1,
          maskImage: 'linear-gradient(to right, transparent, black 40%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 40%)'
        }}></div>

        <div className="container">
          <div style={{ maxWidth: '600px' }}>
            <div className="text-mono" style={{ color: 'var(--accent-blaze)', marginBottom: '1rem' }}>
              // BASECAMP ZERO
            </div>
            <h1 style={{ fontSize: 'var(--text-hero)', marginBottom: '1.5rem', lineHeight: 1 }}>
              EQUIP YOUR NEXT EXPEDITION.
            </h1>
            <p style={{ color: 'var(--text-muted)', fontSize: 'var(--text-lg)', marginBottom: '2.5rem', maxWidth: '400px' }}>
              Premium tactical gear and outdoor equipment engineered for the harshest environments. 
            </p>
            <button className="btn-blaze" onClick={() => navigate('/search')}>
              ENTER CATALOG
            </button>
          </div>
        </div>

        {/* Altitude Widget */}
        <div className="text-mono" style={{
          position: 'absolute',
          bottom: '2rem',
          right: '2rem',
          fontSize: '0.75rem',
          color: 'var(--text-muted)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: '0.2rem'
        }}>
          <span>COORD: -6.1754, 106.8272</span>
          <span>ALT: <span style={{color: 'var(--text-primary)'}}>1,240M</span></span>
          <span>TEMP: <span style={{color: 'var(--accent-blaze)'}}>14°C</span></span>
        </div>
      </section>

      {/* FEATURED GEAR SECTION */}
      <section className="container" style={{ padding: 'var(--space-xl) var(--space-md)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 'var(--space-md)' }}>
          <h2 style={{ fontSize: 'var(--text-2xl)' }}>FEATURED GEAR</h2>
          <span className="text-mono" style={{ cursor: 'pointer' }} onClick={() => navigate('/search')}>VIEW ALL //</span>
        </div>

        {loading ? (
          <div style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
            <span className="text-mono">SYNCING DATA...</span>
          </div>
        ) : (
          <div className="grid-bento">
            {products.slice(0, 3).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>

    </div>
  );
};

export default Home;
