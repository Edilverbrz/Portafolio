import React from 'react';

export const Header = ({ onOpenRegister }) => {
  return (
    <header className="site-header">
      <div className="container header-container">
        <div className="logo">
          <span className="logo-dot"></span>
          Cyber<span>Spotlight</span>
        </div>
        <nav className="nav-menu">
          <a href="#problema">El Problema</a>
          <a href="#beneficios">Beneficios</a>
          <a href="#plantillas">Diseños</a>
          <a href="#testimonios">Opiniones</a>
        </nav>
        <button className="btn btn-secondary" onClick={onOpenRegister}>
          Acceder
        </button>
      </div>
    </header>
  );
};