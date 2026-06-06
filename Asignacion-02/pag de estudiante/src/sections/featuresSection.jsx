import React, { useState } from 'react';
import FeatureCard from '../components/featurecard';
import { PROYECTOS_DATA, HABILIDADES_DATA } from '../data';

const FeaturesSection = () => {
  const [activeTab, setActiveTab] = useState('todos');

  const getSkillIcon = (skillName) => {
    switch (skillName.toLowerCase()) {
      case 'claude ia':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21m0 0l-.813-5.096L3 15m6 6l6-6m-1.813-1.096L15 21m0 0l.813-5.096L21 15m-6 6l-6-6m1.11-2.22a5.5 5.5 0 117.778-7.778 5.5 5.5 0 01-7.778 7.778z" />
          </svg>
        );
      case 'gemini':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
        );
      case 'vs code':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        );
      case 'react':
        return (
          <svg className="w-6 h-6 animate-[spin_8s_linear_infinite]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9 4.03-9 9-9zM12 8c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4z" />
          </svg>
        );
      case 'vite':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
      case 'python3':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        );
      default:
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        );
    }
  };

  const getProjectIcon = (projectName) => {
    switch (projectName.toLowerCase()) {
      case 'vetediet-pro':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        );
      case 'blog del mundial':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 4a2 2 0 11-4 0m4 0a2 2 0 113 1.83V17a2 2 0 01-2 2h-2m-4-7a1 1 0 11-2 0 1 1 0 012 0zm-3 4h4" />
          </svg>
        );
      default:
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
    }
  };

  return (
    <section id="proyectos" className="w-full min-h-screen bg-transparent py-12 px-4 md:px-8 mx-auto flex flex-col items-center">
      <div className="w-full max-w-6xl text-center mb-8">
        <p className="text-sm uppercase tracking-[0.3em] text-sky-400 mb-4">Sección</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          <span className="text-white">Explora mi</span> <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-300">Trayectoria</span>
        </h2>
        <p className="text-slate-400 mt-5 text-base sm:text-lg leading-8">
          Revisa mis proyectos destacados, descubre las tecnologías que domino y explora cómo aplico mis habilidades en soluciones reales.
        </p>
      </div>

      <div className="flex flex-row flex-wrap justify-center gap-4 md:gap-6 mb-10 w-full">
        <button
          onClick={() => setActiveTab('todos')}
          className={`px-4 py-2 rounded-2xl text-sm font-semibold transition-all duration-300 ${
            activeTab === 'todos'
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
              : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800'
          }`}
        >
          Ver Todo
        </button>
        <button
          onClick={() => setActiveTab('proyectos')}
          className={`px-4 py-2 rounded-2xl text-sm font-semibold transition-all duration-300 ${
            activeTab === 'proyectos'
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
              : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800'
          }`}
        >
          Proyectos
        </button>
        <button
          onClick={() => setActiveTab('habilidades')}
          className={`px-4 py-2 rounded-2xl text-sm font-semibold transition-all duration-300 ${
            activeTab === 'habilidades'
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
              : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800'
          }`}
        >
          Habilidades
        </button>
      </div>

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {(activeTab === 'todos' || activeTab === 'proyectos') && PROYECTOS_DATA.map((proyecto, idx) => (
          <div key={`p-${idx}`} className="flex h-full">
            <FeatureCard
              type="project"
              title={proyecto.nombre}
              subtitle="Proyecto Destacado"
              description={proyecto.descripcion}
              tags={proyecto.tecnologias}
              icon={getProjectIcon(proyecto.nombre)}
              badge={proyecto.rol}
            />
          </div>
        ))}

        {(activeTab === 'todos' || activeTab === 'habilidades') && HABILIDADES_DATA.map((hab, idx) => (
          <div key={`h-${idx}`} className="flex h-full">
            <FeatureCard
              type="skill"
              title={hab.nombre}
              subtitle={hab.categoria}
              description={hab.descripcion}
              tags={hab.tags}
              icon={getSkillIcon(hab.nombre)}
              badge="Skill"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;