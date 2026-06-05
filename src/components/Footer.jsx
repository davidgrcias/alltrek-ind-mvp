import React from 'react';
import { useNavigation } from '../context/NavigationContext';

export default function Footer() {
  const { navigate } = useNavigation();

  return (
    <footer 
      style={{ 
        backgroundColor: '#EDE8DF', /* slightly darker warm paper */
        borderTop: '1px solid var(--mist)', 
        padding: '5rem 0 6rem 0',
        marginTop: '6rem',
        color: 'var(--ink)'
      }}
    >
      <div className="container">
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '3rem',
            marginBottom: '4rem'
          }}
        >
          {/* Brand Info */}
          <div>
            <h3 
              onClick={() => navigate('home')}
              style={{ 
                fontFamily: 'var(--font-display)', 
                fontSize: '1.5rem', 
                marginBottom: '1rem',
                cursor: 'pointer',
                letterSpacing: '0.03em'
              }}
            >
              FORMA
            </h3>
            <p 
              style={{ 
                fontFamily: 'var(--font-body)', 
                fontSize: '0.875rem', 
                color: 'var(--dark-gray)',
                maxWidth: '300px',
                lineHeight: '1.7'
              }}
            >
              Editorial desk objects and workspace tools. Carefully resolved to inspire creative focus and physical order.
            </p>
          </div>

          {/* Links: Categories */}
          <div>
            <h4 
              style={{ 
                fontFamily: 'var(--font-body)', 
                fontSize: '0.75rem', 
                fontWeight: '700',
                textTransform: 'uppercase', 
                letterSpacing: '0.1em',
                marginBottom: '1.25rem',
                color: 'var(--ink)'
              }}
            >
              Collections
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {['Lighting', 'Organizers', 'Desk Mats', 'Desk Art'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => navigate('search')}
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.8125rem',
                    color: 'var(--dark-gray)',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'var(--transition-smooth)'
                  }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--accent)'}
                  onMouseLeave={(e) => e.target.style.color = 'var(--dark-gray)'}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Contact / Editorial Info */}
          <div>
            <h4 
              style={{ 
                fontFamily: 'var(--font-body)', 
                fontSize: '0.75rem', 
                fontWeight: '700',
                textTransform: 'uppercase', 
                letterSpacing: '0.1em',
                marginBottom: '1.25rem',
                color: 'var(--ink)'
              }}
            >
              About
            </h4>
            <p 
              style={{ 
                fontFamily: 'var(--font-body)', 
                fontSize: '0.8125rem', 
                color: 'var(--dark-gray)',
                lineHeight: '1.7'
              }}
            >
              Every FORMA object is produced in limited series, prioritizing raw, authentic materials like unfilled Italian travertine, chemical-blackened brass, and pure Merino felt.
            </p>
          </div>
        </div>

        <div style={{ height: '1px', backgroundColor: 'var(--mist)', marginBottom: '2rem' }}></div>

        <div 
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            fontFamily: 'var(--font-body)',
            fontSize: '0.75rem',
            color: 'var(--dark-gray)'
          }}
        >
          <div>&copy; {new Date().getFullYear()} FORMA. Crafted with care.</div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#/" style={{ hover: { color: 'var(--accent)' } }}>Terms</a>
            <a href="#/">Privacy</a>
            <a href="#/">Stockists</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
