import React, { useState, useEffect } from 'react';
import { TEMPLATES_DATA } from '../data/landingData';

export const RegistrationModal = ({ isOpen, onClose, selectedStyle }) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setSubmitted(false);
      setEmail('');
      setUsername('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && username) {
      setSubmitted(true);
    }
  };

  const selectedTemplateName = TEMPLATES_DATA.find(t => t.id === selectedStyle)?.name || 'Neo-Minimalista';

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>×</button>
        
        {!submitted ? (
          <div>
            <h3 className="modal-title">Crea tu Portafolio Tech</h3>
            <p className="modal-subtitle">
              Estás reservando tu espacio con el estilo: <strong>{selectedTemplateName}</strong>
            </p>
            <form onSubmit={handleSubmit} className="modal-form">
              <div className="form-group">
                <label htmlFor="username">Nombre de usuario (cyberspotlight.dev/tu-nombre)</label>
                <div className="input-with-prefix">
                  <span className="input-prefix">cyberspotlight.dev/</span>
                  <input
                    type="text"
                    id="username"
                    required
                    placeholder="tunombre"
                    value={username}
                    onChange={(e) => setUsername(e.target.value.toLowerCase().replace(/\s+/g, ''))}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Tu Correo Electrónico Profesional</label>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="ejemplo@correo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                Reclamar mi Portafolio Gratis 🚀
              </button>
            </form>
          </div>
        ) : (
          <div className="modal-success">
            <div className="success-icon">🎉</div>
            <h3>¡Usuario Reservado con Éxito!</h3>
            <p className="success-message">
              Hemos guardado el nombre de usuario <strong>cyberspotlight.dev/{username}</strong> con la estética de plantilla <strong>{selectedTemplateName}</strong>.
            </p>
            <p className="success-submessage">Hemos enviado un acceso de desarrollador prioritario a tu correo: <strong>{email}</strong></p>
            <button className="btn btn-secondary btn-block" onClick={onClose}>
              Volver a la Landing
            </button>
          </div>
        )}
      </div>
    </div>
  );
};