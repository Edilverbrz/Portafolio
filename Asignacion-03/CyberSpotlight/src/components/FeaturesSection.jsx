import React from 'react';
import { FeatureCard } from './FeatureCard';
import { FEATURES_DATA } from '../data/LandingData';

export const FeaturesSection = () => {
  return (
    <section id="beneficios" className="features-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Características Clave</span>
          <h2>Creado por desarrolladores, para desarrolladores</h2>
          <p className="section-subtitle">Todo lo necesario para destacar ante reclutadores técnicos y tech leads de primer nivel.</p>
        </div>
        <div className="features-grid">
          {FEATURES_DATA.map((feature) => (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};