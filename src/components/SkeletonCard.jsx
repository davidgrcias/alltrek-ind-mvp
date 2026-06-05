import React from 'react';

export default function SkeletonCard() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'var(--white)',
        border: '1px solid var(--mist)',
        borderRadius: 'var(--border-radius-sm)',
        padding: '1.25rem',
        pointerEvents: 'none'
      }}
    >
      {/* Shimmer Image Box */}
      <div
        className="shimmer"
        style={{
          aspectRatio: '4/5',
          borderRadius: 'var(--border-radius-sm)',
          marginBottom: '1rem',
          width: '100%'
        }}
      />

      {/* Shimmer Metadata Lines */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {/* Category */}
        <div 
          className="shimmer" 
          style={{ height: '10px', width: '35%', borderRadius: '2px' }} 
        />
        {/* Name */}
        <div 
          className="shimmer" 
          style={{ height: '16px', width: '75%', borderRadius: '2px', marginTop: '4px' }} 
        />
        {/* Price */}
        <div 
          className="shimmer" 
          style={{ height: '14px', width: '20%', borderRadius: '2px', marginTop: '4px' }} 
        />
      </div>
    </div>
  );
}
