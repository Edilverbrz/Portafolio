import React from 'react';

const Header = ({ whatsappUrl }) => {
  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-[#0c0f12]/80 backdrop-blur-md border-b border-slate-800">
      <div className="w-full h-16 px-6 md:px-12 flex flex-row justify-between items-center">
        {/* Logo/Branding */}
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-xl bg-linear-to-tr from-blue-500 to-indigo-600 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-blue-500/20">
            EB
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-white tracking-wider text-sm md:text-base">EDILVER BRIZON</span>
            <span className="text-[10px] text-blue-400 font-mono tracking-widest uppercase">Estudiante de Programación</span>
          </div>
        </div>

        {/* ENLACES DE NAVEGACIÓN (Forzados totalmente a la derecha) */}
        <nav className="flex flex-row gap-6 items-center">
          <a
            href="#proyectos"
            className="text-slate-300 hover:text-blue-400 font-medium text-sm transition-colors duration-200"
          >
            Proyectos
          </a>
          <a
            href="#habilidades"
            className="text-slate-300 hover:text-blue-400 font-medium text-sm transition-colors duration-200"
          >
            Habilidades
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 active:scale-95"
          >
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;