import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();
  const navigate = useNavigate();

  return (
    <div className="page-animate container" style={{ paddingTop: '120px', paddingBottom: 'var(--space-xl)', minHeight: '80vh' }}>
      
      {/* HEADER */}
      <div style={{ marginBottom: 'var(--space-md)' }}>
        <div className="text-mono" style={{ color: 'var(--accent-blaze)', marginBottom: '0.5rem' }}>
          // PACK RATION & TRANSMISSIONS
        </div>
        <h1 style={{ fontSize: 'var(--text-xl)' }}>YOUR BACKPACK (CART)</h1>
      </div>

      {cart.length === 0 ? (
        <div style={{ 
          textAlign: 'center', 
          padding: 'var(--space-xl) 0', 
          backgroundColor: 'var(--bg-surface)', 
          border: '1px solid var(--border-thin)' 
        }}>
          <p className="text-mono text-muted" style={{ marginBottom: '1.5rem' }}>YOUR RUCKSACK IS CURRENTLY EMPTY.</p>
          <button className="btn-blaze" onClick={() => navigate('/search')}>BROWSE EQUIPMENT</button>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-lg)' }}>
          
          {/* ITEMS LIST */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {cart.map(item => (
              <div 
                key={item.id} 
                style={{ 
                  display: 'flex', 
                  gap: '1rem', 
                  backgroundColor: 'var(--bg-surface)', 
                  border: '1px solid var(--border-thin)',
                  padding: '1rem' 
                }}
              >
                <img 
                  src={item.image} 
                  alt={item.name} 
                  style={{ width: '80px', height: '80px', objectFit: 'cover', border: '1px solid var(--border-thin)' }} 
                />
                
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <h4 style={{ fontSize: 'var(--text-base)', textTransform: 'uppercase' }}>{item.name}</h4>
                      <button 
                        onClick={() => removeFromCart(item.id)} 
                        style={{ 
                          background: 'none', 
                          border: 'none', 
                          color: 'var(--accent-blaze)', 
                          cursor: 'pointer', 
                          fontFamily: 'var(--font-mono)', 
                          fontSize: '0.75rem',
                          textDecoration: 'underline' 
                        }}
                      >
                        [ DROP ]
                      </button>
                    </div>
                    <span className="text-mono" style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      SKU: {item.id}
                    </span>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.5rem' }}>
                    {/* Quantity Controls */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <button 
                        onClick={() => updateQuantity(item.id, -1)} 
                        className="btn-qty"
                      >
                        -
                      </button>
                      <span className="text-mono" style={{ fontSize: '0.85rem', minWidth: '20px', textAlign: 'center' }}>
                        {item.quantity}
                      </span>
                      <button 
                        onClick={() => updateQuantity(item.id, 1)} 
                        className="btn-qty"
                      >
                        +
                      </button>
                    </div>
                    
                    <span className="text-mono text-accent" style={{ fontSize: '0.9rem' }}>
                      IDR {(item.price * item.quantity).toLocaleString('id-ID')}
                    </span>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* CHECKOUT SUMMARY */}
          <div style={{ 
            backgroundColor: 'var(--bg-surface)', 
            border: '1px solid var(--border-thin)', 
            padding: '1.5rem', 
            alignSelf: 'start' 
          }}>
            <h3 className="text-mono" style={{ color: 'var(--accent-moss)', marginBottom: '1.5rem' }}>// MANIFEST SUMMARY</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>Subtotal</span>
                <span className="text-mono">IDR {cartTotal.toLocaleString('id-ID')}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>Estimated Shipping</span>
                <span className="text-mono" style={{ color: 'var(--accent-moss)' }}>FREE (PROMO)</span>
              </div>
            </div>

            <div style={{ borderTop: '1px solid var(--border-thin)', paddingTop: '1rem', marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between' }}>
              <span className="text-mono" style={{ fontWeight: 'bold' }}>TOTAL PRICE</span>
              <span className="text-mono text-accent" style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                IDR {cartTotal.toLocaleString('id-ID')}
              </span>
            </div>

            <button 
              className="btn-blaze" 
              style={{ width: '100%' }}
              onClick={() => navigate('/checkout')}
            >
              PROCEED TO BASECAMP (CHECKOUT)
            </button>
            
            <div 
              className="text-mono link-hover-accent" 
              onClick={() => navigate('/search')}
              style={{ 
                textAlign: 'center', 
                fontSize: '0.75rem', 
                marginTop: '1rem', 
                textDecoration: 'underline'
              }}
            >
              CONTINUE PACKING GEAR
            </div>
          </div>

        </div>
      )}

    </div>
  );
};

export default Cart;
