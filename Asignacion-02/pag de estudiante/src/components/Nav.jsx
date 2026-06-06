import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="w-full bg-slate-950/90 backdrop-blur-sm border border-slate-800/70 rounded-3xl px-4 py-4 shadow-lg shadow-slate-950/20 mx-auto my-4">
      <ul className="flex flex-row justify-center items-center gap-6 w-full mx-auto text-sm text-slate-300">
        <li>
          <Link to="/" className="inline-flex items-center rounded-full px-4 py-2 transition-all duration-200 hover:bg-slate-900 hover:text-white">
            Inicio
          </Link>
        </li>
        <li>
          <Link to="/projects/blog" className="inline-flex items-center rounded-full px-4 py-2 transition-all duration-200 hover:bg-blue-600 hover:text-white">
            Blog Mundial
          </Link>
        </li>
        <li>
          <Link to="/projects/cyber" className="inline-flex items-center rounded-full px-4 py-2 transition-all duration-200 hover:bg-blue-600 hover:text-white">
            CyberSpotlight
          </Link>
        </li>
      </ul>
    </nav>
  );
}
