import React from 'react';
// 1. Importamos tu foto real desde la carpeta assets
import miFoto from '../assets/edilver_brizon.jpeg'; 

const Hero = ({ nombre, carrera, whatsappUrl }) => {
  return (
    <section className="relative overflow-hidden w-full min-h-[80vh] flex items-center justify-center py-20 px-4 md:px-8 mx-auto bg-slate-950">
      {/* Elementos Decorativos de Fondo */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
        
        {/* Textos de Presentación */}
        <div className="flex-1 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold mb-6 tracking-wide uppercase">
            ⚡ Portafolio Profesional
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight">
            <span className="text-white">Hola, soy</span> <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-blue-500 to-indigo-400">
              {nombre}
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-blue-200/80 mt-4 font-semibold">
            {carrera}
          </p>
          
          <p className="text-slate-400 mt-6 max-w-xl text-base md:text-lg leading-relaxed">
            Apasionado por el desarrollo de software y la resolución de problemas lógicos. 
            Actualmente enfocado en dominar tecnologías web modernas como React, Python y herramientas de inteligencia artificial para crear soluciones eficientes e innovadoras.
          </p>

          {/* Botones de acción */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 active:scale-95 text-base"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.413 9.863-9.83.001-2.624-1.023-5.091-2.885-6.957C16.584 1.964 14.12 1.012 11.5 1.012c-5.442 0-9.866 4.415-9.87 9.831-.001 1.768.463 3.49 1.345 5.021l-.999 3.648 3.738-.979zm13.413-7.662c-.297-.15-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.15-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z"/>
              </svg>
              <span>¡Contáctame por WhatsApp!</span>
            </a>
            <a
              href="#proyectos"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 text-slate-300 hover:text-white font-semibold transition-all duration-300 active:scale-95 text-base"
            >
              <span>Ver Proyectos</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 13l-7 7-7-7m14-6l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Foto de Perfil */}
        <div className="flex-1 flex justify-center items-center">
          <div className="relative group">
            {/* Efecto de Brillo Gradiente de Fondo */}
            <div className="absolute -inset-1 bg-linear-to-r from-blue-500 via-sky-400 to-indigo-500 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            
            {/* Contenedor de la Imagen */}
            <div className="relative bg-slate-950 p-3 rounded-3xl overflow-hidden aspect-4/3 max-w-sm sm:max-w-md shadow-2xl">
              <img 
                src={miFoto}
                alt="Edilver Brizon"
                className="w-full h-full object-cover object-top rounded-2xl grayscale-20 group-hover:grayscale-0 transition-all duration-500"
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src = 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1000&auto=format&fit=crop';
                }}
              />
              <div className="absolute bottom-5 left-5 right-5 bg-slate-900/90 backdrop-blur-md p-4 rounded-xl border border-blue-500/30">
                <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest font-mono">Ubicación</p>
                <p className="text-sm font-bold text-white">Venezuela</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;