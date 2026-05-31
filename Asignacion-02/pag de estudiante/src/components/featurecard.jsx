import React from 'react';

const FeatureCard = ({ type, title, subtitle, tags, icon, description, badge }) => {
  return (
    <div className="group relative bg-slate-900 hover:bg-slate-850 border border-slate-800/80 hover:border-blue-500/40 rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/5 flex flex-col h-full overflow-hidden">
      {/* Brillo en hover */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-all duration-300"></div>

      {/* Cabecera de la Tarjeta */}
      <div className="flex items-start justify-between mb-4 relative z-10">
        <div className={`p-3 rounded-xl bg-slate-800 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300`}>
          {icon}
        </div>
        {badge && (
          <span className="text-[10px] font-bold font-mono px-2.5 py-1 bg-blue-500/10 text-blue-300 rounded-full border border-blue-500/20 uppercase tracking-wide">
            {badge}
          </span>
        )}
      </div>

      {/* Título y Subtítulo */}
      <div className="relative z-10 grow">
        <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-200">
          {title}
        </h3>
        {subtitle && (
          <p className="text-xs font-mono text-slate-400 mt-1 uppercase tracking-wider">{subtitle}</p>
        )}
        <p className="text-sm text-slate-400 mt-3 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Tags (Herramientas/Tecnologías) */}
      {tags && tags.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-slate-800/50 relative z-10">
          {tags.map((tag, idx) => (
            <span 
              key={idx} 
              className="text-xs font-semibold px-2.5 py-1 bg-slate-800 text-slate-300 rounded-lg group-hover:bg-blue-900/20 group-hover:text-blue-200 transition-all duration-300"
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