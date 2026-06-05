import React, { useState, useEffect } from 'react';
import { getProducts, CATEGORIES } from '../services/mockApi';
import ProductCard from '../components/ProductCard';

const ProductSearch = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    getProducts().then(data => {
      setProducts(data);
      setFiltered(data);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    let result = products;
    if (activeCategory !== 'all') {
      result = result.filter(p => p.category === activeCategory);
    }
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.description.toLowerCase().includes(q)
      );
    }
    setFiltered(result);
  }, [activeCategory, searchQuery, products]);

  return (
    <div className="page-animate container" style={{ paddingTop: '100px', minHeight: '100vh' }}>
      
      {/* HEADER SECTION */}
      <div style={{ marginBottom: 'var(--space-md)' }}>
        <div className="text-mono" style={{ color: 'var(--accent-moss)', marginBottom: '0.5rem' }}>
          // CATALOG & REQUISITIONS
        </div>
        <h1 style={{ fontSize: 'var(--text-xl)' }}>OUTDOOR GEAR</h1>
      </div>

      {/* FILTER & SEARCH BAR */}
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap',
        gap: '1rem', 
        marginBottom: 'var(--space-md)',
        padding: '1rem',
        backgroundColor: 'var(--bg-surface)',
        border: '1px solid var(--border-thin)',
        borderRadius: 'var(--radius-sm)'
      }}>
        
        {/* Categories */}
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', flex: 1 }}>
          {CATEGORIES.map(cat => (
            <button 
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`btn-tab ${activeCategory === cat.id ? 'active' : ''}`}
            >
              {cat.name.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div style={{ flex: '0 1 300px' }}>
          <input 
            type="text" 
            placeholder="Search equipment..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '0.5rem 1rem',
              backgroundColor: 'var(--bg-elevated)',
              border: '1px solid var(--border-thin)',
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-mono)',
              outline: 'none'
            }}
          />
        </div>
      </div>

      {/* PRODUCT GRID */}
      {loading ? (
        <div className="text-mono text-muted" style={{ padding: 'var(--space-xl) 0', textAlign: 'center' }}>
          FETCHING SATELLITE DATA...
        </div>
      ) : filtered.length === 0 ? (
        <div className="text-mono text-muted" style={{ padding: 'var(--space-xl) 0', textAlign: 'center' }}>
          NO GEAR MATCHES THE SPECIFIED PARAMETERS.
        </div>
      ) : (
        <div className="grid-bento">
          {filtered.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

    </div>
  );
};

export default ProductSearch;
