import React from 'react';

const FeatureCard = ({ type, title, subtitle, tags, icon, description, badge }) => {
  return (
    <div className="flex flex-col justify-between h-full bg-slate-900/80 border border-slate-800 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 shadow-lg overflow-hidden relative group">
      {/* Brillo en hover */}
      <div className="absolute top-0 right-0 w-28 h-28 sm:w-32 sm:h-32 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-all duration-300"></div>

      {/* Fila Superior (Icono y Badge) */}
      <div className="relative z-10 flex flex-row justify-between items-center mb-4">
        <div className="p-3 rounded-2xl bg-slate-800 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
          {icon}
        </div>
        {badge && (
          <span className="text-[10px] font-semibold text-blue-400 tracking-wider uppercase mb-0 block px-3 py-1.5 bg-blue-500/10 rounded-full border border-blue-500/20 whitespace-nowrap">
            {badge}
          </span>
        )}
      </div>

      {/* Bloque de Textos (Título, Subtítulo y Descripción) */}
      <div className="relative z-10 flex-1 flex flex-col">
        <div>
          <h3 className="text-xl font-bold !text-white mb-1 break-words">
            {title}
          </h3>
          {subtitle && (
            <p className="text-xs font-semibold text-blue-400 tracking-wider uppercase mb-3 block break-words">
              {subtitle}
            </p>
          )}
        </div>
        <p className="text-sm text-slate-300 leading-relaxed flex-grow break-words mb-4">
          {description}
        </p>
      </div>

      {/* Fila Inferior (Tecnologías) */}
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800 mt-auto relative z-10">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-xs bg-slate-800 text-slate-200 px-2.5 py-1 rounded-md font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default FeatureCard;