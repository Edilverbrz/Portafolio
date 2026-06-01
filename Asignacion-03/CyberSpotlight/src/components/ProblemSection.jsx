import React from 'react';

export const ProblemSection = () => {
  return (
    <section id="problema" className="problem-section">
      <div className="container">
        <div className="section-header align-center">
          <span className="section-tag">La Realidad de la Industria</span>
          <h2>¿Por qué tu currículum de 1 página está fallando?</h2>
        </div>
        <div className="problem-grid">
          <div className="problem-card">
            <div className="problem-icon">📄🚫</div>
            <h3>Los PDFs son estáticos</h3>
            <p>Un reclutador pasa un promedio de 6 segundos revisando un documento. Si no ve tus habilidades en acción de inmediato, pasará al siguiente perfil.</p>
          </div>
          <div className="problem-card">
            <div className="problem-icon">🛠️❌</div>
            <h3>Ocultan tu código real</h3>
            <p>Escribir "React" en una lista no demuestra que sabes gestionar estados complejos, refactorizar o diseñar componentes interactivos accesibles.</p>
          </div>
          <div className="problem-card">
            <div className="problem-icon">🌐📉</div>
            <h3>Falta de identidad digital</h3>
            <p>Como diseñador UI o programador, tu marca personal es tu mejor carta de presentación. Un formato genérico en blanco y negro te hace invisible.</p>
          </div>
        </div>
      </div>
    </section>
  );
};