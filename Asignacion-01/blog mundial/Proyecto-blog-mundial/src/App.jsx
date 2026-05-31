import React from 'react';
import { postsMundialMock } from './mockData';
import { PostCard } from './components/PostCard';

function App() {
  return (
    <div style={{ padding: '40px 24px', maxWidth: '1000px', margin: '0 auto' }}>
      <header style={{ textAlign: 'center', marginBottom: '45px', borderBottom: '1px solid var(--border)', paddingBottom: '20px' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--text-color)' }}>
          🏆 Mundial<span style={{ color: 'var(--accent)' }}>Blog</span>
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Estadísticas, previas, análisis tácticos y crónicas de partido</p>
      </header>

      <main style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '24px'
      }}>
        {postsMundialMock.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </main>
    </div>
  );
}

export default App;