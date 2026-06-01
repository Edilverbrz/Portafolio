import React from 'react';

// Componente FeatureCard (Obligatorio con props: title y description)
export const FeatureCard = ({ title, description, icon }) => {
  return (
    <div className="feature-card">
      <div className="feature-icon">{icon}</div>
      <h3 className="feature-card-title">{title}</h3>
      <p className="feature-card-description">{description}</p>
    </div>
  );
};