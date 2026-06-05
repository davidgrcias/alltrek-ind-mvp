export const CATEGORIES = [
  { id: 'all', name: 'All Gear' },
  { id: 'tents', name: 'Tents & Shelter' },
  { id: 'packs', name: 'Packs & Bags' },
  { id: 'apparel', name: 'Technical Apparel' },
];

export const PRODUCTS = [
  {
    id: 'ATK-T001',
    name: 'Alltrek Ultralight Summit Dome 2P',
    price: 3250000,
    category: 'tents',
    image: 'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Tenda dome 2-person ultralight dengan material Nylon Ripstop 20D silikon. Dirancang untuk ekspedisi dataran tinggi dengan ketahanan angin luar biasa. Berat total hanya 1.8kg.',
    specs: ['Weight: 1.8kg', 'Capacity: 2 Person', 'Fly: 20D Sil-Nylon (PU 3000mm)', 'Pole: 7001 Aluminum']
  },
  {
    id: 'ATK-P045',
    name: 'Expedition 65L Carrier Backpack',
    price: 1850000,
    category: 'packs',
    image: 'https://images.unsplash.com/photo-1622260614153-03223fb72052?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Tas carrier heavy-duty dengan sistem suspensi dinamis yang mendistribusikan beban secara merata ke pinggul. Cocok untuk pendakian panjang di medan berat.',
    specs: ['Volume: 65L', 'Material: 500D Cordura', 'Frame: Internal X-Frame', 'Raincover: Included']
  },
  {
    id: 'ATK-A012',
    name: 'All-Weather Hardshell Tactical Jacket',
    price: 1450000,
    category: 'apparel',
    image: 'https://images.unsplash.com/photo-1548883354-7622d03aca27?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Jaket hardshell 3-layer anti air dan tahan angin dengan sistem ventilasi pit-zips. Memberikan perlindungan maksimal di cuaca ekstrem tanpa membuat gerah.',
    specs: ['Material: 3L GORE-TEX Alternative', 'Waterproof: 20,000mm', 'Breathability: 15,000g/m2/24h']
  },
  {
    id: 'ATK-P022',
    name: 'Urban Assault Daypack 25L',
    price: 850000,
    category: 'packs',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Daypack ringkas untuk penggunaan harian di perkotaan maupun pendakian singkat (tektok). Dilengkapi kompartemen laptop terselubung dan sistem MOLLE minimalis.',
    specs: ['Volume: 25L', 'Laptop Sleeve: Up to 15"', 'Material: 1000D Nylon']
  },
  {
    id: 'ATK-T005',
    name: 'Hexagon Tarp Shelter',
    price: 950000,
    category: 'tents',
    image: 'https://images.unsplash.com/photo-1537225228614-56cc3556d7ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Flysheet besar berbentuk heksagonal untuk perlindungan ekstra di basecamp. Melindungi dari hujan lebat dan sinar UV. Area cakupan cukup untuk 4-6 orang.',
    specs: ['Dimension: 4x4m', 'Material: 210T Oxford (PU 2000mm)', 'Includes: 6 Pegs, 6 Ropes']
  },
  {
    id: 'ATK-A033',
    name: 'Merino Wool Base Layer Set',
    price: 1150000,
    category: 'apparel',
    image: 'https://images.unsplash.com/photo-1517423568366-8b83523034fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Pakaian dasar (base layer) terbuat dari 100% Merino wool yang menjaga suhu tubuh tetap stabil dan anti-bau meskipun dipakai berhari-hari.',
    specs: ['Material: 100% Merino Wool', 'Weight: 200gsm', 'Properties: Anti-odor, Thermo-regulating']
  }
];

// Simulasi delay API untuk UX yang lebih realistis saat loading
export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(PRODUCTS);
    }, 600);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = PRODUCTS.find(p => p.id === id);
      if (product) resolve(product);
      else reject(new Error('Product not found in database'));
    }, 400);
  });
};
