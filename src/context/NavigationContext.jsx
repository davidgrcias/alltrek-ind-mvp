import React, { createContext, useContext, useState, useEffect } from 'react';

const NavigationContext = createContext();

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};

export const NavigationProvider = ({ children }) => {
  const parseRoute = () => {
    const hash = window.location.hash || '#/';
    const path = hash.slice(1); // remove '#' character

    if (path === '/' || path === '') {
      return { page: 'home', params: {} };
    }
    if (path.startsWith('/search')) {
      const category = path.split('/search/')[1] || 'All';
      return { page: 'search', params: { category } };
    }
    if (path === '/cart') {
      return { page: 'cart', params: {} };
    }
    if (path === '/checkout') {
      return { page: 'checkout', params: {} };
    }
    if (path.startsWith('/product/')) {
      const id = path.split('/product/')[1];
      return { page: 'detail', params: { id } };
    }
    return { page: 'home', params: {} }; // Fallback to homepage
  };

  const [currentRoute, setCurrentRoute] = useState(parseRoute);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentRoute(parseRoute());
      // Smooth scroll to top on every route change - premium touch
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (page, params = {}) => {
    let hash = '#/';
    if (page === 'home') hash = '#/';
    if (page === 'search') {
      hash = params.category ? `#/search/${params.category}` : '#/search';
    }
    if (page === 'cart') hash = '#/cart';
    if (page === 'checkout') hash = '#/checkout';
    if (page === 'detail') hash = `#/product/${params.id}`;

    window.location.hash = hash;
  };

  return (
    <NavigationContext.Provider value={{ currentRoute, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
};
