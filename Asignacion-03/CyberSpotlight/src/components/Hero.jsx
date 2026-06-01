import React from 'react';

export const Hero = ({ onCTA }) => {
  return (
    <section className="hero-section">
      <div className="container hero-container">
        <span className="badge">Reclutamiento 2.0</span>
        <h1 className="hero-title">
          Los PDFs no compilan. <br />
          <span className="highlight">Tu portafolio sí debería.</span>
        </h1>
        <p className="hero-subtitle">
          Deja de enviar currículums estáticos que terminan en la papelera. Muestra tus proyectos reales, tus contribuciones y tu verdadero estilo con un portafolio web modular diseñado especialmente para el sector tech.
        </p>
        <div className="hero-actions">
          <button className="btn btn-primary" onClick={onCTA}>
            [ Explora los diseños ]
          </button>
          <a href="#plantillas" className="btn btn-text">
            Ver cómo funciona <span>↓</span>
          </a>
        </div>
        <div className="hero-visual">
          <div className="browser-mockup">
            <div className="browser-header">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
              <span className="browser-url">cyberspotlight.dev/tu-nombre</span>
            </div>
            <div className="browser-content">
              <div className="mock-grid">
                <div className="mock-sidebar">
                  <div className="mock-avatar"></div>
                  <div className="mock-line short"></div>
                  <div className="mock-line"></div>
                </div>
                <div className="mock-body">
                  <div className="mock-title"></div>
                  <div className="mock-cards">
                    <div className="mock-card"></div>
                    <div className="mock-card"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};