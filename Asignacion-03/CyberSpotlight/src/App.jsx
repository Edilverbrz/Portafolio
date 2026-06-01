import React, { useState } from 'react';
import './App.css';

// Importación de Componentes
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { FeaturesSection } from './components/FeaturesSection';
import { InteractiveSelector } from './components/InteractiveSelector';
import { TestimonialsSection } from './components/TestimonialsSection';
import { Footer } from './components/Footer';
import { RegistrationModal } from './components/RegistrationModal';

export default function App() {
  const [selectedStyle, setSelectedStyle] = useState('minimalist');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleSelectStyle = (styleId) => {
    setSelectedStyle(styleId);
  };

  return (
    <div className="app-wrapper">
      <Header onOpenRegister={handleOpenModal} />
      
      <main>
        <Hero onCTA={handleOpenModal} />
        
        <ProblemSection />
        
        <FeaturesSection />
        
        <InteractiveSelector 
          selectedStyle={selectedStyle}
          onSelectStyle={handleSelectStyle}
          onRegister={handleOpenModal}
        />
        
        <TestimonialsSection />
      </main>

      <Footer onOpenRegister={handleOpenModal} />

      <RegistrationModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        selectedStyle={selectedStyle}
      />
    </div>
  );
}