import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../layouts/header';
import Hero from '../pages/hero';
import Footer from '../layouts/footer';
import Nav from './Nav';

export default function Layout({ nombre, carrera, whatsappUrl }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      <Header whatsappUrl={whatsappUrl} />
      <Hero nombre={nombre} carrera={carrera} whatsappUrl={whatsappUrl} />
      <Nav />

      <main className="flex-1 p-6">
        <Outlet />
      </main>

      <Footer nombre={nombre} whatsappUrl={whatsappUrl} />
    </div>
  );
}
