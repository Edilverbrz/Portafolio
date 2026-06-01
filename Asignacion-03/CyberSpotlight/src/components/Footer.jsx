import React from 'react';

export const Footer = ({ onOpenRegister }) => {
  return (
    <footer className="site-footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <div className="logo">
            <span className="logo-dot"></span>
            Cyber<span>Spotlight</span>
          </div>
          <p>Potenciando la próxima generación de creadores y desarrolladores de tecnología.</p>
        </div>
        <div className="footer-links">
          <h4>Plataforma</h4>
          <a href="#problema">El problema</a>
          <a href="#beneficios">Características</a>
          <a href="#plantillas">Diseños interactivos</a>
          <span className="footer-action-link" onClick={onOpenRegister}>Crear Cuenta</span>
        </div>
        <div className="footer-credits">
          <p>© 2026 CyberSpotlight. Diseñado para mentes técnicas. Sin PDFs obsoletos.</p>
        </div>
      </div>
    </footer>
  );
};