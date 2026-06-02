import React from 'react';
import { TEMPLATES_DATA } from '../data/LandingData';

export const InteractiveSelector = ({ selectedStyle, onSelectStyle, onRegister }) => {
  const activeTemplate = TEMPLATES_DATA.find(t => t.id === selectedStyle) || TEMPLATES_DATA[0];

  return (
    <section id="plantillas" className="interactive-section">
      <div className="container">
        <div className="section-header align-center">
          <span className="section-tag">Demostración Interactiva</span>
          <h2>Elige tu estilo visual</h2>
          <p className="section-subtitle">A los perfiles tech les gusta el control absoluto. Haz clic en las pestañas para previsualizar tu portafolio modular antes de crearlo.</p>
        </div>

        <div className="style-tabs">
          {TEMPLATES_DATA.map((temp) => (
            <button
              key={temp.id}
              className={`tab-btn ${selectedStyle === temp.id ? 'active' : ''}`}
              onClick={() => onSelectStyle(temp.id)}
            >
              {temp.name}
            </button>
          ))}
        </div>

        <div className="simulator-container">
          <div className="simulator-controls">
            <span className="simulator-indicator">
              Vista previa: <strong>{activeTemplate.name}</strong>
            </span>
            <span className="simulator-desc">{activeTemplate.tagline}</span>
          </div>

          <div 
            className="portfolio-canvas" 
            style={{ 
              backgroundColor: activeTemplate.bg, 
              color: activeTemplate.text,
              fontFamily: activeTemplate.fontFamily,
              transition: 'all 0.4s ease'
            }}
          >
            <div className="port-header" style={{ borderBottom: `1px solid ${activeTemplate.accent}33` }}>
              <span style={{ fontWeight: 'bold' }}>dev_spotlight //</span>
              <div className="port-nav">
                <span className="port-dot-link" style={{ background: activeTemplate.accent }}></span>
                <span className="port-dot-link" style={{ background: activeTemplate.accent }}></span>
                <span className="port-dot-link" style={{ background: activeTemplate.accent }}></span>
              </div>
            </div>

            <div className="port-profile">
              <div className="port-avatar-wrapper">
                <div 
                  className="port-avatar" 
                  style={{ 
                    borderColor: activeTemplate.accent,
                    borderRadius: activeTemplate.borderRadius 
                  }}
                >
                  🚀
                </div>
                <div>
                  <h3 style={{ margin: 0 }}>Álex Rivera</h3>
                  <span style={{ color: activeTemplate.accent, fontSize: '0.85rem' }}>Fullstack Developer</span>
                </div>
              </div>
              <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>
                Construyendo interfaces web asombrosas y arquitecturas robustas. Especializado en React, Node y Cloud.
              </p>
            </div>

            <div className="port-projects">
              <h4 style={{ textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '1px', color: activeTemplate.accent }}>
                Proyectos Destacados
              </h4>
              <div className="port-grid">
                <div 
                  className="port-card" 
                  style={{ 
                    backgroundColor: activeTemplate.cardBg, 
                    borderRadius: activeTemplate.borderRadius,
                    border: `1px solid ${activeTemplate.accent}1a`
                  }}
                >
                  <div className="port-card-title">Project_Nova</div>
                  <p style={{ fontSize: '0.8rem', opacity: 0.7, margin: '8px 0' }}>API REST modular para analíticas de rendimiento de código.</p>
                  <span className="port-tag" style={{ background: `${activeTemplate.accent}22`, color: activeTemplate.text }}>NodeJS</span>
                </div>
                <div 
                  className="port-card" 
                  style={{ 
                    backgroundColor: activeTemplate.cardBg, 
                    borderRadius: activeTemplate.borderRadius,
                    border: `1px solid ${activeTemplate.accent}1a`
                  }}
                >
                  <div className="port-card-title">UI_Core_Kit</div>
                  <p style={{ fontSize: '0.8rem', opacity: 0.7, margin: '8px 0' }}>Librería de componentes accesibles de código libre.</p>
                  <span className="port-tag" style={{ background: `${activeTemplate.accent}22`, color: activeTemplate.text }}>TypeScript</span>
                </div>
              </div>
            </div>

            <div className="port-console" style={{ background: '#0000000d', borderRadius: activeTemplate.borderRadius, padding: '10px' }}>
              <span style={{ fontSize: '0.75rem', color: activeTemplate.accent, display: 'block', marginBottom: '4px' }}>terminal.sh</span>
              <code style={{ fontSize: '0.8rem', display: 'block' }}>
                {activeTemplate.sampleCode}
              </code>
            </div>
          </div>
        </div>

        <div className="cta-block align-center">
          <p className="cta-label">¿Te gusta la plantilla <strong>{activeTemplate.name}</strong>?</p>
          <button className="btn btn-primary btn-large" onClick={onRegister}>
            Comenzar mi portafolio {activeTemplate.name} <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
};