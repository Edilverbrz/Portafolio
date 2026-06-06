import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Componentes locales
import Header from './layouts/header';
import Hero from './pages/hero';
import FeaturesSection from './sections/featuresSection';
import Footer from './layouts/footer';
import Nav from './components/Nav';

// Importar las apps de los otros proyectos con las rutas correctas
import BlogApp from "../../../Asignacion-01/blog mundial/Proyecto-blog-mundial/src/App.jsx";
import CyberApp from "../../../Asignacion-03/CyberSpotlight/src/App.jsx";

export default function App() {
  const studentName = "Edilver A. Brizon R.";
  const studentCareer = "Programación — Segundo Trimestre";
  const contactPhone = "584128042400";
  const whatsappUrl = `https://wa.me/${contactPhone}?text=Hola%20Edilver,%20vi%20tu%20portafolio%20web%20y%20me%20gustar%C3%ADa%20conectar%20contigo.`;

  // Datos de Proyectos (se mantienen para la vista principal)

  return (
    <BrowserRouter>
      <div className="w-full min-h-screen pt-16 bg-[#0c0f12] overflow-x-hidden text-slate-100 font-sans selection:bg-blue-600 selection:text-white">
        <Header whatsappUrl={whatsappUrl} />

        <Hero nombre={studentName} carrera={studentCareer} whatsappUrl={whatsappUrl} />

        <Nav />

        <main className="flex-1 w-full px-4 py-8 sm:px-6 lg:px-8">
          <Routes>
            <Route index element={<FeaturesSection />} />
            <Route path="projects/blog" element={<BlogApp />} />
            <Route path="projects/cyber" element={<CyberApp />} />
          </Routes>
        </main>

        <Footer nombre={studentName} whatsappUrl={whatsappUrl} />
      </div>
    </BrowserRouter>
  );
}