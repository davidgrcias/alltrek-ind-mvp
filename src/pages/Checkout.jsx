import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleCheckout = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulasi proses pembayaran
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      clearCart(); // Kosongkan ransel setelah sukses
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="page-animate container" style={{ paddingTop: '150px', textAlign: 'center', minHeight: '80vh' }}>
        <div className="text-mono" style={{ color: 'var(--accent-moss)', fontSize: '2rem', marginBottom: '1rem' }}>
          [ MISSION ACCOMPLISHED ]
        </div>
        <h2 style={{ fontSize: 'var(--text-xl)', marginBottom: '1rem' }}>ORDER SECURED</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
          Your gear is being prepped at Basecamp zero. Expect deployment within 48 hours.
        </p>
        <button className="btn-blaze" onClick={() => navigate('/')}>RETURN TO BASECAMP</button>
      </div>
    );
  }

  if (cart.length === 0 && !isSuccess) {
    return (
      <div className="page-animate container" style={{ paddingTop: '150px', textAlign: 'center', minHeight: '80vh' }}>
        <h2 style={{ fontSize: 'var(--text-xl)', marginBottom: '1rem' }}>YOUR PACK IS EMPTY</h2>
        <button className="btn-blaze" onClick={() => navigate('/search')}>EQUIP GEAR</button>
      </div>
    );
  }

  return (
    <div className="page-animate container" style={{ paddingTop: '100px', paddingBottom: 'var(--space-xl)' }}>
      <div className="link-back text-mono" style={{ marginBottom: '1rem' }} onClick={() => navigate('/')}>
        <span>←</span> CANCEL
      </div>
      
      <h1 style={{ fontSize: 'var(--text-xl)', marginBottom: '2rem' }}>PROCEED TO BASECAMP</h1>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-lg)' }}>
        
        {/* FORM PANEL */}
        <div>
          <h3 className="text-mono" style={{ color: 'var(--accent-moss)', marginBottom: '1rem' }}>// DEPLOYMENT DETAILS</h3>
          <form onSubmit={handleCheckout} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <input required type="text" placeholder="OPERATIVE NAME" className="input-tactical" />
            <input required type="email" placeholder="COMM LINK (EMAIL)" className="input-tactical" />
            <textarea required placeholder="DROPZONE COORDINATES (ADDRESS)" rows="4" className="input-tactical" style={{ resize: 'vertical' }} />
            
            <button 
              type="submit" 
              className="btn-blaze" 
              style={{ marginTop: '1rem', opacity: isProcessing ? 0.5 : 1 }}
              disabled={isProcessing}
            >
              {isProcessing ? 'PROCESSING TRANSMISSION...' : 'CONFIRM DEPLOYMENT'}
            </button>
          </form>
        </div>

        {/* SUMMARY PANEL */}
        <div style={{ backgroundColor: 'var(--bg-surface)', padding: '1.5rem', border: '1px solid var(--border-thin)', alignSelf: 'start' }}>
          <h3 className="text-mono" style={{ color: 'var(--accent-moss)', marginBottom: '1rem' }}>// GEAR MANIFEST</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
            {cart.map(item => (
              <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>{item.quantity}x {item.name}</span>
                <span className="text-mono">IDR {(item.price * item.quantity).toLocaleString()}</span>
              </div>
            ))}
          </div>
          <div style={{ borderTop: '1px solid var(--border-thin)', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between' }}>
            <span className="text-mono">TOTAL ESTIMATE</span>
            <span className="text-mono text-accent" style={{ fontSize: '1.2rem' }}>IDR {cartTotal.toLocaleString()}</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Checkout;
