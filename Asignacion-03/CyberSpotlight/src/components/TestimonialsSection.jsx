import React from 'react';
import { TESTIMONIALS_DATA } from '../data/LandingData';

export const TestimonialsSection = () => {
  return (
    <section id="testimonios" className="testimonials-section">
      <div className="container">
        <div className="section-header align-center">
          <span className="section-tag">Casos de Éxito</span>
          <h2>Estudiantes y reclutadores nos respaldan</h2>
        </div>
        <div className="testimonials-grid">
          {TESTIMONIALS_DATA.map((test) => (
            <div key={test.id} className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar">{test.avatar}</div>
                <div>
                  <h4 className="testimonial-name">{test.name}</h4>
                  <span className="testimonial-role">{test.role}</span>
                </div>
              </div>
              <p className="testimonial-text">"{test.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};