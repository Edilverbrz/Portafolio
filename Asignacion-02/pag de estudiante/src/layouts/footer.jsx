import React from 'react';

const Footer = ({ nombre, whatsappUrl }) => {
  return (
    <footer className="w-full bg-[#0c0f12] border-t border-slate-800 py-8 px-4 md:px-8">
      <div className="w-full px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
        
        {/* Branding Izquierdo */}
        <div className="flex flex-col gap-1">
          <p className="text-white font-bold text-lg">Edilver A. Brizon R.</p>
          <p className="text-slate-400 text-sm">
            Estudiante de Programación | Segundo Trimestre
          </p>
        </div>

        {/* Redes y Contacto */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 border border-transparent hover:border-blue-500/60 hover:bg-blue-500 text-white font-semibold transition-all duration-300 shadow-lg shadow-blue-500/10"
          >
            <span>Escríbeme por WhatsApp</span>
            <svg className="w-4 h-4 fill-emerald-300" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.413 9.863-9.83.001-2.624-1.023-5.091-2.885-6.957C16.584 1.964 14.12 1.012 11.5 1.012c-5.442 0-9.866 4.415-9.87 9.831-.001 1.768.463 3.49 1.345 5.021l-.999 3.648 3.738-.979zm13.413-7.662c-.297-.15-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.15-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z"/>
            </svg>
          </a>
          <p className="text-xs text-slate-500 font-mono">
            &copy; {new Date().getFullYear()} Edilver Brizon. Todos los derechos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;