import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const { cartCount, toggleCart } = useCart();
  const navigate = useNavigate();

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 100,
      backgroundColor: 'rgba(11, 17, 13, 0.85)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border-thin)',
      padding: '1rem 0'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* LOGO */}
        <div
          onClick={() => navigate('/')}
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'var(--text-xl)',
            fontWeight: 800,
            cursor: 'pointer',
            letterSpacing: '0.05em'
          }}
        >
          ALLTREK
          <span style={{ color: 'var(--accent-blaze)' }}>.</span>
        </div>

        {/* NAVIGATION */}
        <nav style={{ display: 'flex', gap: '2rem' }}>
          <span
            className="text-mono link-hover-accent"
            onClick={() => navigate('/search')}
            style={{ fontSize: 'var(--text-sm)', opacity: 0.8 }}
          >
            [ CATALOG ]
          </span>
        </nav>

        {/* CART BUTTON */}
        <div
          onClick={toggleCart}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            cursor: 'pointer',
            padding: '0.5rem 1rem',
            border: '1px solid var(--border-thin)',
            backgroundColor: 'var(--bg-surface)'
          }}
        >
          <span className="text-mono" style={{ fontSize: 'var(--text-xs)' }}>BACKPACK</span>
          <div style={{
            backgroundColor: cartCount > 0 ? 'var(--accent-blaze)' : 'transparent',
            color: cartCount > 0 ? '#000' : 'var(--text-muted)',
            minWidth: '24px',
            height: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '12px',
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--text-xs)',
            fontWeight: 'bold'
          }}>
            {cartCount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
