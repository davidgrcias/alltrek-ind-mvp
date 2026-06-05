import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { CartProvider, useCart } from './context/CartContext';
import Header from './components/Header';
import Home from './pages/Home';
import ProductSearch from './pages/ProductSearch';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

// Cart Drawer — diletakkan di sini agar bisa akses useCart()
const CartDrawer = () => {
  const { cart, isCartOpen, closeCart, removeFromCart, updateQuantity, cartTotal } = useCart();
  const navigate = useNavigate();

  return (
    <>
      {/* Backdrop overlay */}
      <div
        onClick={closeCart}
        style={{
          position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
          backgroundColor: 'rgba(11, 17, 13, 0.7)',
          backdropFilter: 'blur(4px)',
          zIndex: 900,
          opacity: isCartOpen ? 1 : 0,
          pointerEvents: isCartOpen ? 'auto' : 'none',
          transition: 'opacity var(--transition-fast)'
        }}
      />

      {/* Drawer panel */}
      <div style={{
        position: 'fixed', top: 0, right: 0, width: '100%', maxWidth: '400px', height: '100vh',
        backgroundColor: 'var(--bg-surface)',
        borderLeft: '1px solid var(--border-thin)',
        zIndex: 1000,
        transform: isCartOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform var(--transition-bounce)',
        display: 'flex', flexDirection: 'column',
        padding: 'var(--space-md)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-md)' }}>
          <h2 className="text-mono" style={{ fontSize: 'var(--text-lg)' }}>// YOUR BACKPACK</h2>
          <button onClick={closeCart} style={{ background: 'none', border: 'none', color: 'var(--text-primary)', cursor: 'pointer', fontSize: '1.5rem' }}>×</button>
        </div>

        <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {cart.length === 0 ? (
            <div className="text-mono text-muted">YOUR PACK IS EMPTY.</div>
          ) : (
            cart.map(item => (
              <div key={item.id} style={{ display: 'flex', gap: '1rem', borderBottom: '1px solid var(--border-thin)', paddingBottom: '1rem' }}>
                <img src={item.image} alt={item.name} style={{ width: '60px', height: '60px', objectFit: 'cover' }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '0.9rem', marginBottom: '0.2rem' }}>{item.name}</div>
                  <div className="text-mono text-muted" style={{ fontSize: '0.8rem', marginBottom: '0.5rem' }}>IDR {item.price.toLocaleString()}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <button onClick={() => updateQuantity(item.id, -1)} className="btn-qty">-</button>
                    <span className="text-mono" style={{ fontSize: '0.8rem' }}>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)} className="btn-qty">+</button>
                    <button onClick={() => removeFromCart(item.id)} style={{ background: 'none', border: 'none', color: 'var(--accent-blaze)', cursor: 'pointer', fontSize: '0.8rem', marginLeft: 'auto', textDecoration: 'underline' }}>DROP</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--border-thin)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <span className="text-mono">TOTAL ESTIMATE</span>
            <span className="text-mono text-accent" style={{ fontSize: '1.1rem' }}>IDR {cartTotal.toLocaleString('id-ID')}</span>
          </div>
          <button
            onClick={() => { closeCart(); navigate('/cart'); }}
            style={{
              display: 'block', width: '100%', padding: '0.6rem 0',
              background: 'none', border: '1px solid var(--border-thin)', color: 'var(--text-primary)',
              cursor: 'pointer', fontFamily: 'var(--font-mono)', fontSize: '0.8rem',
              marginBottom: '0.5rem', textAlign: 'center'
            }}
          >
            VIEW DETAILED CART
          </button>
          <button
            className="btn-blaze"
            style={{ width: '100%', opacity: cart.length === 0 ? 0.5 : 1, pointerEvents: cart.length === 0 ? 'none' : 'auto' }}
            onClick={() => { closeCart(); navigate('/checkout'); }}
          >
            PROCEED TO BASECAMP (CHECKOUT)
          </button>
        </div>
      </div>
    </>
  );
};

function AppContent() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<ProductSearch />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </main>
      <CartDrawer />
    </div>
  );
}

function App() {
  return (
    <CartProvider>
      <Router>
        <AppContent />
      </Router>
    </CartProvider>
  );
}

export default App;
