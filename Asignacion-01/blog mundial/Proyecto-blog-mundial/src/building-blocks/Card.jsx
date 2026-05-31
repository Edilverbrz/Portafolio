import React from 'react';

export function Card({ children }) {
  return (
    <div 
      style={{
        backgroundColor: 'var(--card-bg)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-lg)',
        padding: '28px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        transition: 'var(--transition)',
      }}
    >
      {children}
    </div>
  );
}