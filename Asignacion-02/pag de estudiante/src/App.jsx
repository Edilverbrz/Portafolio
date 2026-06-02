import React from 'react';

// IMPORTACIÓN DE COMPONENTES DESDE SUS CARPETAS INDIVIDUALES
import Header from './layouts/header';
import Hero from './pages/hero';
import FeaturesSection from './sections/featuresSection';
import Footer from './layouts/footer';

export default function App() {
  const studentName = "Edilver A. Brizon R.";
  const studentCareer = "Programación — Segundo Trimestre";
  const contactPhone = "584128042400";
  const whatsappUrl = `https://wa.me/${contactPhone}?text=Hola%20Edilver,%20vi%20tu%20portafolio%20web%20y%20me%20gustar%C3%ADa%20conectar%20contigo.`;

  // Datos de Proyectos
  const proyectos = [
    {
      nombre: "VeteDiet-Pro",
      descripcion: "Sistema inteligente para el diseño, control y administración de planes nutricionales clínicos orientados al sector veterinario profesional.",
      tecnologias: ["React", "State Management", "Tailwind CSS"],
      rol: "Frontend Lead"
    },
    {
      nombre: "Blog del Mundial",
      descripcion: "Plataforma de contenidos dinámica para seguir de cerca resultados, estadísticas e historias del mundial con un diseño adaptable.",
      tecnologias: ["HTML5", "CSS3", "JavaScript"],
      rol: "Creador"
    },
    {
      nombre: "Página Web de Estudiante",
      descripcion: "Portafolio interactivo personal para recopilar proyectos escolares, habilidades adquiridas y facilitar el contacto directo profesional.",
      tecnologias: ["Vite", "React", "Tailwind CSS"],
      rol: "Fullstack"
    }
  ];

  // Datos de Habilidades
  const habilidades = [
    {
      nombre: "Claude IA",
      categoria: "Inteligencia Artificial",
      descripcion: "Uso experto de IA generativa para acelerar flujos de trabajo, documentar código, realizar análisis y depurar algoritmos lógicos complejos.",
      tags: ["Prompt Engineering", "IA", "Optimización"]
    },
    {
      nombre: "Gemini",
      categoria: "Inteligencia Artificial",
      descripcion: "Integración de modelos avanzados de lenguaje de Google para resolver problemas conceptuales, generar código robusto y agilizar el aprendizaje.",
      tags: ["Asistente Virtual", "Productividad"]
    },
    {
      nombre: "VS Code",
      categoria: "Entorno de Desarrollo",
      descripcion: "Dominio de extensiones avanzadas, herramientas de depuración y atajos de teclado para mantener un flujo de trabajo ágil y estructurado.",
      tags: ["IDE", "Productividad", "Linters"]
    },
    {
      nombre: "React",
      categoria: "Biblioteca Frontend",
      descripcion: "Creación de interfaces declarativas, manipulación de estado eficiente y diseño modular utilizando arquitectura basada en componentes reutilizables.",
      tags: ["Hooks", "Virtual DOM", "JSX"]
    },
    {
      nombre: "Vite",
      categoria: "Herramienta de Construcción",
      descripcion: "Configuración y empaquetado ultra-rápido de proyectos modernos, aprovechando el recargado rápido (HMR) para un desarrollo interactivo.",
      tags: ["Bundler", "Frontend Dev", "HMR"]
    },
    {
      nombre: "Python3",
      categoria: "Lenguaje de Programación",
      descripcion: "Desarrollo de lógica del lado del servidor, manipulación de estructuras de datos nativas y escritura de scripts eficientes para resolver problemas lógicos.",
      tags: ["Algoritmos", "Scripting", "OOP"]
    },
    {
      nombre: "Flow",
      categoria: "Metodología",
      descripcion: "Implementación de metodologías estructuradas de diseño lógico, diagramación y mapeo de procesos secuenciales en programación.",
      tags: ["Control de Flujo", "Lógica", "Diagramas"]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* 1. Header Component */}
      <Header whatsappUrl={whatsappUrl} />

      {/* 2. Hero Component */}
      <Hero 
        nombre={studentName} 
        carrera={studentCareer} 
        whatsappUrl={whatsappUrl} 
      />

      {/* 3. FeaturesSection (organiza las FeatureCards para proyectos y habilidades) */}
      <FeaturesSection 
        proyectos={proyectos} 
        habilidades={habilidades} 
      />

      {/* 4. Footer Component */}
      <Footer 
        nombre={studentName} 
        whatsappUrl={whatsappUrl} 
      />
    </div>
  );
}