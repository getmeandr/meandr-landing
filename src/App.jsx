
import React from 'react';
import logo from './assets/logo.png';

export default function App() {
  return (
    <main className="min-h-screen flex flex-col justify-between items-center p-6 bg-deep">
      <header className="text-center mt-20">
        <img src={logo} alt="Meandr Logo" className="mx-auto w-40 mb-8 animate-pulse" />
        <h1 className="text-4xl md:text-6xl font-bold">Meandr is a curiosity-powered anti-feed</h1>
        <p className="mt-4 text-lg text-gray-300">
          Built with curiosity. Fueled by chaos. Meandr outside of your box.
        </p>
        <button className="mt-6 px-6 py-3 bg-brand text-white rounded-xl text-lg hover:scale-105 transition">
          This Is What's Next
        </button>
      </header>
      <footer className="text-sm text-gray-500 py-6">
        Mischief-Makers Anonymous © {new Date().getFullYear()}
      </footer>
    </main>
  );
}

