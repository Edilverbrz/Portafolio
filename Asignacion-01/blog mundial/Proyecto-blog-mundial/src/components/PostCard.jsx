import React from 'react';
import { Card } from '../building-blocks/Card'; // Conexión a la Capa 2 abajo

export function PostCard({ post }) {
  return (
    <Card>
      <div style={{ marginBottom: '20px' }}>
        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '12px' }}>
          {post.date}
        </div>
        <h3 style={{ fontSize: '1.35rem', color: 'var(--text-color)', marginBottom: '10px', fontWeight: '700' }}>
          {post.title}
        </h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.5' }}>
          {post.subtitle}
        </p>
      </div>
      
      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
        {post.tags.map((tag, index) => (
          <span key={index} style={{
            backgroundColor: 'rgba(56, 189, 248, 0.08)',
            color: 'var(--accent)',
            fontSize: '0.75rem',
            padding: '4px 10px',
            borderRadius: 'var(--radius-sm)',
            fontWeight: '600'
          }}>
            {tag}
          </span>
        ))}
      </div>
    </Card>
  );
}